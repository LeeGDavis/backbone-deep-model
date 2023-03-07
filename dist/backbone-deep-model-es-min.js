import t from"backbone";import r from"underscore";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={};!function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,u="[object Arguments]",c="[object Boolean]",a="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",_="[object Promise]",v="[object RegExp]",y="[object Set]",d="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",w="[object DataView]",A="[object Float32Array]",O="[object Float64Array]",m="[object Int8Array]",S="[object Int16Array]",x="[object Int32Array]",z="[object Uint8Array]",P="[object Uint8ClampedArray]",k="[object Uint16Array]",E="[object Uint32Array]",$=/\w*$/,F=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,B={};B[u]=B["[object Array]"]=B[j]=B[w]=B[c]=B[a]=B[A]=B[O]=B[m]=B[S]=B[x]=B[l]=B[h]=B[p]=B[v]=B[y]=B[d]=B[b]=B[z]=B[P]=B[k]=B[E]=!0,B["[object Error]"]=B[s]=B[g]=!1;var U="object"==typeof e&&e&&e.Object===Object&&e,M="object"==typeof self&&self&&self.Object===Object&&self,T=U||M||Function("return this")(),D=r&&!r.nodeType&&r,q=D&&t&&!t.nodeType&&t,C=q&&q.exports===D;function R(t,r){return t.set(r[0],r[1]),t}function L(t,r){return t.add(r),t}function N(t,r,e,n){var o=-1,i=t?t.length:0;for(n&&i&&(e=t[++o]);++o<i;)e=r(e,t[o],o,t);return e}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function W(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function G(t,r){return function(e){return t(r(e))}}function J(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var H,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=T["__core-js_shared__"],Z=(H=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=C?T.Buffer:void 0,it=T.Symbol,ut=T.Uint8Array,ct=G(Object.getPrototypeOf,Object),at=Object.create,st=X.propertyIsEnumerable,ft=K.splice,lt=Object.getOwnPropertySymbols,ht=ot?ot.isBuffer:void 0,pt=G(Object.keys,Object),_t=qt(T,"DataView"),vt=qt(T,"Map"),yt=qt(T,"Promise"),dt=qt(T,"Set"),bt=qt(T,"WeakMap"),gt=qt(Object,"create"),jt=Vt(_t),wt=Vt(vt),At=Vt(yt),Ot=Vt(dt),mt=Vt(bt),St=it?it.prototype:void 0,xt=St?St.valueOf:void 0;function zt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function kt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new Pt(t)}function $t(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&rt.call(t,"callee")&&(!st.call(t,"callee")||et.call(t)==u)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var i in t)!r&&!rt.call(t,i)||o&&("length"==i||Lt(i,n))||e.push(i);return e}function Ft(t,r,e){var n=t[r];rt.call(t,r)&&Wt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(Wt(t[e][0],r))return e;return-1}function Bt(t,r,e,n,o,i,_){var g;if(n&&(g=i?n(t,o,i,_):n(t)),void 0!==g)return g;if(!Qt(t))return t;var F=Gt(t);if(F){if(g=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,g)}else{var I=Rt(t),U=I==s||I==f;if(Ht(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(I==p||I==u||U&&!i){if(V(t))return i?t:{};if(g=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:(r=ct(t),Qt(r)?at(r):{});var r}(U?{}:t),!r)return function(t,r){return Tt(t,Ct(t),r)}(t,function(t,r){return t&&Tt(r,Xt(r),t)}(g,t))}else{if(!B[I])return i?t:{};g=function(t,r,e,n){var o=t.constructor;switch(r){case j:return Mt(t);case c:case a:return new o(+t);case w:return function(t,r){var e=r?Mt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case A:case O:case m:case S:case x:case z:case P:case k:case E:return function(t,r){var e=r?Mt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){var n=r?e(W(t),!0):W(t);return N(n,R,new t.constructor)}(t,n,e);case h:case d:return new o(t);case v:return function(t){var r=new t.constructor(t.source,$.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){var n=r?e(J(t),!0):J(t);return N(n,L,new t.constructor)}(t,n,e);case b:return i=t,xt?Object(xt.call(i)):{}}var i}(t,I,Bt,r)}}_||(_=new Et);var M=_.get(t);if(M)return M;if(_.set(t,g),!F)var T=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Ct)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(T||t,(function(o,i){T&&(o=t[i=o]),Ft(g,i,Bt(o,r,e,n,i,t,_))})),g}function Ut(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(Kt(t)||V(t)?nt:F).test(Vt(t));var r}function Mt(t){var r=new t.constructor(t.byteLength);return new ut(r).set(new ut(t)),r}function Tt(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var u=r[o],c=n?n(e[u],t[u],u,e,t):void 0;Ft(e,u,void 0===c?t[u]:c)}return e}function Dt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function qt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Ut(e)?e:void 0}zt.prototype.clear=function(){this.__data__=gt?gt(null):{}},zt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},zt.prototype.get=function(t){var r=this.__data__;if(gt){var e=r[t];return e===o?void 0:e}return rt.call(r,t)?r[t]:void 0},zt.prototype.has=function(t){var r=this.__data__;return gt?void 0!==r[t]:rt.call(r,t)},zt.prototype.set=function(t,r){return this.__data__[t]=gt&&void 0===r?o:r,this},Pt.prototype.clear=function(){this.__data__=[]},Pt.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():ft.call(r,e,1),!0)},Pt.prototype.get=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]},Pt.prototype.has=function(t){return It(this.__data__,t)>-1},Pt.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},kt.prototype.clear=function(){this.__data__={hash:new zt,map:new(vt||Pt),string:new zt}},kt.prototype.delete=function(t){return Dt(this,t).delete(t)},kt.prototype.get=function(t){return Dt(this,t).get(t)},kt.prototype.has=function(t){return Dt(this,t).has(t)},kt.prototype.set=function(t,r){return Dt(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new Pt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Pt){var o=e.__data__;if(!vt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new kt(o)}return e.set(t,r),this};var Ct=lt?G(lt,Object):function(){return[]},Rt=function(t){return et.call(t)};function Lt(t,r){return!!(r=null==r?i:r)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<r}function Nt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,r){return t===r||t!=t&&r!=r}(_t&&Rt(new _t(new ArrayBuffer(1)))!=w||vt&&Rt(new vt)!=l||yt&&Rt(yt.resolve())!=_||dt&&Rt(new dt)!=y||bt&&Rt(new bt)!=g)&&(Rt=function(t){var r=et.call(t),e=r==p?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case jt:return w;case wt:return l;case At:return _;case Ot:return y;case mt:return g}return r});var Gt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Kt(t)}var Ht=ht||function(){return!1};function Kt(t){var r=Qt(t)?et.call(t):"";return r==s||r==f}function Qt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Xt(t){return Jt(t)?$t(t):function(t){if(!Nt(t))return pt(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Bt(t,!0,!0)}}({get exports(){return n},set exports(t){n=t}},n);var o=n,i={};!function(t,r){var n=200,o="__lodash_hash_undefined__",i=800,u=16,c=9007199254740991,a="[object Arguments]",s="[object AsyncFunction]",f="[object Function]",l="[object GeneratorFunction]",h="[object Null]",p="[object Object]",_="[object Proxy]",v="[object Undefined]",y=/^\[object .+?Constructor\]$/,d=/^(?:0|[1-9]\d*)$/,b={};b["[object Float32Array]"]=b["[object Float64Array]"]=b["[object Int8Array]"]=b["[object Int16Array]"]=b["[object Int32Array]"]=b["[object Uint8Array]"]=b["[object Uint8ClampedArray]"]=b["[object Uint16Array]"]=b["[object Uint32Array]"]=!0,b[a]=b["[object Array]"]=b["[object ArrayBuffer]"]=b["[object Boolean]"]=b["[object DataView]"]=b["[object Date]"]=b["[object Error]"]=b[f]=b["[object Map]"]=b["[object Number]"]=b[p]=b["[object RegExp]"]=b["[object Set]"]=b["[object String]"]=b["[object WeakMap]"]=!1;var g="object"==typeof e&&e&&e.Object===Object&&e,j="object"==typeof self&&self&&self.Object===Object&&self,w=g||j||Function("return this")(),A=r&&!r.nodeType&&r,O=A&&t&&!t.nodeType&&t,m=O&&O.exports===A,S=m&&g.process,x=function(){try{var t=O&&O.require&&O.require("util").types;return t||S&&S.binding&&S.binding("util")}catch(t){}}(),z=x&&x.isTypedArray;var P,k,E,$=Array.prototype,F=Function.prototype,I=Object.prototype,B=w["__core-js_shared__"],U=F.toString,M=I.hasOwnProperty,T=(P=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"",D=I.toString,q=U.call(Object),C=RegExp("^"+U.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=m?w.Buffer:void 0,L=w.Symbol,N=w.Uint8Array,V=R?R.allocUnsafe:void 0,W=(k=Object.getPrototypeOf,E=Object,function(t){return k(E(t))}),G=Object.create,J=I.propertyIsEnumerable,H=$.splice,K=L?L.toStringTag:void 0,Q=function(){try{var t=At(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),X=R?R.isBuffer:void 0,Y=Math.max,Z=Date.now,tt=At(w,"Map"),rt=At(Object,"create"),et=function(){function t(){}return function(r){if(!Bt(r))return{};if(G)return G(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();function nt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ot(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function it(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ut(t){var r=this.__data__=new ot(t);this.size=r.size}function ct(t,r){var e=kt(t),n=!e&&Pt(t),o=!e&&!n&&$t(t),i=!e&&!n&&!o&&Mt(t),u=e||n||o||i,c=u?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],a=c.length;for(var s in t)!r&&!M.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ot(s,a))||c.push(s);return c}function at(t,r,e){(void 0!==e&&!zt(t[r],e)||void 0===e&&!(r in t))&&lt(t,r,e)}function st(t,r,e){var n=t[r];M.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||lt(t,r,e)}function ft(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function lt(t,r,e){"__proto__"==r&&Q?Q(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}nt.prototype.clear=function(){this.__data__=rt?rt(null):{},this.size=0},nt.prototype.delete=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},nt.prototype.get=function(t){var r=this.__data__;if(rt){var e=r[t];return e===o?void 0:e}return M.call(r,t)?r[t]:void 0},nt.prototype.has=function(t){var r=this.__data__;return rt?void 0!==r[t]:M.call(r,t)},nt.prototype.set=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=rt&&void 0===r?o:r,this},ot.prototype.clear=function(){this.__data__=[],this.size=0},ot.prototype.delete=function(t){var r=this.__data__,e=ft(r,t);return!(e<0)&&(e==r.length-1?r.pop():H.call(r,e,1),--this.size,!0)},ot.prototype.get=function(t){var r=this.__data__,e=ft(r,t);return e<0?void 0:r[e][1]},ot.prototype.has=function(t){return ft(this.__data__,t)>-1},ot.prototype.set=function(t,r){var e=this.__data__,n=ft(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this},it.prototype.clear=function(){this.size=0,this.__data__={hash:new nt,map:new(tt||ot),string:new nt}},it.prototype.delete=function(t){var r=wt(this,t).delete(t);return this.size-=r?1:0,r},it.prototype.get=function(t){return wt(this,t).get(t)},it.prototype.has=function(t){return wt(this,t).has(t)},it.prototype.set=function(t,r){var e=wt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this},ut.prototype.clear=function(){this.__data__=new ot,this.size=0},ut.prototype.delete=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,r){var e=this.__data__;if(e instanceof ot){var o=e.__data__;if(!tt||o.length<n-1)return o.push([t,r]),this.size=++e.size,this;e=this.__data__=new it(o)}return e.set(t,r),this.size=e.size,this};var ht,pt=function(t,r,e){for(var n=-1,o=Object(t),i=e(t),u=i.length;u--;){var c=i[ht?u:++n];if(!1===r(o[c],c,o))break}return t};function _t(t){return null==t?void 0===t?v:h:K&&K in Object(t)?function(t){var r=M.call(t,K),e=t[K];try{t[K]=void 0;var n=!0}catch(t){}var o=D.call(t);n&&(r?t[K]=e:delete t[K]);return o}(t):function(t){return D.call(t)}(t)}function vt(t){return Ut(t)&&_t(t)==a}function yt(t){return!(!Bt(t)||function(t){return!!T&&T in t}(t))&&(Ft(t)?C:y).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function dt(t){if(!Bt(t))return function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}(t);var r=mt(t),e=[];for(var n in t)("constructor"!=n||!r&&M.call(t,n))&&e.push(n);return e}function bt(t,r,e,n,o){t!==r&&pt(r,(function(i,u){if(o||(o=new ut),Bt(i))!function(t,r,e,n,o,i,u){var c=St(t,e),a=St(r,e),s=u.get(a);if(s)return void at(t,e,s);var f=i?i(c,a,e+"",t,r,u):void 0,l=void 0===f;if(l){var h=kt(a),_=!h&&$t(a),v=!h&&!_&&Mt(a);f=a,h||_||v?kt(c)?f=c:Ut(j=c)&&Et(j)?f=function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(c):_?(l=!1,f=function(t,r){if(r)return t.slice();var e=t.length,n=V?V(e):new t.constructor(e);return t.copy(n),n}(a,!0)):v?(l=!1,y=a,d=!0?(b=y.buffer,g=new b.constructor(b.byteLength),new N(g).set(new N(b)),g):y.buffer,f=new y.constructor(d,y.byteOffset,y.length)):f=[]:function(t){if(!Ut(t)||_t(t)!=p)return!1;var r=W(t);if(null===r)return!0;var e=M.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&U.call(e)==q}(a)||Pt(a)?(f=c,Pt(c)?f=function(t){return function(t,r,e,n){var o=!e;e||(e={});var i=-1,u=r.length;for(;++i<u;){var c=r[i],a=n?n(e[c],t[c],c,e,t):void 0;void 0===a&&(a=t[c]),o?lt(e,c,a):st(e,c,a)}return e}(t,Tt(t))}(c):Bt(c)&&!Ft(c)||(f=function(t){return"function"!=typeof t.constructor||mt(t)?{}:et(W(t))}(a))):l=!1}var y,d,b,g;var j;l&&(u.set(a,f),o(f,a,n,i,u),u.delete(a));at(t,e,f)}(t,r,u,e,bt,n,o);else{var c=n?n(St(t,u),i,u+"",t,r,o):void 0;void 0===c&&(c=i),at(t,u,c)}}),Tt)}function gt(t,r){return xt(function(t,r,e){return r=Y(void 0===r?t.length-1:r,0),function(){for(var n=arguments,o=-1,i=Y(n.length-r,0),u=Array(i);++o<i;)u[o]=n[r+o];o=-1;for(var c=Array(r+1);++o<r;)c[o]=n[o];return c[r]=e(u),function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}(t,this,c)}}(t,r,Ct),t+"")}var jt=Q?function(t,r){return Q(t,"toString",{configurable:!0,enumerable:!1,value:(e=r,function(){return e}),writable:!0});var e}:Ct;function wt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function At(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return yt(e)?e:void 0}function Ot(t,r){var e=typeof t;return!!(r=null==r?c:r)&&("number"==e||"symbol"!=e&&d.test(t))&&t>-1&&t%1==0&&t<r}function mt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||I)}function St(t,r){if(("constructor"!==r||"function"!=typeof t[r])&&"__proto__"!=r)return t[r]}var xt=function(t){var r=0,e=0;return function(){var n=Z(),o=u-(n-e);if(e=n,o>0){if(++r>=i)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}(jt);function zt(t,r){return t===r||t!=t&&r!=r}var Pt=vt(function(){return arguments}())?vt:function(t){return Ut(t)&&M.call(t,"callee")&&!J.call(t,"callee")},kt=Array.isArray;function Et(t){return null!=t&&It(t.length)&&!Ft(t)}var $t=X||function(){return!1};function Ft(t){if(!Bt(t))return!1;var r=_t(t);return r==f||r==l||r==s||r==_}function It(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}function Bt(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}function Ut(t){return null!=t&&"object"==typeof t}var Mt=z?function(t){return function(r){return t(r)}}(z):function(t){return Ut(t)&&It(t.length)&&!!b[_t(t)]};function Tt(t){return Et(t)?ct(t,!0):dt(t)}var Dt,qt=(Dt=function(t,r,e){bt(t,r,e)},gt((function(t,r){var e=-1,n=r.length,o=n>1?r[n-1]:void 0,i=n>2?r[2]:void 0;for(o=Dt.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(t,r,e){if(!Bt(e))return!1;var n=typeof r;return!!("number"==n?Et(e)&&Ot(r,e.length):"string"==n&&r in e)&&zt(e[r],t)}(r[0],r[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++e<n;){var u=r[e];u&&Dt(t,u,e,o)}return t})));function Ct(t){return t}t.exports=qt}({get exports(){return i},set exports(t){i=t}},i);var u=i;const c=function(t){let e={},n=l.keyPathSeparator;for(let o in t){let i=t[o];if(!i||i.constructor!==Object&&i.constructor!==Array||r.isEmpty(i))e[o]=i;else{const t=c(i);for(let r in t){let i=t[r];e[o+n+r]=i}}}return e},a=function(t,e,n){const o=l.keyPathSeparator,i=e?e.split(o):[];let u=t;for(let t=0,e=i.length;t<e;t++){if(n&&!r.has(u,i[t]))return!1;if(u=u[i[t]],null==u&&t<e-1&&(u={}),void 0===u)return!!n||u}return!!n||u},s=function(t,e,n,o){o=o||{};const i=l.keyPathSeparator,u=e?e.split(i):[];let c=t;for(let t=0,e=u.length;t<e&&void 0!==c;t++){const i=u[t];if(t===e-1)o.unset?delete c[i]:c[i]=n;else{if(void 0===c[i]||!r.isObject(c[i])){if(o.unset)return void delete c[i];let r=u[t+1];c[i]=/^\d+$/.test(r)?[]:{}}c=c[i]}}},f=function(t,r){s(t,r,null,{unset:!0})},l=t.Model.extend({constructor:function(t,e){let n=t||{};this.cid=r.uniqueId("c"),this.attributes={},e&&e.collection&&(this.collection=e.collection),e&&e.parse&&(n=this.parse(n,e)||{}),n=u({},o(r.result(this,"defaults")),n),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)},toJSON:function(t){return u({},this.attributes)},get:function(t){return a(this.attributes,t)},set:function(t,e,n){let o;if(null==t)return this;if("object"==typeof t?(o=t,n=e||{}):(o={})[t]=e,n||(n={}),!this._validate(o,n))return!1;const i=n.unset,h=n.silent,p=[],_=this._changing;this._changing=!0,_||(this._previousAttributes=u({},this.attributes),this.changed={});const v=this.attributes,y=this._previousAttributes;this.idAttribute in o&&(this.id=o[this.idAttribute]),o=c(o);for(let t in o)e=o[t],r.isEqual(a(v,t),e)||p.push(t),r.isEqual(a(y,t),e)?f(this.changed,t):s(this.changed,t,e),i?f(v,t):s(v,t,e);if(!h){p.length&&(this._pending=!0);const t=l.keyPathSeparator,r={};for(let e=0,o=p.length;e<o;e++){let o=p[e];r.hasOwnProperty(o)&&r[o]||(r[o]=!0,this.trigger("change:"+o,this,a(v,o),n));const i=o.split(t);for(let e=i.length-1;e>0;e--){const o=i.slice(0,e).join(t),u=o+t+"*";r.hasOwnProperty(u)&&r[u]||(r[u]=!0,this.trigger("change:"+u,this,a(v,o),n)),r.hasOwnProperty(o)&&r[o]||(r[o]=!0,this.trigger("change:"+o,this,a(v,o),n))}}}if(_)return this;if(!h)for(;this._pending;)this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},clear:function(t){const e={},n=c(this.attributes);for(var o in n)e[o]=void 0;return this.set(e,r.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!r.isEmpty(this.changed):void 0!==a(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&c(this.changed);let e=this._changing?this._previousAttributes:this.attributes;t=c(t),e=c(e);let n,o=!1;for(let i in t)r.isEqual(e[i],n=t[i])||((o||(o={}))[i]=n);return o},previous:function(t){return null!=t&&this._previousAttributes?a(this._previousAttributes,t):null},previousAttributes:function(){return u({},this._previousAttributes)}});l.keyPathSeparator=".",window.Backbone=window.Backbone||{},window.Backbone.DeepModel=l;
