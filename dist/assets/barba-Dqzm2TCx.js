(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function W0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function uf(r,e,t){return e&&W0(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ui(){return Ui=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Ui.apply(this,arguments)}function Kc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Ya(r,e)}function mh(r){return mh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},mh(r)}function Ya(r,e){return Ya=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Ya(r,e)}function X0(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gh(r,e,t){return gh=X0()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&Ya(a,s.prototype),a},gh.apply(null,arguments)}function _h(r){var e=typeof Map=="function"?new Map:void 0;return _h=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return gh(t,arguments,mh(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Ya(n,t)},_h(r)}function q0(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Rr,Y0=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Rr||(Rr={}));var id=Rr.off,vs=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return id},r.setLevel=function(t){return id=Rr[t]};var e=r.prototype;return e.error=function(){this.i(console.error,Rr.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,Rr.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,Rr.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,Rr.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Hs(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function rd(r){return r&&r.sensitive?"":"i"}var Hi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},xs=new((function(){function r(){this.o=Hi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),j0=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Ui({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=Ui({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=Hi.prefix+"-"+Hi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},uf(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),ag=new j0,wc=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=xs.toElement(n.html);i.namespace=xs.getNamespace(s),i.container=xs.getContainer(s),i.url=n.url,i.html=n.html,ag.update({ns:i.namespace});var o=xs.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},lg=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),rd(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,f=c.start,d=f===void 0||f,_=c.end,g=_===void 0||_,p=c.encode,m=p===void 0?function(q){return q}:p,S=c.delimiter,v=S===void 0?"/#?":S,M=c.endsWith,A="[".concat(Hs(M===void 0?"":M),"]|$"),w="[".concat(Hs(v),"]"),b=d?"^":"",P=0,y=a;P<y.length;P++){var x=y[P];if(typeof x=="string")b+=Hs(m(x));else{var U=Hs(m(x.prefix)),I=Hs(m(x.suffix));if(x.pattern)if(l&&l.push(x),U||I)if(x.modifier==="+"||x.modifier==="*"){var L=x.modifier==="*"?"?":"";b+="(?:".concat(U,"((?:").concat(x.pattern,")(?:").concat(I).concat(U,"(?:").concat(x.pattern,"))*)").concat(I,")").concat(L)}else b+="(?:".concat(U,"(").concat(x.pattern,")").concat(I,")").concat(x.modifier);else b+=x.modifier==="+"||x.modifier==="*"?"((?:".concat(x.pattern,")").concat(x.modifier,")"):"(".concat(x.pattern,")").concat(x.modifier);else b+="(?:".concat(U).concat(I,")").concat(x.modifier)}}if(g)h||(b+="".concat(w,"?")),b+=c.endsWith?"(?=".concat(A,")"):"$";else{var O=a[a.length-1],H=typeof O=="string"?w.indexOf(O[O.length-1])>-1:O===void 0;h||(b+="(?:".concat(w,"(?=").concat(A,"))?")),H||(b+="(?=".concat(w,"|").concat(A,")"))}return new RegExp(b,rd(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(I){for(var L=[],O=0;O<I.length;){var H=I[O];if(H!=="*"&&H!=="+"&&H!=="?")if(H!=="\\")if(H!=="{")if(H!=="}")if(H!==":")if(H!=="(")L.push({type:"CHAR",index:O,value:I[O++]});else{var q=1,K="";if(I[Y=O+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(Y));for(;Y<I.length;)if(I[Y]!=="\\"){if(I[Y]===")"){if(--q==0){Y++;break}}else if(I[Y]==="("&&(q++,I[Y+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(Y));K+=I[Y++]}else K+=I[Y++]+I[Y++];if(q)throw new TypeError("Unbalanced pattern at ".concat(O));if(!K)throw new TypeError("Missing pattern at ".concat(O));L.push({type:"PATTERN",index:O,value:K}),O=Y}else{for(var k="",Y=O+1;Y<I.length;){var C=I.charCodeAt(Y);if(!(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122||C===95))break;k+=I[Y++]}if(!k)throw new TypeError("Missing parameter name at ".concat(O));L.push({type:"NAME",index:O,value:k}),O=Y}else L.push({type:"CLOSE",index:O,value:I[O++]});else L.push({type:"OPEN",index:O,value:I[O++]});else L.push({type:"ESCAPED_CHAR",index:O++,value:I[O++]});else L.push({type:"MODIFIER",index:O,value:I[O++]})}return L.push({type:"END",index:O,value:""}),L})(a),u=l.prefixes,h=u===void 0?"./":u,f="[^".concat(Hs(l.delimiter||"/#?"),"]+?"),d=[],_=0,g=0,p="",m=function(I){if(g<c.length&&c[g].type===I)return c[g++].value},S=function(I){var L=m(I);if(L!==void 0)return L;var O=c[g],H=O.index;throw new TypeError("Unexpected ".concat(O.type," at ").concat(H,", expected ").concat(I))},v=function(){for(var I,L="";I=m("CHAR")||m("ESCAPED_CHAR");)L+=I;return L};g<c.length;){var M=m("CHAR"),A=m("NAME"),w=m("PATTERN");if(A||w)h.indexOf(P=M||"")===-1&&(p+=P,P=""),p&&(d.push(p),p=""),d.push({name:A||_++,prefix:P,suffix:"",pattern:w||f,modifier:m("MODIFIER")||""});else{var b=M||m("ESCAPED_CHAR");if(b)p+=b;else if(p&&(d.push(p),p=""),m("OPEN")){var P=v(),y=m("NAME")||"",x=m("PATTERN")||"",U=v();S("CLOSE"),d.push({name:y||(x?_++:""),pattern:y&&!x?f:x,prefix:P,suffix:U,modifier:m("MODIFIER")||""})}else S("END")}}return d})(i,o),s,o)})(e,t,n)},K0={__proto__:null,update:wc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:lg},cg=function(){return window.location.origin},ja=function(r){return r===void 0&&(r=window.location.href),Cr(r).port},Cr=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(cg(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=ug(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},ug=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},vh=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},$0={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:cg,getPort:ja,getPath:function(r){return r===void 0&&(r=window.location.href),Cr(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Cr(r).query):Cr(r).query},getHash:function(r){return Cr(r).hash},parse:Cr,parseQuery:ug,clean:vh};function Z0(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:Ui({href:l},Cr(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function J0(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function po(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(J0(a)?a.then(s,o):s(a))});return i}}var Ar=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new vs("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Kc(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return po(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(Y0)),hg=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return lg(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Cr(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),Q0=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}Kc(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Ui({},this.T.get(n),i);return this.T.set(n,s),s},e})(hg),ev=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),tv=function(){return!window.history.pushState},nv=function(r){return!r.el||!r.href},iv=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},rv=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},sv=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},ov=function(r){var e=r.el;return e.port!==void 0&&ja()!==ja(e.href)},av=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},lv=function(r){return r.el.hasAttribute(Hi.prefix+"-"+Hi.prevent)},cv=function(r){return!!r.el.closest("["+Hi.prefix+"-"+Hi.prevent+'="all"]')},uv=function(r){var e=r.href;return vh(e)===vh()&&ja(e)===ja()},hv=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Kc(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",tv),this.add("exists",nv),this.add("newTab",iv),this.add("blank",rv),this.add("corsDomain",sv),this.add("corsPort",ov),this.add("download",av),this.add("preventSelf",lv),this.add("preventAll",cv),this.add("sameUrl",uv,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(hg),uu=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(q0(i),e),i.name="BarbaError",i}return Kc(e,r),e})(_h(Error)),fv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new vs("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(f){return f.name&&f.name==="self"}:function(f){return!f.name||f.name!=="self"});var o=new Map,a=s.find(function(f){var d=!0,_={};return n.self&&f.name==="self"?(o.set(f,_),!0):(i.j.reverse().forEach(function(g){d&&(d=i.M(f,g,t,_),f.from&&f.to&&(d=i.M(f,g,t,_,"from")&&i.M(f,g,t,_,"to")),f.from&&!f.to&&(d=i.M(f,g,t,_,"from")),!f.from&&f.to&&(d=i.M(f,g,t,_,"to")))}),o.set(f,_),d)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,f=u,d=u,_=o?c[o]:c,g=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var p=Array.isArray(_[h])?_[h]:[_[h]];g[h]&&p.indexOf(g[h])!==-1&&(l=!0),p.indexOf(g[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[f])?_[f]:[_[f]];g[f]?(g[f].name&&m.indexOf(g[f].name)!==-1&&(l=!0),m.indexOf(g[f].name)===-1&&(a=!1)):a=!1;break;case"function":_[d](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function ea(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var dv=(function(){function r(t){t===void 0&&(t=[]),this.logger=new vs("@barba/core"),this.store=void 0,this.C=!1,this.store=new fv(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=ea(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(f){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=ea(function(){function f(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(p){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var g=(function(){if(u)return ea(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(v){if(l.H(v))throw new uu(v,"Transition error [sync]")});var p=function(v){return ea(function(){var M=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(M&&M.then)return M.then(function(){})},function(M){if(l.H(M))throw new uu(M,"Transition error [before/after/enter]")})},m=!1,S=ea(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),wc(s,n)]).then(function(v){return v[0]})).then(function(v){return m=v,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(v){if(l.H(v))throw new uu(v,"Transition error [before/after/leave]")});return S&&S.then?S.then(p):p()})();return g&&g.then?g.then(_):_()})}var d=(function(){if(u)return Promise.resolve(wc(s,n)).then(function(){})})();return d&&d.then?d.then(f):f()},function(f){throw l.C=!1,f.name&&f.name==="BarbaError"?(l.logger.debug(f.label),l.logger.error(f.error),f):(l.logger.debug("Transition error [page]"),l.logger.error(f),f)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(f){return Promise.reject(f)}},e.once=function(t,n){try{return Promise.resolve(Ar.do("once",t,n)).then(function(){return n.once?po(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Ar.do("leave",t,n)).then(function(){return n.leave?po(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Ar.do("enter",t,n)).then(function(){return n.enter?po(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return xs.addContainer(t.next.container,n),Ar.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return xs.removeContainer(t.current.container),Ar.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(Ar.do(t,n,i)).then(function(){return i[t]?po(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},uf(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),pv=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Ar[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?po(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var mv={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},gv=new((function(){function r(){this.version="2.10.3",this.schemaPage=mv,this.Logger=vs,this.logger=new vs("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=Ar,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=xs,this.helpers=K0,this.history=ag,this.request=Z0,this.url=$0,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Hi:l,u=n.requestError,h=n.timeout,f=h===void 0?2e3:h,d=n.cacheIgnore,_=d!==void 0&&d,g=n.cacheFirstPage,p=g!==void 0&&g,m=n.prefetchIgnore,S=m!==void 0&&m,v=n.preventRunning,M=v!==void 0&&v,A=n.prevent,w=A===void 0?null:A,b=n.debug,P=n.logLevel;if(vs.setLevel((b!==void 0&&b)===!0?"debug":P===void 0?"off":P),this.logger.info(this.version),Object.keys(c).forEach(function(U){Hi[U]&&(Hi[U]=c[U])}),this.B=u,this.timeout=f,this.cacheIgnore=_,this.cacheFirstPage=p,this.prefetchIgnore=S,this.preventRunning=M,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var y=this.data.current;if(!y.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Q0(_),this.headers=new ev,this.prevent=new hv(S),this.transitions=new dv(s),this.views=new pv(a),w!==null){if(typeof w!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",w)}this.history.init(y.url.href,y.namespace),p&&this.cache.set(y.url.href,Promise.resolve({html:y.html,url:y.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(U){return U.init()});var x=this.data;x.trigger="barba",x.next=x.current,x.current=Ui({},this.schemaPage),this.hooks.do("ready",x),this.once(x),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var f=(function(d,_){try{var g=(p=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:p,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var p;return g&&g.then?g.then(void 0,_):g})(0,function(){vs.getLevel()===0&&l.force(h.next.url.href)});if(f&&f.then)return f.then(function(){})})},l=this;if(l.data.next.url=Ui({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(wc(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Ui({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Ui({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},uf(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());function ir(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function fg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},hf,hn,It,fi=1e8,St=1/fi,xh=Math.PI*2,_v=xh/4,vv=0,dg=Math.sqrt,xv=Math.cos,yv=Math.sin,an=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},ff=function(e){return typeof e>"u"},Gi=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},df=function(){return typeof window<"u"},Sl=function(e){return kt(e)||an(e)},pg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Sv=/random\([^)]+\)/g,Mv=/,\s*/g,sd=/(?:-?\.?\d|\.)+/gi,mg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gg=/[+-]=-?[.\d]+/,Tv=/[^,'"\[\]\s]+/gi,Ev=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Ai,yh,pf,ii={},Ac={},_g,vg=function(e){return(Ac=Io(e,ii))&&Vn},mf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ka=function(e,t){return!t&&console.warn(e)},xg=function(e,t){return e&&(ii[e]=t)&&Ac&&(Ac[e]=t)||ii},$a=function(){return 0},bv={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},wv={suppressEvents:!0},gf={},Hr=[],Sh={},yg,Kn={},fu={},od=30,cc=[],_f="",vf=function(e){var t=e[0],n,i;if(Gi(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=cc.length;i--&&!cc[i].targetTest(t););n=cc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wg(e[i],n)))||e.splice(i,1);return e},Rs=function(e){return e._gsap||vf(di(e))[0]._gsap},Sg=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():ff(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},yo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Av=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Rc=function(){var e=Hr.length,t=Hr.slice(0),n,i;for(Sh={},Hr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xf=function(e){return!!(e._initted||e._startAt||e.add)},Mg=function(e,t,n,i){Hr.length&&!hn&&Rc(),e.render(t,n,!!(hn&&t<0&&xf(e))),Hr.length&&!hn&&Rc()},Tg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tv).length<2?t:an(e)?e.trim():e},Eg=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Rv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Io=function(e,t){for(var n in t)e[n]=t[n];return e},ad=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Cc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wa=function(e){var t=e.parent||Ot,n=e.keyframes?Rv(Mn(e.keyframes)):ri;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Cv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},$c=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mh=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Lv=function r(e){return!e||e._ts&&r(e.parent)},ld=function(e){return e._repeat?Do(e._tTime,e=e.duration()+e._rDelay)*e:0},Do=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Pc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Zc=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},Jc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Zc(e),n._dirty||Cs(n,e)),e},wg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Pc(e.rawTime(),t),(!t._dur||ml(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),Cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Ii=function(e,t,n,i){return t.parent&&Yr(t),t._start=Ut((pr(n)?n:n||e!==Ot?li(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bg(e,t,"_first","_last",e._sort?"_start":0),Th(t)||(e._recent=t),i||wg(e,t),e._ts<0&&Jc(e,e._tTime),e},Ag=function(e,t){return(ii.ScrollTrigger||mf("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},Rg=function(e,t,n,i,s){if(Sf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yg!==Jn.frame)return Hr.push(e),e._lazy=[s,i],1},Iv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Th=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Dv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Iv(e)&&!(!e._initted&&Th(e))||(e._ts<0||e._dp._ts<0)&&!Th(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ml(0,e._tDur,t),u=Do(l,a),e._yoyo&&u&1&&(o=1-o),u!==Do(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||hn||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&Rg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Mh(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yr(e,1),!n&&!hn&&(ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Nv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},No=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Jc(e,e._tTime=e._tDur*a),e.parent&&Zc(e),n||Cs(e.parent,e),e},cd=function(e){return e instanceof In?Cs(e):No(e,e._dur)},Uv={_start:0,endTime:$a,totalDuration:$a},li=function r(e,t,n){var i=e.labels,s=e._recent||Uv,o=e.duration()>=fi?s.endTime(!1):e._dur,a,l,c;return an(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Aa=function(e,t,n){var i=pr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new jt(t[0],o,t[s+1])},Jr=function(e,t){return e||e===0?t(e):t},ml=function(e,t,n){return n<e?e:n>t?t:n},xn=function(e,t){return!an(e)||!(t=Ev.exec(e))?"":t[1]},Ov=function(e,t,n){return Jr(n,function(i){return ml(e,t,i)})},Eh=[].slice,Cg=function(e,t){return e&&Gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gi(e[0]))&&!e.nodeType&&e!==Ai},Fv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return an(i)&&!t||Cg(i,1)?(s=n).push.apply(s,di(i)):n.push(i)})||n},di=function(e,t,n){return It&&!t&&It.selector?It.selector(e):an(e)&&!n&&(yh||!Uo())?Eh.call((t||pf).querySelectorAll(e),0):Mn(e)?Fv(e,n):Cg(e)?Eh.call(e,0):e?[e]:[]},bh=function(e){return e=di(e)[0]||Ka("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return di(t,n.querySelectorAll?n:n===e?Ka("Invalid scope")||pf.createElement("div"):e)}},Pg=function(e){return e.sort(function(){return .5-Math.random()})},Lg=function(e){if(kt(e))return e;var t=Gi(e)?e:{each:e},n=Ps(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return an(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,S,v,M,A,w,b,P,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,fi])[1],!y){for(b=-fi;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:i%y,S=y===fi?0:l?g*h/y-.5:i/y|0,b=0,P=fi,w=0;w<g;w++)v=w%y-m,M=S-(w/y|0),p[w]=A=c?Math.abs(c==="y"?M:v):dg(v*v+M*M),A>b&&(b=A),A<P&&(P=A);i==="random"&&Pg(p),p.max=b-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=xn(t.amount||t.each)||0,n=n&&g<0?Hg(n):n}return g=(p[f]-p.min)/p.max||0,Ut(p.b+(n?n(g):g)*p.v)+p.u}},wh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pr(n)?0:xn(n))}},Ig=function(e,t){var n=Mn(e),i,s;return!n&&Gi(e)&&(i=n=e.radius||fi,e.values?(e=di(e.values),(s=!pr(e[0]))&&(i*=i)):e=wh(e.increment)),Jr(t,n?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=fi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||pr(o)?u:u+xn(o)}:wh(e))},Dg=function(e,t,n,i){return Jr(Mn(e)?!t:n===!0?!!(n=0):!i,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Bv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},kv=function(e,t){return function(n){return e(parseFloat(n))+(t||xn(n))}},zv=function(e,t,n){return Ug(e,t,0,1,n)},Ng=function(e,t,n){return Jr(n,function(i){return e[~~t(i)]})},Hv=function r(e,t,n){var i=t-e;return Mn(e)?Ng(e,r(0,e.length),t):Jr(n,function(s){return(i+(s-e)%i)%i+e})},Vv=function r(e,t,n){var i=t-e,s=i*2;return Mn(e)?Ng(e,r(0,e.length-1),t):Jr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Za=function(e){return e.replace(Sv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Mv);return Dg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ug=function(e,t,n,i,s){var o=t-e,a=i-n;return Jr(s,function(l){return n+((l-e)/o*a||0)})},Gv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=an(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=Io(Mn(e)?[]:{},e));if(!u){for(l in t)yf.call(a,e,l,"get",t[l]);s=function(_){return Ef(_,a)||(o?e.p:e)}}}return Jr(n,s)},ud=function(e,t,n){var i=e.labels,s=fi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ei=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hr.length&&Rc(),a&&(It=a),u=l?s.apply(c,l):s.call(c),It=o,u},pa=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ei(e,"onInterrupt"),e},go,Og=[],Fg=function(e){if(e)if(e=!e.name&&e.default||e,df()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:$a,render:Ef,add:yf,kill:sx,modifier:rx,rawVars:0},o={targetTest:0,get:0,getSetter:Tf,aliases:{},register:0};if(Uo(),e!==i){if(Kn[t])return;ri(i,ri(Cc(e,s),o)),Io(i.prototype,Io(s,Cc(e,o))),Kn[i.prop=t]=i,e.targetTest&&(cc.push(i),gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}xg(t,i),e.register&&e.register(Vn,i,kn)}else Og.push(e)},yt=255,ma={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},du=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},Bg=function(e,t,n){var i=e?pr(e)?[e>>16,e>>8&yt,e&yt]:0:ma.black,s,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(sd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=du(l+1/3,s,o),i[1]=du(l,s,o),i[2]=du(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(mg),n&&i.length<4&&(i[3]=1),i}else i=e.match(sd)||ma.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/yt,o=i[1]/yt,a=i[2]/yt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},kg=function(e){var t=[],n=[],i=-1;return e.split(Vr).forEach(function(s){var o=s.match(mo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hd=function(e,t,n){var i="",s=(e+i).match(Vr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Bg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=kg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Vr,"1").split(mo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Vr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Wv=/hsl[a]?\(/,zg=function(e){var t=e.join(" "),n;if(Vr.lastIndex=0,Vr.test(t))return n=Wv.test(t),e[1]=hd(e[1],n),e[0]=hd(e[0],n,kg(e[1])),!0},Ja,Jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=r()-i,S=p===!0,v,M,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,v=A-o,(v>0||S)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=v+(v>=s?4:s-v),M=1),S||(l=c(g)),M)for(d=0;d<a.length;d++)a[d](A,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){_g&&(!yh&&df()&&(Ai=yh=window,pf=Ai.document||{},ii.gsap=Vn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(Vn.version),vg(Ac||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),Og.forEach(Fg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Ja=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ja=0,c=$a},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,S){var v=m?function(M,A,w,b){p(M,A,w,b),h.remove(v)}:p;return h.remove(p),a[S?"unshift":"push"](v),Uo(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h})(),Uo=function(){return!Ja&&Jn.wake()},lt={},Xv=/^[\d.\-M][\d.\-,\s]/,qv=/["']/g,Yv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(qv,"").trim():+c,i=l.substr(a+1).trim();return t},jv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Kv=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Yv(t[1])]:jv(e).split(",").map(Tg)):lt._CE&&Xv.test(e)?lt._CE("",e):n},Hg=function(e){return function(t){return 1-e(1-t)}},Vg=function r(e,t){for(var n=e._first,i;n;)n instanceof In?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ps=function(e,t){return e&&(kt(e)?e:lt[e]||Kv(e))||t},ks=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Bn(e,function(a){lt[a]=ii[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},Gg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/xh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*yv((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Gg(a);return s=xh/s,l.config=function(c,u){return r(e,c,u)},l},mu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Gg(n);return i.config=function(s){return r(e,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ks(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ks("Elastic",pu("in"),pu("out"),pu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ks("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ks("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ks("Circ",function(r){return-(dg(1-r*r)-1)});ks("Sine",function(r){return r===1?1:-xv(r*_v)+1});ks("Back",mu("in"),mu("out"),mu());lt.SteppedEase=lt.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((i*ml(0,o,a)|0)+s)*n}}};Lo.ease=lt["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return _f+=r+","+r+"Params,"});var Wg=function(e,t){this.id=vv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sg,this.set=t?t.getSetter:Tf},Qa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,No(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Ja||Jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,No(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Uo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Jc(this,n),!s._dp||s.parent||wg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ld(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Do(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(ml(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Zc(this),Pv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ii(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wv);var i=hn;return hn=n,xf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=kt(n)?n:Eg,l=function(){var u=i.then;i.then=null,s&&s(),kt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){pa(this)},r})();ri(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var In=(function(r){fg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fn(n.sortChildren),Ot&&Ii(n.parent||Ot,ir(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ag(ir(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Aa(0,arguments,this),this},t.from=function(i,s,o){return Aa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Aa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new jt(i,s,li(this,o),1),this},t.call=function(i,s,o){return Ii(this,jt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new jt(i,o,li(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,wa(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,wa(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,S,v,M,A,w,b;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,M=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(f=Ut(u%p),u===l?(g=this._repeat,f=c):(A=Ut(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Do(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),w&&g&1&&(f=c-f,b=1),g!==A&&!this._lock){var P=w&&A&1,y=P===(w&&g&1);if(g<A&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ut(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Vg(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Nv(this,Ut(a),Ut(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-St);break}}d=_}else{d=this._last;for(var x=i<0?i:f;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||hn&&xf(d)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=x?-St:St);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-St)._zTime=f>=a?1:-1,this._ts))return this._start=M,Zc(this),this.render(i,s,o);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(pr(s)||(s=li(this,s,i)),!(i instanceof Qa)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(kt(i))i=jt.delayedCall(0,i);else return this}return this!==i?Ii(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-fi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof jt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return an(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&$c(this,i),i===this._recent&&(this._recent=this._last),Cs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=jt.delayedCall(0,s||$a,o);return a.data="isPause",this._hasPause=1,Ii(this,a,li(this,i))},t.removePause=function(i){var s=this._first;for(i=li(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=di(i),l=this._first,c=pr(s),u;l;)l instanceof jt?Av(l._targets,a)&&(c?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=li(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=jt.to(o,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&No(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ri({startAt:{time:li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ud(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ud(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Cs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=fi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;No(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(Mg(Ot,Pc(i,Ot)),yg=Jn.frame),Jn.frame>=od){od+=ni.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ni.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e})(Qa);ri(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var $v=function(e,t,n,i,s,o,a){var l=new kn(this._pt,e,t,0,1,$g,null,s),c=0,u=0,h,f,d,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Za(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(hu)||[];h=hu.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?yo(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=hu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(gg.test(i)||m)&&(l.e=0),this._pt=l,l},yf=function(e,t,n,i,s,o,a,l,c,u){kt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:kt(h)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=kt(h)?c?tx:jg:Mf,_;if(an(i)&&(~i.indexOf("random(")&&(i=Za(i)),i.charAt(1)==="="&&(_=yo(f,i)+(xn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Ah)return!isNaN(f*i)&&i!==""?(_=new kn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?ix:Kg,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&mf(t,i),$v.call(this,e,t,f,i,d,l||ni.stringFilter,c))},Zv=function(e,t,n,i,s){if(kt(e)&&(e=Ra(e,s,t,n,i)),!Gi(e)||e.style&&e.nodeType||Mn(e)||pg(e))return an(e)?Ra(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ra(e[a],s,t,n,i);return o},Xg=function(e,t,n,i,s,o){var a,l,c,u;if(Kn[e]&&(a=new Kn[e]).init(s,a.rawVars?t[e]:Zv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==go))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Dr,Ah,Sf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!hf,M=e.timeline,A,w,b,P,y,x,U,I,L,O,H,q,K;if(M&&(!f||!s)&&(s="none"),e._ease=Ps(s,Lo.ease),e._yEase=h?Hg(Ps(h===!0?s:h,Lo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(I=p[0]?Rs(p[0]).harness:0,q=I&&i[I.prop],A=Cc(i,gf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?lc:bv),g._lazy=0),o){if(Yr(e._startAt=jt.set(p,ri({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!a&&!d)&&e._startAt.revert(lc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),b=ri({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Fn(l),immediateRender:a,stagger:0,parent:m},A),q&&(b[I.prop]=q),Yr(e._startAt=jt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Fn(l)||l&&!_,w=0;w<p.length;w++){if(y=p[w],U=y._gsap||vf(p)[w]._gsap,e._ptLookup[w]=O={},Sh[U.id]&&Hr.length&&Rc(),H=S===p?w:S.indexOf(y),I&&(L=new I).init(y,q||A,e,H,S)!==!1&&(e._pt=P=new kn(e._pt,y,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(k){O[k]=P}),L.priority&&(x=1)),!I||q)for(b in A)Kn[b]&&(L=Xg(b,A,e,H,y,S))?L.priority&&(x=1):O[b]=P=yf.call(e,y,b,"get",A[b],H,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),v&&e._pt&&(Dr=e,Ot.killTweensOf(y,O,e.globalTime(t)),K=!e.parent,Dr=0),e._pt&&l&&(Sh[U.id]=1)}x&&Zg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&M.render(fi,!0,!0)},Jv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ah=1,e.vars[t]="+=0",Sf(e,a),Ah=0,l?Ka(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+xn(h.e)),h.b&&(h.b=u.s+xn(h.b))},Qv=function(e,t){var n=e[0]?Rs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Io({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ex=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Mn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ra=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):an(e)&&~e.indexOf("random(")?Za(e):e},qg=_f+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yg={};Bn(qg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yg[r]=1});var jt=(function(r){fg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:wa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Ot,v=(Mn(n)||pg(n)?pr(n[0]):"length"in i)?[n]:di(n),M,A,w,b,P,y,x,U;if(a._targets=v.length?vf(v):Ka("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Sl(c)||Sl(u)){if(i=a.vars,M=a.timeline=new In({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=ir(a),M._start=0,f||Sl(c)||Sl(u)){if(b=v.length,x=f&&Lg(f),Gi(f))for(P in f)~qg.indexOf(P)&&(U||(U={}),U[P]=f[P]);for(A=0;A<b;A++)w=Cc(i,Yg),w.stagger=0,m&&(w.yoyoEase=m),U&&Io(w,U),y=v[A],w.duration=+Ra(c,ir(a),A,y,v),w.delay=(+Ra(u,ir(a),A,y,v)||0)-a._delay,!f&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),M.to(y,w,x?x(A,y,v):0),M._ease=lt.none;M.duration()?c=u=0:a.timeline=0}else if(_){wa(ri(M.vars.defaults,{ease:"none"})),M._ease=Ps(_.ease||i.ease||"none");var I=0,L,O,H;if(Mn(_))_.forEach(function(q){return M.to(v,q,">")}),M.duration();else{w={};for(P in _)P==="ease"||P==="easeEach"||ex(P,_[P],w,_.easeEach);for(P in w)for(L=w[P].sort(function(q,K){return q.t-K.t}),I=0,A=0;A<L.length;A++)O=L[A],H={ease:O.e,duration:(O.t-(A?L[A-1].t:0))/100*c},H[P]=O.v,M.to(v,H,I),I+=H.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!hf&&(Dr=ir(a),Ot.killTweensOf(v),Dr=0),Ii(S,ir(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ut(S._time)&&Fn(h)&&Lv(ir(a))&&S.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-u)||0)),p&&Ag(ir(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-St&&!u?l:i<St?0:i,f,d,_,g,p,m,S,v,M;if(!c)Dv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=Ut(h%g),h===l?(_=this._repeat,f=c):(p=Ut(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(M=this._yEase,f=c-f),p=Do(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(v&&this._yEase&&Vg(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ut(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Rg(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&h&&!s&&!p&&(ei(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Mh(this,i,s,o),ei(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Mh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ja||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sf(this,c),u=this._ease(c/this._dur),Jv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Jc(this,0),this.parent||bg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Dr&&Dr.vars.overwrite!==!0)._first||pa(this),this.parent&&o!==this.timeline.totalDuration()&&No(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?di(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&Cv(a,l))return s==="all"&&(this._pt=0),pa(this);for(h=this._op=this._op||[],s!=="all"&&(an(s)&&(g={},Bn(s,function(S){return g[S]=1}),s=g),s=Qv(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&$c(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Aa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Aa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ot.killTweensOf(i,s,o)},e})(Qa);ri(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){jt[r]=function(){var e=new In,t=Eh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mf=function(e,t,n){return e[t]=n},jg=function(e,t,n){return e[t](n)},tx=function(e,t,n,i){return e[t](i.fp,n)},nx=function(e,t,n){return e.setAttribute(t,n)},Tf=function(e,t){return kt(e[t])?jg:ff(e[t])&&e.setAttribute?nx:Mf},Kg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ix=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$g=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},rx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},sx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?$c(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ox=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Zg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},kn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Kg,this.d=l||this,this.set=c||Mf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ox,this.m=n,this.mt=s,this.tween=i},r})();Bn(_f+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return gf[r]=1});ii.TweenMax=ii.TweenLite=jt;ii.TimelineLite=ii.TimelineMax=In;Ot=new In({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=zg;var Ls=[],uc={},ax=[],fd=0,lx=0,gu=function(e){return(uc[e]||ax).map(function(t){return t()})},Rh=function(){var e=Date.now(),t=[];e-fd>2&&(gu("matchMediaInit"),Ls.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ai.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),gu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fd=e,gu("matchMedia"))},Jg=(function(){function r(t,n){this.selector=n&&bh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=bh(s)),It=o,h=i.apply(o,arguments),kt(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof jt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ls.length;o--;)Ls[o].id===this.id&&Ls.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),cx=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Gi(n)||(n={matches:n});var o=new Jg(0,s||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ai.matchMedia(n[c]),l&&(Ls.indexOf(o)<0&&Ls.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rh):l.addEventListener("change",Rh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Lc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fg(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){an(e)&&(e=di(e)[0]);var s=Rs(e||{}).get,o=n?Eg:Tg;return n==="native"&&(n=""),e&&(t?o((Kn[t]&&Kn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Kn[a]&&Kn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=di(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Kn[t],a=Rs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;go._pt=0,h.init(e,n?u+n:u,go,0,[e]),h.render(1,h),go._pt&&Ef(1,go)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Vn.to(e,ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ps(e.ease,Lo.ease)),ad(Lo,e||{})},config:function(e){return ad(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Kn[a]&&!ii[a]&&Ka(t+" effect requires "+a+" plugin.")}),fu[t]=function(a,l,c){return n(di(a),ri(l||{},s),c)},o&&(In.prototype[t]=function(a,l,c){return this.add(fu[t](a,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Ps(t)},parseEase:function(e,t){return arguments.length?Ps(e,t):lt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,s;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof jt&&i.vars.onComplete===i._targets[0]))&&Ii(n,i,i._start-i._delay),i=s;return Ii(Ot,n,0),n},context:function(e,t){return e?new Jg(e,t):It},matchMedia:function(e){return new cx(e)},matchMediaRefresh:function(){return Ls.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Rh()},addEventListener:function(e,t){var n=uc[e]||(uc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=uc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Hv,wrapYoyo:Vv,distribute:Lg,random:Dg,snap:Ig,normalize:zv,getUnit:xn,clamp:Ov,splitColor:Bg,toArray:di,selector:bh,mapRange:Ug,pipe:Bv,unitize:kv,interpolate:Gv,shuffle:Pg},install:vg,effects:fu,ticker:Jn,updateRoot:In.updateRoot,plugins:Kn,globalTimeline:Ot,core:{PropTween:kn,globals:xg,Tween:jt,Timeline:In,Animation:Qa,getCache:Rs,_removeLinkedListItem:$c,reverting:function(){return hn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return hf=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Lc[r]=jt[r]});Jn.add(In.updateRoot);go=Lc.to({},{duration:0});var ux=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=ux(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},_u=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}hx(a,s)}}}},Vn=Lc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_u("roundProps",wh),_u("modifiers"),_u("snap",Ig))||Lc;jt.version=In.version=Vn.version="3.14.2";_g=1;df()&&Uo();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var dd,Nr,So,bf,ys,pd,wf,fx=function(){return typeof window<"u"},mr={},hs=180/Math.PI,Mo=Math.PI/180,Vs=Math.atan2,md=1e8,Af=/([A-Z])/g,dx=/(left|right|width|margin|padding|x)/i,px=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_x=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Qg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},e_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xx=function(e,t,n){return e.style[t]=n},yx=function(e,t,n){return e.style.setProperty(t,n)},Sx=function(e,t,n){return e._gsap[t]=n},Mx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tx=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ex=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",zn=Ft+"Origin",bx=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in mr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=sr(i,a)}):this.tfm[e]=o.x?o[e]:sr(i,e),e===zn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},t_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Af,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wf(),(!s||!s.isStart)&&!n[Ft]&&(t_(n),i.zOrigin&&n[zn]&&(n[zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},n_=function(e,t){var n={target:e,props:[],revert:wx,save:bx};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},i_,Ph=function(e,t){var n=Nr.createElementNS?Nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Nr.createElement(e);return n&&n.style?n:Nr.createElement(e)},ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Af,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Oo(t)||t,1)||""},gd="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,n){var i=t||ys,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(gd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?gd[o]:"")+e},Lh=function(){fx()&&window.document&&(dd=window,Nr=dd.document,So=Nr.documentElement,ys=Ph("div")||{style:{}},Ph("div"),Ft=Oo(Ft),zn=Ft+"Origin",ys.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",i_=!!Oo("perspective"),wf=Vn.core.reverting,bf=1)},_d=function(e){var t=e.ownerSVGElement,n=Ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),So.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),So.removeChild(n),s},vd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},r_=function(e){var t,n;try{t=e.getBBox()}catch{t=_d(e),n=1}return t&&(t.width||t.height)||n||(t=_d(e)),t&&!t.width&&!t.x&&!t.y?{x:+vd(e,["x","cx","x1"])||0,y:+vd(e,["y","cy","y1"])||0,width:0,height:0}:t},s_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&r_(e))},jr=function(e,t){if(t){var n=e.style,i;t in mr&&t!==zn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Af,"-$1").toLowerCase())):n.removeAttribute(t)}},Ur=function(e,t,n,i,s,o){var a=new kn(e._pt,t,n,0,1,o?e_:Qg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},xd={deg:1,rad:1,turn:1},Ax={grid:1,flex:1},Kr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ys.style,l=dx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===o||!s||xd[i]||xd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&s_(e),(d||o==="%")&&(mr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ht(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Nr||!g.appendChild)&&(g=Nr.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Jn.time&&!p.uncache)return Ht(s/p.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:jr(e,t)}else(d||o==="%")&&!Ax[ti(g,"display")]&&(a.position=ti(e,"position")),g===e&&(a.position="static"),g.appendChild(ys),_=ys[u],g.removeChild(ys),a.position="absolute";return l&&d&&(p=Rs(g),p.time=Jn.time,p.width=g[u]),Ht(f?_*s/h:_&&s?h/_*s:0)},sr=function(e,t,n,i){var s;return bf||Lh(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),mr[t]&&t!=="transform"?(s=tl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Dc(ti(e,zn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ic[t]&&Ic[t](e,t,n)||ti(e,t)||Sg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kr(e,t,s,n)+n:s},Rx=function(e,t,n,i){if(!n||n==="none"){var s=Oo(t,e,1),o=s&&ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ti(e,"borderTopColor"))}var a=new kn(this._pt,e.style,t,0,1,$g),l=0,c=0,u,h,f,d,_,g,p,m,S,v,M,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ti(e,t)||i,g?e.style[t]=g:jr(e,t)),u=[n,i],zg(u),n=u[0],i=u[1],f=n.match(mo)||[],A=i.match(mo)||[],A.length){for(;h=mo.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=yo(d,p)+M),m=parseFloat(p),v=p.substr((m+"").length),l=mo.lastIndex-v.length,v||(v=v||ni.units[t]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(d=Kr(e,t,g,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?e_:Qg;return gg.test(i)&&(a.e=0),this._pt=a,a},yd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=yd[n]||n,t[1]=yd[i]||i,t.join(" ")},Px=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mr[a]&&(l=1,a=a==="transformOrigin"?zn:Ft),jr(n,a);l&&(jr(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",tl(n,1),o.uncache=1,t_(i)))}},Ic={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new kn(e._pt,t,n,0,0,Px);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},el=[1,0,0,1,0,0],o_={},a_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sd=function(e){var t=ti(e,Ft);return a_(t)?el:t.substr(7).match(mg).map(Ht)},Rf=function(e,t){var n=e._gsap||Rs(e),i=e.style,s=Sd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==So&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,So.appendChild(e)),s=Sd(e),l?i.display=l:jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):So.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ih=function(e,t,n,i,s,o){var a=e._gsap,l=s||Rf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),M=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,b,P,y;n?l!==el&&(b=d*p-_*g)&&(P=M*(p/b)+A*(-g/b)+(g*S-p*m)/b,y=M*(-_/b)+A*(d/b)-(d*S-_*m)/b,M=P,A=y):(w=r_(e),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=M-c,S=A-u,a.xOffset=h+(m*d+S*g)-m,a.yOffset=f+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[zn]="0px 0px",o&&(Ur(o,a,"xOrigin",c,M),Ur(o,a,"yOrigin",u,A),Ur(o,a,"xOffset",h,a.xOffset),Ur(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+A)},tl=function(e,t){var n=e._gsap||new Wg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ti(e,zn)||"0",u,h,f,d,_,g,p,m,S,v,M,A,w,b,P,y,x,U,I,L,O,H,q,K,k,Y,C,se,_e,Ge,X,ee;return u=h=f=g=p=m=S=v=M=0,d=_=1,n.svg=!!(e.getCTM&&s_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),b=Rf(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Ih(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==el&&(U=b[0],I=b[1],L=b[2],O=b[3],u=H=b[4],h=q=b[5],b.length===6?(d=Math.sqrt(U*U+I*I),_=Math.sqrt(O*O+L*L),g=U||I?Vs(I,U)*hs:0,S=L||O?Vs(L,O)*hs+g:0,S&&(_*=Math.abs(Math.cos(S*Mo))),n.svg&&(u-=A-(A*U+w*L),h-=w-(A*I+w*O))):(ee=b[6],Ge=b[7],C=b[8],se=b[9],_e=b[10],X=b[11],u=b[12],h=b[13],f=b[14],P=Vs(ee,_e),p=P*hs,P&&(y=Math.cos(-P),x=Math.sin(-P),K=H*y+C*x,k=q*y+se*x,Y=ee*y+_e*x,C=H*-x+C*y,se=q*-x+se*y,_e=ee*-x+_e*y,X=Ge*-x+X*y,H=K,q=k,ee=Y),P=Vs(-L,_e),m=P*hs,P&&(y=Math.cos(-P),x=Math.sin(-P),K=U*y-C*x,k=I*y-se*x,Y=L*y-_e*x,X=O*x+X*y,U=K,I=k,L=Y),P=Vs(I,U),g=P*hs,P&&(y=Math.cos(P),x=Math.sin(P),K=U*y+I*x,k=H*y+q*x,I=I*y-U*x,q=q*y-H*x,U=K,H=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ht(Math.sqrt(U*U+I*I+L*L)),_=Ht(Math.sqrt(q*q+ee*ee)),P=Vs(H,q),S=Math.abs(P)>2e-4?P*hs:0,M=X?1/(X<0?-X:X):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!a_(ti(e,Ft)),K&&e.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ht(d),n.scaleY=Ht(_),n.rotation=Ht(g)+a,n.rotationX=Ht(p)+a,n.rotationY=Ht(m)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[zn]=Dc(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?Ix:i_?l_:Lx,n.uncache=0,n},Dc=function(e){return(e=e.split(" "))[0]+" "+e[1]},vu=function(e,t,n){var i=xn(t);return Ht(parseFloat(t)+parseFloat(Kr(e,"x",n+"px",i)))+i},Lx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,l_(e,t)},ns="0deg",ta="0px",is=") ",l_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,M="",A=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==ns||u!==ns)){var w=parseFloat(u)*Mo,b=Math.sin(w),P=Math.cos(w),y;w=parseFloat(h)*Mo,y=Math.cos(w),o=vu(S,o,b*y*-v),a=vu(S,a,-Math.sin(w)*-v),l=vu(S,l,P*y*-v+v)}p!==ta&&(M+="perspective("+p+is),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==ta||a!==ta||l!==ta)&&(M+=l!==ta||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+is),c!==ns&&(M+="rotate("+c+is),u!==ns&&(M+="rotateY("+u+is),h!==ns&&(M+="rotateX("+h+is),(f!==ns||d!==ns)&&(M+="skew("+f+", "+d+is),(_!==1||g!==1)&&(M+="scale("+_+", "+g+is),S.style[Ft]=M||"translate(0, 0)"},Ix=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),M=parseFloat(a),A,w,b,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Mo,c*=Mo,A=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Mo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,w*=y)),A=Ht(A),w=Ht(w),b=Ht(b),P=Ht(P)):(A=h,P=f,w=b=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=Kr(d,"x",o,"px"),M=Kr(d,"y",a,"px")),(_||g||p||m)&&(v=Ht(v+_-(_*A+g*b)+p),M=Ht(M+g-(_*w+g*P)+m)),(i||s)&&(y=d.getBBox(),v=Ht(v+i/100*y.width),M=Ht(M+s/100*y.height)),y="matrix("+A+","+w+","+b+","+P+","+v+","+M+")",d.setAttribute("transform",y),S&&(d.style[Ft]=y)},Dx=function(e,t,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*md)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*md)%o-~~(c/o)*o)),e._pt=f=new kn(e._pt,t,n,i,c,mx),f.e=u,f.u="deg",e._props.push(n),f},Md=function(e,t){for(var n in t)e[n]=t[n];return e},Nx=function(e,t,n){var i=Md({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=tl(n,1),jr(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=tl(n,1),o[Ft]=c);for(l in mr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=xn(c),_=xn(u),h=d!==_?Kr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new kn(e._pt,a,l,h,f-h,Ch),e._pt.u=_||0,e._props.push(l));Md(a,i)};Bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ic[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return sr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var c_={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,S,v,M,A,w,b,P,y;bf||Lh(),this.styles=this.styles||n_(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Kn[g]&&Xg(g,t,n,i,e,s)))){if(d=typeof u,_=Ic[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Za(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Vr.lastIndex=0,Vr.test(c)||(p=xn(c),m=xn(u),m?p!==m&&(c=Kr(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],an(c)&&~c.indexOf("random(")&&(c=Za(c)),xn(c+"")||c==="auto"||(c+=ni.units[g]||xn(sr(e,g))||""),(c+"").charAt(1)==="="&&(c=sr(e,g))):c=sr(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Oi&&(g==="autoAlpha"&&(f===1&&sr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Ur(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in mr,v){if(this.styles.save(g),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=ti(e,"perspective"),x?e.style.perspective=x:jr(e,"perspective")}h=parseFloat(u)}if(M||(A=e._gsap,A.renderTransform&&!t.parseTransform||tl(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,M=this._pt=new kn(this._pt,a,Ft,0,1,A.renderTransform,A,0,-1),M.dep=1),g==="scale")this._pt=new kn(this._pt,A,"scaleY",A.scaleY,(S?yo(A.scaleY,S+h):h)-A.scaleY||0,Ch),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(zn,0,a[zn]),u=Cx(u),A.svg?Ih(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Ur(this,A,"zOrigin",A.zOrigin,m),Ur(this,a,g,Dc(c),Dc(u)));continue}else if(g==="svgOrigin"){Ih(e,u,1,w,0,this);continue}else if(g in o_){Dx(this,A,g,f,S?yo(f,S+u):u);continue}else if(g==="smoothOrigin"){Ur(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){Nx(this,u,e);continue}}else g in a||(g=Oo(g)||g);if(v||(h||h===0)&&(f||f===0)&&!px.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=xn(u)||(g in ni.units?ni.units[g]:p),p!==m&&(f=Kr(e,g,c,m)),this._pt=new kn(this._pt,v?A:a,g,f,(S?yo(f,S+h):h)-f,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?vx:Ch),this._pt.u=m||0,v&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=_x):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gx);else if(g in a)Rx.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,s);else if(g!=="parseTransform"){mf(g,u);continue}v||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}b&&Zg(this)},render:function(e,t){if(t.tween._time||!wf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:sr,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in mr&&t!==zn&&(e._gsap.x||sr(e,"x"))?n&&pd===n?t==="scale"?Mx:Sx:(pd=n||{})&&(t==="scale"?Tx:Ex):e.style&&!ff(e.style[t])?xx:~t.indexOf("-")?yx:Tf(e,t)},core:{_removeProperty:jr,_getMatrix:Rf}};Vn.utils.checkPrefix=Oo;Vn.core.getStyleSaver=n_;(function(r,e,t,n){var i=Bn(r+","+e+","+t,function(s){mr[s]=1});Bn(e,function(s){ni.units[s]="deg",o_[s]=1}),Oi[i[13]]=r+","+e,Bn(n,function(s){var o=s.split(":");Oi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});Vn.registerPlugin(c_);var Ne=Vn.registerPlugin(c_)||Vn;Ne.core.Tween;let na,Gs,Td=typeof Symbol=="function"?Symbol():"_split",Dh,Ux=()=>Dh||$r.register(window.gsap),Ed=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,nl=r=>typeof r=="string"?nl(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...nl(t)):e.push(t),e),[]):[r],bd=r=>nl(r).filter(e=>e instanceof HTMLElement),Nh=[],xu=function(){},Ox={add:r=>r()},Fx=/\s+/g,wd=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Nc={left:0,top:0,width:0,height:0},Bx=(r,e)=>{for(;++e<r.length&&r[e]===Nc;);return r[e]||Nc},Ad=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Rd=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Nh),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Cd=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Ws=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Uh=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let h=document.createElement(i),f=t.length+1;return n&&(h.className=n+(l?" "+n+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),i!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,t.push(h),h};return l&&(n=n.replace("++","")),c.collection=t,c},kx=(r,e,t,n)=>{let i=Uh("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},u_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=e,p=r.getBoundingClientRect(),m=p,S=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",v=0,M=t.collection,A,w,b,P,y,x,U,I,L,O,H,q,K,k,Y,C,se,_e;for(typeof d=="object"?(b=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",A=w!==" ";f<h.length;f++)if(P=h[f],P.nodeType===3){for(Y=P.textContent||"",_?Y=Y.replace(Fx," "):S&&(Y=Y.replace(/\n/g,w+`
`)),g&&(Y=g(Y,r)),P.textContent=Y,y=w||b?Y.split(b||w):Y.match(a)||Nh,se=y[y.length-1],I=A?se.slice(-1)===" ":!se,se||y.pop(),m=p,U=A?y[0].charAt(0)===" ":!y[0],U&&Ws(" ",r,P),y[0]||y.shift(),Rd(y,l),s&&c||(P.textContent=""),L=1;L<=y.length;L++)if(C=y[L-1],!_&&S&&C.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),Ws(document.createElement("br"),r,P),C=C.slice(1)),!_&&C==="")Ws(w,r,P);else if(C===" ")r.insertBefore(document.createTextNode(" "),P);else{if(A&&C.charAt(0)===" "&&Ws(" ",r,P),v&&L===1&&!U&&M.indexOf(v.parentNode)>-1?(x=M[M.length-1],x.appendChild(document.createTextNode(n?"":C))):(x=t(n?"":C),Ws(x,r,P),v&&L===1&&!U&&x.insertBefore(v,x.firstChild)),n)for(H=Ed?Rd([...Ed.segment(C)].map(Ge=>Ge.segment),l):C.match(a)||Nh,_e=0;_e<H.length;_e++)x.appendChild(H[_e]===" "?document.createTextNode(" "):n(H[_e]));if(s&&c){if(Y=P.textContent=Y.substring(C.length+1,Y.length),O=x.getBoundingClientRect(),O.top>m.top&&O.left<=m.left){for(q=r.cloneNode(),K=r.childNodes[0];K&&K!==x;)k=K,K=K.nextSibling,q.appendChild(k);r.parentNode.insertBefore(q,r),i&&Cd(q)}m=O}(L<y.length||I)&&Ws(L>=y.length?" ":A&&C.slice(-1)===" "?" "+w:w,r,P)}r.removeChild(P),v=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(M.indexOf(P.previousSibling)>-1&&M[M.length-1].appendChild(P),v=P):(u_(P,e,t,n,i,s,o,a,l,!0),v=0),i&&Cd(P))};const h_=class f_{constructor(e,t){this.isSplit=!1,Ux(),this.elements=bd(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Td])==null||a._data.orig.filter(({element:l})=>l===o).forEach(Ad)),o[Td]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},xu(this),this.split(t)}split(e){return(this._ctx||Ox).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,h=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,d=h&&!f&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+wd.source,"gu"):wd,p=!!e.ignore&&bd(e.ignore),{orig:m,animTime:S,obs:v}=this._data,M;(h||f||u)&&(this.elements.forEach((A,w)=>{m[w]={element:A,html:A.innerHTML,ariaL:A.getAttribute("aria-label"),ariaH:A.getAttribute("aria-hidden")},n==="auto"?A.setAttribute("aria-label",(A.textContent||"").trim()):n==="hidden"&&A.setAttribute("aria-hidden","true");let b=[],P=[],y=[],x=h?Uh("char",e,b):null,U=Uh("word",e,P),I,L,O,H;if(u_(A,e,U,x,d,i&&(u||d),p,g,_,!1),u){let q=nl(A.childNodes),K=kx(A,q,e,y),k,Y=[],C=0,se=q.map(X=>X.nodeType===1?X.getBoundingClientRect():Nc),_e=Nc,Ge;for(I=0;I<q.length;I++)k=q[I],k.nodeType===1&&(k.nodeName==="BR"?((!I||q[I-1].nodeName!=="BR")&&(Y.push(k),K(C,I+1)),C=I+1,_e=Bx(se,I)):(Ge=se[I],I&&Ge.top>_e.top&&Ge.left<_e.left+_e.width-1&&(K(C,I),C=I),_e=Ge));C<I&&K(C,I),Y.forEach(X=>{var ee;return(ee=X.parentNode)==null?void 0:ee.removeChild(X)})}if(!f){for(I=0;I<P.length;I++)if(L=P[I],h||!L.nextSibling||L.nextSibling.nodeType!==3)if(s&&!u){for(O=document.createElement("span"),O.style.whiteSpace="nowrap";L.firstChild;)O.appendChild(L.firstChild);L.replaceWith(O)}else L.replaceWith(...L.childNodes);else H=L.nextSibling,H&&H.nodeType===3&&(H.textContent=(L.textContent||"")+(H.textContent||""),L.remove());P.length=0,A.normalize()}this.lines.push(...y),this.words.push(...P),this.chars.push(...b)}),c&&this[c]&&this.masks.push(...this[c].map(A=>{let w=A.cloneNode();return A.replaceWith(w),w.appendChild(A),A.className&&(w.className=A.className.trim()+"-mask"),w.style.overflow="clip",w}))),this.isSplit=!0,Gs&&u&&(a?Gs.addEventListener("loadingdone",this._split):Gs.status==="loading"&&console.warn("SplitText called before fonts loaded")),(M=o&&o(this))&&M.totalTime&&(this._data.anim=S?M.totalTime(S):M),u&&a&&this.elements.forEach((A,w)=>{m[w].width=A.offsetWidth,v&&v.observe(A)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Gs?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Ad),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new f_(e,t)}static register(e){na=na||e||window.gsap,na&&(nl=na.utils.toArray,xu=na.core.context||xu),!Dh&&window.innerWidth>0&&(Gs=document.fonts,Dh=!0)}};h_.version="3.14.2";let $r=h_;var zx="1.3.17";function d_(r,e,t){return Math.max(r,Math.min(e,t))}function Hx(r,e,t){return(1-t)*r+t*e}function Vx(r,e,t,n){return Hx(r,e,1-Math.exp(-t*n))}function Gx(r,e){return(r%e+e)%e}var Wx=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=d_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Vx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Xx(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var qx=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Xx(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},p_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Pd=100/6,_r={passive:!1},Yx=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_r),this.element.addEventListener("touchstart",this.onTouchStart,_r),this.element.addEventListener("touchmove",this.onTouchMove,_r),this.element.addEventListener("touchend",this.onTouchEnd,_r)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new p_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,_r),this.element.removeEventListener("touchstart",this.onTouchStart,_r),this.element.removeEventListener("touchmove",this.onTouchMove,_r),this.element.removeEventListener("touchend",this.onTouchEnd,_r)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Pd:n===2?this.window.width:1,s=n===1?Pd:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Ld=r=>Math.min(1,1.001-Math.pow(2,-10*r)),jx=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Wx;emitter=new p_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:S=!0,autoRaf:v=!1,anchors:M=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:P=b,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=zx,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Ld:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:S,autoRaf:v,anchors:M,autoToggle:A,allowNestedScroll:w,naiveDimensions:P,stopInertiaOnNavigate:y},this.dimensions=new qx(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Yx(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof u=="function"&&u?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=d_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Ld:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);i.computedStyle=A;const w=A.overflowX,b=A.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(b),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let _;if(d==="horizontal")_="x";else if(d==="vertical")_="y";else{const A=e!==0,w=t!==0;A&&s&&a&&(_="x"),w&&o&&l&&(_="y")}if(!_)return!1;let g,p,m,S,v;if(_==="x")g=r.scrollLeft,p=c-h,m=e,S=s,v=a;else if(_==="y")g=r.scrollTop,p=u-f,m=t,S=o,v=l;else return!1;return(m>0?g<p:g>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Gx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Kx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function $x(r,e,t){return e&&Kx(r.prototype,e),r}var un,hc,Qn,Or,Fr,To,m_,fs,Ca,g_,cr,vi,__,v_=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},x_=1,_o=[],st=[],Vi=[],Pa=Date.now,Oh=function(e,t){return t},Zx=function(){var e=Ca.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Vi),st=n,Vi=i,Oh=function(o,a){return t[o](a)}},Gr=function(e,t){return~Vi.indexOf(e)&&Vi[Vi.indexOf(e)+1][t]},La=function(e){return!!~g_.indexOf(e)},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ml="scrollLeft",Tl="scrollTop",Fh=function(){return cr&&cr.isPressed||st.cache++},Uc=function(e,t){var n=function i(s){if(s||s===0){x_&&(Qn.history.scrollRestoration="manual");var o=cr&&cr.isPressed;s=i.v=Math.round(s)||(cr&&cr.iOS?1:0),e(s),i.cacheID=st.cache,o&&Oh("ss",s)}else(t||st.cache!==i.cacheID||Oh("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Dn={s:Ml,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Uc(function(r){return arguments.length?Qn.scrollTo(r,Zt.sc()):Qn.pageXOffset||Or[Ml]||Fr[Ml]||To[Ml]||0})},Zt={s:Tl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:Uc(function(r){return arguments.length?Qn.scrollTo(Dn.sc(),r):Qn.pageYOffset||Or[Tl]||Fr[Tl]||To[Tl]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||un.utils.toArray)(e)[0]||(typeof e=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Jx=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zr=function(e,t){var n=t.s,i=t.sc;La(e)&&(e=Or.scrollingElement||Fr);var s=st.indexOf(e),o=i===Zt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||bn(e,"scroll",Fh);var a=st[s+o],l=a||(st[s+o]=Uc(Gr(e,n),!0)||(La(e)?i:Uc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=un.getProperty(e,"scrollBehavior")==="smooth"),l},Bh=function(e,t,n){var i=e,s=e,o=Pa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Pa();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var g=a,p=s,m=Pa();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ia=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Id=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},y_=function(){Ca=un.core.globals().ScrollTrigger,Ca&&Ca.core&&Zx()},S_=function(e){return un=e||v_(),!hc&&un&&typeof document<"u"&&document.body&&(Qn=window,Or=document,Fr=Or.documentElement,To=Or.body,g_=[Qn,Or,Fr,To],un.utils.clamp,__=un.core.context||function(){},fs="onpointerenter"in To?"pointer":"mouse",m_=Gt.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=Gt.eventTypes=("ontouchstart"in Fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return x_=0},500),y_(),hc=1),hc};Dn.op=Zt;st.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){hc||S_(un)||console.warn("Please gsap.registerPlugin(Observer)"),Ca||y_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,v=n.onPress,M=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,P=n.onDown,y=n.onChangeX,x=n.onChangeY,U=n.onChange,I=n.onToggleX,L=n.onToggleY,O=n.onHover,H=n.onHoverEnd,q=n.onMove,K=n.ignoreCheck,k=n.isNormalizer,Y=n.onGestureStart,C=n.onGestureEnd,se=n.onWheel,_e=n.onEnable,Ge=n.onDisable,X=n.onClick,ee=n.scrollSpeed,le=n.capture,ie=n.allowClicks,be=n.lockAxis,Re=n.onLockAxis;this.target=a=Un(a)||Fr,this.vars=n,d&&(d=un.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Qn.getComputedStyle(To).lineHeight)||22);var Xe,z,Oe,ae,qe,Te,Ye,T=this,E=0,j=0,Z=n.passive||!u&&n.passive!==!1,$=Zr(a,Dn),Q=Zr(a,Zt),we=$(),ne=Q(),de=~o.indexOf("touch")&&!~o.indexOf("pointer")&&vi[0]==="pointerdown",Ce=La(a),te=a.ownerDocument||Or,he=[0,0,0],Pe=[0,0,0],pe=0,xe=function(){return pe=Pa()},Le=function(Me,Qe){return(T.event=Me)&&d&&Jx(Me.target,d)||Qe&&de&&Me.pointerType!=="touch"||K&&K(Me,Qe)},nt=function(){T._vx.reset(),T._vy.reset(),z.pause(),h&&h(T)},Je=function(){var Me=T.deltaX=Id(he),Qe=T.deltaY=Id(Pe),ce=Math.abs(Me)>=i,He=Math.abs(Qe)>=i;U&&(ce||He)&&U(T,Me,Qe,he,Pe),ce&&(A&&T.deltaX>0&&A(T),w&&T.deltaX<0&&w(T),y&&y(T),I&&T.deltaX<0!=E<0&&I(T),E=T.deltaX,he[0]=he[1]=he[2]=0),He&&(P&&T.deltaY>0&&P(T),b&&T.deltaY<0&&b(T),x&&x(T),L&&T.deltaY<0!=j<0&&L(T),j=T.deltaY,Pe[0]=Pe[1]=Pe[2]=0),(ae||Oe)&&(q&&q(T),Oe&&(p&&Oe===1&&p(T),S&&S(T),Oe=0),ae=!1),Te&&!(Te=!1)&&Re&&Re(T),qe&&(se(T),qe=!1),Xe=0},ot=function(Me,Qe,ce){he[ce]+=Me,Pe[ce]+=Qe,T._vx.update(Me),T._vy.update(Qe),c?Xe||(Xe=requestAnimationFrame(Je)):Je()},ut=function(Me,Qe){be&&!Ye&&(T.axis=Ye=Math.abs(Me)>Math.abs(Qe)?"x":"y",Te=!0),Ye!=="y"&&(he[2]+=Me,T._vx.update(Me,!0)),Ye!=="x"&&(Pe[2]+=Qe,T._vy.update(Qe,!0)),c?Xe||(Xe=requestAnimationFrame(Je)):Je()},ve=function(Me){if(!Le(Me,1)){Me=ia(Me,u);var Qe=Me.clientX,ce=Me.clientY,He=Qe-T.x,Ie=ce-T.y,ze=T.isDragging;T.x=Qe,T.y=ce,(ze||(He||Ie)&&(Math.abs(T.startX-Qe)>=s||Math.abs(T.startY-ce)>=s))&&(Oe||(Oe=ze?2:1),ze||(T.isDragging=!0),ut(He,Ie))}},D=T.onPress=function(De){Le(De,1)||De&&De.button||(T.axis=Ye=null,z.pause(),T.isPressed=!0,De=ia(De),E=j=0,T.startX=T.x=De.clientX,T.startY=T.y=De.clientY,T._vx.reset(),T._vy.reset(),bn(k?a:te,vi[1],ve,Z,!0),T.deltaX=T.deltaY=0,v&&v(T))},J=T.onRelease=function(De){if(!Le(De,1)){Tn(k?a:te,vi[1],ve,!0);var Me=!isNaN(T.y-T.startY),Qe=T.isDragging,ce=Qe&&(Math.abs(T.x-T.startX)>3||Math.abs(T.y-T.startY)>3),He=ia(De);!ce&&Me&&(T._vx.reset(),T._vy.reset(),u&&ie&&un.delayedCall(.08,function(){if(Pa()-pe>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(te.createEvent){var Ie=te.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Qn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(Ie)}}})),T.isDragging=T.isGesturing=T.isPressed=!1,h&&Qe&&!k&&z.restart(!0),Oe&&Je(),m&&Qe&&m(T),M&&M(T,ce)}},oe=function(Me){return Me.touches&&Me.touches.length>1&&(T.isGesturing=!0)&&Y(Me,T.isDragging)},me=function(){return(T.isGesturing=!1)||C(T)},ye=function(Me){if(!Le(Me)){var Qe=$(),ce=Q();ot((Qe-we)*ee,(ce-ne)*ee,1),we=Qe,ne=ce,h&&z.restart(!0)}},it=function(Me){if(!Le(Me)){Me=ia(Me,u),se&&(qe=!0);var Qe=(Me.deltaMode===1?l:Me.deltaMode===2?Qn.innerHeight:1)*_;ot(Me.deltaX*Qe,Me.deltaY*Qe,0),h&&!k&&z.restart(!0)}},ct=function(Me){if(!Le(Me)){var Qe=Me.clientX,ce=Me.clientY,He=Qe-T.x,Ie=ce-T.y;T.x=Qe,T.y=ce,ae=!0,h&&z.restart(!0),(He||Ie)&&ut(He,Ie)}},ft=function(Me){T.event=Me,O(T)},Tt=function(Me){T.event=Me,H(T)},ht=function(Me){return Le(Me)||ia(Me,u)&&X(T)};z=T._dc=un.delayedCall(f||.25,nt).pause(),T.deltaX=T.deltaY=0,T._vx=Bh(0,50,!0),T._vy=Bh(0,50,!0),T.scrollX=$,T.scrollY=Q,T.isDragging=T.isGesturing=T.isPressed=!1,__(this),T.enable=function(De){return T.isEnabled||(bn(Ce?te:a,"scroll",Fh),o.indexOf("scroll")>=0&&bn(Ce?te:a,"scroll",ye,Z,le),o.indexOf("wheel")>=0&&bn(a,"wheel",it,Z,le),(o.indexOf("touch")>=0&&m_||o.indexOf("pointer")>=0)&&(bn(a,vi[0],D,Z,le),bn(te,vi[2],J),bn(te,vi[3],J),ie&&bn(a,"click",xe,!0,!0),X&&bn(a,"click",ht),Y&&bn(te,"gesturestart",oe),C&&bn(te,"gestureend",me),O&&bn(a,fs+"enter",ft),H&&bn(a,fs+"leave",Tt),q&&bn(a,fs+"move",ct)),T.isEnabled=!0,T.isDragging=T.isGesturing=T.isPressed=ae=Oe=!1,T._vx.reset(),T._vy.reset(),we=$(),ne=Q(),De&&De.type&&D(De),_e&&_e(T)),T},T.disable=function(){T.isEnabled&&(_o.filter(function(De){return De!==T&&La(De.target)}).length||Tn(Ce?te:a,"scroll",Fh),T.isPressed&&(T._vx.reset(),T._vy.reset(),Tn(k?a:te,vi[1],ve,!0)),Tn(Ce?te:a,"scroll",ye,le),Tn(a,"wheel",it,le),Tn(a,vi[0],D,le),Tn(te,vi[2],J),Tn(te,vi[3],J),Tn(a,"click",xe,!0),Tn(a,"click",ht),Tn(te,"gesturestart",oe),Tn(te,"gestureend",me),Tn(a,fs+"enter",ft),Tn(a,fs+"leave",Tt),Tn(a,fs+"move",ct),T.isEnabled=T.isPressed=T.isDragging=!1,Ge&&Ge(T))},T.kill=T.revert=function(){T.disable();var De=_o.indexOf(T);De>=0&&_o.splice(De,1),cr===T&&(cr=0)},_o.push(T),k&&La(a)&&(cr=T),T.enable(g)},$x(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.14.2";Gt.create=function(r){return new Gt(r)};Gt.register=S_;Gt.getAll=function(){return _o.slice()};Gt.getById=function(r){return _o.filter(function(e){return e.vars.id===r})[0]};v_()&&un.registerPlugin(Gt);var ge,ho,rt,bt,$n,dt,Cf,Oc,il,Ia,ga,El,gn,Qc,kh,Rn,Dd,Nd,fo,M_,yu,T_,An,zh,E_,b_,br,Hh,Pf,Eo,Lf,Da,Vh,Su,bl=1,_n=Date.now,Mu=_n(),pi=0,_a=0,Ud=function(e,t,n){var i=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Od=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Qx=function r(){return _a&&requestAnimationFrame(r)},Fd=function(){return Qc=1},Bd=function(){return Qc=0},Ri=function(e){return e},va=function(e){return Math.round(e*1e5)/1e5||0},w_=function(){return typeof window<"u"},A_=function(){return ge||w_()&&(ge=window.gsap)&&ge.registerPlugin&&ge},Us=function(e){return!!~Cf.indexOf(e)},R_=function(e){return(e==="Height"?Lf:rt["inner"+e])||$n["client"+e]||dt["client"+e]},C_=function(e){return Gr(e,"getBoundingClientRect")||(Us(e)?function(){return gc.width=rt.innerWidth,gc.height=Lf,gc}:function(){return or(e)})},ey=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Gr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?R_(s):e["client"+s])||0}},ty=function(e,t){return!t||~Vi.indexOf(e)?C_(e):function(){return gc}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Gr(e,n))?o()-C_(e)()[s]:Us(e)?($n[n]||dt[n])-R_(i):e[n]-e["offset"+i])},wl=function(e,t){for(var n=0;n<fo.length;n+=3)(!t||~t.indexOf(fo[n+1]))&&e(fo[n],fo[n+1],fo[n+2])},jn=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},xa=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},ra=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Tu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Xs=Math.abs,P_="left",L_="top",If="right",Df="bottom",Is="width",Ds="height",Na="Right",Ua="Left",Oa="Top",Fa="Bottom",qt="padding",ui="margin",Fo="Width",Nf="Height",$t="px",hi=function(e){return rt.getComputedStyle(e)},ny=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},kd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},or=function(e,t){var n=t&&hi(e)[kh]!=="matrix(1, 0, 0, 1, 0, 0)"&&ge.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Fc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},I_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},iy=function(e){return function(t){return ge.utils.snap(I_(e),t)}},Uf=function(e){var t=ge.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},ry=function(e){return function(t,n){return Uf(I_(e))(t,n.direction)}},Al=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},zd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cl={toggleActions:"play",anticipatePin:0},Bc={top:0,left:0,center:.5,bottom:1,right:1},fc=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Bc?Bc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=bt.createElement("div"),g=Us(n)||Gr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?dt:n,S=e.indexOf("start")!==-1,v=S?c:u,M="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Zt?If:Df)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],dc(_,0,i,S),_},dc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Fo]=1,s["border"+a+Fo]=0,s[n.p]=t+"px",ge.set(e,s)},et=[],Gh={},rl,Hd=function(){return _n()-pi>34&&(rl||(rl=requestAnimationFrame(hr)))},qs=function(){(!An||!An.isPressed||An.startX>dt.clientWidth)&&(st.cache++,An?rl||(rl=requestAnimationFrame(hr)):hr(),pi||Fs("scrollStart"),pi=_n())},Eu=function(){b_=rt.innerWidth,E_=rt.innerHeight},ya=function(e){st.cache++,(e===!0||!gn&&!T_&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!zh||b_!==rt.innerWidth||Math.abs(rt.innerHeight-E_)>rt.innerHeight*.25))&&Oc.restart(!0)},Os={},sy=[],D_=function r(){return rn(tt,"scrollEnd",r)||Ss(!0)},Fs=function(e){return Os[e]&&Os[e].map(function(t){return t()})||sy},Yn=[],N_=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},U_=function(){return st.forEach(function(e){return yn(e)&&++e.cacheID&&(e.rec=e())})},Of=function(e,t){var n;for(Rn=0;Rn<et.length;Rn++)n=et[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Da=!0,t&&N_(t),t||Fs("revert")},O_=function(e,t){st.cache++,(t||!Cn)&&st.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(rt.history.scrollRestoration=Pf=e)},Cn,Ns=0,Vd,oy=function(){if(Vd!==Ns){var e=Vd=Ns;requestAnimationFrame(function(){return e===Ns&&Ss(!0)})}},F_=function(){dt.appendChild(Eo),Lf=!An&&Eo.offsetHeight||rt.innerHeight,dt.removeChild(Eo)},Gd=function(e){return il(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ss=function(e,t){if($n=bt.documentElement,dt=bt.body,Cf=[rt,bt,$n,dt],pi&&!e&&!Da){sn(tt,"scrollEnd",D_);return}F_(),Cn=tt.isRefreshing=!0,Da||U_();var n=Fs("refreshInit");M_&&tt.sort(),t||Of(),st.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Da=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Vh=1,Gd(!0),et.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Gd(!1),Vh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),O_(Pf,1),Oc.pause(),Ns++,Cn=2,hr(2),et.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Cn=tt.isRefreshing=!1,Fs("refresh")},Wh=0,pc=1,Ba,hr=function(e){if(e===2||!Cn&&!Da){tt.isUpdating=!0,Ba&&Ba.update(0);var t=et.length,n=_n(),i=n-Mu>=50,s=t&&et[0].scroll();if(pc=Wh>s?-1:1,Cn||(Wh=s),i&&(pi&&!Qc&&n-pi>200&&(pi=0,Fs("scrollEnd")),ga=Mu,Mu=n),pc<0){for(Rn=t;Rn-- >0;)et[Rn]&&et[Rn].update(0,i);pc=1}else for(Rn=0;Rn<t;Rn++)et[Rn]&&et[Rn].update(0,i);tt.isUpdating=!1}rl=0},Xh=[P_,L_,Df,If,ui+Fa,ui+Na,ui+Oa,ui+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mc=Xh.concat([Is,Ds,"boxSizing","max"+Fo,"max"+Nf,"position",ui,qt,qt+Oa,qt+Na,qt+Fa,qt+Ua]),ay=function(e,t,n){bo(n);var i=e._gsap;if(i.spacerIsNative)bo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},bu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Xh.length,o=t.style,a=e.style,l;s--;)l=Xh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Df]=a[If]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Is]=Fc(e,Dn)+$t,o[Ds]=Fc(e,Zt)+$t,o[qt]=a[ui]=a[L_]=a[P_]="0",bo(i),a[Is]=a["max"+Fo]=n[Is],a[Ds]=a["max"+Nf]=n[Ds],a[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ly=/([A-Z])/g,bo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ge.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ly,"-$1").toLowerCase())}},Ll=function(e){for(var t=mc.length,n=e.style,i=[],s=0;s<t;s++)i.push(mc[s],n[mc[s]]);return i.t=e,i},cy=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},gc={left:0,top:0},Wd=function(e,t,n,i,s,o,a,l,c,u,h,f,d,_){yn(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?fc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),xa(e))d&&(e=ge.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&dc(a,n,i,!0);else{yn(t)&&(t=t(l));var v=(e||"0").split(" "),M,A,w,b;S=Un(t,l)||dt,M=or(S)||{},(!M||!M.left&&!M.top)&&hi(S).display==="none"&&(b=S.style.display,S.style.display="block",M=or(S),b?S.style.display=b:S.style.removeProperty("display")),A=fc(v[0],M[i.d]),w=fc(v[1]||"0",n),e=M[i.p]-c[i.p]-u+A+s-w,a&&dc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,y=o._isStart;p="scroll"+i.d2,dc(o,P,i,y&&P>20||!y&&(h?Math.max(dt[p],$n[p]):o.parentNode[p])<=P+1),h&&(c=or(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+$t))}return d&&S&&(p=or(S),d.seek(f),m=or(S),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},uy=/(webkit|moz|length|cssText|inset)/i,Xd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===dt){e._stOrig=s.cssText,a=hi(e);for(o in a)!+o&&!uy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ge.core.getCache(e).uncache=1,t.appendChild(e)}},B_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Il=function(e,t,n){var i={};i[t.p]="+="+n,ge.set(e,i)},qd=function(e,t){var n=Zr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=B_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ge.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),tt.isTouch&&sn(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){ho||r.register(ge)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=Ri;return}n=kd(jn(n)||xa(n)||n.nodeType?{trigger:n}:n,Cl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,v=s.once,M=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:Zt,U=!h&&h!==0,I=Un(n.scroller||rt),L=ge.core.getCache(I),O=Us(I),H=("pinType"in n?n.pinType:Gr(I,"pinType")||O&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=U&&n.toggleActions.split(" "),k="markers"in n?n.markers:Cl.markers,Y=O?0:parseFloat(hi(I)["border"+x.p2+Fo])||0,C=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(C)},_e=ey(I,O,x),Ge=ty(I,O),X=0,ee=0,le=0,ie=Zr(I,x),be,Re,Xe,z,Oe,ae,qe,Te,Ye,T,E,j,Z,$,Q,we,ne,de,Ce,te,he,Pe,pe,xe,Le,nt,Je,ot,ut,ve,D,J,oe,me,ye,it,ct,ft,Tt;if(C._startClamp=C._endClamp=!1,C._dir=x,p*=45,C.scroller=I,C.scroll=b?b.time.bind(b):ie,z=ie(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(M_=1,n.refreshPriority===-9999&&(Ba=C)),L.tweenScroll=L.tweenScroll||{top:qd(I,Zt),left:qd(I,Dn)},C.tweenTo=be=L.tweenScroll[x.p],C.scrubDuration=function(ce){oe=xa(ce)&&ce,oe?J?J.duration(ce):J=ge.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return m&&m(C)}}):(J&&J.progress(1).kill(),J=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),ve=0,l||(l=i.vars.id)),M&&((!ds(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in dt.style&&ge.set(O?[dt,$n]:I,{scrollBehavior:"auto"}),st.forEach(function(ce){return yn(ce)&&ce.target===(O?bt.scrollingElement||$n:I)&&(ce.smooth=!1)}),Xe=yn(M.snapTo)?M.snapTo:M.snapTo==="labels"?iy(i):M.snapTo==="labelsDirectional"?ry(i):M.directional!==!1?function(ce,He){return Uf(M.snapTo)(ce,_n()-ee<500?0:He.direction)}:ge.utils.snap(M.snapTo),me=M.duration||{min:.1,max:2},me=ds(me)?Ia(me.min,me.max):Ia(me,me),ye=ge.delayedCall(M.delay||oe/2||.1,function(){var ce=ie(),He=_n()-ee<500,Ie=be.tween;if((He||Math.abs(C.getVelocity())<10)&&!Ie&&!Qc&&X!==ce){var ze=(ce-ae)/$,zt=i&&!U?i.totalProgress():ze,Ke=He?0:(zt-D)/(_n()-ga)*1e3||0,Rt=ge.utils.clamp(-ze,1-ze,Xs(Ke/2)*Ke/.185),Kt=ze+(M.inertia===!1?0:Rt),Ct,Et,pt=M,R=pt.onStart,F=pt.onInterrupt,G=pt.onComplete;if(Ct=Xe(Kt,C),xa(Ct)||(Ct=Kt),Et=Math.max(0,Math.round(ae+Ct*$)),ce<=qe&&ce>=ae&&Et!==ce){if(Ie&&!Ie._initted&&Ie.data<=Xs(Et-ce))return;M.inertia===!1&&(Rt=Ct-ze),be(Et,{duration:me(Xs(Math.max(Xs(Kt-zt),Xs(Ct-zt))*.185/Ke/.05||0)),ease:M.ease||"power3",data:Xs(Et-ce),onInterrupt:function(){return ye.restart(!0)&&F&&F(C)},onComplete:function(){C.update(),X=ie(),i&&!U&&(J?J.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),ve=D=i&&!U?i.totalProgress():C.progress,S&&S(C),G&&G(C)}},ce,Rt*$,Et-ce-Rt*$),R&&R(C,be.tween)}}else C.isActive&&X!==ce&&ye.restart(!0)}).pause()),l&&(Gh[l]=C),f=C.trigger=Un(f||d!==!0&&d),Tt=f&&f._gsap&&f._gsap.stRevert,Tt&&(Tt=Tt(C)),d=d===!0?f:Un(d),jn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===ui||(_=!_&&d.parentNode&&d.parentNode.style&&hi(d.parentNode).display==="flex"?!1:qt),C.pin=d,Re=ge.core.getCache(d),Re.spacer?Q=Re.pinState:(w&&(w=Un(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Re.spacerIsNative=!!w,w&&(Re.spacerState=Ll(w))),Re.spacer=de=w||bt.createElement("div"),de.classList.add("pin-spacer"),l&&de.classList.add("pin-spacer-"+l),Re.pinState=Q=Ll(d)),n.force3D!==!1&&ge.set(d,{force3D:!0}),C.spacer=de=Re.spacer,ut=hi(d),xe=ut[_+x.os2],te=ge.getProperty(d),he=ge.quickSetter(d,x.a,$t),bu(d,de,ut),ne=Ll(d)),k){j=ds(k)?kd(k,zd):zd,T=Pl("scroller-start",l,I,x,j,0),E=Pl("scroller-end",l,I,x,j,0,T),Ce=T["offset"+x.op.d2];var ht=Un(Gr(I,"content")||I);Te=this.markerStart=Pl("start",l,ht,x,j,Ce,0,b),Ye=this.markerEnd=Pl("end",l,ht,x,j,Ce,0,b),b&&(ft=ge.quickSetter([Te,Ye],x.a,$t)),!H&&!(Vi.length&&Gr(I,"fixedMarkers")===!0)&&(ny(O?dt:I),ge.set([T,E],{force3D:!0}),nt=ge.quickSetter(T,x.a,$t),ot=ge.quickSetter(E,x.a,$t))}if(b){var De=b.vars.onUpdate,Me=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){C.update(0,0,1),De&&De.apply(b,Me||[])})}if(C.previous=function(){return et[et.indexOf(C)-1]},C.next=function(){return et[et.indexOf(C)+1]},C.revert=function(ce,He){if(!He)return C.kill(!0);var Ie=ce!==!1||!C.enabled,ze=gn;Ie!==C.isReverted&&(Ie&&(it=Math.max(ie(),C.scroll.rec||0),le=C.progress,ct=i&&i.progress()),Te&&[Te,Ye,T,E].forEach(function(zt){return zt.style.display=Ie?"none":"block"}),Ie&&(gn=C,C.update(Ie)),d&&(!A||!C.isActive)&&(Ie?ay(d,de,Q):bu(d,de,hi(d),Le)),Ie||C.update(Ie),gn=ze,C.isReverted=Ie)},C.refresh=function(ce,He,Ie,ze){if(!((gn||!C.enabled)&&!He)){if(d&&ce&&pi){sn(r,"scrollEnd",D_);return}!Cn&&se&&se(C),gn=C,be.tween&&!Ie&&(be.tween.kill(),be.tween=0),J&&J.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(si){return si.vars.immediateRender&&si.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var zt=_e(),Ke=Ge(),Rt=b?b.duration():Fi(I,x),Kt=$<=.01||!$,Ct=0,Et=ze||0,pt=ds(Ie)?Ie.end:n.end,R=n.endTrigger||f,F=ds(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),G=C.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,C),W=f&&Math.max(0,et.indexOf(C))||0,V=W,re,fe,Ae,Be,Ee,Se,Fe,At,fn,Pt,Wt,mt,We;for(k&&ds(Ie)&&(mt=ge.getProperty(T,x.p),We=ge.getProperty(E,x.p));V-- >0;)Se=et[V],Se.end||Se.refresh(0,1)||(gn=C),Fe=Se.pin,Fe&&(Fe===f||Fe===d||Fe===G)&&!Se.isReverted&&(Pt||(Pt=[]),Pt.unshift(Se),Se.revert(!0,!0)),Se!==et[V]&&(W--,V--);for(yn(F)&&(F=F(C)),F=Ud(F,"start",C),ae=Wd(F,f,zt,x,ie(),Te,T,C,Ke,Y,H,Rt,b,C._startClamp&&"_startClamp")||(d?-.001:0),yn(pt)&&(pt=pt(C)),jn(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(jn(F)?F.split(" ")[0]:"")+pt:(Ct=fc(pt.substr(2),zt),pt=jn(F)?F:(b?ge.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ae):ae)+Ct,R=f)),pt=Ud(pt,"end",C),qe=Math.max(ae,Wd(pt||(R?"100% 0":Rt),R,zt,x,ie()+Ct,Ye,E,C,Ke,Y,H,Rt,b,C._endClamp&&"_endClamp"))||-.001,Ct=0,V=W;V--;)Se=et[V]||{},Fe=Se.pin,Fe&&Se.start-Se._pinPush<=ae&&!b&&Se.end>0&&(re=Se.end-(C._startClamp?Math.max(0,Se.start):Se.start),(Fe===f&&Se.start-Se._pinPush<ae||Fe===G)&&isNaN(F)&&(Ct+=re*(1-Se.progress)),Fe===d&&(Et+=re));if(ae+=Ct,qe+=Ct,C._startClamp&&(C._startClamp+=Ct),C._endClamp&&!Cn&&(C._endClamp=qe||-.001,qe=Math.min(qe,Fi(I,x))),$=qe-ae||(ae-=.01)&&.001,Kt&&(le=ge.utils.clamp(0,1,ge.utils.normalize(ae,qe,it))),C._pinPush=Et,Te&&Ct&&(re={},re[x.a]="+="+Ct,G&&(re[x.p]="-="+ie()),ge.set([Te,Ye],re)),d&&!(Vh&&C.end>=Fi(I,x)))re=hi(d),Be=x===Zt,Ae=ie(),Pe=parseFloat(te(x.a))+Et,!Rt&&qe>1&&(Wt=(O?bt.scrollingElement||$n:I).style,Wt={style:Wt,value:Wt["overflow"+x.a.toUpperCase()]},O&&hi(dt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Wt.style["overflow"+x.a.toUpperCase()]="scroll")),bu(d,de,re),ne=Ll(d),fe=or(d,!0),At=H&&Zr(I,Be?Dn:Zt)(),_?(Le=[_+x.os2,$+Et+$t],Le.t=de,V=_===qt?Fc(d,x)+$+Et:0,V&&(Le.push(x.d,V+$t),de.style.flexBasis!=="auto"&&(de.style.flexBasis=V+$t)),bo(Le),G&&et.forEach(function(si){si.pin===G&&si.vars.pinSpacing!==!1&&(si._subPinOffset=!0)}),H&&ie(it)):(V=Fc(d,x),V&&de.style.flexBasis!=="auto"&&(de.style.flexBasis=V+$t)),H&&(Ee={top:fe.top+(Be?Ae-ae:At)+$t,left:fe.left+(Be?At:Ae-ae)+$t,boxSizing:"border-box",position:"fixed"},Ee[Is]=Ee["max"+Fo]=Math.ceil(fe.width)+$t,Ee[Ds]=Ee["max"+Nf]=Math.ceil(fe.height)+$t,Ee[ui]=Ee[ui+Oa]=Ee[ui+Na]=Ee[ui+Fa]=Ee[ui+Ua]="0",Ee[qt]=re[qt],Ee[qt+Oa]=re[qt+Oa],Ee[qt+Na]=re[qt+Na],Ee[qt+Fa]=re[qt+Fa],Ee[qt+Ua]=re[qt+Ua],we=cy(Q,Ee,A),Cn&&ie(0)),i?(fn=i._initted,yu(1),i.render(i.duration(),!0,!0),pe=te(x.a)-Pe+$+Et,Je=Math.abs($-pe)>1,H&&Je&&we.splice(we.length-2,2),i.render(0,!0,!0),fn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),yu(0)):pe=$,Wt&&(Wt.value?Wt.style["overflow"+x.a.toUpperCase()]=Wt.value:Wt.style.removeProperty("overflow-"+x.a));else if(f&&ie()&&!b)for(fe=f.parentNode;fe&&fe!==dt;)fe._pinOffset&&(ae-=fe._pinOffset,qe-=fe._pinOffset),fe=fe.parentNode;Pt&&Pt.forEach(function(si){return si.revert(!1,!0)}),C.start=ae,C.end=qe,z=Oe=Cn?it:ie(),!b&&!Cn&&(z<it&&ie(it),C.scroll.rec=0),C.revert(!1,!0),ee=_n(),ye&&(X=-1,ye.restart(!0)),gn=0,i&&U&&(i._initted||ct)&&i.progress()!==ct&&i.progress(ct||0,!0).render(i.time(),!0,!0),(Kt||le!==C.progress||b||g||i&&!i._initted)&&(i&&!U&&(i._initted||le||i.vars.immediateRender!==!1)&&i.totalProgress(b&&ae<-.001&&!le?ge.utils.normalize(ae,qe,0):le,!0),C.progress=Kt||(z-ae)/$===le?0:le),d&&_&&(de._pinOffset=Math.round(C.progress*pe)),J&&J.invalidate(),isNaN(mt)||(mt-=ge.getProperty(T,x.p),We-=ge.getProperty(E,x.p),Il(T,x,mt),Il(Te,x,mt-(ze||0)),Il(E,x,We),Il(Ye,x,We-(ze||0))),Kt&&!Cn&&C.update(),u&&!Cn&&!Z&&(Z=!0,u(C),Z=!1)}},C.getVelocity=function(){return(ie()-Oe)/(_n()-ga)*1e3||0},C.endAnimation=function(){ra(C.callbackAnimation),i&&(J?J.progress(1):i.paused()?U||ra(i,C.direction<0,1):ra(i,i.reversed()))},C.labelToScroll=function(ce){return i&&i.labels&&(ae||C.refresh()||ae)+i.labels[ce]/i.duration()*$||0},C.getTrailing=function(ce){var He=et.indexOf(C),Ie=C.direction>0?et.slice(0,He).reverse():et.slice(He+1);return(jn(ce)?Ie.filter(function(ze){return ze.vars.preventOverlaps===ce}):Ie).filter(function(ze){return C.direction>0?ze.end<=ae:ze.start>=qe})},C.update=function(ce,He,Ie){if(!(b&&!Ie&&!ce)){var ze=Cn===!0?it:C.scroll(),zt=ce?0:(ze-ae)/$,Ke=zt<0?0:zt>1?1:zt||0,Rt=C.progress,Kt,Ct,Et,pt,R,F,G,W;if(He&&(Oe=z,z=b?ie():ze,M&&(D=ve,ve=i&&!U?i.totalProgress():Ke)),p&&d&&!gn&&!bl&&pi&&(!Ke&&ae<ze+(ze-Oe)/(_n()-ga)*p?Ke=1e-4:Ke===1&&qe>ze+(ze-Oe)/(_n()-ga)*p&&(Ke=.9999)),Ke!==Rt&&C.enabled){if(Kt=C.isActive=!!Ke&&Ke<1,Ct=!!Rt&&Rt<1,F=Kt!==Ct,R=F||!!Ke!=!!Rt,C.direction=Ke>Rt?1:-1,C.progress=Ke,R&&!gn&&(Et=Ke&&!Rt?0:Ke===1?1:Rt===1?2:3,U&&(pt=!F&&K[Et+1]!=="none"&&K[Et+1]||K[Et],W=i&&(pt==="complete"||pt==="reset"||pt in i))),y&&(F||W)&&(W||h||!i)&&(yn(y)?y(C):C.getTrailing(y).forEach(function(Ae){return Ae.endAnimation()})),U||(J&&!gn&&!bl?(J._dp._time-J._start!==J._time&&J.render(J._dp._time-J._start),J.resetTo?J.resetTo("totalProgress",Ke,i._tTime/i._tDur):(J.vars.totalProgress=Ke,J.invalidate().restart())):i&&i.totalProgress(Ke,!!(gn&&(ee||ce)))),d){if(ce&&_&&(de.style[_+x.os2]=xe),!H)he(va(Pe+pe*Ke));else if(R){if(G=!ce&&Ke>Rt&&qe+1>ze&&ze+1>=Fi(I,x),A)if(!ce&&(Kt||G)){var V=or(d,!0),re=ze-ae;Xd(d,dt,V.top+(x===Zt?re:0)+$t,V.left+(x===Zt?0:re)+$t)}else Xd(d,de);bo(Kt||G?we:ne),Je&&Ke<1&&Kt||he(Pe+(Ke===1&&!G?pe:0))}}M&&!be.tween&&!gn&&!bl&&ye.restart(!0),a&&(F||v&&Ke&&(Ke<1||!Su))&&il(a.targets).forEach(function(Ae){return Ae.classList[Kt||v?"add":"remove"](a.className)}),o&&!U&&!ce&&o(C),R&&!gn?(U&&(W&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(C)),(F||!Su)&&(c&&F&&Tu(C,c),q[Et]&&Tu(C,q[Et]),v&&(Ke===1?C.kill(!1,1):q[Et]=0),F||(Et=Ke===1?1:3,q[Et]&&Tu(C,q[Et]))),P&&!Kt&&Math.abs(C.getVelocity())>(xa(P)?P:2500)&&(ra(C.callbackAnimation),J?J.progress(1):ra(i,pt==="reverse"?1:!Ke,1))):U&&o&&!gn&&o(C)}if(ot){var fe=b?ze/b.duration()*(b._caScrollDist||0):ze;nt(fe+(T._isFlipped?1:0)),ot(fe)}ft&&ft(-ze/b.duration()*(b._caScrollDist||0))}},C.enable=function(ce,He){C.enabled||(C.enabled=!0,sn(I,"resize",ya),O||sn(I,"scroll",qs),se&&sn(r,"refreshInit",se),ce!==!1&&(C.progress=le=0,z=Oe=X=ie()),He!==!1&&C.refresh())},C.getTween=function(ce){return ce&&be?be.tween:J},C.setPositions=function(ce,He,Ie,ze){if(b){var zt=b.scrollTrigger,Ke=b.duration(),Rt=zt.end-zt.start;ce=zt.start+Rt*ce/Ke,He=zt.start+Rt*He/Ke}C.refresh(!1,!1,{start:Od(ce,Ie&&!!C._startClamp),end:Od(He,Ie&&!!C._endClamp)},ze),C.update()},C.adjustPinSpacing=function(ce){if(Le&&ce){var He=Le.indexOf(x.d)+1;Le[He]=parseFloat(Le[He])+ce+$t,Le[1]=parseFloat(Le[1])+ce+$t,bo(Le)}},C.disable=function(ce,He){if(ce!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,He||J&&J.pause(),it=0,Re&&(Re.uncache=1),se&&rn(r,"refreshInit",se),ye&&(ye.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!O)){for(var Ie=et.length;Ie--;)if(et[Ie].scroller===I&&et[Ie]!==C)return;rn(I,"resize",ya),O||rn(I,"scroll",qs)}},C.kill=function(ce,He){C.disable(ce,He),J&&!He&&J.kill(),l&&delete Gh[l];var Ie=et.indexOf(C);Ie>=0&&et.splice(Ie,1),Ie===Rn&&pc>0&&Rn--,Ie=0,et.forEach(function(ze){return ze.scroller===C.scroller&&(Ie=1)}),Ie||Cn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ce&&i.revert({kill:!1}),He||i.kill()),Te&&[Te,Ye,T,E].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Ba===C&&(Ba=0),d&&(Re&&(Re.uncache=1),Ie=0,et.forEach(function(ze){return ze.pin===d&&Ie++}),Ie||(Re.spacer=0)),n.onKill&&n.onKill(C)},et.push(C),C.enable(!1,!1),Tt&&Tt(C),i&&i.add&&!$){var Qe=C.update;C.update=function(){C.update=Qe,st.cache++,ae||qe||C.refresh()},ge.delayedCall(.01,C.update),$=.01,ae=qe=0}else C.refresh();d&&oy()},r.register=function(n){return ho||(ge=n||A_(),w_()&&window.document&&r.enable(),ho=_a),ho},r.defaults=function(n){if(n)for(var i in n)Cl[i]=n[i];return Cl},r.disable=function(n,i){_a=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(rt,"wheel",qs),rn(bt,"scroll",qs),clearInterval(El),rn(bt,"touchcancel",Ri),rn(dt,"touchstart",Ri),Al(rn,bt,"pointerdown,touchstart,mousedown",Fd),Al(rn,bt,"pointerup,touchend,mouseup",Bd),Oc.kill(),wl(rn);for(var s=0;s<st.length;s+=3)Rl(rn,st[s],st[s+1]),Rl(rn,st[s],st[s+2])},r.enable=function(){if(rt=window,bt=document,$n=bt.documentElement,dt=bt.body,ge&&(il=ge.utils.toArray,Ia=ge.utils.clamp,Hh=ge.core.context||Ri,yu=ge.core.suppressOverwrites||Ri,Pf=rt.history.scrollRestoration||"auto",Wh=rt.pageYOffset||0,ge.core.globals("ScrollTrigger",r),dt)){_a=1,Eo=document.createElement("div"),Eo.style.height="100vh",Eo.style.position="absolute",F_(),Qx(),Gt.register(ge),r.isTouch=Gt.isTouch,br=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),zh=Gt.isTouch===1,sn(rt,"wheel",qs),Cf=[rt,bt,$n,dt],ge.matchMedia?(r.matchMedia=function(c){var u=ge.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ge.addEventListener("matchMediaInit",function(){U_(),Of()}),ge.addEventListener("matchMediaRevert",function(){return N_()}),ge.addEventListener("matchMedia",function(){Ss(0,1),Fs("matchMedia")}),ge.matchMedia().add("(orientation: portrait)",function(){return Eu(),Eu})):console.warn("Requires GSAP 3.11.0 or later"),Eu(),sn(bt,"scroll",qs);var n=dt.hasAttribute("style"),i=dt.style,s=i.borderTopStyle,o=ge.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=or(dt),Zt.m=Math.round(a.top+Zt.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(dt.setAttribute("style",""),dt.removeAttribute("style")),El=setInterval(Hd,250),ge.delayedCall(.5,function(){return bl=0}),sn(bt,"touchcancel",Ri),sn(dt,"touchstart",Ri),Al(sn,bt,"pointerdown,touchstart,mousedown",Fd),Al(sn,bt,"pointerup,touchend,mouseup",Bd),kh=ge.utils.checkPrefix("transform"),mc.push(kh),ho=_n(),Oc=ge.delayedCall(.2,Ss).pause(),fo=[bt,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;bt.hidden?(Dd=c,Nd=u):(Dd!==c||Nd!==u)&&ya()},bt,"DOMContentLoaded",Ss,rt,"load",Ss,rt,"resize",ya],wl(sn),et.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)Rl(rn,st[l],st[l+1]),Rl(rn,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Su=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(El)||(El=i)&&setInterval(Hd,i),"ignoreMobileResize"in n&&(zh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wl(rn)||wl(sn,n.autoRefreshEvents||"none"),T_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),o=st.indexOf(s),a=Us(s);~o&&st.splice(o,a?6:2),i&&(a?Vi.unshift(rt,i,dt,i,$n,i):Vi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(jn(n)?Un(n):n).getBoundingClientRect(),a=o[s?Is:Ds]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){jn(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[s?Is:Ds],l=i==null?a/2:i in Bc?Bc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Os.killAll||[];Os={},i.forEach(function(s){return s()})}},r})();tt.version="3.14.2";tt.saveStyles=function(r){return r?il(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ge.core.getCache(e),Hh())}}):Yn};tt.revert=function(r,e){return Of(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?ya(!0):(ho||tt.register())&&Ss(!0)};tt.update=function(r){return++st.cache&&hr(r===!0?2:0)};tt.clearScrollMemory=O_;tt.maxScroll=function(r,e){return Fi(r,e?Dn:Zt)};tt.getScrollFunc=function(r,e){return Zr(Un(r),e?Dn:Zt)};tt.getById=function(r){return Gh[r]};tt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!pi};tt.snapDirectional=Uf;tt.addEventListener=function(r,e){var t=Os[r]||(Os[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Os[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=ge.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),sn(tt,"refresh",function(){return s=e.batchMax()})),il(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var Yd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},wu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===$n&&r(dt,t)},Dl={auto:1,scroll:1},hy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ge.core.getCache(s),a=_n(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==dt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Dl[(l=hi(s)).overflowY]||Dl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Us(s)&&(Dl[(l=hi(s)).overflowY]||Dl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},k_=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&hy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(bt,Gt.eventTypes[0],Kd,!1,!0)},onDisable:function(){return rn(bt,Gt.eventTypes[0],Kd,!0)}})},fy=/(input|label|select|textarea)/i,jd,Kd=function(e){var t=fy.test(e.target.tagName);(t||jd)&&(e._gsapAllow=!0,jd=t)},dy=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Un(e.target)||$n,u=ge.core.globals().ScrollSmoother,h=u&&u.get(),f=br&&(e.content&&Un(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Zr(c,Zt),_=Zr(c,Dn),g=1,p=(Gt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,m=0,S=yn(i)?function(){return i(a)}:function(){return i||2.8},v,M,A=k_(c,e.type,!0,s),w=function(){return M=!1},b=Ri,P=Ri,y=function(){l=Fi(c,Zt),P=Ia(br?1:0,l),n&&(b=Ia(0,Fi(c,Dn))),v=Ns},x=function(){f._gsap.y=va(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},U=function(){if(M){requestAnimationFrame(w);var k=va(a.deltaY/2),Y=P(d.v-k);if(f&&Y!==d.v+d.offset){d.offset=Y-d.v;var C=va((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=st.cache,hr()}return!0}d.offset&&x(),M=!0},I,L,O,H,q=function(){y(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return f&&ge.set(f,{y:"+=0"}),e.ignoreCheck=function(K){return br&&K.type==="touchmove"&&U()||g>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){M=!1;var K=g;g=va((rt.visualViewport&&rt.visualViewport.scale||1)/p),I.pause(),K!==g&&wu(c,g>1.01?!0:n?!1:"x"),L=_(),O=d(),y(),v=Ns},e.onRelease=e.onGestureStart=function(K,k){if(d.offset&&x(),!k)H.restart(!0);else{st.cache++;var Y=S(),C,se;n&&(C=_(),se=C+Y*.05*-K.velocityX/.227,Y*=Yd(_,C,se,Fi(c,Dn)),I.vars.scrollX=b(se)),C=d(),se=C+Y*.05*-K.velocityY/.227,Y*=Yd(d,C,se,Fi(c,Zt)),I.vars.scrollY=P(se),I.invalidate().duration(Y).play(.01),(br&&I.vars.scrollY>=l||C>=l-1)&&ge.to({},{onUpdate:q,duration:Y})}o&&o(K)},e.onWheel=function(){I._ts&&I.pause(),_n()-m>1e3&&(v=0,m=_n())},e.onChange=function(K,k,Y,C,se){if(Ns!==v&&y(),k&&n&&_(b(C[2]===k?L+(K.startX-K.x):_()+k-C[1])),Y){d.offset&&x();var _e=se[2]===Y,Ge=_e?O+K.startY-K.y:d()+Y-se[1],X=P(Ge);_e&&Ge!==X&&(O+=X-Ge),d(X)}(Y||k)&&hr()},e.onEnable=function(){wu(c,n?!1:"x"),tt.addEventListener("refresh",q),sn(rt,"resize",q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){wu(c,!0),rn(rt,"resize",q),tt.removeEventListener("refresh",q),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=br,br&&!d()&&d(1),br&&ge.ticker.add(Ri),H=a._dc,I=ge.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:B_(d,d(),function(){return I.pause()})},onUpdate:hr,onComplete:H.vars.onComplete}),a};tt.sort=function(r){if(yn(r))return et.sort(r);var e=rt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Gt(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return An;if(r===!0&&An)return An.enable();if(r===!1){An&&An.kill(),An=r;return}var e=r instanceof Gt?r:dy(r);return An&&An.target===e.target&&An.kill(),Us(e.target)&&(An=e),e};tt.core={_getVelocityProp:Bh,_inputObserver:k_,_scrollers:st,_proxies:Vi,bridge:{ss:function(){pi||Fs("scrollStart"),pi=_n()},ref:function(){return gn}}};A_()&&ge.registerPlugin(tt);const sl=new jx({lerp:.12,duration:1.2,smoothWheel:!0,touchMultiplier:1,wheelMultiplier:.8});Ne.ticker.add(r=>{sl.raf(r*1e3)});Ne.ticker.lagSmoothing(500,33);Ne.registerPlugin($r);let kc=!1,Bi=!1,Zn=null,$d=!1;const Au=new Map;function py(r){if(Au.has(r))return Au.get(r);const e=new $r(r,{type:"lines, words, chars"});return e.lines&&e.lines.forEach(t=>{t.style.overflow="hidden"}),Au.set(r,e),e}function my(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Bi=!0,r.forEach(i=>{i.style.pointerEvents="all"}),Zn&&(Zn.style.pointerEvents="all"),Ne.to(Zn,{autoAlpha:1,duration:.3}),e&&e.classList.add("menu-open"),sl&&sl.stop(),r.length?Ne.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.3,onComplete:()=>{Bi=!1}}):Bi=!1,t.forEach(i=>{Ne.set(i,{opacity:1,transform:"translateY(0%)"})});function n(){document.querySelectorAll(".menu-item").forEach((s,o)=>{const a=py(s);Ne.fromTo(a.chars,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",delay:o*.1})})}n(),kc=!0}function Zd(){const r=document.querySelectorAll(".menu-box"),e=document.querySelector(".menu-toggle-btn"),t=document.querySelectorAll(".menu-item");Bi=!0,r.forEach(n=>{n.style.pointerEvents="none"}),Zn&&(Zn.style.pointerEvents="none"),e&&e.classList.remove("menu-open"),sl&&sl.start(),r.length?Ne.to(r,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.3,onComplete:()=>{Ne.set(t,{opacity:0,transform:"translateY(100%)"}),Zn?Ne.to(Zn,{autoAlpha:0,duration:.25,onComplete:()=>{Bi=!1}}):Bi=!1}}):Bi=!1,kc=!1}function gy(){if($d)return;$d=!0;const r=document.querySelector(".menu-toggle-btn"),e=document.querySelectorAll(".menu-box"),t=document.querySelectorAll(".menu-item");Zn=document.querySelector(".menu-wrap"),Zn&&(Zn.style.pointerEvents="none",Ne.set(Zn,{autoAlpha:0}),Zn.addEventListener("click",n=>{n.target===Zn&&kc&&!Bi&&Zd()})),r&&r.addEventListener("click",n=>{n.preventDefault(),Bi&&(Ne.killTweensOf([...e,...t]),Bi=!1),kc?Zd():my()})}const eu="163",_y=0,Jd=1,vy=2,xy=0,z_=1,H_=2,nr=3,Wi=0,Hn=1,Di=2,fr=0,wo=1,ol=2,Qd=3,ep=4,yy=5,gs=100,Sy=101,My=102,Ty=103,Ey=104,by=200,wy=201,Ay=202,Ry=203,qh=204,Yh=205,Cy=206,Py=207,Ly=208,Iy=209,Dy=210,Ny=211,Uy=212,Oy=213,Fy=214,By=0,ky=1,zy=2,zc=3,Hy=4,Vy=5,Gy=6,Wy=7,V_=0,Xy=1,qy=2,Wr=0,G_=1,W_=2,X_=3,Ff=4,Yy=5,q_=6,Y_=7,tp="attached",jy="detached",j_=300,Bo=301,ko=302,jh=303,Kh=304,tu=306,zo=1e3,ki=1001,Hc=1002,Nn=1003,K_=1004,Sa=1005,cn=1006,_c=1007,yi=1008,Xr=1009,Ky=1010,$y=1011,$_=1012,Z_=1013,Ho=1014,zi=1015,qr=1016,J_=1017,Q_=1018,gl=1020,Zy=35902,Jy=1021,Qy=1022,Si=1023,eS=1024,tS=1025,Ao=1026,al=1027,e0=1028,t0=1029,nS=1030,n0=1031,i0=1033,Ru=33776,Cu=33777,Pu=33778,Lu=33779,np=35840,ip=35841,rp=35842,sp=35843,r0=36196,op=37492,ap=37496,lp=37808,cp=37809,up=37810,hp=37811,fp=37812,dp=37813,pp=37814,mp=37815,gp=37816,_p=37817,vp=37818,xp=37819,yp=37820,Sp=37821,Iu=36492,Mp=36494,Tp=36495,iS=36283,Ep=36284,bp=36285,wp=36286,ll=2300,Vo=2301,Du=2302,Ap=2400,Rp=2401,Cp=2402,rS=2500,sS=0,s0=1,$h=2,oS=3200,aS=3201,o0=0,lS=1,Pr="",On="srgb",Qr="srgb-linear",Bf="display-p3",nu="display-p3-linear",Vc="linear",wt="srgb",Gc="rec709",Wc="p3",Ys=7680,Pp=519,cS=512,uS=513,hS=514,a0=515,fS=516,dS=517,pS=518,mS=519,Zh=35044,Lp="300 es",ur=2e3,Xc=2001;class jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ip=1234567;const ka=Math.PI/180,Go=180/Math.PI;function Mi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ln(r,e,t){return Math.max(e,Math.min(t,r))}function kf(r,e){return(r%e+e)%e}function gS(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function _S(r,e,t){return r!==e?(t-r)/(e-r):0}function za(r,e,t){return(1-t)*r+t*e}function vS(r,e,t,n){return za(r,e,1-Math.exp(-t*n))}function xS(r,e=1){return e-Math.abs(kf(r,e*2)-e)}function yS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function SS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function MS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function TS(r,e){return r+Math.random()*(e-r)}function ES(r){return r*(.5-Math.random())}function bS(r){r!==void 0&&(Ip=r);let e=Ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wS(r){return r*ka}function AS(r){return r*Go}function RS(r){return(r&r-1)===0&&r!==0}function CS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function PS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function LS(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vc={DEG2RAD:ka,RAD2DEG:Go,generateUUID:Mi,clamp:ln,euclideanModulo:kf,mapLinear:gS,inverseLerp:_S,lerp:za,damp:vS,pingpong:xS,smoothstep:yS,smootherstep:SS,randInt:MS,randFloat:TS,randFloatSpread:ES,seededRandom:bS,degToRad:wS,radToDeg:AS,isPowerOfTwo:RS,ceilPowerOfTwo:CS,floorPowerOfTwo:PS,setQuaternionFromProperEuler:LS,normalize:_t,denormalize:xi};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],v=i[4],M=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*g+a*S+l*A,s[3]=o*p+a*v+l*w,s[6]=o*m+a*M+l*b,s[1]=c*g+u*S+h*A,s[4]=c*p+u*v+h*w,s[7]=c*m+u*M+h*b,s[2]=f*g+d*S+_*A,s[5]=f*p+d*v+_*w,s[8]=f*m+d*M+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nu.makeScale(e,t)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new Ze;function l0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IS(){const r=cl("canvas");return r.style.display="block",r}const Dp={};function c0(r){r in Dp||(Dp[r]=!0,console.warn(r))}const Np=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Up=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nl={[Qr]:{transfer:Vc,primaries:Gc,toReference:r=>r,fromReference:r=>r},[On]:{transfer:wt,primaries:Gc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[nu]:{transfer:Vc,primaries:Wc,toReference:r=>r.applyMatrix3(Up),fromReference:r=>r.applyMatrix3(Np)},[Bf]:{transfer:wt,primaries:Wc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Up),fromReference:r=>r.applyMatrix3(Np).convertLinearToSRGB()}},DS=new Set([Qr,nu]),xt={enabled:!0,_workingColorSpace:Qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!DS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Nl[e].toReference,i=Nl[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Nl[r].primaries},getTransfer:function(r){return r===Pr?Vc:Nl[r].transfer}};function Ro(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Uu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let js;class NS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=cl("canvas")),js.width=e.width,js.height=e.height;const n=js.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ro(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ro(t[n]/255)*255):t[n]=Ro(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class u0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ou(i[o].image)):s.push(Ou(i[o]))}else s=Ou(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ou(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class Jt extends jo{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=ki,i=ki,s=cn,o=yi,a=Si,l=Xr,c=Jt.DEFAULT_ANISOTROPY,u=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Mi(),this.name="",this.source=new u0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zo:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zo:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=j_;Jt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(d+1)/2,A=(m+1)/2,w=(u+f)/4,b=(h+g)/4,P=(_+p)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=b/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=P/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FS extends jo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new u0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends FS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class h0 extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BS extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-a;const m=l*f+c*d+u*_+h*g,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,m*S);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const M=a*S;if(l=l*p+f*M,c=c*p+d*M,u=u*p+_*M,h=h*p+g*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new B,Op=new es;class qi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ol.subVectors(this.max,sa),Ks.subVectors(e.a,sa),$s.subVectors(e.b,sa),Zs.subVectors(e.c,sa),vr.subVectors($s,Ks),xr.subVectors(Zs,$s),rs.subVectors(Ks,Zs);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-rs.z,rs.y,vr.z,0,-vr.x,xr.z,0,-xr.x,rs.z,0,-rs.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-rs.y,rs.x,0];return!Bu(t,Ks,$s,Zs,Ol)||(t=[1,0,0,0,1,0,0,0,1],!Bu(t,Ks,$s,Zs,Ol))?!1:(Fl.crossVectors(vr,xr),t=[Fl.x,Fl.y,Fl.z],Bu(t,Ks,$s,Zs,Ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new B,new B,new B,new B,new B,new B,new B,new B],mi=new B,Ul=new qi,Ks=new B,$s=new B,Zs=new B,vr=new B,xr=new B,rs=new B,sa=new B,Ol=new B,Fl=new B,ss=new B;function Bu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ss.fromArray(r,s);const a=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),u=n.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kS=new qi,oa=new B,ku=new B;class Yi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(ku)),this.expandByPoint(oa.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new B,zu=new B,Bl=new B,yr=new B,Hu=new B,kl=new B,Vu=new B;class _l{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zu.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(zu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bl),a=yr.dot(this.direction),l=-yr.dot(Bl),c=yr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(zu).addScaledVector(Bl,f),d}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const n=$i.dot(this.direction),i=$i.dot($i)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,i,s){Hu.subVectors(t,e),kl.subVectors(n,e),Vu.crossVectors(Hu,kl);let o=this.direction.dot(Vu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);const l=a*this.direction.dot(kl.crossVectors(yr,kl));if(l<0)return null;const c=a*this.direction.dot(Hu.cross(yr));if(c<0||l+c>o)return null;const u=-a*yr.dot(Vu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Js.setFromMatrixColumn(e,0).length(),s=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,HS)}lookAt(e,t,n){const i=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Sr.crossVectors(n,Wn),Sr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Sr.crossVectors(n,Wn)),Sr.normalize(),zl.crossVectors(Wn,Sr),i[0]=Sr.x,i[4]=zl.x,i[8]=Wn.x,i[1]=Sr.y,i[5]=zl.y,i[9]=Wn.y,i[2]=Sr.z,i[6]=zl.z,i[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],v=n[7],M=n[11],A=n[15],w=i[0],b=i[4],P=i[8],y=i[12],x=i[1],U=i[5],I=i[9],L=i[13],O=i[2],H=i[6],q=i[10],K=i[14],k=i[3],Y=i[7],C=i[11],se=i[15];return s[0]=o*w+a*x+l*O+c*k,s[4]=o*b+a*U+l*H+c*Y,s[8]=o*P+a*I+l*q+c*C,s[12]=o*y+a*L+l*K+c*se,s[1]=u*w+h*x+f*O+d*k,s[5]=u*b+h*U+f*H+d*Y,s[9]=u*P+h*I+f*q+d*C,s[13]=u*y+h*L+f*K+d*se,s[2]=_*w+g*x+p*O+m*k,s[6]=_*b+g*U+p*H+m*Y,s[10]=_*P+g*I+p*q+m*C,s[14]=_*y+g*L+p*K+m*se,s[3]=S*w+v*x+M*O+A*k,s[7]=S*b+v*U+M*H+A*Y,s[11]=S*P+v*I+M*q+A*C,s[15]=S*y+v*L+M*K+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=h*p*c-g*f*c+g*l*d-a*p*d-h*l*m+a*f*m,v=_*f*c-u*p*c-_*l*d+o*p*d+u*l*m-o*f*m,M=u*g*c-_*h*c+_*a*d-o*g*d-u*a*m+o*h*m,A=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,w=t*S+n*v+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(g*f*s-h*p*s-g*i*d+n*p*d+h*i*m-n*f*m)*b,e[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*b,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=v*b,e[5]=(u*p*s-_*f*s+_*i*d-t*p*d-u*i*m+t*f*m)*b,e[6]=(_*l*s-o*p*s-_*i*c+t*p*c+o*i*m-t*l*m)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=M*b,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*m-t*h*m)*b,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*m+t*a*m)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=A*b,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*b,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,S=l*c,v=l*u,M=l*h,A=n.x,w=n.y,b=n.z;return i[0]=(1-(g+m))*A,i[1]=(d+M)*A,i[2]=(_-v)*A,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(f+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(_+v)*b,i[9]=(p-S)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Js.set(i[0],i[1],i[2]).length();const o=Js.set(i[4],i[5],i[6]).length(),a=Js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],gi.copy(this);const c=1/s,u=1/o,h=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ur){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===ur)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xc)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ur){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===ur)_=(o+s)*h,g=-2*h;else if(a===Xc)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Js=new B,gi=new je,zS=new B(0,0,0),HS=new B(1,1,1),Sr=new B,zl=new B,Wn=new B,Fp=new je,Bp=new es;class Xi{constructor(e=0,t=0,n=0,i=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VS=0;const kp=new B,Qs=new es,Zi=new je,Hl=new B,aa=new B,GS=new B,WS=new es,zp=new B(1,0,0),Hp=new B(0,1,0),Vp=new B(0,0,1),Gp={type:"added"},XS={type:"removed"},eo={type:"childadded",child:null},Gu={type:"childremoved",child:null};class Bt extends jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new B,t=new Xi,n=new es,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(zp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,t){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hl.copy(e):Hl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(aa,Hl,this.up):Zi.lookAt(Hl,aa,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(Zi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XS),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new B(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new B,Ji=new B,Wu=new B,Qi=new B,to=new B,no=new B,Wp=new B,Xu=new B,qu=new B,Yu=new B;class Ni{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_i.subVectors(e,t),i.cross(_i);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_i.subVectors(i,t),Ji.subVectors(n,t),Wu.subVectors(e,t);const o=_i.dot(_i),a=_i.dot(Ji),l=_i.dot(Wu),c=Ji.dot(Ji),u=Ji.dot(Wu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static isFrontFacing(e,t,n,i){return _i.subVectors(n,t),Ji.subVectors(e,t),_i.cross(Ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),_i.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;to.subVectors(i,n),no.subVectors(s,n),Xu.subVectors(e,n);const l=to.dot(Xu),c=no.dot(Xu);if(l<=0&&c<=0)return t.copy(n);qu.subVectors(e,i);const u=to.dot(qu),h=no.dot(qu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(to,o);Yu.subVectors(e,s);const d=to.dot(Yu),_=no.dot(Yu);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(no,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Wp.subVectors(s,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Wp,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(n).addScaledVector(to,o).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function ju(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=kf(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ju(o,s,e+1/3),this.g=ju(o,s,e),this.b=ju(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const n=f0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}copyLinearToSRGB(e){return this.r=Uu(e.r),this.g=Uu(e.g),this.b=Uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return xt.fromWorkingColorSpace(mn.copy(this),e),Math.round(ln(mn.r*255,0,255))*65536+Math.round(ln(mn.g*255,0,255))*256+Math.round(ln(mn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=On){xt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Vl);const n=za(Mr.h,Vl.h,t),i=za(Mr.s,Vl.s,t),s=za(Mr.l,Vl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ke;ke.NAMES=f0;let qS=0;class Ei extends jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=wo,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qh&&(n.blendSrc=this.blendSrc),this.blendDst!==Yh&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Br extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ar=YS();function YS(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function jS(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ln(r,-65504,65504),ar.floatView[0]=r;const e=ar.uint32View[0],t=e>>23&511;return ar.baseTable[t]+((e&8388607)>>ar.shiftTable[t])}function KS(r){const e=r>>10;return ar.uint32View[0]=ar.mantissaTable[ar.offsetTable[e]+(r&1023)]+ar.exponentTable[e],ar.floatView[0]}const LR={toHalfFloat:jS,fromHalfFloat:KS},Xt=new B,Gl=new Ue;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return c0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}}class d0 extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class p0 extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bi extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $S=0;const ai=new je,Ku=new Bt,io=new B,Xn=new qi,la=new qi,tn=new B;class Gn extends jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?p0:d0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];la.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Xn.min,la.min),Xn.expandByPoint(tn),tn.addVectors(Xn.max,la.max),Xn.expandByPoint(tn)):(Xn.expandByPoint(la.min),Xn.expandByPoint(la.max))}Xn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(e,c),tn.add(io)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;const c=new B,u=new B,h=new B,f=new Ue,d=new Ue,_=new Ue,g=new B,p=new B;function m(P,y,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const U=1/(d.x*_.y-_.x*d.y);isFinite(U)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(U),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(U),a[P].add(g),a[y].add(g),a[x].add(g),l[P].add(p),l[y].add(p),l[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,y=S.length;P<y;++P){const x=S[P],U=x.start,I=x.count;for(let L=U,O=U+I;L<O;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new B,M=new B,A=new B,w=new B;function b(P){A.fromBufferAttribute(i,P),w.copy(A);const y=a[P];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(w,y);const U=M.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,U)}for(let P=0,y=S.length;P<y;++P){const x=S[P],U=x.start,I=x.count;for(let L=U,O=U+I;L<O;L+=3)b(e.getX(L+0)),b(e.getX(L+1)),b(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new Dt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new je,os=new _l,Wl=new Yi,qp=new B,ro=new B,so=new B,oo=new B,$u=new B,Xl=new B,ql=new Ue,Yl=new Ue,jl=new Ue,Yp=new B,jp=new B,Kp=new B,Kl=new B,$l=new B;class Sn extends Bt{constructor(e=new Gn,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&($u.fromBufferAttribute(h,e),o?Xl.addScaledVector($u,u):Xl.addScaledVector($u.sub(t),u))}t.add(Xl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(Wl.containsPoint(os.origin)===!1&&(os.intersectSphere(Wl,qp)===null||os.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Xp.copy(s).invert(),os.copy(e.ray).applyMatrix4(Xp),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,A=v;M<A;M+=3){const w=a.getX(M),b=a.getX(M+1),P=a.getX(M+2);i=Zl(this,m,e,n,c,u,h,w,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=Zl(this,o,e,n,c,u,h,S,v,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,A=v;M<A;M+=3){const w=M,b=M+1,P=M+2;i=Zl(this,m,e,n,c,u,h,w,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,v=p+1,M=p+2;i=Zl(this,o,e,n,c,u,h,S,v,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ZS(r,e,t,n,i,s,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Wi,a),l===null)return null;$l.copy(a),$l.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($l);return c<t.near||c>t.far?null:{distance:c,point:$l.clone(),object:r}}function Zl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ro),r.getVertexPosition(l,so),r.getVertexPosition(c,oo);const u=ZS(r,e,t,n,ro,so,oo,Kl);if(u){i&&(ql.fromBufferAttribute(i,a),Yl.fromBufferAttribute(i,l),jl.fromBufferAttribute(i,c),u.uv=Ni.getInterpolation(Kl,ro,so,oo,ql,Yl,jl,new Ue)),s&&(ql.fromBufferAttribute(s,a),Yl.fromBufferAttribute(s,l),jl.fromBufferAttribute(s,c),u.uv1=Ni.getInterpolation(Kl,ro,so,oo,ql,Yl,jl,new Ue)),o&&(Yp.fromBufferAttribute(o,a),jp.fromBufferAttribute(o,l),Kp.fromBufferAttribute(o,c),u.normal=Ni.getInterpolation(Kl,ro,so,oo,Yp,jp,Kp,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Ni.getNormal(ro,so,oo,h.normal),u.face=h}return u}class vl extends Gn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(u,3)),this.setAttribute("uv",new bi(h,2));function _(g,p,m,S,v,M,A,w,b,P,y){const x=M/b,U=A/P,I=M/2,L=A/2,O=w/2,H=b+1,q=P+1;let K=0,k=0;const Y=new B;for(let C=0;C<q;C++){const se=C*U-L;for(let _e=0;_e<H;_e++){const Ge=_e*x-I;Y[g]=Ge*S,Y[p]=se*v,Y[m]=O,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[m]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(_e/b),h.push(1-C/P),K+=1}}for(let C=0;C<P;C++)for(let se=0;se<b;se++){const _e=f+se+H*C,Ge=f+se+H*(C+1),X=f+(se+1)+H*(C+1),ee=f+(se+1)+H*C;l.push(_e,Ge,ee),l.push(Ge,X,ee),k+=6}a.addGroup(d,k,y),d+=k,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const n=Wo(r[t]);for(const i in n)e[i]=n[i]}return e}function JS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function m0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const ul={clone:Wo,merge:wn};var QS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QS,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=JS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class g0 extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new B,$p=new Ue,Zp=new Ue;class vn extends g0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,$p,Zp),t.subVectors(Zp,$p)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ao=-90,lo=1;class tM extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(ao,lo,e,t);i.layers=this.layers,this.add(i);const s=new vn(ao,lo,e,t);s.layers=this.layers,this.add(s);const o=new vn(ao,lo,e,t);o.layers=this.layers,this.add(o);const a=new vn(ao,lo,e,t);a.layers=this.layers,this.add(a);const l=new vn(ao,lo,e,t);l.layers=this.layers,this.add(l);const c=new vn(ao,lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _0 extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nM extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _0(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vl(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:fr});s.uniforms.tEquirect.value=t;const o=new Sn(i,s),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=cn),new tM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Zu=new B,iM=new B,rM=new Ze;class ps{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Zu.subVectors(n,t).cross(iM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rM.getNormalMatrix(e),i=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Yi,Jl=new B;class Hf{constructor(e=new ps,t=new ps,n=new ps,i=new ps,s=new ps,o=new ps){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ur){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-d,M-m).normalize(),n[1].setComponents(l+s,f+c,p+d,M+m).normalize(),n[2].setComponents(l+o,f+u,p+_,M+S).normalize(),n[3].setComponents(l-o,f-u,p-_,M-S).normalize(),n[4].setComponents(l-a,f-h,p-g,M-v).normalize(),t===ur)n[5].setComponents(l+a,f+h,p+g,M+v).normalize();else if(t===Xc)n[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jl.x=i.normal.x>0?e.max.x:e.min.x,Jl.y=i.normal.y>0?e.max.y:e.min.y,Jl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),h.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class xl extends Gn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*f-o;for(let v=0;v<c;v++){const M=v*h-s;_.push(M,-S,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,M=S+c*(m+1),A=S+1+c*(m+1),w=S+1+c*m;d.push(v,M,w),d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new bi(_,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
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
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fM=`#ifdef USE_AOMAP
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
#endif`,dM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
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
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xM=`#ifdef USE_IRIDESCENCE
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
#endif`,yM=`#ifdef USE_BUMPMAP
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CM=`#define PI 3.141592653589793
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
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",FM=`
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
}`,BM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
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
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,eT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rT=`PhysicalMaterial material;
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
#endif`,sT=`struct PhysicalMaterial {
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
}`,oT=`
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
#endif`,TT=`#ifdef USE_MORPHTARGETS
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
#endif`,ET=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XT=`float getShadowMask() {
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
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YT=`#ifdef USE_SKINNING
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
#endif`,jT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
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
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
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
}`,dE=`#if DEPTH_PACKING == 3200
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
}`,pE=`#define DISTANCE
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
}`,mE=`#define DISTANCE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`uniform float scale;
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
}`,xE=`uniform vec3 diffuse;
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
}`,yE=`#include <common>
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,EE=`#define MATCAP
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
}`,bE=`#define MATCAP
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
}`,wE=`#define NORMAL
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
}`,AE=`#define NORMAL
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
}`,RE=`#define PHONG
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
}`,CE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,LE=`#define STANDARD
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
}`,IE=`#define TOON
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
}`,DE=`#define TOON
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
}`,NE=`uniform float size;
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
}`,UE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
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
}`,kE=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:oM,alphahash_pars_fragment:aM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:hM,aomap_fragment:fM,aomap_pars_fragment:dM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:gM,beginnormal_vertex:_M,bsdfs:vM,iridescence_fragment:xM,bumpmap_pars_fragment:yM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:EM,color_fragment:bM,color_pars_fragment:wM,color_pars_vertex:AM,color_vertex:RM,common:CM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:LM,displacementmap_pars_vertex:IM,displacementmap_vertex:DM,emissivemap_fragment:NM,emissivemap_pars_fragment:UM,colorspace_fragment:OM,colorspace_pars_fragment:FM,envmap_fragment:BM,envmap_common_pars_fragment:kM,envmap_pars_fragment:zM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:QM,envmap_vertex:VM,fog_vertex:GM,fog_pars_vertex:WM,fog_fragment:XM,fog_pars_fragment:qM,gradientmap_pars_fragment:YM,lightmap_fragment:jM,lightmap_pars_fragment:KM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:ZM,lights_pars_begin:JM,lights_toon_fragment:eT,lights_toon_pars_fragment:tT,lights_phong_fragment:nT,lights_phong_pars_fragment:iT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:aT,lights_fragment_end:lT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:fT,map_fragment:dT,map_pars_fragment:pT,map_particle_fragment:mT,map_particle_pars_fragment:gT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:vT,morphinstance_vertex:xT,morphcolor_vertex:yT,morphnormal_vertex:ST,morphtarget_pars_vertex:MT,morphtarget_vertex:TT,normal_fragment_begin:ET,normal_fragment_maps:bT,normal_pars_fragment:wT,normal_pars_vertex:AT,normal_vertex:RT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:DT,opaque_fragment:NT,packing:UT,premultiplied_alpha_fragment:OT,project_vertex:FT,dithering_fragment:BT,dithering_pars_fragment:kT,roughnessmap_fragment:zT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:VT,shadowmap_pars_vertex:GT,shadowmap_vertex:WT,shadowmask_pars_fragment:XT,skinbase_vertex:qT,skinning_pars_vertex:YT,skinning_vertex:jT,skinnormal_vertex:KT,specularmap_fragment:$T,specularmap_pars_fragment:ZT,tonemapping_fragment:JT,tonemapping_pars_fragment:QT,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:hE,depth_vert:fE,depth_frag:dE,distanceRGBA_vert:pE,distanceRGBA_frag:mE,equirect_vert:gE,equirect_frag:_E,linedashed_vert:vE,linedashed_frag:xE,meshbasic_vert:yE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:TE,meshmatcap_vert:EE,meshmatcap_frag:bE,meshnormal_vert:wE,meshnormal_frag:AE,meshphong_vert:RE,meshphong_frag:CE,meshphysical_vert:PE,meshphysical_frag:LE,meshtoon_vert:IE,meshtoon_frag:DE,points_vert:NE,points_frag:UE,shadow_vert:OE,shadow_frag:FE,sprite_vert:BE,sprite_frag:kE},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Pi={basic:{uniforms:wn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:wn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:wn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:wn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:wn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:wn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:wn([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:wn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:wn([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:wn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:wn([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:wn([ue.common,ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:wn([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Pi.physical={uniforms:wn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ql={r:0,b:0,g:0},ls=new Xi,zE=new je;function HE(r,e,t,n,i,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),S=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===tu)?(u===void 0&&(u=new Sn(new vl(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Wo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ls.copy(m.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zE.makeRotationFromEuler(ls)),u.material.toneMapped=xt.getTransfer(v.colorSpace)!==wt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Sn(new xl(2,2),new on({name:"BackgroundMaterial",uniforms:Wo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=xt.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Ql,m0(r)),n.buffers.color.setClear(Ql.r,Ql.g,Ql.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function VE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(x,U,I,L,O){let H=!1;const q=h(L,I,U);s!==q&&(s=q,c(s.object)),H=d(x,L,I,O),H&&_(x,L,I,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(x,U,I,L),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,U,I){const L=I.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let H=O[U.id];H===void 0&&(H={},O[U.id]=H);let q=H[L];return q===void 0&&(q=f(l()),H[L]=q),q}function f(x){const U=[],I=[],L=[];for(let O=0;O<t;O++)U[O]=0,I[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:L,object:x,attributes:{},index:null}}function d(x,U,I,L){const O=s.attributes,H=U.attributes;let q=0;const K=I.getAttributes();for(const k in K)if(K[k].location>=0){const C=O[k];let se=H[k];if(se===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),C===void 0||C.attribute!==se||se&&C.data!==se.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function _(x,U,I,L){const O={},H=U.attributes;let q=0;const K=I.getAttributes();for(const k in K)if(K[k].location>=0){let C=H[k];C===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(C=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(C=x.instanceColor));const se={};se.attribute=C,C&&C.data&&(se.data=C.data),O[k]=se,q++}s.attributes=O,s.attributesNum=q,s.index=L}function g(){const x=s.newAttributes;for(let U=0,I=x.length;U<I;U++)x[U]=0}function p(x){m(x,0)}function m(x,U){const I=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;I[x]=1,L[x]===0&&(r.enableVertexAttribArray(x),L[x]=1),O[x]!==U&&(r.vertexAttribDivisor(x,U),O[x]=U)}function S(){const x=s.newAttributes,U=s.enabledAttributes;for(let I=0,L=U.length;I<L;I++)U[I]!==x[I]&&(r.disableVertexAttribArray(I),U[I]=0)}function v(x,U,I,L,O,H,q){q===!0?r.vertexAttribIPointer(x,U,I,O,H):r.vertexAttribPointer(x,U,I,L,O,H)}function M(x,U,I,L){g();const O=L.attributes,H=I.getAttributes(),q=U.defaultAttributeValues;for(const K in H){const k=H[K];if(k.location>=0){let Y=O[K];if(Y===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const C=Y.normalized,se=Y.itemSize,_e=e.get(Y);if(_e===void 0)continue;const Ge=_e.buffer,X=_e.type,ee=_e.bytesPerElement,le=X===r.INT||X===r.UNSIGNED_INT||Y.gpuType===Z_;if(Y.isInterleavedBufferAttribute){const ie=Y.data,be=ie.stride,Re=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let Xe=0;Xe<k.locationSize;Xe++)m(k.location+Xe,ie.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Xe=0;Xe<k.locationSize;Xe++)p(k.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let Xe=0;Xe<k.locationSize;Xe++)v(k.location+Xe,se/k.locationSize,X,C,be*ee,(Re+se/k.locationSize*Xe)*ee,le)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)m(k.location+ie,Y.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ie=0;ie<k.locationSize;ie++)v(k.location+ie,se/k.locationSize,X,C,se*ee,se/k.locationSize*ie*ee,le)}}else if(q!==void 0){const C=q[K];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(k.location,C);break;case 3:r.vertexAttrib3fv(k.location,C);break;case 4:r.vertexAttrib4fv(k.location,C);break;default:r.vertexAttrib1fv(k.location,C)}}}}S()}function A(){P();for(const x in n){const U=n[x];for(const I in U){const L=U[I];for(const O in L)u(L[O].object),delete L[O];delete U[I]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const U=n[x.id];for(const I in U){const L=U[I];for(const O in L)u(L[O].object),delete L[O];delete U[I]}delete n[x.id]}function b(x){for(const U in n){const I=n[U];if(I[x.id]===void 0)continue;const L=I[x.id];for(const O in L)u(L[O].object),delete L[O];delete I[x.id]}}function P(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function GE(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function WE(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:m,maxSamples:S}}function XE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ps,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,v=S*4;let M=m.clippingState||null;l.value=M,M=u(_,f,v,d);for(let A=0;A!==v;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==g;++v,M+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function qE(r){let e=new WeakMap;function t(o,a){return a===jh?o.mapping=Bo:a===Kh&&(o.mapping=ko),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jh||a===Kh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nM(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class iu extends g0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vo=4,Jp=[.125,.215,.35,.446,.526,.582],_s=20,Ju=new iu,Qp=new ke;let Qu=null,eh=0,th=0,nh=!1;const ms=(1+Math.sqrt(5))/2,co=1/ms,em=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ms,co),new B(0,ms,-co),new B(co,0,ms),new B(-co,0,ms),new B(ms,co,0),new B(-ms,co,0)];class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qu=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:qr,format:Si,colorSpace:Qr,depthBuffer:!1},i=tm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(s)),this._blurMaterial=jE(s,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Ju)}_sceneToCubeUV(e,t,n,i){const a=new vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Qp),u.toneMapping=Wr,u.autoClear=!1;const d=new Br({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),_=new Sn(new vl,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Qp),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;ec(i,S*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bo||e.mapping===ko;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ec(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ju)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=em[(i-1)%em.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Sn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_s-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):_s;p>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_s}`);const m=[];let S=0;for(let b=0;b<_s;++b){const P=b/g,y=Math.exp(-P*P/2);m.push(y),b===0?S+=y:b<p&&(S+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-vo?i-v+vo:0),w=4*(this._cubeSize-M);ec(t,A,w,3*M,2*M),l.setRenderTarget(t),l.render(h,Ju)}}function YE(r){const e=[],t=[],n=[];let i=r;const s=r-vo+1+Jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-vo?l=Jp[o-r+vo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),v=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,P=w>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];S.set(y,g*_*w),v.set(f,p*_*w);const x=[w,w,w,w,w,w];M.set(x,m*_*w)}const A=new Gn;A.setAttribute("position",new Dt(S,g)),A.setAttribute("uv",new Dt(v,p)),A.setAttribute("faceIndex",new Dt(M,m)),e.push(A),i>vo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tm(r,e,t){const n=new Ti(r,e,t);return n.texture.mapping=tu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ec(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jE(r,e,t){const n=new Float32Array(_s),i=new B(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function nm(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function im(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Vf(){return`

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
	`}function KE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jh||l===Kh,u=l===Bo||l===ko;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Jh(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Jh(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $E(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ZE(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let v=0,M=S.length;v<M;v+=3){const A=S[v+0],w=S[v+1],b=S[v+2];f.push(A,w,w,b,b,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const A=v+0,w=v+1,b=v+2;f.push(A,w,w,b,b,A)}}else return;const p=new(l0(f)?p0:d0)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function JE(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d;g++)this.render(h[g]/o,f[g]);else{_.multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let p=0;p<d;p++)g+=f[p];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function QE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function eb(r,e,t){const n=new WeakMap,i=new Mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let M=a.attributes.position.count*v,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*A*4*h),b=new h0(w,M,A,h);b.type=zi,b.needsUpdate=!0;const P=v*4;for(let x=0;x<h;x++){const U=p[x],I=m[x],L=S[x],O=M*A*4*x;for(let H=0;H<U.count;H++){const q=H*P;d===!0&&(i.fromBufferAttribute(U,H),w[O+q+0]=i.x,w[O+q+1]=i.y,w[O+q+2]=i.z,w[O+q+3]=0),_===!0&&(i.fromBufferAttribute(I,H),w[O+q+4]=i.x,w[O+q+5]=i.y,w[O+q+6]=i.z,w[O+q+7]=0),g===!0&&(i.fromBufferAttribute(L,H),w[O+q+8]=i.x,w[O+q+9]=i.y,w[O+q+10]=i.z,w[O+q+11]=L.itemSize===4?i.w:1)}}f={count:h,texture:b,size:new Ue(M,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function tb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class x0 extends Jt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ao,u!==Ao&&u!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ao&&(n=Ho),n===void 0&&u===al&&(n=gl),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const y0=new Jt,S0=new x0(1,1);S0.compareFunction=a0;const M0=new h0,T0=new BS,E0=new _0,rm=[],sm=[],om=new Float32Array(16),am=new Float32Array(9),lm=new Float32Array(4);function Ko(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=rm[i];if(s===void 0&&(s=new Float32Array(i),rm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ru(r,e){let t=sm[e];t===void 0&&(t=new Int32Array(e),sm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function nb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function ob(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;lm.set(n),r.uniformMatrix2fv(this.addr,!1,lm),en(t,n)}}function ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;am.set(n),r.uniformMatrix3fv(this.addr,!1,am),en(t,n)}}function lb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;om.set(n),r.uniformMatrix4fv(this.addr,!1,om),en(t,n)}}function cb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function _b(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?S0:y0;t.setTexture2D(e||s,i)}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||T0,i)}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||E0,i)}function yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||M0,i)}function Sb(r){switch(r){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return yb}}function Mb(r,e){r.uniform1fv(this.addr,e)}function Tb(r,e){const t=Ko(e,this.size,2);r.uniform2fv(this.addr,t)}function Eb(r,e){const t=Ko(e,this.size,3);r.uniform3fv(this.addr,t)}function bb(r,e){const t=Ko(e,this.size,4);r.uniform4fv(this.addr,t)}function wb(r,e){const t=Ko(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ab(r,e){const t=Ko(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Rb(r,e){const t=Ko(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cb(r,e){r.uniform1iv(this.addr,e)}function Pb(r,e){r.uniform2iv(this.addr,e)}function Lb(r,e){r.uniform3iv(this.addr,e)}function Ib(r,e){r.uniform4iv(this.addr,e)}function Db(r,e){r.uniform1uiv(this.addr,e)}function Nb(r,e){r.uniform2uiv(this.addr,e)}function Ub(r,e){r.uniform3uiv(this.addr,e)}function Ob(r,e){r.uniform4uiv(this.addr,e)}function Fb(r,e,t){const n=this.cache,i=e.length,s=ru(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||y0,s[o])}function Bb(r,e,t){const n=this.cache,i=e.length,s=ru(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||T0,s[o])}function kb(r,e,t){const n=this.cache,i=e.length,s=ru(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||E0,s[o])}function zb(r,e,t){const n=this.cache,i=e.length,s=ru(t,i);Qt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||M0,s[o])}function Hb(r){switch(r){case 5126:return Mb;case 35664:return Tb;case 35665:return Eb;case 35666:return bb;case 35674:return wb;case 35675:return Ab;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Lb;case 35669:case 35673:return Ib;case 5125:return Db;case 36294:return Nb;case 36295:return Ub;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return zb}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sb(t.type)}}class Gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hb(t.type)}}class Wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function cm(r,e){r.seq.push(e),r.map[e.id]=e}function Xb(r,e,t){const n=r.name,i=n.length;for(ih.lastIndex=0;;){const s=ih.exec(n),o=ih.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cm(t,c===void 0?new Vb(a,r,e):new Gb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Wb(a),cm(t,h)),t=h}}}class xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Xb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function um(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qb=37297;let Yb=0;function jb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Kb(r){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(r);let n;switch(e===t?n="":e===Wc&&t===Gc?n="LinearDisplayP3ToLinearSRGB":e===Gc&&t===Wc&&(n="LinearSRGBToLinearDisplayP3"),r){case Qr:case nu:return[n,"LinearTransferOETF"];case On:case Bf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function hm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+jb(r.getShaderSource(e),o)}else return i}function $b(r,e){const t=Kb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zb(r,e){let t;switch(e){case G_:t="Linear";break;case W_:t="Reinhard";break;case X_:t="OptimizedCineon";break;case Ff:t="ACESFilmic";break;case q_:t="AgX";break;case Y_:t="Neutral";break;case Yy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Qb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ew(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ma(r){return r!==""}function fm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(r){return r.replace(tw,iw)}const nw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iw(r,e){let t=$e[e];if(t===void 0){const n=nw.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(r){return r.replace(rw,sw)}function sw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function ow(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===z_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===H_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function aw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Bo:case ko:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lw(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===ko&&(e="ENVMAP_MODE_REFRACTION"),e}function cw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case V_:e="ENVMAP_BLENDING_MULTIPLY";break;case Xy:e="ENVMAP_BLENDING_MIX";break;case qy:e="ENVMAP_BLENDING_ADD";break}return e}function uw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ow(t),c=aw(t),u=lw(t),h=cw(t),f=uw(t),d=Jb(t),_=Qb(s),g=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ma).join(`
`),m.length>0&&(m+=`
`)):(p=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),m=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?$e.tonemapping_pars_fragment:"",t.toneMapping!==Wr?Zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,$b("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),o=Qh(o),o=fm(o,t),o=dm(o,t),a=Qh(a),a=fm(a,t),a=dm(a,t),o=pm(o),a=pm(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+p+o,M=S+m+a,A=um(i,i.VERTEX_SHADER,v),w=um(i,i.FRAGMENT_SHADER,M);i.attachShader(g,A),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(U){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(w).trim();let H=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const K=hm(i,A,"vertex"),k=hm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+K+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||O==="")&&(q=!1);q&&(U.diagnostics={runnable:H,programLog:I,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(A),i.deleteShader(w),P=new xc(i,g),y=ew(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,qb)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let fw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pw(e),t.set(e,n)),n}}class pw{constructor(e){this.id=fw++,this.code=e,this.usedTimes=0}}function mw(r,e,t,n,i,s,o){const a=new zf,l=new dw,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,U,I,L){const O=I.fog,H=L.geometry,q=y.isMeshStandardMaterial?I.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),k=K&&K.mapping===tu?K.image.height:null,Y=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=C!==void 0?C.length:0;let _e=0;H.morphAttributes.position!==void 0&&(_e=1),H.morphAttributes.normal!==void 0&&(_e=2),H.morphAttributes.color!==void 0&&(_e=3);let Ge,X,ee,le;if(Y){const Tt=Pi[Y];Ge=Tt.vertexShader,X=Tt.fragmentShader}else Ge=y.vertexShader,X=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const ie=r.getRenderTarget(),be=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,Xe=!!y.map,z=!!y.matcap,Oe=!!K,ae=!!y.aoMap,qe=!!y.lightMap,Te=!!y.bumpMap,Ye=!!y.normalMap,T=!!y.displacementMap,E=!!y.emissiveMap,j=!!y.metalnessMap,Z=!!y.roughnessMap,$=y.anisotropy>0,Q=y.clearcoat>0,we=y.iridescence>0,ne=y.sheen>0,de=y.transmission>0,Ce=$&&!!y.anisotropyMap,te=Q&&!!y.clearcoatMap,he=Q&&!!y.clearcoatNormalMap,Pe=Q&&!!y.clearcoatRoughnessMap,pe=we&&!!y.iridescenceMap,xe=we&&!!y.iridescenceThicknessMap,Le=ne&&!!y.sheenColorMap,nt=ne&&!!y.sheenRoughnessMap,Je=!!y.specularMap,ot=!!y.specularColorMap,ut=!!y.specularIntensityMap,ve=de&&!!y.transmissionMap,D=de&&!!y.thicknessMap,J=!!y.gradientMap,oe=!!y.alphaMap,me=y.alphaTest>0,ye=!!y.alphaHash,it=!!y.extensions;let ct=Wr;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ct=r.toneMapping);const ft={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:X,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Re,instancing:be,instancingColor:be&&L.instanceColor!==null,instancingMorph:be&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qr,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:z,envMap:Oe,envMapMode:Oe&&K.mapping,envMapCubeUVHeight:k,aoMap:ae,lightMap:qe,bumpMap:Te,normalMap:Ye,displacementMap:f&&T,emissiveMap:E,normalMapObjectSpace:Ye&&y.normalMapType===lS,normalMapTangentSpace:Ye&&y.normalMapType===o0,metalnessMap:j,roughnessMap:Z,anisotropy:$,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:te,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,iridescence:we,iridescenceMap:pe,iridescenceThicknessMap:xe,sheen:ne,sheenColorMap:Le,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:ot,specularIntensityMap:ut,transmission:de,transmissionMap:ve,thicknessMap:D,gradientMap:J,opaque:y.transparent===!1&&y.blending===wo&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:me,alphaHash:ye,combine:y.combine,mapUv:Xe&&g(y.map.channel),aoMapUv:ae&&g(y.aoMap.channel),lightMapUv:qe&&g(y.lightMap.channel),bumpMapUv:Te&&g(y.bumpMap.channel),normalMapUv:Ye&&g(y.normalMap.channel),displacementMapUv:T&&g(y.displacementMap.channel),emissiveMapUv:E&&g(y.emissiveMap.channel),metalnessMapUv:j&&g(y.metalnessMap.channel),roughnessMapUv:Z&&g(y.roughnessMap.channel),anisotropyMapUv:Ce&&g(y.anisotropyMap.channel),clearcoatMapUv:te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:nt&&g(y.sheenRoughnessMap.channel),specularMapUv:Je&&g(y.specularMap.channel),specularColorMapUv:ot&&g(y.specularColorMap.channel),specularIntensityMapUv:ut&&g(y.specularIntensityMap.channel),transmissionMapUv:ve&&g(y.transmissionMap.channel),thicknessMapUv:D&&g(y.thicknessMap.channel),alphaMapUv:oe&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ye||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Xe||oe),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:_e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Di,flipSided:y.side===Hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:it&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:it&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)x.push(U),x.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(S(x,y),v(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),y.push(a.mask)}function M(y){const x=_[y.type];let U;if(x){const I=Pi[x];U=ul.clone(I.uniforms)}else U=y.uniforms;return U}function A(y,x){let U;for(let I=0,L=u.length;I<L;I++){const O=u[I];if(O.cacheKey===x){U=O,++U.usedTimes;break}}return U===void 0&&(U=new hw(r,x,y,s),u.push(U)),U}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:P}}function gw(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _m(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=o(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||_w),n.length>1&&n.sort(f||gm),i.length>1&&i.sort(f||gm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function vw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _m,r.set(n,[o])):i>=s.length?(o=new _m,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function yw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Sw=0;function Mw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Tw(r){const e=new xw,t=yw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new je,o=new je;function a(c,u){let h=0,f=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let _=0,g=0,p=0,m=0,S=0,v=0,M=0,A=0,w=0,b=0,P=0;c.sort(Mw);const y=u===!0?Math.PI:1;for(let U=0,I=c.length;U<I;U++){const L=c[U],O=L.color,H=L.intensity,q=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*H*y,f+=O.g*H*y,d+=O.b*H*y;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],H);P++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const Y=L.shadow,C=t.get(L);C.shadowBias=Y.bias,C.shadowNormalBias=Y.normalBias,C.shadowRadius=Y.radius,C.shadowMapSize=Y.mapSize,n.directionalShadow[_]=C,n.directionalShadowMap[_]=K,n.directionalShadowMatrix[_]=L.shadow.matrix,v++}n.directional[_]=k,_++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(O).multiplyScalar(H*y),k.distance=q,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[p]=k;const Y=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[p]=Y.matrix,L.castShadow){const C=t.get(L);C.shadowBias=Y.bias,C.shadowNormalBias=Y.normalBias,C.shadowRadius=Y.radius,C.shadowMapSize=Y.mapSize,n.spotShadow[p]=C,n.spotShadowMap[p]=K,A++}p++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(O).multiplyScalar(H),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*y),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Y=L.shadow,C=t.get(L);C.shadowBias=Y.bias,C.shadowNormalBias=Y.normalBias,C.shadowRadius=Y.radius,C.shadowMapSize=Y.mapSize,C.shadowCameraNear=Y.camera.near,C.shadowCameraFar=Y.camera.far,n.pointShadow[g]=C,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=k,g++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(H*y),k.groundColor.copy(L.groundColor).multiplyScalar(H*y),n.hemi[S]=k,S++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const x=n.hash;(x.directionalLength!==_||x.pointLength!==g||x.spotLength!==p||x.rectAreaLength!==m||x.hemiLength!==S||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==A||x.numSpotMaps!==w||x.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=S,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=A+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,x.directionalLength=_,x.pointLength=g,x.spotLength=p,x.rectAreaLength=m,x.hemiLength=S,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=A,x.numSpotMaps=w,x.numLightProbes=P,n.version=Sw++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const v=c[m];if(v.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function vm(r){const e=new Tw(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ew(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new vm(r),e.set(i,[a])):s>=o.length?(a=new vm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class bw extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ww extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`;function Cw(r,e,t){let n=new Hf;const i=new Ue,s=new Ue,o=new Mt,a=new bw({depthPacking:aS}),l=new ww,c={},u=t.maxTextureSize,h={[Wi]:Hn,[Hn]:Wi,[Di]:Di},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Aw,fragmentShader:Rw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Sn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z_;let m=this.type;this.render=function(w,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),I=r.state;I.setBlending(fr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=m!==nr&&this.type===nr,O=m===nr&&this.type!==nr;for(let H=0,q=w.length;H<q;H++){const K=w[H],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Y=k.getFrameExtents();if(i.multiply(Y),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Y.x),i.x=s.x*Y.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Y.y),i.y=s.y*Y.y,k.mapSize.y=s.y)),k.map===null||L===!0||O===!0){const se=this.type!==nr?{minFilter:Nn,magFilter:Nn}:{};k.map!==null&&k.map.dispose(),k.map=new Ti(i.x,i.y,se),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const C=k.getViewportCount();for(let se=0;se<C;se++){const _e=k.getViewport(se);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),I.viewport(o),k.updateMatrices(K,se),n=k.getFrustum(),M(b,P,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===nr&&S(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,x,U)};function S(w,b){const P=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ti(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,P,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,P,d,g,null)}function v(w,b,P,y){let x=null;const U=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)x=U;else if(x=P.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=x.uuid,L=b.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let H=O[L];H===void 0&&(H=x.clone(),O[L]=H,b.addEventListener("dispose",A)),x=H}if(x.visible=b.visible,x.wireframe=b.wireframe,y===nr?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=P}return x}function M(w,b,P,y,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===nr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const L=e.update(w),O=w.material;if(Array.isArray(O)){const H=L.groups;for(let q=0,K=H.length;q<K;q++){const k=H[q],Y=O[k.materialIndex];if(Y&&Y.visible){const C=v(w,Y,y,x);w.onBeforeShadow(r,w,b,P,L,C,k),r.renderBufferDirect(P,null,L,C,w,k),w.onAfterShadow(r,w,b,P,L,C,k)}}}else if(O.visible){const H=v(w,O,y,x);w.onBeforeShadow(r,w,b,P,L,H,null),r.renderBufferDirect(P,null,L,H,w,null),w.onAfterShadow(r,w,b,P,L,H,null)}}const I=w.children;for(let L=0,O=I.length;L<O;L++)M(I[L],b,P,y,x)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const y=c[P],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function Pw(r){function e(){let D=!1;const J=new Mt;let oe=null;const me=new Mt(0,0,0,0);return{setMask:function(ye){oe!==ye&&!D&&(r.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){D=ye},setClear:function(ye,it,ct,ft,Tt){Tt===!0&&(ye*=ft,it*=ft,ct*=ft),J.set(ye,it,ct,ft),me.equals(J)===!1&&(r.clearColor(ye,it,ct,ft),me.copy(J))},reset:function(){D=!1,oe=null,me.set(-1,0,0,0)}}}function t(){let D=!1,J=null,oe=null,me=null;return{setTest:function(ye){ye?le(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(ye){J!==ye&&!D&&(r.depthMask(ye),J=ye)},setFunc:function(ye){if(oe!==ye){switch(ye){case By:r.depthFunc(r.NEVER);break;case ky:r.depthFunc(r.ALWAYS);break;case zy:r.depthFunc(r.LESS);break;case zc:r.depthFunc(r.LEQUAL);break;case Hy:r.depthFunc(r.EQUAL);break;case Vy:r.depthFunc(r.GEQUAL);break;case Gy:r.depthFunc(r.GREATER);break;case Wy:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=ye}},setLocked:function(ye){D=ye},setClear:function(ye){me!==ye&&(r.clearDepth(ye),me=ye)},reset:function(){D=!1,J=null,oe=null,me=null}}}function n(){let D=!1,J=null,oe=null,me=null,ye=null,it=null,ct=null,ft=null,Tt=null;return{setTest:function(ht){D||(ht?le(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(ht){J!==ht&&!D&&(r.stencilMask(ht),J=ht)},setFunc:function(ht,De,Me){(oe!==ht||me!==De||ye!==Me)&&(r.stencilFunc(ht,De,Me),oe=ht,me=De,ye=Me)},setOp:function(ht,De,Me){(it!==ht||ct!==De||ft!==Me)&&(r.stencilOp(ht,De,Me),it=ht,ct=De,ft=Me)},setLocked:function(ht){D=ht},setClear:function(ht){Tt!==ht&&(r.clearStencil(ht),Tt=ht)},reset:function(){D=!1,J=null,oe=null,me=null,ye=null,it=null,ct=null,ft=null,Tt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,v=null,M=null,A=null,w=new ke(0,0,0),b=0,P=!1,y=null,x=null,U=null,I=null,L=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=q>=2);let k=null,Y={};const C=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),_e=new Mt().fromArray(C),Ge=new Mt().fromArray(se);function X(D,J,oe,me){const ye=new Uint8Array(4),it=r.createTexture();r.bindTexture(D,it),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<oe;ct++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(J,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(J+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return it}const ee={};ee[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(r.DEPTH_TEST),s.setFunc(zc),Te(!1),Ye(Jd),le(r.CULL_FACE),ae(fr);function le(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function ie(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function be(D,J){return u[D]!==J?(r.bindFramebuffer(D,J),u[D]=J,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=J),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=J),!0):!1}function Re(D,J){let oe=f,me=!1;if(D){oe=h.get(J),oe===void 0&&(oe=[],h.set(J,oe));const ye=D.textures;if(oe.length!==ye.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let it=0,ct=ye.length;it<ct;it++)oe[it]=r.COLOR_ATTACHMENT0+it;oe.length=ye.length,me=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,me=!0);me&&r.drawBuffers(oe)}function Xe(D){return d!==D?(r.useProgram(D),d=D,!0):!1}const z={[gs]:r.FUNC_ADD,[Sy]:r.FUNC_SUBTRACT,[My]:r.FUNC_REVERSE_SUBTRACT};z[Ty]=r.MIN,z[Ey]=r.MAX;const Oe={[by]:r.ZERO,[wy]:r.ONE,[Ay]:r.SRC_COLOR,[qh]:r.SRC_ALPHA,[Dy]:r.SRC_ALPHA_SATURATE,[Ly]:r.DST_COLOR,[Cy]:r.DST_ALPHA,[Ry]:r.ONE_MINUS_SRC_COLOR,[Yh]:r.ONE_MINUS_SRC_ALPHA,[Iy]:r.ONE_MINUS_DST_COLOR,[Py]:r.ONE_MINUS_DST_ALPHA,[Ny]:r.CONSTANT_COLOR,[Uy]:r.ONE_MINUS_CONSTANT_COLOR,[Oy]:r.CONSTANT_ALPHA,[Fy]:r.ONE_MINUS_CONSTANT_ALPHA};function ae(D,J,oe,me,ye,it,ct,ft,Tt,ht){if(D===fr){_===!0&&(ie(r.BLEND),_=!1);return}if(_===!1&&(le(r.BLEND),_=!0),D!==yy){if(D!==g||ht!==P){if((p!==gs||v!==gs)&&(r.blendEquation(r.FUNC_ADD),p=gs,v=gs),ht)switch(D){case wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.ONE,r.ONE);break;case Qd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ol:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ep:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,S=null,M=null,A=null,w.set(0,0,0),b=0,g=D,P=ht}return}ye=ye||J,it=it||oe,ct=ct||me,(J!==p||ye!==v)&&(r.blendEquationSeparate(z[J],z[ye]),p=J,v=ye),(oe!==m||me!==S||it!==M||ct!==A)&&(r.blendFuncSeparate(Oe[oe],Oe[me],Oe[it],Oe[ct]),m=oe,S=me,M=it,A=ct),(ft.equals(w)===!1||Tt!==b)&&(r.blendColor(ft.r,ft.g,ft.b,Tt),w.copy(ft),b=Tt),g=D,P=!1}function qe(D,J){D.side===Di?ie(r.CULL_FACE):le(r.CULL_FACE);let oe=D.side===Hn;J&&(oe=!oe),Te(oe),D.blending===wo&&D.transparent===!1?ae(fr):ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),i.setMask(D.colorWrite);const me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),E(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){y!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),y=D)}function Ye(D){D!==_y?(le(r.CULL_FACE),D!==x&&(D===Jd?r.cullFace(r.BACK):D===vy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),x=D}function T(D){D!==U&&(H&&r.lineWidth(D),U=D)}function E(D,J,oe){D?(le(r.POLYGON_OFFSET_FILL),(I!==J||L!==oe)&&(r.polygonOffset(J,oe),I=J,L=oe)):ie(r.POLYGON_OFFSET_FILL)}function j(D){D?le(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function Z(D){D===void 0&&(D=r.TEXTURE0+O-1),k!==D&&(r.activeTexture(D),k=D)}function $(D,J,oe){oe===void 0&&(k===null?oe=r.TEXTURE0+O-1:oe=k);let me=Y[oe];me===void 0&&(me={type:void 0,texture:void 0},Y[oe]=me),(me.type!==D||me.texture!==J)&&(k!==oe&&(r.activeTexture(oe),k=oe),r.bindTexture(D,J||ee[D]),me.type=D,me.texture=J)}function Q(){const D=Y[k];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function we(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(D){_e.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),_e.copy(D))}function Je(D){Ge.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function ot(D,J){let oe=l.get(J);oe===void 0&&(oe=new WeakMap,l.set(J,oe));let me=oe.get(D);me===void 0&&(me=r.getUniformBlockIndex(J,D.name),oe.set(D,me))}function ut(D,J){const me=l.get(J).get(D);a.get(J)!==me&&(r.uniformBlockBinding(J,me,D.__bindingPointIndex),a.set(J,me))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,Y={},u={},h=new WeakMap,f=[],d=null,_=!1,g=null,p=null,m=null,S=null,v=null,M=null,A=null,w=new ke(0,0,0),b=0,P=!1,y=null,x=null,U=null,I=null,L=null,_e.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:le,disable:ie,bindFramebuffer:be,drawBuffers:Re,useProgram:Xe,setBlending:ae,setMaterial:qe,setFlipSided:Te,setCullFace:Ye,setLineWidth:T,setPolygonOffset:E,setScissorTest:j,activeTexture:Z,bindTexture:$,unbindTexture:Q,compressedTexImage2D:we,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Le,updateUBOMapping:ot,uniformBlockBinding:ut,texStorage2D:Pe,texStorage3D:pe,texSubImage2D:de,texSubImage3D:Ce,compressedTexSubImage2D:te,compressedTexSubImage3D:he,scissor:nt,viewport:Je,reset:ve}}function Lw(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return d?new OffscreenCanvas(T,E):cl("canvas")}function g(T,E,j){let Z=1;const $=Ye(T);if(($.width>j||$.height>j)&&(Z=j/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(Z*$.width),we=Math.floor(Z*$.height);h===void 0&&(h=_(Q,we));const ne=E?_(Q,we):h;return ne.width=Q,ne.height=we,ne.getContext("2d").drawImage(T,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Q+"x"+we+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Nn&&T.minFilter!==cn}function m(T){r.generateMipmap(T)}function S(T,E,j,Z,$=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=E;if(E===r.RED&&(j===r.FLOAT&&(Q=r.R32F),j===r.HALF_FLOAT&&(Q=r.R16F),j===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(Q=r.R8UI),j===r.UNSIGNED_SHORT&&(Q=r.R16UI),j===r.UNSIGNED_INT&&(Q=r.R32UI),j===r.BYTE&&(Q=r.R8I),j===r.SHORT&&(Q=r.R16I),j===r.INT&&(Q=r.R32I)),E===r.RG&&(j===r.FLOAT&&(Q=r.RG32F),j===r.HALF_FLOAT&&(Q=r.RG16F),j===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(Q=r.RG8UI),j===r.UNSIGNED_SHORT&&(Q=r.RG16UI),j===r.UNSIGNED_INT&&(Q=r.RG32UI),j===r.BYTE&&(Q=r.RG8I),j===r.SHORT&&(Q=r.RG16I),j===r.INT&&(Q=r.RG32I)),E===r.RGB&&j===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),E===r.RGBA){const we=$?Vc:xt.getTransfer(Z);j===r.FLOAT&&(Q=r.RGBA32F),j===r.HALF_FLOAT&&(Q=r.RGBA16F),j===r.UNSIGNED_BYTE&&(Q=we===wt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(T,E){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Nn&&T.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function M(T){const E=T.target;E.removeEventListener("dispose",M),w(E),E.isVideoTexture&&u.delete(E)}function A(T){const E=T.target;E.removeEventListener("dispose",A),P(E)}function w(T){const E=n.get(T);if(E.__webglInit===void 0)return;const j=T.source,Z=f.get(j);if(Z){const $=Z[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(T),Object.keys(Z).length===0&&f.delete(j)}n.remove(T)}function b(T){const E=n.get(T);r.deleteTexture(E.__webglTexture);const j=T.source,Z=f.get(j);delete Z[E.__cacheKey],o.memory.textures--}function P(T){const E=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let $=0;$<E.__webglFramebuffer[Z].length;$++)r.deleteFramebuffer(E.__webglFramebuffer[Z][$]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=T.textures;for(let Z=0,$=j.length;Z<$;Z++){const Q=n.get(j[Z]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(j[Z])}n.remove(T)}let y=0;function x(){y=0}function U(){const T=y;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),y+=1,T}function I(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function L(T,E){const j=n.get(T);if(T.isVideoTexture&&qe(T),T.isRenderTargetTexture===!1&&T.version>0&&j.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(j,T,E);return}}t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+E)}function O(T,E){const j=n.get(T);if(T.version>0&&j.__version!==T.version){_e(j,T,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+E)}function H(T,E){const j=n.get(T);if(T.version>0&&j.__version!==T.version){_e(j,T,E);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+E)}function q(T,E){const j=n.get(T);if(T.version>0&&j.__version!==T.version){Ge(j,T,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+E)}const K={[zo]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[Hc]:r.MIRRORED_REPEAT},k={[Nn]:r.NEAREST,[K_]:r.NEAREST_MIPMAP_NEAREST,[Sa]:r.NEAREST_MIPMAP_LINEAR,[cn]:r.LINEAR,[_c]:r.LINEAR_MIPMAP_NEAREST,[yi]:r.LINEAR_MIPMAP_LINEAR},Y={[cS]:r.NEVER,[mS]:r.ALWAYS,[uS]:r.LESS,[a0]:r.LEQUAL,[hS]:r.EQUAL,[pS]:r.GEQUAL,[fS]:r.GREATER,[dS]:r.NOTEQUAL};function C(T,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===_c||E.magFilter===Sa||E.magFilter===yi||E.minFilter===cn||E.minFilter===_c||E.minFilter===Sa||E.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,K[E.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,k[E.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,k[E.minFilter]),E.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Y[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Sa&&E.minFilter!==yi||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function se(T,E){let j=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",M));const Z=E.source;let $=f.get(Z);$===void 0&&($={},f.set(Z,$));const Q=I(E);if(Q!==T.__cacheKey){$[Q]===void 0&&($[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),$[Q].usedTimes++;const we=$[T.__cacheKey];we!==void 0&&($[T.__cacheKey].usedTimes--,we.usedTimes===0&&b(E)),T.__cacheKey=Q,T.__webglTexture=$[Q].texture}return j}function _e(T,E,j){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const $=se(T,E),Q=E.source;t.bindTexture(Z,T.__webglTexture,r.TEXTURE0+j);const we=n.get(Q);if(Q.version!==we.__version||$===!0){t.activeTexture(r.TEXTURE0+j);const ne=xt.getPrimaries(xt.workingColorSpace),de=E.colorSpace===Pr?null:xt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Pr||ne===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let te=g(E.image,!1,i.maxTextureSize);te=Te(E,te);const he=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type);let pe=S(E.internalFormat,he,Pe,E.colorSpace,E.isVideoTexture);C(Z,E);let xe;const Le=E.mipmaps,nt=E.isVideoTexture!==!0&&pe!==r0,Je=we.__version===void 0||$===!0,ot=Q.dataReady,ut=v(E,te);if(E.isDepthTexture)pe=r.DEPTH_COMPONENT16,E.type===zi?pe=r.DEPTH_COMPONENT32F:E.type===Ho?pe=r.DEPTH_COMPONENT24:E.type===gl&&(pe=r.DEPTH24_STENCIL8),Je&&(nt?t.texStorage2D(r.TEXTURE_2D,1,pe,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,pe,te.width,te.height,0,he,Pe,null));else if(E.isDataTexture)if(Le.length>0){nt&&Je&&t.texStorage2D(r.TEXTURE_2D,ut,pe,Le[0].width,Le[0].height);for(let ve=0,D=Le.length;ve<D;ve++)xe=Le[ve],nt?ot&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,xe.width,xe.height,he,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,ve,pe,xe.width,xe.height,0,he,Pe,xe.data);E.generateMipmaps=!1}else nt?(Je&&t.texStorage2D(r.TEXTURE_2D,ut,pe,te.width,te.height),ot&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,he,Pe,te.data)):t.texImage2D(r.TEXTURE_2D,0,pe,te.width,te.height,0,he,Pe,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ut,pe,Le[0].width,Le[0].height,te.depth);for(let ve=0,D=Le.length;ve<D;ve++)xe=Le[ve],E.format!==Si?he!==null?nt?ot&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,xe.width,xe.height,te.depth,he,xe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,pe,xe.width,xe.height,te.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?ot&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,xe.width,xe.height,te.depth,he,Pe,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,pe,xe.width,xe.height,te.depth,0,he,Pe,xe.data)}else{nt&&Je&&t.texStorage2D(r.TEXTURE_2D,ut,pe,Le[0].width,Le[0].height);for(let ve=0,D=Le.length;ve<D;ve++)xe=Le[ve],E.format!==Si?he!==null?nt?ot&&t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,xe.width,xe.height,he,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?ot&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,xe.width,xe.height,he,Pe,xe.data):t.texImage2D(r.TEXTURE_2D,ve,pe,xe.width,xe.height,0,he,Pe,xe.data)}else if(E.isDataArrayTexture)nt?(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ut,pe,te.width,te.height,te.depth),ot&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Pe,te.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,he,Pe,te.data);else if(E.isData3DTexture)nt?(Je&&t.texStorage3D(r.TEXTURE_3D,ut,pe,te.width,te.height,te.depth),ot&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Pe,te.data)):t.texImage3D(r.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,he,Pe,te.data);else if(E.isFramebufferTexture){if(Je)if(nt)t.texStorage2D(r.TEXTURE_2D,ut,pe,te.width,te.height);else{let ve=te.width,D=te.height;for(let J=0;J<ut;J++)t.texImage2D(r.TEXTURE_2D,J,pe,ve,D,0,he,Pe,null),ve>>=1,D>>=1}}else if(Le.length>0){if(nt&&Je){const ve=Ye(Le[0]);t.texStorage2D(r.TEXTURE_2D,ut,pe,ve.width,ve.height)}for(let ve=0,D=Le.length;ve<D;ve++)xe=Le[ve],nt?ot&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,he,Pe,xe):t.texImage2D(r.TEXTURE_2D,ve,pe,he,Pe,xe);E.generateMipmaps=!1}else if(nt){if(Je){const ve=Ye(te);t.texStorage2D(r.TEXTURE_2D,ut,pe,ve.width,ve.height)}ot&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Pe,te)}else t.texImage2D(r.TEXTURE_2D,0,pe,he,Pe,te);p(E)&&m(Z),we.__version=Q.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Ge(T,E,j){if(E.image.length!==6)return;const Z=se(T,E),$=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+j);const Q=n.get($);if($.version!==Q.__version||Z===!0){t.activeTexture(r.TEXTURE0+j);const we=xt.getPrimaries(xt.workingColorSpace),ne=E.colorSpace===Pr?null:xt.getPrimaries(E.colorSpace),de=E.colorSpace===Pr||we===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,he=[];for(let D=0;D<6;D++)!Ce&&!te?he[D]=g(E.image[D],!0,i.maxCubemapSize):he[D]=te?E.image[D].image:E.image[D],he[D]=Te(E,he[D]);const Pe=he[0],pe=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),Le=S(E.internalFormat,pe,xe,E.colorSpace),nt=E.isVideoTexture!==!0,Je=Q.__version===void 0||Z===!0,ot=$.dataReady;let ut=v(E,Pe);C(r.TEXTURE_CUBE_MAP,E);let ve;if(Ce){nt&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Le,Pe.width,Pe.height);for(let D=0;D<6;D++){ve=he[D].mipmaps;for(let J=0;J<ve.length;J++){const oe=ve[J];E.format!==Si?pe!==null?nt?ot&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J,Le,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J,0,0,oe.width,oe.height,pe,xe,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J,Le,oe.width,oe.height,0,pe,xe,oe.data)}}}else{if(ve=E.mipmaps,nt&&Je){ve.length>0&&ut++;const D=Ye(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Le,D.width,D.height)}for(let D=0;D<6;D++)if(te){nt?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,he[D].width,he[D].height,pe,xe,he[D].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Le,he[D].width,he[D].height,0,pe,xe,he[D].data);for(let J=0;J<ve.length;J++){const me=ve[J].image[D].image;nt?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J+1,0,0,me.width,me.height,pe,xe,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J+1,Le,me.width,me.height,0,pe,xe,me.data)}}else{nt?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,pe,xe,he[D]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Le,pe,xe,he[D]);for(let J=0;J<ve.length;J++){const oe=ve[J];nt?ot&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J+1,0,0,pe,xe,oe.image[D]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+D,J+1,Le,pe,xe,oe.image[D])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),Q.__version=$.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function X(T,E,j,Z,$,Q){const we=s.convert(j.format,j.colorSpace),ne=s.convert(j.type),de=S(j.internalFormat,we,ne,j.colorSpace);if(!n.get(E).__hasExternalTextures){const te=Math.max(1,E.width>>Q),he=Math.max(1,E.height>>Q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Q,de,te,he,E.depth,0,we,ne,null):t.texImage2D($,Q,de,te,he,0,we,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),ae(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,$,n.get(j).__webglTexture,0,Oe(E)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,$,n.get(j).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(T,E,j){if(r.bindRenderbuffer(r.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let Z=r.DEPTH_COMPONENT24;if(j||ae(E)){const $=E.depthTexture;$&&$.isDepthTexture&&($.type===zi?Z=r.DEPTH_COMPONENT32F:$.type===Ho&&(Z=r.DEPTH_COMPONENT24));const Q=Oe(E);ae(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,Z,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,Z,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const Z=Oe(E);j&&ae(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,E.width,E.height):ae(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const Z=E.textures;for(let $=0;$<Z.length;$++){const Q=Z[$],we=s.convert(Q.format,Q.colorSpace),ne=s.convert(Q.type),de=S(Q.internalFormat,we,ne,Q.colorSpace),Ce=Oe(E);j&&ae(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,de,E.width,E.height):ae(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const Z=n.get(E.depthTexture).__webglTexture,$=Oe(E);if(E.depthTexture.format===Ao)ae(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(E.depthTexture.format===al)ae(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ie(T){const E=n.get(T),j=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,T)}else if(j){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]=r.createRenderbuffer(),ee(E.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),ee(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(T,E,j){const Z=n.get(T);E!==void 0&&X(Z.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&ie(T)}function Re(T){const E=T.texture,j=n.get(T),Z=n.get(E);T.addEventListener("dispose",A);const $=T.textures,Q=T.isWebGLCubeRenderTarget===!0,we=$.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,o.memory.textures++),Q){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[ne]=[];for(let de=0;de<E.mipmaps.length;de++)j.__webglFramebuffer[ne][de]=r.createFramebuffer()}else j.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let ne=0;ne<E.mipmaps.length;ne++)j.__webglFramebuffer[ne]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(we)for(let ne=0,de=$.length;ne<de;ne++){const Ce=n.get($[ne]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}if(T.samples>0&&ae(T)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){const de=$[ne];j.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[ne]);const Ce=s.convert(de.format,de.colorSpace),te=s.convert(de.type),he=S(de.internalFormat,Ce,te,de.colorSpace,T.isXRRenderTarget===!0),Pe=Oe(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,he,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,j.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(j.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),C(r.TEXTURE_CUBE_MAP,E);for(let ne=0;ne<6;ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)X(j.__webglFramebuffer[ne][de],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de);else X(j.__webglFramebuffer[ne],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ne=0,de=$.length;ne<de;ne++){const Ce=$[ne],te=n.get(Ce);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),C(r.TEXTURE_2D,Ce),X(j.__webglFramebuffer,T,Ce,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),p(Ce)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),C(ne,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)X(j.__webglFramebuffer[de],T,E,r.COLOR_ATTACHMENT0,ne,de);else X(j.__webglFramebuffer,T,E,r.COLOR_ATTACHMENT0,ne,0);p(E)&&m(ne),t.unbindTexture()}T.depthBuffer&&ie(T)}function Xe(T){const E=T.textures;for(let j=0,Z=E.length;j<Z;j++){const $=E[j];if(p($)){const Q=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=n.get($).__webglTexture;t.bindTexture(Q,we),m(Q),t.unbindTexture()}}}function z(T){if(T.samples>0&&ae(T)===!1){const E=T.textures,j=T.width,Z=T.height;let $=r.COLOR_BUFFER_BIT;const Q=[],we=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=n.get(T),de=E.length>1;if(de)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){Q.push(r.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&Q.push(we);const te=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(te===!1&&(T.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&ne.__isTransmissionRenderTarget!==!0&&($|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]),te===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),de){const he=n.get(E[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,j,Z,0,0,j,Z,$,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const te=n.get(E[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Oe(T){return Math.min(i.maxSamples,T.samples)}function ae(T){const E=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(T){const E=o.render.frame;u.get(T)!==E&&(u.set(T,E),T.update())}function Te(T,E){const j=T.colorSpace,Z=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||j!==Qr&&j!==Pr&&(xt.getTransfer(j)===wt?(Z!==Si||$!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function Ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=x,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ae}function Iw(r,e){function t(n,i=Pr){let s;const o=xt.getTransfer(i);if(n===Xr)return r.UNSIGNED_BYTE;if(n===J_)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Q_)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zy)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ky)return r.BYTE;if(n===$y)return r.SHORT;if(n===$_)return r.UNSIGNED_SHORT;if(n===Z_)return r.INT;if(n===Ho)return r.UNSIGNED_INT;if(n===zi)return r.FLOAT;if(n===qr)return r.HALF_FLOAT;if(n===Jy)return r.ALPHA;if(n===Qy)return r.RGB;if(n===Si)return r.RGBA;if(n===eS)return r.LUMINANCE;if(n===tS)return r.LUMINANCE_ALPHA;if(n===Ao)return r.DEPTH_COMPONENT;if(n===al)return r.DEPTH_STENCIL;if(n===e0)return r.RED;if(n===t0)return r.RED_INTEGER;if(n===nS)return r.RG;if(n===n0)return r.RG_INTEGER;if(n===i0)return r.RGBA_INTEGER;if(n===Ru||n===Cu||n===Pu||n===Lu)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ru)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ru)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===np||n===ip||n===rp||n===sp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===np)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ip)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===r0)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===op||n===ap)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===op)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ap)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lp||n===cp||n===up||n===hp||n===fp||n===dp||n===pp||n===mp||n===gp||n===_p||n===vp||n===xp||n===yp||n===Sp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===up)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_p)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Iu||n===Mp||n===Tp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Iu)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iS||n===Ep||n===bp||n===wp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Iu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ep)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Dw extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nw={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nw)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ow=`
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

}`;class Fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new on({vertexShader:Uw,fragmentShader:Ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new xl(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Bw extends jo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new Fw,p=t.getContextAttributes();let m=null,S=null;const v=[],M=[],A=new Ue;let w=null;const b=new vn;b.layers.enable(1),b.viewport=new Mt;const P=new vn;P.layers.enable(2),P.viewport=new Mt;const y=[b,P],x=new Dw;x.layers.enable(1),x.layers.enable(2);let U=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=v[X];return ee===void 0&&(ee=new rh,v[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=v[X];return ee===void 0&&(ee=new rh,v[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=v[X];return ee===void 0&&(ee=new rh,v[X]=ee),ee.getHandSpace()};function L(X){const ee=M.indexOf(X.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(X.inputSource,X.frame,c||o),le.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",H);for(let X=0;X<v.length;X++){const ee=M[X];ee!==null&&(M[X]=null,v[X].disconnect(ee))}U=null,I=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,S=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",O),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ti(d.framebufferWidth,d.framebufferHeight,{format:Si,type:Xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,le=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?al:Ao,le=p.stencil?gl:Ho);const be={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ti(f.textureWidth,f.textureHeight,{format:Si,type:Xr,depthTexture:new x0(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Re=e.properties.get(S);Re.__ignoreDepthValues=f.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(X){for(let ee=0;ee<X.removed.length;ee++){const le=X.removed[ee],ie=M.indexOf(le);ie>=0&&(M[ie]=null,v[ie].disconnect(le))}for(let ee=0;ee<X.added.length;ee++){const le=X.added[ee];let ie=M.indexOf(le);if(ie===-1){for(let Re=0;Re<v.length;Re++)if(Re>=M.length){M.push(le),ie=Re;break}else if(M[Re]===null){M[Re]=le,ie=Re;break}if(ie===-1)break}const be=v[ie];be&&be.connect(le)}}const q=new B,K=new B;function k(X,ee,le){q.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(le.matrixWorld);const ie=q.distanceTo(K),be=ee.projectionMatrix.elements,Re=le.projectionMatrix.elements,Xe=be[14]/(be[10]-1),z=be[14]/(be[10]+1),Oe=(be[9]+1)/be[5],ae=(be[9]-1)/be[5],qe=(be[8]-1)/be[0],Te=(Re[8]+1)/Re[0],Ye=Xe*qe,T=Xe*Te,E=ie/(-qe+Te),j=E*-qe;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(j),X.translateZ(E),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const Z=Xe+E,$=z+E,Q=Ye-j,we=T+(ie-j),ne=Oe*z/$*Z,de=ae*z/$*Z;X.projectionMatrix.makePerspective(Q,we,ne,de,Z,$),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;g.texture!==null&&(X.near=g.depthNear,X.far=g.depthFar),x.near=P.near=b.near=X.near,x.far=P.far=b.far=X.far,(U!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),U=x.near,I=x.far,b.near=U,b.far=I,P.near=U,P.far=I,b.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const ee=X.parent,le=x.cameras;Y(x,ee);for(let ie=0;ie<le.length;ie++)Y(le[ie],ee);le.length===2?k(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),C(X,x,ee)};function C(X,ee,le){le===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Go*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null};let se=null;function _e(X,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ie=!1;le.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let Re=0;Re<le.length;Re++){const Xe=le[Re];let z=null;if(d!==null)z=d.getViewport(Xe);else{const ae=h.getViewSubImage(f,Xe);z=ae.viewport,Re===0&&(e.setRenderTargetTextures(S,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(S))}let Oe=y[Re];Oe===void 0&&(Oe=new vn,Oe.layers.enable(Re),Oe.viewport=new Mt,y[Re]=Oe),Oe.matrix.fromArray(Xe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Xe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(z.x,z.y,z.width,z.height),Re===0&&(x.matrix.copy(Oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ie===!0&&x.cameras.push(Oe)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")){const Re=h.getDepthInformation(le[0]);Re&&Re.isValid&&Re.texture&&g.init(e,Re,i.renderState)}}for(let le=0;le<v.length;le++){const ie=M[le],be=v[le];ie!==null&&be!==void 0&&be.update(ie,ee,c||o)}g.render(e,x),se&&se(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ge=new v0;Ge.setAnimationLoop(_e),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const cs=new Xi,kw=new je;function zw(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,m0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),v=S.envMap,M=S.envMapRotation;if(v&&(p.envMap.value=v,cs.copy(M),cs.x*=-1,cs.y*=-1,cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),p.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(cs)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hw(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(_(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(S,A);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const v=h();S.__bindingPointIndex=v;const M=r.createBuffer(),A=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],M=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,b=M.length;w<b;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,x=P.length;y<x;y++){const U=P[y];if(d(U,w,y,A)===!0){const I=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let O=0;for(let H=0;H<L.length;H++){const q=L[H],K=g(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,I+O,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,v,M,A){const w=S.value,b=v+"_"+M;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const P=A[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(S){const v=S.uniforms;let M=0;const A=16;for(let b=0,P=v.length;b<P;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,U=y.length;x<U;x++){const I=y[x],L=Array.isArray(I.value)?I.value:[I.value];for(let O=0,H=L.length;O<H;O++){const q=L[O],K=g(q),k=M%A;k!==0&&A-k<K.boundary&&(M+=A-k),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=K.storage}}}const w=M%A;return w>0&&(M+=A-w),S.__size=M,S.__cache={},this}function g(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Vw{constructor(e={}){const{canvas:t=IS(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this._useLegacyLights=!1,this.toneMapping=Wr,this.toneMappingExposure=1;const v=this;let M=!1,A=0,w=0,b=null,P=-1,y=null;const x=new Mt,U=new Mt;let I=null;const L=new ke(0);let O=0,H=t.width,q=t.height,K=1,k=null,Y=null;const C=new Mt(0,0,H,q),se=new Mt(0,0,H,q);let _e=!1;const Ge=new Hf;let X=!1,ee=!1;const le=new je,ie=new Ue,be=new B,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return b===null?K:1}let z=n;function Oe(R,F){const G=t.getContext(R,F);return G!==null?G:null}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eu}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){const F="webgl2";if(z=Oe(F,R),z===null)throw Oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,qe,Te,Ye,T,E,j,Z,$,Q,we,ne,de,Ce,te,he,Pe,pe,xe,Le,nt,Je,ot,ut;function ve(){ae=new $E(z),ae.init(),qe=new WE(z,ae,e),Je=new Iw(z,ae),Te=new Pw(z),Ye=new QE(z),T=new gw,E=new Lw(z,ae,Te,T,qe,Je,Ye),j=new qE(v),Z=new KE(v),$=new sM(z),ot=new VE(z,$),Q=new ZE(z,$,Ye,ot),we=new tb(z,Q,$,Ye),xe=new eb(z,qe,E),he=new XE(T),ne=new mw(v,j,Z,ae,qe,ot,he),de=new zw(v,T),Ce=new vw,te=new Ew(ae),pe=new HE(v,j,Z,Te,we,f,l),Pe=new Cw(v,we,qe),ut=new Hw(z,Ye,qe,Te),Le=new GE(z,ae,Ye),nt=new JE(z,ae,Ye),Ye.programs=ne.programs,v.capabilities=qe,v.extensions=ae,v.properties=T,v.renderLists=Ce,v.shadowMap=Pe,v.state=Te,v.info=Ye}ve();const D=new Bw(v,z);this.xr=D,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(H,q,!1))},this.getSize=function(R){return R.set(H,q)},this.setSize=function(R,F,G=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,q=F,t.width=Math.floor(R*K),t.height=Math.floor(F*K),G===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(H*K,q*K).floor()},this.setDrawingBufferSize=function(R,F,G){H=R,q=F,K=G,t.width=Math.floor(R*G),t.height=Math.floor(F*G),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(C)},this.setViewport=function(R,F,G,W){R.isVector4?C.set(R.x,R.y,R.z,R.w):C.set(R,F,G,W),Te.viewport(x.copy(C).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,F,G,W){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,F,G,W),Te.scissor(U.copy(se).multiplyScalar(K).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Te.setScissorTest(_e=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(R=!0,F=!0,G=!0){let W=0;if(R){let V=!1;if(b!==null){const re=b.texture.format;V=re===i0||re===n0||re===t0}if(V){const re=b.texture.type,fe=re===Xr||re===Ho||re===$_||re===gl||re===J_||re===Q_,Ae=pe.getClearColor(),Be=pe.getClearAlpha(),Ee=Ae.r,Se=Ae.g,Fe=Ae.b;fe?(d[0]=Ee,d[1]=Se,d[2]=Fe,d[3]=Be,z.clearBufferuiv(z.COLOR,0,d)):(_[0]=Ee,_[1]=Se,_[2]=Fe,_[3]=Be,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}F&&(W|=z.DEPTH_BUFFER_BIT),G&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ce.dispose(),te.dispose(),T.dispose(),j.dispose(),Z.dispose(),we.dispose(),ot.dispose(),ut.dispose(),ne.dispose(),D.dispose(),D.removeEventListener("sessionstart",De),D.removeEventListener("sessionend",Me),Qe.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Ye.autoReset,F=Pe.enabled,G=Pe.autoUpdate,W=Pe.needsUpdate,V=Pe.type;ve(),Ye.autoReset=R,Pe.enabled=F,Pe.autoUpdate=G,Pe.needsUpdate=W,Pe.type=V}function me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const F=R.target;F.removeEventListener("dispose",ye),it(F)}function it(R){ct(R),T.remove(R)}function ct(R){const F=T.get(R).programs;F!==void 0&&(F.forEach(function(G){ne.releaseProgram(G)}),R.isShaderMaterial&&ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,G,W,V,re){F===null&&(F=Re);const fe=V.isMesh&&V.matrixWorld.determinant()<0,Ae=Ct(R,F,G,W,V);Te.setMaterial(W,fe);let Be=G.index,Ee=1;if(W.wireframe===!0){if(Be=Q.getWireframeAttribute(G),Be===void 0)return;Ee=2}const Se=G.drawRange,Fe=G.attributes.position;let At=Se.start*Ee,fn=(Se.start+Se.count)*Ee;re!==null&&(At=Math.max(At,re.start*Ee),fn=Math.min(fn,(re.start+re.count)*Ee)),Be!==null?(At=Math.max(At,0),fn=Math.min(fn,Be.count)):Fe!=null&&(At=Math.max(At,0),fn=Math.min(fn,Fe.count));const Pt=fn-At;if(Pt<0||Pt===1/0)return;ot.setup(V,W,Ae,G,Be);let Wt,mt=Le;if(Be!==null&&(Wt=$.get(Be),mt=nt,mt.setIndex(Wt)),V.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*Xe()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(V.isLine){let We=W.linewidth;We===void 0&&(We=1),Te.setLineWidth(We*Xe()),V.isLineSegments?mt.setMode(z.LINES):V.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else V.isPoints?mt.setMode(z.POINTS):V.isSprite&&mt.setMode(z.TRIANGLES);if(V.isBatchedMesh)mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)mt.renderInstances(At,Pt,V.count);else if(G.isInstancedBufferGeometry){const We=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,si=Math.min(G.instanceCount,We);mt.renderInstances(At,Pt,si)}else mt.render(At,Pt)};function ft(R,F,G){R.transparent===!0&&R.side===Di&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Ke(R,F,G),R.side=Wi,R.needsUpdate=!0,Ke(R,F,G),R.side=Di):Ke(R,F,G)}this.compile=function(R,F,G=null){G===null&&(G=R),p=te.get(G),p.init(),S.push(p),G.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==G&&R.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(v._useLegacyLights);const W=new Set;return R.traverse(function(V){const re=V.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Ae=re[fe];ft(Ae,G,V),W.add(Ae)}else ft(re,G,V),W.add(re)}),S.pop(),p=null,W},this.compileAsync=function(R,F,G=null){const W=this.compile(R,F,G);return new Promise(V=>{function re(){if(W.forEach(function(fe){T.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){V(R);return}setTimeout(re,10)}ae.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Tt=null;function ht(R){Tt&&Tt(R)}function De(){Qe.stop()}function Me(){Qe.start()}const Qe=new v0;Qe.setAnimationLoop(ht),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(R){Tt=R,D.setAnimationLoop(R),R===null?Qe.stop():Qe.start()},D.addEventListener("sessionstart",De),D.addEventListener("sessionend",Me),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(F),F=D.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,F,b),p=te.get(R,S.length),p.init(),S.push(p),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(le),ee=this.localClippingEnabled,X=he.init(this.clippingPlanes,ee),g=Ce.get(R,m.length),g.init(),m.push(g),ce(R,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(k,Y),this.info.render.frame++,X===!0&&he.beginShadows();const G=p.state.shadowsArray;if(Pe.render(G,R,F),X===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1)&&pe.render(g,R),p.setupLights(v._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let V=0,re=W.length;V<re;V++){const fe=W[V];He(g,R,fe,fe.viewport)}}else He(g,R,F);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,F),ot.resetDefaultState(),P=-1,y=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ce(R,F,G,W){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){W&&be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const fe=we.update(R),Ae=R.material;Ae.visible&&g.push(R,fe,Ae,G,be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const fe=we.update(R),Ae=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),be.copy(R.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),be.copy(fe.boundingSphere.center)),be.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Ae)){const Be=fe.groups;for(let Ee=0,Se=Be.length;Ee<Se;Ee++){const Fe=Be[Ee],At=Ae[Fe.materialIndex];At&&At.visible&&g.push(R,fe,At,G,be.z,Fe)}}else Ae.visible&&g.push(R,fe,Ae,G,be.z,null)}}const re=R.children;for(let fe=0,Ae=re.length;fe<Ae;fe++)ce(re[fe],F,G,W)}function He(R,F,G,W){const V=R.opaque,re=R.transmissive,fe=R.transparent;p.setupLightsView(G),X===!0&&he.setGlobalState(v.clippingPlanes,G),re.length>0&&Ie(V,re,F,G),W&&Te.viewport(x.copy(W)),V.length>0&&ze(V,F,G),re.length>0&&ze(re,F,G),fe.length>0&&ze(fe,F,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ie(R,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Ti(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?qr:Xr,minFilter:yi,samples:4,stencilBuffer:s});const Ee=T.get(p.state.transmissionRenderTarget);Ee.__isTransmissionRenderTarget=!0}const re=p.state.transmissionRenderTarget;v.getDrawingBufferSize(ie),re.setSize(ie.x,ie.y);const fe=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(L),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=Wr,ze(R,G,W),E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re);let Be=!1;for(let Ee=0,Se=F.length;Ee<Se;Ee++){const Fe=F[Ee],At=Fe.object,fn=Fe.geometry,Pt=Fe.material,Wt=Fe.group;if(Pt.side===Di&&At.layers.test(W.layers)){const mt=Pt.side;Pt.side=Hn,Pt.needsUpdate=!0,zt(At,G,W,fn,Pt,Wt),Pt.side=mt,Pt.needsUpdate=!0,Be=!0}}Be===!0&&(E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re)),v.setRenderTarget(fe),v.setClearColor(L,O),v.toneMapping=Ae}function ze(R,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let V=0,re=R.length;V<re;V++){const fe=R[V],Ae=fe.object,Be=fe.geometry,Ee=W===null?fe.material:W,Se=fe.group;Ae.layers.test(G.layers)&&zt(Ae,F,G,Be,Ee,Se)}}function zt(R,F,G,W,V,re){R.onBeforeRender(v,F,G,W,V,re),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(v,F,G,W,R,re),V.transparent===!0&&V.side===Di&&V.forceSinglePass===!1?(V.side=Hn,V.needsUpdate=!0,v.renderBufferDirect(G,F,W,V,R,re),V.side=Wi,V.needsUpdate=!0,v.renderBufferDirect(G,F,W,V,R,re),V.side=Di):v.renderBufferDirect(G,F,W,V,R,re),R.onAfterRender(v,F,G,W,V,re)}function Ke(R,F,G){F.isScene!==!0&&(F=Re);const W=T.get(R),V=p.state.lights,re=p.state.shadowsArray,fe=V.state.version,Ae=ne.getParameters(R,V.state,re,F,G),Be=ne.getProgramCacheKey(Ae);let Ee=W.programs;W.environment=R.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(R.isMeshStandardMaterial?Z:j).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?F.environmentRotation:R.envMapRotation,Ee===void 0&&(R.addEventListener("dispose",ye),Ee=new Map,W.programs=Ee);let Se=Ee.get(Be);if(Se!==void 0){if(W.currentProgram===Se&&W.lightsStateVersion===fe)return Kt(R,Ae),Se}else Ae.uniforms=ne.getUniforms(R),R.onBuild(G,Ae,v),R.onBeforeCompile(Ae,v),Se=ne.acquireProgram(Ae,Be),Ee.set(Be,Se),W.uniforms=Ae.uniforms;const Fe=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=he.uniform),Kt(R,Ae),W.needsLights=pt(R),W.lightsStateVersion=fe,W.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Se,W.uniformsList=null,Se}function Rt(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=xc.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Kt(R,F){const G=T.get(R);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ct(R,F,G,W,V){F.isScene!==!0&&(F=Re),E.resetTextureUnits();const re=F.fog,fe=W.isMeshStandardMaterial?F.environment:null,Ae=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qr,Be=(W.isMeshStandardMaterial?Z:j).get(W.envMap||fe),Ee=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Se=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!G.morphAttributes.position,At=!!G.morphAttributes.normal,fn=!!G.morphAttributes.color;let Pt=Wr;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=Wt!==void 0?Wt.length:0,We=T.get(W),si=p.state.lights;if(X===!0&&(ee===!0||R!==y)){const oi=R===y&&W.id===P;he.setState(W,R,oi)}let Lt=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==si.state.version||We.outputColorSpace!==Ae||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&We.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&We.instancingMorph===!1&&V.morphTexture!==null||We.envMap!==Be||W.fog===!0&&We.fog!==re||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==he.numPlanes||We.numIntersection!==he.numIntersection)||We.vertexAlphas!==Ee||We.vertexTangents!==Se||We.morphTargets!==Fe||We.morphNormals!==At||We.morphColors!==fn||We.toneMapping!==Pt||We.morphTargetsCount!==mt)&&(Lt=!0):(Lt=!0,We.__version=W.version);let ts=We.currentProgram;Lt===!0&&(ts=Ke(W,F,V));let td=!1,Qo=!1,au=!1;const dn=ts.getUniforms(),gr=We.uniforms;if(Te.useProgram(ts.program)&&(td=!0,Qo=!0,au=!0),W.id!==P&&(P=W.id,Qo=!0),td||y!==R){dn.setValue(z,"projectionMatrix",R.projectionMatrix),dn.setValue(z,"viewMatrix",R.matrixWorldInverse);const oi=dn.map.cameraPosition;oi!==void 0&&oi.setValue(z,be.setFromMatrixPosition(R.matrixWorld)),qe.logarithmicDepthBuffer&&dn.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dn.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Qo=!0,au=!0)}if(V.isSkinnedMesh){dn.setOptional(z,V,"bindMatrix"),dn.setOptional(z,V,"bindMatrixInverse");const oi=V.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),dn.setValue(z,"boneTexture",oi.boneTexture,E))}V.isBatchedMesh&&(dn.setOptional(z,V,"batchingTexture"),dn.setValue(z,"batchingTexture",V._matricesTexture,E));const lu=G.morphAttributes;if((lu.position!==void 0||lu.normal!==void 0||lu.color!==void 0)&&xe.update(V,G,ts),(Qo||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,dn.setValue(z,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gr.envMap.value=Be,gr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(gr.envMapIntensity.value=F.environmentIntensity),Qo&&(dn.setValue(z,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Et(gr,au),re&&W.fog===!0&&de.refreshFogUniforms(gr,re),de.refreshMaterialUniforms(gr,W,K,q,p.state.transmissionRenderTarget),xc.upload(z,Rt(We),gr,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xc.upload(z,Rt(We),gr,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dn.setValue(z,"center",V.center),dn.setValue(z,"modelViewMatrix",V.modelViewMatrix),dn.setValue(z,"normalMatrix",V.normalMatrix),dn.setValue(z,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const oi=W.uniformsGroups;for(let cu=0,G0=oi.length;cu<G0;cu++){const nd=oi[cu];ut.update(nd,ts),ut.bind(nd,ts)}}return ts}function Et(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function pt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,F,G){T.get(R.texture).__webglTexture=F,T.get(R.depthTexture).__webglTexture=G;const W=T.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,F){const G=T.get(R);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,G=0){b=R,A=F,w=G;let W=!0,V=null,re=!1,fe=!1;if(R){const Be=T.get(R);Be.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Be.__webglFramebuffer===void 0?E.setupRenderTarget(R):Be.__hasExternalTextures&&E.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);const Ee=R.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(fe=!0);const Se=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Se[F])?V=Se[F][G]:V=Se[F],re=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?V=T.get(R).__webglMultisampledFramebuffer:Array.isArray(Se)?V=Se[G]:V=Se,x.copy(R.viewport),U.copy(R.scissor),I=R.scissorTest}else x.copy(C).multiplyScalar(K).floor(),U.copy(se).multiplyScalar(K).floor(),I=_e;if(Te.bindFramebuffer(z.FRAMEBUFFER,V)&&W&&Te.drawBuffers(R,V),Te.viewport(x),Te.scissor(U),Te.setScissorTest(I),re){const Be=T.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,G)}else if(fe){const Be=T.get(R.texture),Ee=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,G||0,Ee)}P=-1},this.readRenderTargetPixels=function(R,F,G,W,V,re,fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&fe!==void 0&&(Ae=Ae[fe]),Ae){Te.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Be=R.texture,Ee=Be.format,Se=Be.type;if(Ee!==Si&&Je.convert(Ee)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Se===qr&&(ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float"));if(Se!==Xr&&Je.convert(Se)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&Se!==zi&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-W&&G>=0&&G<=R.height-V&&z.readPixels(F,G,W,V,Je.convert(Ee),Je.convert(Se),re)}finally{const Be=b!==null?T.get(b).__webglFramebuffer:null;Te.bindFramebuffer(z.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(R,F,G=0){const W=Math.pow(2,-G),V=Math.floor(F.image.width*W),re=Math.floor(F.image.height*W);E.setTexture2D(F,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,R.x,R.y,V,re),Te.unbindTexture()},this.copyTextureToTexture=function(R,F,G,W=0){const V=F.image.width,re=F.image.height,fe=Je.convert(G.format),Ae=Je.convert(G.type);E.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,R.x,R.y,V,re,fe,Ae,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,fe,F.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,R.x,R.y,fe,Ae,F.image),W===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(R,F,G,W,V=0){const re=Math.round(R.max.x-R.min.x),fe=Math.round(R.max.y-R.min.y),Ae=R.max.z-R.min.z+1,Be=Je.convert(W.format),Ee=Je.convert(W.type);let Se;if(W.isData3DTexture)E.setTexture3D(W,0),Se=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Se=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Fe=z.getParameter(z.UNPACK_ROW_LENGTH),At=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fn=z.getParameter(z.UNPACK_SKIP_PIXELS),Pt=z.getParameter(z.UNPACK_SKIP_ROWS),Wt=z.getParameter(z.UNPACK_SKIP_IMAGES),mt=G.isCompressedTexture?G.mipmaps[V]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(Se,V,F.x,F.y,F.z,re,fe,Ae,Be,Ee,mt.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Se,V,F.x,F.y,F.z,re,fe,Ae,Be,mt.data):z.texSubImage3D(Se,V,F.x,F.y,F.z,re,fe,Ae,Be,Ee,mt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Fe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,At),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Wt),V===0&&W.generateMipmaps&&z.generateMipmap(Se),Te.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,Te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bf?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===nu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Gf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class b0 extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return c0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new B;class Wf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xm=new B,ym=new Mt,Sm=new Mt,Ww=new B,Mm=new je,tc=new B,sh=new Yi,Tm=new je,oh=new _l;class Xw extends Sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tp,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingBox.expandByPoint(tc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingSphere.expandByPoint(tc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(i),e.ray.intersectsSphere(sh)!==!1&&(Tm.copy(i).invert(),oh.copy(e.ray).applyMatrix4(Tm),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ym.fromBufferAttribute(i.attributes.skinIndex,e),Sm.fromBufferAttribute(i.attributes.skinWeight,e),xm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Sm.getComponent(s);if(o!==0){const a=ym.getComponent(s);Mm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ww.copy(xm).applyMatrix4(Mm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class w0 extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xf extends Jt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Nn,u=Nn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Em=new je,qw=new je;class qf{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:qw;Em.multiplyMatrices(a,t[s]),Em.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xf(t,e,e,Si,zi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new w0),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ef extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const uo=new je,bm=new je,nc=[],wm=new qi,Yw=new je,ca=new Sn,ua=new Yi;class jw extends Sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ef(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,uo),wm.copy(e.boundingBox).applyMatrix4(uo),this.boundingBox.union(wm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,uo),ua.copy(e.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,uo),bm.multiplyMatrices(n,uo),ca.matrixWorld=bm,ca.raycast(e,nc);for(let o=0,a=nc.length;o<a;o++){const l=nc[o];l.instanceId=s,l.object=this,t.push(l)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ef(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xf(new Float32Array(i*this.count),i,this.count,e0,zi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class A0 extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Am=new B,Rm=new B,Cm=new je,ah=new _l,ic=new Yi;class Yf extends Bt{constructor(e=new Gn,t=new A0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Am.fromBufferAttribute(t,i-1),Rm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Am.distanceTo(Rm);e.setAttribute("lineDistance",new bi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(i),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;Cm.copy(i).invert(),ah.copy(e.ray).applyMatrix4(Cm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,h=new B,f=new B,d=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const m=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let v=m,M=S-1;v<M;v+=d){const A=_.getX(v),w=_.getX(v+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,w),ah.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,M=S-1;v<M;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),ah.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Pm=new B,Lm=new B;class Kw extends Yf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pm.fromBufferAttribute(t,i),Lm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pm.distanceTo(Lm);e.setAttribute("lineDistance",new bi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $w extends Yf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class R0 extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Im=new je,tf=new _l,rc=new Yi,sc=new B;class jf extends Bt{constructor(e=new Gn,t=new R0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(i),rc.radius+=s,e.ray.intersectsSphere(rc)===!1)return;Im.copy(i).invert(),tf.copy(e.ray).applyMatrix4(Im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);sc.fromBufferAttribute(h,p),Dm(sc,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)sc.fromBufferAttribute(h,_),Dm(sc,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dm(r,e,t,n,i,s,o){const a=tf.distanceSqToPoint(r);if(a<t){const l=new B;tf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zw extends Ei{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Jw extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kf extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o0,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends Kf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function oc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Qw(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function eA(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nm(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function C0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class yl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tA extends yl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ap,endingEnd:Ap}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rp:s=e,a=2*t-n;break;case Cp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:o=e,l=2*n-t;break;case Cp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,S=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-d)*p+(1.5+d)*g+.5*_,M=d*p-d*g;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+S*o[c+A]+v*o[l+A]+M*o[h+A];return s}}class nA extends yl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class iA extends yl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oc(t,this.TimeBufferType),this.values=oc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oc(e.times,Array),values:oc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ll:t=this.InterpolantFactoryMethodDiscrete;break;case Vo:t=this.InterpolantFactoryMethodLinear;break;case Du:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Qw(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Du,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=Vo;class $o extends ji{}$o.prototype.ValueTypeName="bool";$o.prototype.ValueBufferType=Array;$o.prototype.DefaultInterpolation=ll;$o.prototype.InterpolantFactoryMethodLinear=void 0;$o.prototype.InterpolantFactoryMethodSmooth=void 0;class P0 extends ji{}P0.prototype.ValueTypeName="color";class Xo extends ji{}Xo.prototype.ValueTypeName="number";class rA extends yl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)es.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Bs extends ji{InterpolantFactoryMethodLinear(e){return new rA(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.DefaultInterpolation=Vo;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zo extends ji{}Zo.prototype.ValueTypeName="string";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=ll;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends ji{}qo.prototype.ValueTypeName="vector";class sA{constructor(e="",t=-1,n=[],i=rS){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(aA(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=eA(l);l=Nm(l,1,u),c=Nm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Xo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];C0(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let S=0;S!==f[_].morphTargets.length;++S){const v=f[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new Xo(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(qo,d+".position",f,"pos",i),n(Bs,d+".quaternion",f,"rot",i),n(qo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xo;case"vector":case"vector2":case"vector3":case"vector4":return qo;case"color":return P0;case"quaternion":return Bs;case"bool":case"boolean":return $o;case"string":return Zo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function aA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=oA(r.type);if(r.times===void 0){const t=[],n=[];C0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const zr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lA{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const cA=new lA;class zs{constructor(e){this.manager=e!==void 0?e:cA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const er={};class uA extends Error{constructor(e,t){super(e),this.response=t}}class $f extends zs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:n,onError:i});return}er[e]=[],er[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=er[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:v,value:M})=>{if(v)m.close();else{g+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,b=u.length;w<b;w++){const P=u[w];P.onProgress&&P.onProgress(A)}m.enqueue(M),S()}})}}});return new Response(p)}else throw new uA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{zr.add(e,c);const u=er[e];delete er[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=er[e];if(u===void 0)throw this.manager.itemError(e),c;delete er[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hA extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cl("img");function l(){u(),zr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class IR extends zs{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xf,a=new $f(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:ki,o.wrapT=c.wrapT!==void 0?c.wrapT:ki,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=yi),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class L0 extends zs{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,o=new hA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class su extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lh=new je,Um=new B,Om=new B;class Zf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),t.position.copy(Um),Om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Om),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fA extends Zf{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Go*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dA extends su{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new fA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fm=new je,ha=new B,ch=new B;class pA extends Zf{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(ha),ch.copy(n.position),ch.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ch),n.updateMatrixWorld(),i.makeTranslation(-ha.x,-ha.y,-ha.z),Fm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fm)}}class I0 extends su{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mA extends Zf{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D0 extends su{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new mA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class N0 extends su{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ha{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gA extends zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return zr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});zr.add(e,l),s.manager.itemStart(e)}}class U0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bm(){return(typeof performance>"u"?Date:performance).now()}const Jf="\\[\\]\\.:\\/",_A=new RegExp("["+Jf+"]","g"),Qf="[^"+Jf+"]",vA="[^"+Jf.replace("\\.","")+"]",xA=/((?:WC+[\/:])*)/.source.replace("WC",Qf),yA=/(WCOD+)?/.source.replace("WCOD",vA),SA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qf),MA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qf),TA=new RegExp("^"+xA+yA+SA+MA+"$"),EA=["material","materials","bones","map"];class bA{constructor(e,t,n){const i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class vt{constructor(e,t,n){this.path=t,this.parsedPath=n||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,n):new vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_A,"")}static parseTrackName(e){const t=TA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);EA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=bA;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const km=new je;class wA{constructor(e,t,n=0,i=1/0){this.ray=new _l(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(km),this}intersectObject(e,t=!0,n=[]){return nf(e,this,n,t),n.sort(zm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)nf(e[i],this,n,t);return n.sort(zm),n}}function zm(r,e){return r.distance-e.distance}function nf(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)nf(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);const ou=[{title:"Blurred Vision",image:"/work/work-1.jpg",href:"/film.html"},{title:"Silent Motion",image:"/work/work-2.jpg",href:"/archive.html"},{title:"Red Mirage",image:"/work/work-3.jpg",href:"/contact.html"},{title:"Echoed Silhouette",image:"/work/work-4.jpg",href:"/contact.html"}],AA="modulepreload",RA=function(r){return"/"+r},Hm={},CA=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=RA(c),c in Hm)return;Hm[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":AA,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},PA=parseInt(eu.replace(/\D+/g,""));function Vm(r,e){if(e===sS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===$h||e===s0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(t)if(e===$h)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function qc(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,n=r.length;t<n;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const Ms="srgb",dr="srgb-linear",Gm=3001,LA=3e3;class IA extends zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new FA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new NA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new ZA(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ha.extractUrlBase(e);o=Ha.resolveURL(c,this.path)}else o=Ha.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $f(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(qc(new Uint8Array(e.slice(0,4)))===O0){try{o[at.KHR_BINARY_GLTF]=new JA(e)}catch(u){i&&i(u);return}s=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else s=JSON.parse(qc(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new h1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:o[u]=new UA;break;case at.KHR_DRACO_MESH_COMPRESSION:o[u]=new QA(s,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[u]=new e1;break;case at.KHR_MESH_QUANTIZATION:o[u]=new t1;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function DA(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NA{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],dr);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new D0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new I0(u),c.distance=h;break;case"spot":c=new dA(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class UA{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Br}extendParams(e,t,n){const i=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dr),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ms))}return Promise.all(i)}}class OA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class FA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class BA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class kA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class zA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],dr)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ms)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class HA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class VA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],dr),Promise.all(s)}}class GA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class WA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],dr),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ms)),Promise.all(s)}}class XA{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class qA{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class YA{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class jA{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class KA{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $A{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class ZA{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ci.TRIANGLES&&c.mode!==ci.TRIANGLE_STRIP&&c.mode!==ci.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new je,p=new B,m=new es,S=new B(1,1,1),v=new jw(_.geometry,_.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,g.compose(p,m,S));for(const M in l)if(M==="_COLOR_0"){const A=l[M];v.instanceColor=new ef(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);Bt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const O0="glTF",fa=12,Wm={JSON:1313821514,BIN:5130562};class JA{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fa);if(this.header={magic:qc(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==O0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-fa,i=new DataView(e,fa);let s=0;for(;s<n;){const o=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===Wm.JSON){const l=new Uint8Array(e,fa+s,o);this.content=qc(l)}else if(a===Wm.BIN){const l=fa+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class QA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=rf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=rf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Co[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},a,c,dr,f)})})}}class e1{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class t1{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class F0 extends yl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,S=1-p,v=m-f+h;for(let M=0;M!==a;M++){const A=o[g+M+a],w=o[g+M+l]*u,b=o[_+M+a],P=o[_+M]*u;s[M]=S*A+v*w+p*b+m*P}return s}}const n1=new es;class i1 extends F0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return n1.fromArray(s).normalize().toArray(s),s}}const ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xm={9728:Nn,9729:cn,9984:K_,9985:_c,9986:Sa,9987:yi},qm={33071:ki,33648:Hc,10497:zo},uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...PA>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},r1={CUBICSPLINE:void 0,LINEAR:Vo,STEP:ll},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Kf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),r.DefaultMaterial}function us(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function rr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function o1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function a1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function l1(r){let e;const t=r.extensions&&r.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fh(t.attributes):e=r.indices+":"+fh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+fh(r.targets[n]);return e}function fh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function sf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function c1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const u1=new je;class h1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new L0(this.options.manager):this.textureLoader=new gA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $f(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return us(s,a,i),rr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ha.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=uh[i.type],a=Co[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Dt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=uh[i.type],c=Co[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(S);v||(g=new c(a,m*d,i.count*d/u),v=new Gw(g,d/u),t.cache.add(S,v)),p=new Wf(v,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),p=new Dt(g,l,_);if(i.sparse!==void 0){const m=uh.SCALAR,S=Co[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new S(o[1],v,i.sparse.count*m),w=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Dt(p.array.slice(),p.itemSize,p.normalized));for(let b=0,P=A.length;b<P;b++){const y=A[b];if(p.setX(y,w[b*l]),l>=2&&p.setY(y,w[b*l+1]),l>=3&&p.setZ(y,w[b*l+2]),l>=4&&p.setW(y,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Xm[f.magFilter]||cn,u.minFilter=Xm[f.minFilter]||yi,u.wrapS=qm[f.wrapS]||zo,u.wrapT=qm[f.wrapT]||zo,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Jt(g);p.needsUpdate=!0,f(p)}),t.load(Ha.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),rr(h,o),h.userData.mimeType=o.mimeType||c1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(typeof i=="number"&&(i=i===Gm?Ms:dr),"colorSpace"in o?o.colorSpace=i:o.encoding=i===Ms?Gm:LA),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new R0,Ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new A0,Ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Kf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){const h=i[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dr),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ms)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Di);const u=s.alphaMode||hh.OPAQUE;if(u===hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===hh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Br&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Br&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Br){const h=s.emissiveFactor;a.emissive=new ke().setRGB(h[0],h[1],h[2],dr)}return s.emissiveTexture!==void 0&&o!==Br&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ms)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),rr(h,s),t.associations.set(h,{materials:e}),s.extensions&&us(i,h,s),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ym(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=l1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Ym(new Gn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?s1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=o[d];let m;const S=c[d];if(p.mode===ci.TRIANGLES||p.mode===ci.TRIANGLE_STRIP||p.mode===ci.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Xw(g,S):new Sn(g,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ci.TRIANGLE_STRIP?m.geometry=Vm(m.geometry,s0):p.mode===ci.TRIANGLE_FAN&&(m.geometry=Vm(m.geometry,$h));else if(p.mode===ci.LINES)m=new Kw(g,S);else if(p.mode===ci.LINE_STRIP)m=new Yf(g,S);else if(p.mode===ci.LINE_LOOP)m=new $w(g,S);else if(p.mode===ci.POINTS)m=new jf(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&a1(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),rr(m,s),p.extensions&&us(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&us(i,h[0],s),h[0];const f=new kr;s.extensions&&us(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(vc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new iu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),rr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let S=0,v=f.length;S<v;S++){const M=f[S],A=d[S],w=_[S],b=g[S],P=p[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const y=n._createAnimationTracks(M,A,w,b,P);if(y)for(let x=0;x<y.length;x++)m.push(y[x])}return new sA(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,u1)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new w0:c.length>1?u=new kr:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),rr(u,s),s.extensions&&us(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new kr;n.name&&(s.name=i.createUniqueName(n.name)),rr(s,n),n.extensions&&us(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ei||f instanceof Jt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Er[s.path]===Er.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Er[s.path]){case Er.weights:c=Xo;break;case Er.rotation:c=Bs;break;case Er.position:case Er.scale:c=qo;break;default:n.itemSize===1?c=Xo:c=qo;break}const u=i.interpolation!==void 0?r1[i.interpolation]:Vo,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Er[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Bs?i1:F0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function f1(r,e,t){const n=e.attributes,i=new qi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=sf(Co[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=sf(Co[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Yi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ym(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=rf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return rr(r,e),f1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?o1(r,e.targets,t):r})}const B0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const d1=new iu(-1,1,1,-1,0,1);class p1 extends Gn{constructor(){super(),this.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bi([0,2,0,0,2,0],2))}}const m1=new p1;class ed{constructor(e){this._mesh=new Sn(m1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yc extends Jo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ul.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ed(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jm extends Jo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class g1 extends Jo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ue);this._width=n.width,this._height=n.height,t=new Ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yc(B0),this.copyPass.material.blending=fr,this.clock=new U0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jm!==void 0&&(o instanceof jm?n=!0:o instanceof g1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class v1 extends Jo{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const x1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class y1 extends Jo{constructor(){super();const e=x1;this.uniforms=ul.clone(e.uniforms),this.material=new Jw({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ed(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===G_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===W_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===X_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===q_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Y_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const S1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Yo extends Jo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ti(s,o,{type:qr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ti(s,o,{type:qr});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ti(s,o,{type:qr});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=S1;this.highPassUniforms=ul.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=B0;this.copyUniforms=ul.clone(u.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ol,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new Br,this.fsQuad=new ed(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Yo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Yo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Yo.BlurDirectionX=new Ue(1,0);Yo.BlurDirectionY=new Ue(0,1);var Km={};Ne.registerPlugin(tt);let gt=null,Ci=null,nn=null,Nt=null,Va=null,Ga=null,Sc=null,wr=null,lr=!1,Yt=null,Ts=null,Ln=null,Es=null,Lr=null,bs=null,Pn=null;const Yc=new Set;let hl=null,of=null,Ir=null,M1=null,ws=null;const As={uTime:{value:0},uResolution:{value:new Ue(window.innerWidth,window.innerHeight)},uGrain:{value:.03}};let fl=null;const tr={angle:Math.PI/2,y:0,tilt:0},qn={angle:Math.PI/2,y:0,tilt:0},Li={x:0,y:0,z:0},da={angleRange:.2,yRange:.3,tiltRange:.04,lerp:.05,orbitRadius:5},Vt={exposure:1,ambientIntensity:.18,ambientColor:"#fff5ff",keyIntensity:3.25,keyColor:"#ffffff",keyX:4.2,keyY:7.5,keyZ:6.2,envBackgroundIntensity:.45,envBackgroundBlur:.55,envReflection:1.3,roughnessScale:1,metalnessScale:1,shadowOpacity:.22,shadowY:-1.35,modelX:0,modelY:-1,modelZ:-5};let dl=null,pl=null;const k0=Object.freeze({qualityProfile:"balanced",hdriUrl:"/env.hdr",enableShadows:!0});function T1(){return{profile:"balanced",pixelRatioCap:1.5,toneMappingExposure:1,enableShadows:k0.enableShadows,shadowMapSize:512}}function E1(r,e,t){typeof process<"u"&&Km&&Km.VITEST||(Es=new Jh(e),Es.compileEquirectangularShader&&Es.compileEquirectangularShader(),CA(async()=>{const{RGBELoader:n}=await import("./index-CzMpUR7d.js");return{RGBELoader:n}},[]).then(({RGBELoader:n})=>{new n().load(t,s=>{if(!Nt){s.dispose?.();return}Lr&&Lr.dispose?.(),Lr=Es.fromEquirectangular(s),r.environment=Lr.texture,r.background=Lr.texture,L1(),s.dispose?.()},void 0,()=>{r.background=null,r.environment=null})}).catch(()=>{r.background=null,r.environment=null}))}function b1(r,e,t){if(r.shadowMap.enabled=t.enableShadows,!t.enableShadows){r.shadowMap.type=xy;return}r.shadowMap.type=H_,Yt&&(Yt.castShadow=!0,Yt.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),Yt.shadow.bias=-1e-4,Yt.shadow.normalBias=.02,Yt.shadow.camera.near=1,Yt.shadow.camera.far=30,Yt.shadow.camera.left=-7,Yt.shadow.camera.right=7,Yt.shadow.camera.top=7,Yt.shadow.camera.bottom=-7);const n=new xl(20,20),i=new Zw({opacity:.22});Ln=new Sn(n,i),Ln.rotation.x=-Math.PI/2,Ln.position.y=-1.35,Ln.receiveShadow=!0,e.add(Ln)}const w1={name:"VignetteShader",uniforms:{tDiffuse:{value:null},uDarkness:{value:.15},uOffset:{value:1}},vertexShader:`
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
  `},A1={name:"GrainShader",uniforms:{tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.015}},vertexShader:`
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
  `},R1={name:"EdgeDistortionShader",uniforms:{tDiffuse:{value:null},time:{value:0},resolution:{value:new Ue(window.innerWidth,window.innerHeight)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // center coordinates
      vec2 center = uv - 0.5;
      float dist = length(center);

      // edge falloff mask (0 in center, 1 near edges)
      float edge = smoothstep(0.2, 0.75, dist);

      // subtle ripple distortion
      float wave = sin(dist * 25.0 - time * 2.0) * 0.003;
      uv += normalize(center) * wave * edge;

      // chromatic aberration amount
      float shift = 0.0056 * edge;

      vec4 r = texture2D(tDiffuse, uv + vec2(shift, 0.0));
      vec4 g = texture2D(tDiffuse, uv);
      vec4 b = texture2D(tDiffuse, uv - vec2(shift, 0.0));

      vec3 color = vec3(r.r, g.g, b.b);

      // slight brightness boost toward edges
      color *= 1.0 + edge * 0.15;

      gl_FragColor = vec4(color, 1.0);
    }
  `};function C1(r,e,t){const n=new v1(e,t);r.addPass(n),fl=new Yo(new Ue(window.innerWidth,window.innerHeight),.075,.4,.85),r.addPass(fl);const i=new yc(w1);r.addPass(i);const s=new yc(A1);s.uniforms.uGrain=As.uGrain,s.uniforms.uTime=As.uTime,r.addPass(s);const o=new yc(R1);o.uniforms.time=As.uTime,o.uniforms.resolution=As.uResolution,r.addPass(o);const a=new y1;r.addPass(a)}function P1(){gt&&(gt.toneMappingExposure=Vt.exposure),Ts&&(Ts.intensity=Vt.ambientIntensity,Ts.color?.set&&Ts.color.set(Vt.ambientColor)),Yt&&(Yt.intensity=Vt.keyIntensity,Yt.color?.set&&Yt.color.set(Vt.keyColor),Yt.position.set(Vt.keyX,Vt.keyY,Vt.keyZ))}function L1(){Nt&&(Nt.backgroundIntensity=Vt.envBackgroundIntensity,Nt.backgroundBlurriness=Vt.envBackgroundBlur)}function I1(){Ln&&(Ln.material&&(Ln.material.opacity=Vt.shadowOpacity),Ln.position.y=Vt.shadowY)}function D1(){Yc.forEach(r=>{r?.userData&&(r.roughness!==void 0&&(r.roughness=vc.clamp((r.userData.baseRoughness??r.roughness)*Vt.roughnessScale,.03,1)),r.metalness!==void 0&&(r.metalness=vc.clamp((r.userData.baseMetalness??r.metalness)*Vt.metalnessScale,0,1)),r.envMapIntensity=vc.clamp((r.userData.baseEnvMapIntensity??r.envMapIntensity??1)*Vt.envReflection,.2,5),r.needsUpdate=!0)})}function N1(r){r.map&&(r.map.colorSpace=On),r.emissiveMap&&(r.emissiveMap.colorSpace=On),r.needsUpdate=!0}function U1(r){return new wi({color:r?.color?.clone?r.color.clone():new ke(16777215),map:r?.map||null,normalMap:r?.normalMap||null,roughnessMap:r?.roughnessMap||null,metalnessMap:r?.metalnessMap||null,aoMap:r?.aoMap||null,roughness:r?.roughness??.65,metalness:r?.metalness??.2,clearcoat:.12,clearcoatRoughness:.16,envMapIntensity:1.35})}function O1(r){const e=t=>{if(!t)return t;let n=t;return!n.isMeshStandardMaterial&&!n.isMeshPhysicalMaterial&&(n=U1(t)),N1(n),n.userData.baseRoughness=n.roughness??.8,n.userData.baseMetalness=n.metalness??0,n.userData.baseEnvMapIntensity=n.envMapIntensity??1,Yc.add(n),n};Array.isArray(r.material)?r.material=r.material.map(e):r.material=e(r.material)}function F1(r){const e=new qi().setFromObject(r),t=e.getCenter(new B),n=e.getSize(new B);return r.children.forEach(i=>{i.position.x-=t.x,i.position.y-=e.min.y,i.position.z-=t.z}),n}function B1(r){F1(r),r.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,O1(e))})}function k1(){if(ws)return ws;const r=new IA,e=new Promise(n=>{r.load("/home/scene.glb",i=>{if(!Nt||!lr){n();return}hl=i.scene,B1(hl),D1(),n()},void 0,i=>{console.error("[three.js] Home model load error:",i),n()})}),t=new Promise(n=>{n()});return ws=Promise.all([e,t]),ws}async function Mc(r){if(!Nt||(ws&&await ws,!Nt||!lr))return;const e=r==="work"?of:hl;!e||Ir===e||(Ir&&Ir.parent&&Nt.remove(Ir),e.position.set(Vt.modelX,Vt.modelY,Vt.modelZ),Nt.add(e),Ir=e)}function z1(r,e){dl=r,pl=e}function H1(){dl=null,pl=null}function $m(){const r=document.querySelector(".menu-toggle-btn");r&&r.classList.contains("menu-open")&&r.click()}const Ta=200,z0={xHalf:6,yMin:-2,yMax:4,zMin:-10,zMax:2};function V1(r){const e=new Gn,t=new Float32Array(Ta*3),n=new Float32Array(Ta),i=new Float32Array(Ta),{xHalf:s,yMin:o,yMax:a,zMin:l,zMax:c}=z0;for(let f=0;f<Ta;f++)t[f*3]=(Math.random()-.5)*2*s,t[f*3+1]=o+Math.random()*(a-o),t[f*3+2]=l+Math.random()*(c-l),n[f]=.008+Math.random()*.016,i[f]=.35+Math.random()*.6;e.setAttribute("position",new Dt(t,3)),e.setAttribute("aSize",new Dt(n,1)),e.setAttribute("aOpacity",new Dt(i,1));const u=Math.min(window.devicePixelRatio||1,1.5),h=new on({transparent:!0,depthWrite:!1,blending:ol,uniforms:{uPixelRatio:{value:u}},vertexShader:`
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
    `});Pn=new jf(e,h),Pn.frustumCulled=!1,r.add(Pn)}function G1(r){if(!Pn)return;const e=Pn.geometry.attributes.position.array,{xHalf:t,yMin:n,yMax:i,zMin:s,zMax:o}=z0;for(let a=0;a<Ta;a++){const l=a*3;e[l+1]+=.001,e[l]+=Math.sin(r*.3+a*.5)*4e-4,e[l+2]+=Math.cos(r*.25+a*.7)*3e-4,e[l+1]>i&&(e[l+1]=n,e[l]=(Math.random()-.5)*2*t,e[l+2]=s+Math.random()*(o-s))}Pn.geometry.attributes.position.needsUpdate=!0}function Zm(){if(console.log("[three.js] webgl() called, isRunning:",lr),lr)return console.log("[three.js] already running, returning existing scene"),{scene:Nt,camera:nn,renderer:gt};lr=!0,console.log("[three.js] initializing WebGL scene");const r=T1();if(Nt=new b0,Nt.fog=new Gf(657935,.045),nn=new vn(75,window.innerWidth/window.innerHeight,.1,1e3),gt=new Vw({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),gt.setSize(window.innerWidth,window.innerHeight),gt.setPixelRatio(Math.min(window.devicePixelRatio||1,r.pixelRatioCap)),gt.toneMapping=Ff,gt.toneMappingExposure=r.toneMappingExposure,gt.outputColorSpace=On,wr=document.querySelector("#background"),console.log("[three.js] background container found:",!!wr),!wr){console.warn("[three.js] #background element not found, creating one"),wr=document.createElement("div"),wr.id="background";const s=document.body.firstChild;document.body.insertBefore(wr,s)}wr.appendChild(gt.domElement),console.log("[three.js] canvas appended to container"),Ts=new N0(16777215,.18),Nt.add(Ts),Yt=new D0(16777215,3.25),Yt.position.set(4.2,7.5,6.2),Nt.add(Yt),P1(),E1(Nt,gt,k0.hdriUrl),b1(gt,Nt,r),I1(),V1(Nt);const e=sessionStorage.getItem("webgl-page")||"home";k1().then(()=>{if(!Nt||!lr)return;Mc(e==="work"?"work":"home");const o=H0(e);Li.x=o.x,Li.y=o.y,Li.z=o.z});let t=null;Va=()=>{t&&clearTimeout(t),t=setTimeout(()=>{if(!nn||!gt||!Ci)return;const s=window.innerWidth,o=window.innerHeight;nn.aspect=s/o,nn.updateProjectionMatrix(),gt.setSize(s,o),Ci.setSize(s,o),fl&&fl.setSize(s,o),As.uResolution.value.set(s,o)},100)},window.addEventListener("resize",Va);try{Ci=new _1(gt)}catch{Ci={addPass:()=>{},insertPass:()=>{},setSize:()=>{},dispose:()=>{},render:()=>gt?.render(Nt,nn)}}C1(Ci,Nt,nn),tr.angle=Math.PI/2,tr.y=0,tr.tilt=0,qn.angle=Math.PI/2,qn.y=0,qn.tilt=0;let n=0;Ga=s=>{const o=performance.now();if(o-n<16)return;n=o;const a=s.clientX/window.innerWidth*2-1,l=-(s.clientY/window.innerHeight)*2+1;tr.angle=Math.PI/2+a*da.angleRange,tr.y=-l*da.yRange,tr.tilt=a*da.tiltRange},window.addEventListener("mousemove",Ga,{passive:!0}),performance.now();const i=()=>{if(!lr||!nn||!Ci)return;const s=performance.now(),o=da.lerp;qn.angle+=(tr.angle-qn.angle)*o,qn.y+=(tr.y-qn.y)*o,qn.tilt+=(tr.tilt-qn.tilt)*o;const a=Ir?Ir.position:{x:Vt.modelX,y:Vt.modelY,z:Vt.modelZ},l=a.x+Li.x,c=a.y+Li.y,u=a.z+Li.z,h=da.orbitRadius;nn.position.x=l+Math.cos(qn.angle)*h,nn.position.z=u+Math.sin(qn.angle)*h,nn.position.y=c+qn.y+1;const f=s*.001;if(nn.position.x+=Math.sin(f*.7)*.012+Math.sin(f*1.3)*.008,nn.position.y+=Math.sin(f*.5)*.012+Math.cos(f*1.1)*.008,nn.position.z+=Math.cos(f*.6)*.008,nn.lookAt(l,c,u),nn.rotation.z+=qn.tilt,As.uTime.value=f,G1(f),Ci.render(),dl&&pl){const d=gt.autoClear;gt.autoClear=!1,gt.clearDepth(),gt.render(dl,pl),gt.autoClear=d}Sc=requestAnimationFrame(i)};return i(),{scene:Nt,camera:nn,renderer:gt}}function af(){if(!lr)return;lr=!1,Sc&&(cancelAnimationFrame(Sc),Sc=null),Va&&(window.removeEventListener("resize",Va),Va=null),Ga&&(window.removeEventListener("mousemove",Ga),Ga=null),bs&&(bs.kill(),bs=null),As.uTime.value=0,fl=null,Pn&&(Pn.geometry&&Pn.geometry.dispose(),Pn.material&&Pn.material.dispose(),Pn.parent&&Pn.parent.remove(Pn),Pn=null),dl=null,pl=null,Ln&&(Ln.geometry&&Ln.geometry.dispose(),Ln.material&&Ln.material.dispose(),Ln=null),Lr&&(Lr.dispose(),Lr=null),Es&&(Es.dispose(),Es=null),Yc.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),Yc.clear();const r=e=>{e&&(e.traverse(t=>{if(t.isMesh){t.geometry&&t.geometry.dispose();const n=Array.isArray(t.material)?t.material:[t.material];for(const i of n)if(i&&i!==M1){for(const s of Object.keys(i)){const o=i[s];o&&typeof o.dispose=="function"&&o.dispose()}i.dispose()}}}),Nt?.remove(e))};r(hl),r(of),hl=null,of=null,Ir=null,ws=null,Ci&&(Ci.dispose(),Ci=null),gt&&(gt.dispose(),gt.domElement&&gt.domElement.parentNode&&gt.domElement.parentNode.removeChild(gt.domElement),gt=null),Nt=null,nn=null,Yt=null,Ts=null,wr=null}function H0(r){return r==="contact"?{x:-2,y:0,z:0}:r==="work"?{x:0,y:0,z:0}:{x:0,y:0,z:0}}function Wa(r,e=!1){const t=H0(r);sessionStorage.setItem("webgl-page",r),bs&&(bs.kill(),bs=null),e?(Li.x=t.x,Li.y=t.y,Li.z=t.z):bs=Ne.to(Li,{x:t.x,y:t.y,z:t.z,duration:1.8,ease:"power3.inOut"})}let Xa=!1;const Ve={ARC_RADIUS:14,ARC_SPAN:3.5,STRIP_HEIGHT:5.5,STRIP_Y_OFFSET:-1.2,WIDTH_SEGMENTS:96,HEIGHT_SEGMENTS:24,ITEMS_ON_STRIP:11,GAP_SIZE:.03,NUM_UNIQUE:4,CAMERA_FOV:50,CAMERA_Z:12,SCROLL_SPEED:.004,SCROLL_LERP:.08,DRAG_MULTIPLIER:.008,PARALLAX_ROTATION_X:.018,PARALLAX_ROTATION_Y:.03,PARALLAX_CAMERA_X:.09,PARALLAX_CAMERA_Y:.05,PARALLAX_LERP:.06,WAVE_AMPLITUDE:.18,WAVE_FREQUENCY:2.5,WAVE_SPEED:.3,POINT_LIGHT_INTENSITY:2.5,POINT_LIGHT_Z:10,AMBIENT_INTENSITY:.4,PARTICLE_COUNT:120},W1=`
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
`,X1=`
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

    // Edge fade
    float edgeFade = smoothstep(0.0, 0.15, vUv.x) * (1.0 - smoothstep(0.85, 1.0, vUv.x));
    col *= edgeFade;

    // Film grain — matches post-FX treatment of the 3D scene behind
    float grain = (hash(vUv * 1000.0 + uTime * 100.0) - 0.5) * 0.06;
    col += grain;

    gl_FragColor = vec4(col, edgeFade);
  }
`,N={container:null,titleEl:null,scene:null,camera:null,clock:null,stripGroup:null,stripMesh:null,stripGeometry:null,stripMaterial:null,textureCache:new Map,textures:[],particleSystem:null,particlePositions:null,pointLight:null,ambientLight:null,scrollTarget:0,scrollCurrent:0,scrollVelocity:0,lastDragTime:0,activeIndex:0,lastActiveTitle:"",mouseX:0,mouseY:0,parallaxCurrent:{rx:0,ry:0,cx:0,cy:0},raycaster:new wA,rayMouse:new Ue,hoverUV:null,hoverActive:!1,rippleStrength:0,animationFrame:null,isPointerDown:!1,lastPointerX:0,dragStartX:0,dragStartY:0,handlers:{resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null}};function q1(){const r=new L0,t=[...new Set(ou.map(n=>n.image))].map(n=>N.textureCache.has(n)?Promise.resolve():new Promise(i=>{r.load(n,s=>{s.colorSpace=On,s.minFilter=yi,s.magFilter=cn,s.generateMipmaps=!0,N.textureCache.set(n,s),i()},void 0,()=>{console.warn(`[work] Failed to load texture: ${n}`),i()})}));return Promise.all(t)}function Y1(){const r=Ve.ARC_RADIUS,e=Ve.ARC_SPAN,t=Ve.STRIP_HEIGHT,n=Ve.WIDTH_SEGMENTS,i=Ve.HEIGHT_SEGMENTS,s=(n+1)*(i+1),o=new Float32Array(s*3),a=new Float32Array(s*3),l=new Float32Array(s*2);let c=0,u=0,h=0;for(let _=0;_<=i;_++){const g=_/i,p=(g-.5)*t+Ve.STRIP_Y_OFFSET;for(let m=0;m<=n;m++){const S=m/n,v=(S-.5)*e,M=Math.sin(v)*r,A=(Math.cos(v)-1)*r;o[c++]=M,o[c++]=p,o[c++]=A;const w=Math.sin(v),b=Math.cos(v);a[u++]=w,a[u++]=0,a[u++]=b,l[h++]=S,l[h++]=g}}const f=[];for(let _=0;_<i;_++)for(let g=0;g<n;g++){const p=_*(n+1)+g,m=p+1,S=p+(n+1),v=S+1;f.push(p,m,S),f.push(m,v,S)}const d=new Gn;return d.setAttribute("position",new Dt(o,3)),d.setAttribute("normal",new Dt(a,3)),d.setAttribute("uv",new Dt(l,2)),d.setIndex(f),d}function j1(){const r=window.innerWidth,e=window.innerHeight;N.camera=new vn(Ve.CAMERA_FOV,r/e,.1,100),N.camera.position.set(0,0,Ve.CAMERA_Z),N.scene=new b0,N.ambientLight=new N0(16777215,Ve.AMBIENT_INTENSITY),N.scene.add(N.ambientLight),N.pointLight=new I0(16777215,Ve.POINT_LIGHT_INTENSITY,30,1.5),N.pointLight.position.set(0,.5,Ve.POINT_LIGHT_Z),N.scene.add(N.pointLight),N.stripGroup=new kr,N.scene.add(N.stripGroup),N.clock=new U0,z1(N.scene,N.camera)}function K1(){const r=[...new Set(ou.map(e=>e.image))];for(N.textures=r.map(e=>N.textureCache.get(e)).filter(Boolean);N.textures.length<4;)N.textures.push(N.textures[0]||new Jt);N.stripGeometry=Y1(),N.stripMaterial=new on({vertexShader:W1,fragmentShader:X1,uniforms:{uTex0:{value:N.textures[0]},uTex1:{value:N.textures[1]},uTex2:{value:N.textures[2]},uTex3:{value:N.textures[3]},uScrollOffset:{value:0},uItemsOnStrip:{value:Ve.ITEMS_ON_STRIP},uNumUnique:{value:Ve.NUM_UNIQUE},uGapSize:{value:Ve.GAP_SIZE},uTime:{value:0},uWaveAmp:{value:Ve.WAVE_AMPLITUDE},uWaveFreq:{value:Ve.WAVE_FREQUENCY},uWaveSpeed:{value:Ve.WAVE_SPEED},uHoverUV:{value:new Ue(-1,-1)},uRippleStrength:{value:0}},transparent:!0,side:Wi,depthWrite:!0}),N.stripMesh=new Sn(N.stripGeometry,N.stripMaterial),N.stripMesh.frustumCulled=!1,N.stripGroup.add(N.stripMesh)}const $1=`
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
`,Z1=`
  varying float vOpacity;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float alpha = smoothstep(1.0, 0.3, d) * vOpacity;
    gl_FragColor = vec4(vec3(1.0), alpha);
  }
`;function J1(){const r=Ve.PARTICLE_COUNT,e=Ve.ARC_RADIUS,t=Ve.ARC_SPAN,n=Ve.STRIP_HEIGHT*.5,i=Ve.STRIP_Y_OFFSET,s=new Float32Array(r*3),o=new Float32Array(r),a=new Float32Array(r);for(let f=0;f<r;f++){const d=(Math.random()-.5)*t,_=e+(Math.random()-.3)*.6;s[f*3]=Math.sin(d)*_,s[f*3+1]=(Math.random()-.5)*n*2+i,s[f*3+2]=(Math.cos(d)-1)*_,o[f]=.006+Math.random()*.014,a[f]=.2+Math.random()*.5}const l=new Gn;l.setAttribute("position",new Dt(s,3)),l.setAttribute("aSize",new Dt(o,1)),l.setAttribute("aOpacity",new Dt(a,1));const c=Math.min(window.devicePixelRatio||1,1.5),u=new on({transparent:!0,depthWrite:!1,blending:ol,uniforms:{uPixelRatio:{value:c}},vertexShader:$1,fragmentShader:Z1}),h=new jf(l,u);h.frustumCulled=!1,N.stripGroup.add(h),N.particleSystem=h,N.particlePositions=s}function Q1(r){if(!N.particleSystem)return;const e=N.particlePositions,t=Ve.PARTICLE_COUNT,n=Ve.ARC_RADIUS,i=Ve.ARC_SPAN,s=Ve.STRIP_HEIGHT*.5,o=Ve.STRIP_Y_OFFSET,a=o-s,l=o+s;for(let c=0;c<t;c++){const u=c*3;if(e[u+1]+=.002,e[u]+=Math.sin(r*.4+c*.6)*5e-4,e[u+2]+=Math.cos(r*.35+c*.8)*4e-4,e[u+1]>l){const h=(Math.random()-.5)*i,f=n+(Math.random()-.3)*.6;e[u]=Math.sin(h)*f,e[u+1]=a,e[u+2]=(Math.cos(h)-1)*f}if(N.hoverActive&&N.hoverUV){const h=e[u],f=e[u+2],_=Math.atan2(h,f+n)/i+.5,g=(e[u+1]-o)/(s*2)+.5,p=(_-N.hoverUV.x)*8.9,m=g-N.hoverUV.y,S=Math.sqrt(p*p+m*m);if(S<2&&S>.01){const v=Math.exp(-S*2)*.008*N.rippleStrength;e[u]+=p/S*v*.5,e[u+1]+=m/S*v,e[u+2]+=p/S*v*.3}}}N.particleSystem.geometry.attributes.position.needsUpdate=!0}function eR(){if(!N.titleEl)return;const r=.5*Ve.ITEMS_ON_STRIP+N.scrollCurrent,e=(Math.floor(r)%Ve.NUM_UNIQUE+Ve.NUM_UNIQUE)%Ve.NUM_UNIQUE;N.activeIndex=e;const t=ou[e];t&&N.lastActiveTitle!==t.title&&(N.lastActiveTitle=t.title,Ne.to(N.titleEl,{opacity:0,duration:.15,onComplete:()=>{N.titleEl.textContent=t.title,Ne.to(N.titleEl,{opacity:1,duration:.25})}}))}function tR(r){if(!N.stripMaterial)return;const e=N.stripMaterial.uniforms;e.uScrollOffset.value=N.scrollCurrent,e.uTime.value=r}function nR(){const r=N.clock?N.clock.getElapsedTime():0,e={rx:N.mouseY*Ve.PARALLAX_ROTATION_X,ry:N.mouseX*Ve.PARALLAX_ROTATION_Y,cx:N.mouseX*Ve.PARALLAX_CAMERA_X,cy:N.mouseY*Ve.PARALLAX_CAMERA_Y},t=N.parallaxCurrent,n=Ve.PARALLAX_LERP;if(t.rx+=(e.rx-t.rx)*n,t.ry+=(e.ry-t.ry)*n,t.cx+=(e.cx-t.cx)*n,t.cy+=(e.cy-t.cy)*n,N.stripGroup&&(N.stripGroup.rotation.x=t.rx,N.stripGroup.rotation.y=t.ry),N.camera){const i=Math.sin(r*.7)*.007+Math.sin(r*1.3)*.005,s=Math.sin(r*.5)*.006+Math.cos(r*1.1)*.004,o=Ve.CAMERA_Z,a=Math.PI/2+t.ry;N.camera.position.x=Math.cos(a)*o+i,N.camera.position.y=t.cy+t.rx*Ve.CAMERA_Z*.5+s,N.camera.position.z=Math.sin(a)*o,N.camera.lookAt(0,0,0),N.camera.rotation.z=t.ry*.18,N.pointLight&&(N.pointLight.position.x=N.camera.position.x*.5,N.pointLight.position.y=.5+N.camera.position.y*.3)}}function iR(){!N.isPointerDown&&Math.abs(N.scrollVelocity)>1e-4?(N.scrollTarget+=N.scrollVelocity,N.scrollVelocity*=.95):N.isPointerDown||(N.scrollVelocity=0),N.scrollCurrent+=(N.scrollTarget-N.scrollCurrent)*Ve.SCROLL_LERP}function rR(r){r.preventDefault();const e=Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX:r.deltaY;N.scrollTarget+=e*Ve.SCROLL_SPEED}function sR(r){N.isPointerDown=!0,N.lastPointerX=r.clientX,N.dragStartX=r.clientX,N.dragStartY=r.clientY,N.scrollVelocity=0,N.lastDragTime=performance.now()}let Jm=0;function oR(r){if(N.isPointerDown){const t=performance.now(),n=r.clientX-N.lastPointerX,i=t-N.lastDragTime;N.scrollTarget-=n*Ve.DRAG_MULTIPLIER,i>0&&(N.scrollVelocity=-n*Ve.DRAG_MULTIPLIER/(i/16)),N.lastPointerX=r.clientX,N.lastDragTime=t}const e=performance.now();if(!(e-Jm<16)&&(Jm=e,N.mouseX=r.clientX/window.innerWidth*2-1,N.mouseY=-(r.clientY/window.innerHeight)*2+1,N.camera&&N.stripMesh&&!N.isPointerDown)){N.rayMouse.set(N.mouseX,N.mouseY),N.raycaster.setFromCamera(N.rayMouse,N.camera);const t=N.raycaster.intersectObject(N.stripMesh,!1);t.length>0&&t[0].uv?(N.hoverUV=t[0].uv.clone(),N.hoverActive=!0,document.body.style.cursor="pointer"):(N.hoverActive=!1,document.body.style.cursor="")}}function aR(r){if(!N.isPointerDown)return;N.isPointerDown=!1;const e=Math.abs(r.clientX-N.dragStartX),t=Math.abs(r.clientY-N.dragStartY);e<5&&t<5&&lR(r)}function lR(r){if(!N.camera||!N.stripMesh)return;N.rayMouse.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),N.raycaster.setFromCamera(N.rayMouse,N.camera);const e=N.raycaster.intersectObject(N.stripMesh,!1);if(e.length>0){const t=e[0].uv;if(t){const n=t.x*Ve.ITEMS_ON_STRIP+N.scrollCurrent,i=(Math.floor(n)%Ve.NUM_UNIQUE+Ve.NUM_UNIQUE)%Ve.NUM_UNIQUE,s=ou[i];if(s?.href){const o=document.querySelector(`a[href="${s.href}"]`);o?o.click():window.location.href=s.href}}}}let Po=null;function cR(){Po&&clearTimeout(Po),Po=setTimeout(()=>{if(!N.camera)return;const r=window.innerWidth,e=window.innerHeight;N.camera.aspect=r/e,N.camera.updateProjectionMatrix()},100)}function uR(){N.handlers.wheel=rR,N.handlers.pointerdown=sR,N.handlers.pointermove=oR,N.handlers.pointerup=aR,N.handlers.resize=cR,window.addEventListener("wheel",N.handlers.wheel,{passive:!1}),window.addEventListener("pointerdown",N.handlers.pointerdown),window.addEventListener("pointermove",N.handlers.pointermove),window.addEventListener("pointerup",N.handlers.pointerup),window.addEventListener("resize",N.handlers.resize)}function hR(){N.handlers.wheel&&window.removeEventListener("wheel",N.handlers.wheel),N.handlers.pointerdown&&window.removeEventListener("pointerdown",N.handlers.pointerdown),N.handlers.pointermove&&window.removeEventListener("pointermove",N.handlers.pointermove),N.handlers.pointerup&&window.removeEventListener("pointerup",N.handlers.pointerup),N.handlers.resize&&window.removeEventListener("resize",N.handlers.resize)}function fR(){if(!N.stripMaterial)return;const r=N.stripMaterial.uniforms,e=N.hoverActive?1:0;N.rippleStrength+=(e-N.rippleStrength)*.08,r.uRippleStrength.value=N.rippleStrength,N.hoverUV?r.uHoverUV.value.set(N.hoverUV.x,N.hoverUV.y):r.uHoverUV.value.set(-1,-1)}function V0(){const r=N.clock?N.clock.getElapsedTime():0;iR(),tR(r),nR(),fR(),Q1(r),eR(),N.animationFrame=requestAnimationFrame(V0)}async function Qm(){if(Xa)return;Xa=!0,console.log("[work] initializing strip carousel");const r=document.querySelector('[data-barba="container"]');if(!r){console.warn("[work] no barba container found"),Xa=!1;return}N.container=r,N.titleEl=r.querySelector(".slide-title"),j1(),await q1(),K1(),J1(),uR(),N.animationFrame=requestAnimationFrame(V0)}function qa(){Xa&&(Xa=!1,console.log("[work] destroying strip carousel"),N.animationFrame!==null&&(cancelAnimationFrame(N.animationFrame),N.animationFrame=null),N.titleEl&&Ne.killTweensOf(N.titleEl),hR(),H1(),N.stripMesh&&N.stripGroup?.remove(N.stripMesh),N.stripMaterial&&(N.stripMaterial.dispose(),N.stripMaterial=null),N.stripGeometry&&(N.stripGeometry.dispose(),N.stripGeometry=null),N.stripMesh=null,N.textures=[],N.particleSystem&&(N.stripGroup?.remove(N.particleSystem),N.particleSystem.geometry.dispose(),N.particleSystem.material.dispose(),N.particleSystem=null,N.particlePositions=null),N.pointLight&&(N.scene?.remove(N.pointLight),N.pointLight=null),N.ambientLight&&(N.scene?.remove(N.ambientLight),N.ambientLight=null),N.stripGroup&&(N.scene?.remove(N.stripGroup),N.stripGroup=null),N.textureCache.forEach(r=>r.dispose()),N.textureCache.clear(),Po&&(clearTimeout(Po),Po=null),document.body.style.cursor="",N.scene=null,N.camera=null,N.clock=null,N.container=null,N.titleEl=null,N.scrollTarget=0,N.scrollCurrent=0,N.scrollVelocity=0,N.lastDragTime=0,N.activeIndex=0,N.lastActiveTitle="",N.mouseX=0,N.mouseY=0,N.parallaxCurrent={rx:0,ry:0,cx:0,cy:0},N.hoverUV=null,N.hoverActive=!1,N.rippleStrength=0,N.isPointerDown=!1,N.handlers={resize:null,wheel:null,pointermove:null,pointerdown:null,pointerup:null})}Ne.registerPlugin(tt,$r);const Tc=new Map,Ec=[],xo=[];function dR(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function Ea(r,e={type:"lines, words, chars"}){if(!r)return null;if(Tc.has(r))return Tc.get(r);const t=new $r(r,{type:e.type||"lines, words, chars",reduceWhiteSpace:!1});if(t.lines?.length){const n=t.lines,i=n.length,o=window.getComputedStyle(r).textIndent;o&&o!=="0px"&&(n[0].style.paddingLeft=o,r.style.textIndent="0");const l=new Array(i);for(let c=0;c<i;c++){const u=document.createElement("div");u.className="u-overflow-hidden",u.style.cssText="display:block;width:100%",l[c]=u}for(let c=0;c<i;c++){const u=n[c],h=l[c];u.parentNode.insertBefore(h,u),h.appendChild(u),u.style.cssText="display:block;width:100%;overflow:visible"}}return Tc.set(r,t),Ec.push(t),t}function pR(r,{direction:e="up",duration:t=.8,stagger:n=.03,ease:i="power2.out"}={}){const s=Ea(r);if(!s)return null;const o=e==="down"?100:-100;return Ne.fromTo(s.words,{y:o,opacity:0},{y:0,opacity:1,duration:t,stagger:n,ease:i})}async function bc(r){if(!r)return;const e=r.querySelectorAll(".text-reveal-header:not(.has-3d-text)");if(!e.length)return;const t=Array.from(e);t.length&&Ne.set(t,{clearProps:"all"});const n=[];for(let i=0;i<e.length;i++){const s=e[i],a=s.classList.contains("text-reveal-reverse")?"down":"up",l=pR(s,{direction:a,duration:.8,stagger:.04});l&&n.push(dR(l))}n.length&&await Promise.all(n)}function mR(){lf();const r=document.querySelectorAll(".text-reveal:not(.hero .text-reveal)"),e=document.querySelectorAll(".text-reveal-reverse:not(.hero .text-reveal-reverse)"),t=document.querySelectorAll(".text-reveal-header:not(.hero .text-reveal-header):not(.contact-contain .text-reveal-header)"),n=document.querySelectorAll(".body-text-reveal:not(.hero .body-text-reveal):not(.hero-text-reveal)");for(let i=0;i<r.length;i++){const s=r[i],o=Ea(s);if(!o?.words?.length)continue;const a=Ne.fromTo(o.words,{y:-100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&xo.push(a.scrollTrigger)}for(let i=0;i<e.length;i++){const s=e[i],o=Ea(s);if(!o?.words?.length)continue;const a=Ne.fromTo(o.words,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&xo.push(a.scrollTrigger)}for(let i=0;i<t.length;i++){const s=t[i],o=Ea(s);if(!o?.words?.length)continue;const l=s.classList.contains("text-reveal-reverse")?100:-100,c=Ne.fromTo(o.words,{y:l,opacity:0},{y:0,opacity:1,duration:1,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:s,start:"top 80%",toggleActions:"play reverse play reverse"}});c.scrollTrigger&&xo.push(c.scrollTrigger)}for(let i=0;i<n.length;i++){const s=n[i],o=Ea(s,{type:"lines"});if(!o?.lines?.length)continue;Ne.set(o.lines,{yPercent:100,opacity:0});const a=Ne.to(o.lines,{yPercent:0,opacity:1,duration:1,stagger:.1,ease:"power4.out",scrollTrigger:{trigger:s,start:"top 90%",toggleActions:"play reverse play reverse"}});a.scrollTrigger&&xo.push(a.scrollTrigger)}}function lf(){for(;xo.length;){const r=xo.pop();r&&r.kill()}}function eg(){for(let r=Ec.length-1;r>=0;r--){const e=Ec[r];e&&typeof e.revert=="function"&&e.revert()}Ec.length=0,Tc.clear()}Ne.registerPlugin(tt);function gR(){}function _R(){window.removeEventListener("resize",gR)}function cf(){_R()}Ne.registerPlugin($r);const ac={duration:.5,ease:"power2.inOut",stagger:.02},tg="50% 50% -10px",ng=new WeakMap;function vR(){document.querySelectorAll(".nav-wrap a, .bottom-nav-wrap a").forEach(e=>{if(e.id==="time"||ng.has(e))return;const t=(e.textContent||"").trim();if(!t)return;getComputedStyle(e).display==="inline"&&(e.style.display="inline-block"),Ne.set(e,{position:"relative",overflow:"hidden",perspective:800});const i=t.replace(/[\s\u2800]/g," "),s=ig(i,!1),o=ig(i,!0);e.textContent="",e.appendChild(s),e.appendChild(o);const a=new $r(s,{type:"chars"}),l=new $r(o,{type:"chars"});Ne.set(a.chars,{rotationX:0,opacity:1,transformOrigin:tg,backfaceVisibility:"hidden"}),Ne.set(l.chars,{rotationX:-90,opacity:0,transformOrigin:tg,backfaceVisibility:"hidden"});let c=null;const u=()=>{c?.kill(),c=rg(a.chars,l.chars,!0)},h=()=>{c?.kill(),c=rg(a.chars,l.chars,!1)};e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",h),ng.set(e,{originalSplit:a,italicSplit:l,handleEnter:u,handleLeave:h})})}function ig(r,e){const t=document.createElement("span");return t.textContent=r,Ne.set(t,{display:"block",whiteSpace:"nowrap",width:"100%",height:"100%",textAlign:"center",...e&&{position:"absolute",top:0,left:0,fontStyle:"normal",width:"100%"}}),t}function rg(r,e,t){const n=Ne.timeline();return t?n.to(r,{rotationX:90,opacity:0,...ac},0).to(e,{rotationX:0,opacity:1,...ac},0):n.to(r,{rotationX:0,opacity:1,...ac},0).to(e,{rotationX:-90,opacity:0,...ac},0),n}const jc=new WeakMap,xR=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function yR(){const r=getComputedStyle(document.documentElement);return{ICON_SIZE:parseFloat(r.getPropertyValue("--btn-icon-size"))||44,GAP:parseFloat(r.getPropertyValue("--btn-gap"))||10}}function SR(){if(xR())return;document.querySelectorAll(".btn").forEach(e=>{if(jc.has(e))return;const t={btn:e,container:e.querySelector(".btn-container"),text:e.querySelector(".btn-text"),circleIcon:e.querySelector(".btn-icon-circle"),squareIcon:e.querySelector(".btn-icon-square")};if(!t.container||!t.circleIcon||!t.squareIcon){console.warn("Button missing required elements:",e);return}const n=yR();t.config=n,MR(t);let i=null;const s=()=>{i&&i.kill(),i=sg(t,!0)},o=()=>{i&&i.kill(),i=sg(t,!1)};e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",o),jc.set(e,{elements:t,handleEnter:s,handleLeave:o,timeline:()=>i})})}function MR(r){const{container:e,circleIcon:t,squareIcon:n,config:i}=r,s=n.getBoundingClientRect().height||i.ICON_SIZE;r.iconSize=s;const o=s/2,a=s*.05;r.pillRadius=o,r.squareRadius=a,Ne.set(e,{x:0,borderRadius:`${o}px`}),Ne.set(t,{x:i.GAP,opacity:1,borderRadius:"50%"}),Ne.set(n,{x:"-100%",opacity:0,borderRadius:"50%"})}function sg(r,e){const{container:t,circleIcon:n,squareIcon:i,config:s}=r,o=r.iconSize||s.ICON_SIZE,a=s.GAP,l=o+a,c=r.pillRadius,u=r.squareRadius,h=Ne.timeline({defaults:{duration:.4,ease:"power4.inOut"}});return e?h.to(i,{x:0,opacity:1,borderRadius:`${u}px`},0).to(t,{x:l,borderRadius:`${u}px`},0).to(n,{x:l*.5,opacity:0},0):h.to(i,{x:"-100%",opacity:0,borderRadius:"50%"},0).to(t,{x:0,borderRadius:`${c}px`},0).to(n,{x:a,opacity:1},0),h}function TR(){document.querySelectorAll(".btn").forEach(e=>{const t=jc.get(e);t&&(t.timeline()?.kill(),e.removeEventListener("mouseenter",t.handleEnter),e.removeEventListener("mouseleave",t.handleLeave),t.elements.container&&Ne.set(t.elements.container,{clearProps:"all"}),t.elements.squareIcon&&Ne.set(t.elements.squareIcon,{clearProps:"all"}),t.elements.circleIcon&&Ne.set(t.elements.circleIcon,{clearProps:"all"}),jc.delete(e))})}function dh(r){return r?new Promise(e=>r.eventCallback("onComplete",e)):Promise.resolve()}function ER(){return null}function bR(r,e){const t=Ne.timeline({defaults:{ease:"power2.in"}});let n=!1;const i=document.querySelector(".link-main");return i&&(n=!0,t.to(i,{y:-20,opacity:0,duration:.25,onComplete:()=>{e==="home"&&Ne.set(i,{autoAlpha:0,clearProps:"transform,opacity"})}},0)),n?t:null}function wR(){const r=document.querySelector(".link-main");r&&Ne.set(r,{autoAlpha:0})}function AR(){const r=document.querySelector(".link-main");r&&Ne.set(r,{autoAlpha:1,y:20,opacity:0})}function RR(){const r=document.querySelector(".link-main");return r?Ne.to(r,{y:0,opacity:1,duration:.6,ease:"power2.out"}):null}let ba=null;function og(){if(ba||(ba=document.getElementById("time")),ba){const r=new Date,e=String(r.getHours()).padStart(2,"0"),t=String(r.getMinutes()).padStart(2,"0"),n=String(r.getSeconds()).padStart(2,"0");ba.textContent=`${e}:${t}:${n} IST`}}function CR(){ba=null,og(),window.timeInterval&&clearInterval(window.timeInterval),window.timeInterval=setInterval(og,1e3)}function PR(r){return r==="home"||r==="contact"||r==="work"}function ph(r,{skipWebglSetup:e=!1}={}){console.log("[barba] initPageFeatures called with namespace:",r),CR(),gy(),mR(),vR(),TR(),SR();const t=r||document.querySelector('[data-barba="container"]')?.dataset.barbaNamespace;console.log("[barba] resolved namespace:",t);const n=document.querySelector(".link-main");if(n&&(Ne.set(n,{autoAlpha:t==="home"?0:1}),t!=="home"&&t!=="contact"&&Ne.set(n,{clearProps:"transform,opacity"})),e){t==="work"&&Qm();return}t==="work"?(console.log("[barba] initializing work page"),Zm(),Wa("work",!0),Mc("work"),Qm()):t==="archive"?(console.log("[barba] archive page - webgl disabled"),qa(),cf(),af()):t==="home"||t==="contact"?(console.log("[barba] initializing home/contact webgl"),qa(),Zm(),Wa(t,!0),Mc("home"),Wa(t,!0),Mc("home"),bc(document.querySelector('[data-barba="container"]'))):(console.log("[barba] other page - destroying webgl"),qa(),cf(),af())}gv.init({transitions:[{name:"webgl-page-transition",from:{namespace:["home","contact","work"]},to:{namespace:["home","contact","work"]},async leave(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.current?.container;$m(),e==="work"||t==="work"?(e==="work"&&qa(),await new Promise(s=>setTimeout(s,800))):e==="home"?await dh(ER()):e==="contact"&&await dh(bR(n,t)),lf(),eg()},async enter(r){const e=r?.current?.namespace,t=r?.next?.namespace,n=r?.next?.container;e==="work"||t==="work"||(t==="home"?(wR(),Wa("home")):t==="contact"&&(AR(),Wa("contact")),bc(n))},async after(r){const e=r?.next?.container,t=r?.next?.namespace;if(e)if(ph(t,{skipWebglSetup:!0}),t==="home"){const n=document.querySelector(".link-main");n&&Ne.set(n,{autoAlpha:0})}else t==="contact"&&await dh(RR())}},{name:"default",async leave(r){const e=r?.current?.namespace;e==="work"&&qa(),$m(),PR(e)&&(cf(),af()),lf(),eg()},async enter(){},async once(r){ph(r?.next?.namespace);const e=r?.next?.namespace,t=r?.next?.container;if(t){if(e==="home"){const n=document.querySelector(".link-main");n&&Ne.set(n,{autoAlpha:0}),bc(t)}else if(e==="contact"){const n=document.querySelector(".link-main");n&&(Ne.set(n,{autoAlpha:1,y:20,opacity:0}),await Ne.to(n,{y:0,opacity:1,duration:.8,ease:"power2.out",delay:.2})),bc(t)}}},async after(r){const e=r?.next?.namespace;if(e&&ph(e),e==="contact"){const t=document.querySelector(".link-main");t&&(Ne.set(t,{autoAlpha:1,y:20,opacity:0}),await Ne.to(t,{y:0,opacity:1,duration:.6,ease:"power2.out"}))}}}]});export{IR as D,zi as F,IA as G,qr as H,cn as L,LR as a,Vm as t};
