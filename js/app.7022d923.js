(function(e){function t(t){for(var r,i,u=t[0],s=t[1],l=t[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/xmas/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i={components:{}},u=i,s=n("2877"),l=Object(s["a"])(u,o,a,!1,null,null,null),c=l.exports,f=n("8c4f"),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("Main")],1)},p=[],h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center mt-5",attrs:{id:"main"}},[t("b-container",[t("b-row",[t("b-col",[t("h1",[e._v("Christmas Tree ($XMAS)")])])],1),t("b-row",[t("b-col",{attrs:{md:"6","offset-md":"3",sm:"12",offset:"0"}},[t("b-img",{attrs:{src:"images/tree.png",fluid:""}})],1)],1),t("b-row",[t("b-col",[t("h2",[e._v("About")]),t("p",[e._v(" Hello, I'm Maciej. I'm from Poland, and I live with my brother and grandfather. ")]),t("p",[e._v(" This year, for Christmas, I would like to buy a Christmas tree. Since I am still a student and cannot afford one, I created this token and am asking for your help. Please help me push it to Raydium so I can receive 0.5 SOL, which I will use to buy a Christmas tree. ")]),t("p",[e._v(" If you wish to donate, you can send your contributions to this wallet:"),t("br"),e._v(" "),t("strong",[e._v("12eBiCvv4qFcvaRMXyiRK6jjFkh31TFh2BeVyxKGDyDe.")])])])],1),t("b-row",[t("b-col",[t("h2",[e._v("Tokenomics")]),t("p",[e._v(' Christmas Tree ($XMAS) was fair-launched on Pump.fun with 0 taxes and burned liquidity. I own minimum amount of tokens, so investors don’t have to worry about the "dev dumping their coins." ')])])],1),t("b-row",[t("b-col",[t("h1",[t("strong",[e._v("I wish you all very Merry Christmas")])])])],1)],1)],1)},b=[],m={name:"Main",data:function(){return{}}},v=m,y=Object(s["a"])(v,h,b,!1,null,"2abdfe52",null),w=y.exports,_={name:"Homepage",components:{Main:w}},g=_,j=Object(s["a"])(g,d,p,!1,null,null,null),O=j.exports;r["default"].use(f["a"]);const x=[{path:"/",name:"Home",component:O}],M=new f["a"]({base:"/xmas/",routes:x,linkActiveClass:"active"});var I=M,k=n("5f5b"),C=n("b1e0"),P=n("ecee"),S=n("c074"),T=n("f2d1"),A=n("ad3d"),F=n("4eb5"),H=n.n(F);n("8049");P["c"].add(S["c"],S["a"],T["i"],T["d"],S["d"],T["b"],S["e"],T["h"],T["f"],T["e"],T["a"],T["c"],T["g"],S["b"]),r["default"].component("font-awesome-icon",A["a"]),r["default"].use(k["a"]),r["default"].use(C["a"]),r["default"].use(H.a),new r["default"]({router:I,render:e=>e(c)}).$mount("#app")},8049:function(e,t,n){}});