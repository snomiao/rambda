(function webpackUniversalModuleDefinition(d,e){if(typeof exports==='object'&&typeof module==='object')module.exports=e();else if(typeof define==='function'&&define.amd)define([],e);else{var a=e();for(var i in a)(typeof exports==='object'?exports:d)[i]=a[i];}})(this,function(){return function(f){var g={};function __webpack_require__(h){if(g[h])return g[h].exports;var j=g[h]={i:h,l:!1,exports:{}};f[h].call(j.exports,j,j.exports,__webpack_require__);j.l=!0;return j.exports;}__webpack_require__.m=f;__webpack_require__.c=g;__webpack_require__.i=function(k){return k;};__webpack_require__.d=function(l,m,n){if(!__webpack_require__.o(l,m)){Object.defineProperty(l,m,{configurable:!1,enumerable:!0,get:n});}};__webpack_require__.n=function(o){var p=o&&o.__esModule?function getDefault(){return o['default'];}:function getModuleExports(){return o;};__webpack_require__.d(p,'a',p);return p;};__webpack_require__.o=function(q,r){return Object.prototype.hasOwnProperty.call(q,r);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=1);}([function(s,t){function add(a,b){if(b===void 0){return c=>add(a,c);}return a+b;}function adjust(u,v,w){if(v===void 0){return(x,y)=>adjust(u,x,y);}else if(w===void 0){return z=>adjust(u,v,z);}return w.map((A,B)=>{if(B===v){return u(w[v]);}return A;});}function any(C,D){if(D===void 0){return E=>any(C,E);}let F=0;while(F<D.length){if(C(D[F])){return!0;}F++;}return!1;}function append(G,H){if(H===void 0){return I=>append(G,I);}const J=H;J.push(G);return J;}function isFunction(K){return typeof K==="function";}function compose(){const L=arguments;let M=L.length;while(M--){if(!isFunction(L[M])){throw new TypeError();}}return function(){let N=arguments,O=L.length;while(O--){N=[L[O].apply(this,N)];}return N[0];};}function contains(P,Q){if(Q===void 0){return S=>contains(P,S);}let T=-1,U=!1;while(++T<Q.length&&!U){if(equals(Q[T],P)){U=!0;}}return U;}function filter(V,W){if(W===void 0){return X=>filter(V,X);}let Y=-1,Z=0;const a1=W.length,b1=[];while(++Y<a1){const c1=W[Y];if(V(c1)){b1[Z++]=c1;}}return b1;}function find(fn,e1){if(e1===void 0){return f1=>find(fn,f1);}return e1.find(fn);}function findIndex(fn,h1){if(h1===void 0){return i1=>findIndex(fn,i1);}const j1=h1.length;let k1=-1;while(++k1<j1){if(fn(h1[k1])){return k1;}}return-1;}function flatten(l1,m1){m1=m1===void 0?[]:m1;for(let i=0;i<l1.length;i++){if(Array.isArray(l1[i])){flatten(l1[i],m1);}else{m1.push(l1[i]);}}return m1;}function drop(n1,a){if(a===void 0){return o1=>drop(n1,o1);}return a.slice(n1);}function dropLast(p1,a){if(a===void 0){return q1=>dropLast(p1,q1);}return a.slice(0,-p1);}function equals(a,b){if(b===void 0){return r1=>equals(a,r1);}else if(a===b){return a!==0||1/a===1/b;}const s1=type(a);if(s1!==type(b)){return!1;}if(s1==="Array"){const t1=a,u1=b;return t1.sort().toString()===u1.sort().toString();}if(s1==="Object"){const v1=Object.keys(a);if(v1.length===Object.keys(b).length){if(v1.length===0){return!0;}let w1=!0;v1.map(x1=>{if(w1){const y1=type(a[x1]),z1=type(b[x1]);if(y1===z1){if(y1==="Object"){if(Object.keys(a[x1]).length===Object.keys(b[x1]).length){if(Object.keys(a[x1]).length!==0){if(!equals(a[x1],b[x1])){w1=!1;}}}else{w1=!1;}}else if(!equals(a[x1],b[x1])){w1=!1;}}else{w1=!1;}}});return w1;}}return!1;}function head(a){if(typeof a==="string"){return a[0]||"";}return a[0];}function indexOf(A1,B1){if(B1===void 0){return C1=>indexOf(A1,C1);}let D1=-1;const E1=B1.length;while(++D1<E1){if(B1[D1]===A1){return D1;}}return-1;}function baseSlice(F1,G1,H1){let I1=-1,J1=F1.length;H1=H1>J1?J1:H1;if(H1<0){H1+=J1;}J1=G1>H1?0:H1-G1>>>0;G1>>>=0;const K1=Array(J1);while(++I1<J1){K1[I1]=F1[I1+G1];}return K1;}function init(a){if(typeof a==="string"){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function join(L1,M1){if(M1===void 0){return N1=>join(L1,N1);}return M1.join(L1);}function map(fn,P1){if(P1===void 0){return Q1=>map(fn,Q1);}let R1=-1;const S1=P1.length,T1=Array(S1);while(++R1<S1){T1[R1]=fn(P1[R1]);}return T1;}function last(a){if(typeof a==="string"){return a[a.length-1]||"";}return a[a.length-1];}function length(U1){return U1.length;}function match(V1,W1){if(W1===void 0){return X1=>match(V1,X1);}const Y1=W1.match(V1);return Y1===null?[]:Y1;}function merge(Z1,a2){if(a2===void 0){return b2=>merge(Z1,b2);}return Object.assign({},Z1,a2);}function omit(c2,d2){if(d2===void 0){return e2=>omit(c2,e2);}const f2={};for(key in d2){if(!c2.includes(key)){f2[key]=d2[key];}}return f2;}function path(g2,h2){if(h2===void 0){return i2=>path(g2,i2);}let j2=h2,k2=0;while(k2<g2.length){if(j2===null){return void 0;}j2=j2[g2[k2]];k2++;}return j2;}function pick(l2,m2){if(m2===void 0){return n2=>pick(l2,n2);}const o2={};let p2=0;while(p2<l2.length){if(l2[p2]in m2){o2[l2[p2]]=m2[l2[p2]];}p2++;}return o2;}function prepend(q2,r2){if(r2===void 0){return s2=>prepend(q2,s2);}const t2=r2;t2.unshift(q2);return t2;}function prop(u2,v2){if(v2===void 0){return w2=>prop(u2,w2);}return v2[u2];}function propEq(x2,y2,z2){if(y2===void 0){return(A2,B2)=>propEq(x2,A2,B2);}else if(z2===void 0){return C2=>propEq(x2,y2,C2);}return z2[x2]===y2;}function range(D2,E2){const F2=[];for(let i=D2;i<E2;i++){F2.push(i);}return F2;}function repeat(a,G2){if(G2===void 0){return H2=>repeat(a,H2);}const I2=Array(G2);return I2.fill(a);}function replace(J2,K2,L2){if(K2===void 0){return(M2,N2)=>replace(J2,M2,N2);}else if(L2===void 0){return O2=>replace(J2,K2,O2);}return L2.replace(J2,K2);}function subtract(a,b){if(b===void 0){return P2=>subtract(a,P2);}return a-b;}function sort(fn,R2){if(R2===void 0){return S2=>sort(fn,S2);}const T2=Array.from(R2);return T2.sort(fn);}function sortBy(fn,V2){if(V2===void 0){return W2=>sortBy(fn,W2);}const X2=Array.from(V2);return X2.sort((a,b)=>{const Y2=fn(a),Z2=fn(b);return Y2<Z2?-1:Y2>Z2?1:0;});}function split(a3,b3){if(b3===void 0){return c3=>split(a3,c3);}return b3.split(a3);}function splitEvery(d3,a){if(a===void 0){return e3=>splitEvery(d3,e3);}d3=d3>1?d3:1;const f3=[];let g3=0;while(g3<a.length){f3.push(a.slice(g3,g3+=d3));}return f3;}function tail(h3){return drop(1,h3);}function take(i3,a){if(a===void 0){return j3=>take(i3,j3);}else if(typeof a==="string"){return a.slice(0,i3);}return baseSlice(a,0,i3);}function takeLast(k3,a){if(a===void 0){return l3=>takeLast(k3,l3);}const m3=a.length;k3=k3>m3?m3:k3;if(typeof a==="string"){return a.slice(m3-k3);}k3=m3-k3;return baseSlice(a,k3,m3);}function toLower(n3){return n3.toLowerCase();}function toUpper(o3){return o3.toUpperCase();}function test(p3,q3){if(q3===void 0){return r3=>test(p3,r3);}return q3.search(p3)===-1?!1:!0;}function trim(s3){return s3.trim();}function type(a){if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}return"Object";}function values(t3){const u3=[];for(key in t3){u3.push(t3[key]);}return u3;}function uniq(v3){let w3=-1;const x3=[];while(++w3<v3.length){const y3=v3[w3];if(!contains(y3,x3)){x3.push(y3);}}return x3;}function update(z3,A3,B3){if(A3===void 0){return(C3,D3)=>update(z3,C3,D3);}else if(B3===void 0){return E3=>update(z3,A3,E3);}const F3=Array.from(B3);return F3.fill(A3,z3,z3+1);}s.exports.add=add;s.exports.adjust=adjust;s.exports.any=any;s.exports.append=append;s.exports.compose=compose;s.exports.contains=contains;s.exports.drop=drop;s.exports.dropLast=dropLast;s.exports.equals=equals;s.exports.filter=filter;s.exports.find=find;s.exports.findIndex=findIndex;s.exports.flatten=flatten;s.exports.head=head;s.exports.indexOf=indexOf;s.exports.init=init;s.exports.join=join;s.exports.last=last;s.exports.length=length;s.exports.map=map;s.exports.match=match;s.exports.merge=merge;s.exports.omit=omit;s.exports.path=path;s.exports.pick=pick;s.exports.prepend=prepend;s.exports.prop=prop;s.exports.propEq=propEq;s.exports.range=range;s.exports.repeat=repeat;s.exports.replace=replace;s.exports.sort=sort;s.exports.sortBy=sortBy;s.exports.split=split;s.exports.splitEvery=splitEvery;s.exports.subtract=subtract;s.exports.tail=tail;s.exports.take=take;s.exports.takeLast=takeLast;s.exports.test=test;s.exports.toLower=toLower;s.exports.toUpper=toUpper;s.exports.trim=trim;s.exports.type=type;s.exports.uniq=uniq;s.exports.update=update;s.exports.values=values;},function(G3,H3,I3){const R=I3(0);G3.exports={R:R};}]);});