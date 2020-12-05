(this["webpackJsonptechnical-lead-test"]=this["webpackJsonptechnical-lead-test"]||[]).push([[0],{32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),a=n.n(i),c=n(15),o=n.n(c),s=(n(32),n(6)),u=n(13),l=n(7),f=n(2),h=n(3),p=n(8),g=n(10),d=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(Object(l.a)({},e),t)}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("Something is wrong"),{hasError:!0}}}]),n}(a.a.Component),b=n(5),j=n.n(b),v=n(14),O=function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"findOne",value:function(e){if(e.length<=0)return"";for(var t=e[0],n=1;n<e.length;n++)e[n]<t&&(t=e[n]);return t}}]),e}(),m=n(26),y=n(4),x=n(24),S=function(){function e(t){Object(f.a)(this,e),this.protectedList=[],this.protectedList=[].concat(Object(x.a)(t),["expires"])}return Object(h.a)(e,[{key:"isProtected",value:function(e){return this.protectedList.filter((function(t){return new RegExp(t).test(e)})).length>0}},{key:"getNonProtectedExpiresAtList",value:function(){var e=this;return this.getExpiresList().filter((function(t){var n=t.key;return!e.isProtected(n)})).map((function(e){return e.key}))}}]),e}(),k=n(25),E=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).name="QuotaExceededError",r}return n}(Object(k.a)(Error)),w=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return Object(f.a)(this,n),(r=t.call(this,a)).strategy=void 0,r.maximumSize=void 0,r.strategy=e,r.maximumSize=i,r}return Object(h.a)(n,[{key:"getStorageSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Blob(Object.values(e||localStorage)).size}},{key:"has",value:function(e){return null!==this.get(e)}},{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"getExpiresList",value:function(){return this.get("expires")?JSON.parse(this.get("expires")||"[]"):[]}},{key:"getExpiresAtList",value:function(){return this.getExpiresList().map((function(e){return e.key}))}},{key:"getKeyByExpiration",value:function(e){var t=Object.keys(this.getExpiresList().filter((function(t){return t.expiresAt==e})));return t.length<=0?null:t[0]}},{key:"set",value:function(e,t,r){r||(r=(new Date).getTime()+3e5);var i=!1;try{if(this.getStorageSize(t)+this.getStorageSize()>=this.maximumSize)throw new E("Quota is exceeded, try to clean the storage...");localStorage.setItem(e,t);var a=this.getExpiresList(),c=a.map((function(t,n){if(Object.keys(t)[0]===e)return n})).filter((function(e){return e}))[0],o=a[c||a.length]||{};o[e]=r,a[c||a.length]=o,localStorage.setItem("expires",JSON.stringify(a)),i=!0}catch(u){if(u instanceof E){var s=this.getKeyByExpiration(this.strategy.findOne(Object(m.a)(Object(y.a)(n.prototype),"getNonProtectedExpiresAtList",this).call(this)));this.remove(s||"")&&s&&this.set(e,t,r)}else i=!1}finally{return i}}},{key:"remove",value:function(e){return localStorage.removeItem(e),localStorage.setItem("expires",JSON.stringify(this.getExpiresList().filter((function(t){return t.key!=e})))),!this.has(e)}},{key:"removeAll",value:function(){var e=this;Object.keys(localStorage).forEach((function(t){return e.remove(t)}))}}]),n}(S),_=n(22),L=function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"compress",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise((function(n,r){setTimeout(n,t,e),console.time("compress");var i=Object(_.compress)(e);console.timeEnd("compress"),setTimeout(n,0,i)}))}},{key:"decompress",value:function(e){return/[\x00-\x1F]/.test(e)?Object(_.decompress)(e):e}}]),e}(),P=function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,null,[{key:"subscribe",value:function(e,t){this.channels[e]&&this.channels[e].push(t),this.channels[e]=[t]}},{key:"publish",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.channels[e]&&this.channels[e].forEach((function(e){e.apply(void 0,n)}))}}]),e}();P.channels={};var z={baseUrl:"",authentificationHeader:function(){return{Authorization:""}},compressionTimeoutDelay:200,maximumSize:2097152,protectedFromCleaning:["profile",/^patients\/importants/]},C={config:{},configure:function(e){C.config=e(Object(l.a)(Object(l.a)({},z),C.config))}},I=new w(new O,C.config.maximumSize,C.config.protectedFromCleaning),N=new L,T=function(){var e=Object(v.a)(j.a.mark((function e(t){var n,r,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:{},!(i.length>2&&void 0!==i[2]&&i[2])){e.next=4;break}return e.abrupt("return",I.get(t));case 4:return n.headers?n.headers=Object(l.a)(Object(l.a)({},n.headers),C.authentificationHeader()):n.headers=C.config.authentificationHeader(),n.queryParams&&(t+="?"+Object.keys(n.queryParams).map((function(e){return"".concat(e,"=").concat(n.queryParams[e])})).join("&")),e.next=8,fetch(C.config.baseUrl?C.config.baseUrl+t:t,n);case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return e.cancerOrigins},A=function(e){var t=e.patients,n=e.filter;return"all"===n?t:t.filter((function(e){return e.postId==n}))},F=["get_patients","cache_patients","get_cancerOrigins","cache_cancerOrigins"],J=function(e){F.forEach((function(t){return function(e,t){P.subscribe(e,(function(e,n){!function(e,t,n){n({type:"@"+t.entity+"/fill",payload:e})}(e,{entity:n.entity},t)}))}(t,e)}))},U=function(){return"Loading..."},q=function(e){var t=e.patient;return Object(r.jsxs)("li",{children:[t.postId," - ",t.name]})},B=function(){var e=Object(s.c)(A);return Object(r.jsx)("ul",{children:e.map((function(e){return Object(r.jsx)(q,{patient:e},e.id)}))})};C.configure((function(e){return e.baseUrl="https://jsonplaceholder.typicode.com/",e.authentificationHeader=function(){return{Authorization:localStorage.getItem("id_token")}},e.compressionTimeoutDelay=200,e.maximumSize=2097152,e.protectedFromCleaning=["profile",/^patients\/importants/],e}));var H=function(){var e=function(e){var t=Object(i.useState)({}),n=Object(u.a)(t,2),r=n[0],a=n[1],c=Object(i.useState)(!1),o=Object(u.a)(c,2),s=o[0],l=o[1];return Object(i.useEffect)((function(){return function(){var t=Object(v.a)(j.a.mark((function t(){var n,r,i,c,o,s,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e(T),r=Object.keys(n),i=Object.values(n),c={},t.next=6,r.forEach(function(){var e=Object(v.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=N,e.next=4,T(t,C.config,!0);case 4:e.t1=e.sent,c[t]=e.t0.decompress.call(e.t0,e.t1),P.publish("cache_"+t,JSON.parse(c[t]),{method:"get",entity:t,payload:JSON.parse(c[t])}),e.next=11;break;case 9:e.prev=9,e.t2=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 6:return a(c),l(!0),o={},t.next=11,Promise.allSettled(i);case 11:return s=t.sent,u=s.map((function(e){return"rejected"===e.status?Promise.resolve([]):e.value.json()})),t.next=15,Promise.allSettled(u);case 15:t.sent.forEach(function(){var e=Object(v.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o[r[n]]=t.value,e.t0=I,e.t1=r[n],e.next=5,N.compress(JSON.stringify(t.value),C.config.compressionTimeoutDelay);case 5:e.t2=e.sent,e.t0.set.call(e.t0,e.t1,e.t2);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),a(o),Object.keys(o).forEach((function(e){return P.publish("get_"+e,o[e],{method:"get",entity:e,payload:o[e]})})),l(!1);case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){}}),[]),[r,s]}((function(e){return{patients:e("comments",{queryParams:{_limit:10}}),cancerOrigins:e("posts",{queryParams:{_limit:2,order:"label ASC"}})}})),t=Object(u.a)(e,2),n=t[0],a=(n.patients,n.cancerOrigins,t[1]),c=Object(s.b)();return Object(i.useEffect)((function(){console.log("redux subscribers initialized..."),J(c)}),[]),Object(r.jsx)(i.Fragment,{children:Object(r.jsxs)(d,{children:[a&&Object(r.jsx)(U,{}),Object(r.jsx)(X,{}),Object(r.jsx)(B,{})]})})},X=function(){var e=Object(s.c)(D),t=Object(s.b)(),n=Object(i.useCallback)((function(e){t({type:"@filter/update",payload:e.target.value})}),[]);return Object(r.jsxs)("select",{onChange:function(e){return n(e)},children:[Object(r.jsx)("option",{value:"all",children:"All"},"all"),e.map((function(e){return Object(r.jsxs)("option",{value:e.id,children:[e.id," - ",e.title]},e.id)}))]})},R=n(11);var K=Object(R.c)(Object(R.b)({patients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@patients/fill":return t.payload?t.payload:[];default:return e}},cancerOrigins:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@cancerOrigins/fill":return t.payload?t.payload:[];default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;return"@filter/update"===t.type?t.payload:e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var Q=function(){return Object(r.jsxs)(s.a,{store:K,children:[Object(r.jsx)("h1",{children:"Cancer origins and patients"}),Object(r.jsx)(H,{})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root")),V()}},[[40,1,2]]]);
//# sourceMappingURL=main.8d14dd11.chunk.js.map