(this["webpackJsonpmy-train-ticket-ts"]=this["webpackJsonpmy-train-ticket-ts"]||[]).push([[10],{20:function(t,e,a){"use strict";t.exports=function(t,e,a){if((e-=(t+="").length)<=0)return t;a||0===a||(a=" ");if(" "===(a+="")&&e<10)return n[e]+t;var r="";for(;1&e&&(r+=a),e>>=1;)a+=a;return r+t};var n=[""," ","  ","   ","    ","     ","      ","       ","        ","         "]},71:function(t,e,a){},72:function(t,e,a){"use strict";a.r(e);var n=a(5),r=a(0),i=a.n(r),s=a(8),o=a.n(s),c=a(4),m=a.n(c),l=a(3),S=a.n(l),p=a(20),f=a.n(p),u=(a(71),function(t){var e=t.index,a=t.station,n=t.arriveTime,r=t.departTime,s=t.stay,o=t.isStartStation,c=t.isEndStation,m=t.isDepartStation,l=t.isArriveStation,p=t.beforeDepartStation,u=t.afterArriveStation;return i.a.createElement("li",null,i.a.createElement("div",{className:S()("icon",{"icon-red":m||l})},m?"\u51fa":l?"\u5230":f()(e,2,0)),i.a.createElement("div",{className:S()("row",{grey:p||u})},i.a.createElement("span",{className:S()("station",{red:l||m})},a),i.a.createElement("span",{className:S()("arrtime",{red:l})},o?"\u59cb\u53d1\u7ad9":n),i.a.createElement("span",{className:S()("deptime",{red:m})},c?"\u7ec8\u5230\u7ad9":r),i.a.createElement("span",{className:"stoptime"},o||c?"-":s+"\u5206")))}),v=Object(r.memo)((function(t){var e=t.date,a=t.trainNumber,s=t.departStation,c=t.arriveStation,l=Object(r.useState)([]),S=Object(n.a)(l,2),p=S[0],f=S[1];return Object(r.useEffect)((function(){var t=new o.a("http://easy-mock.liuup.com/mock/5efef790339f163501d502b7/api/schedule").setSearch("trainNumber",a+"").setSearch("departStation",s||"").setSearch("arriveStation",c||"").setSearch("date",m()(e).format("YYYY-MM-DD")).toString();fetch(t).then((function(t){return t.json()})).then((function(t){for(var e,a,n=0;n<t.length;++n)e?a?Object.assign(t[n],{beforeDepartStation:!1,isDepartStation:!1,afterArriveStation:!0,isArriveStation:!1}):t[n].station===c?a=Object.assign(t[n],{beforeDepartStation:!1,isDepartStation:!1,afterArriveStation:!1,isArriveStation:!0}):Object.assign(t[n],{beforeDepartStation:!1,isDepartStation:!1,afterArriveStation:!1,isArriveStation:!1}):t[n].station===s?e=Object.assign(t[n],{beforeDepartStation:!1,isDepartStation:!0,afterArriveStation:!1,isArriveStation:!1}):Object.assign(t[n],{beforeDepartStation:!0,isDepartStation:!1,afterArriveStation:!1,isArriveStation:!1}),Object.assign(t[n],{isStartStation:0===n,isEndStation:n===t.length-1});console.log(t),f(t)}))}),[a,s,c,e]),i.a.createElement("div",{className:"schedule"},i.a.createElement("div",{className:"dialog"},i.a.createElement("h1",null,"\u5217\u8f66\u65f6\u523b"),i.a.createElement("div",{className:"head"},i.a.createElement("span",{className:"station"},"\u8f66\u7ad9"),i.a.createElement("span",{className:"deptime"},"\u5230\u8fbe"),i.a.createElement("span",{className:"arrtime"},"\u53d1\u8f66"),i.a.createElement("span",{className:"stoptime"},"\u505c\u7559\u65f6\u95f4")),i.a.createElement("ul",null,p.map((function(t,e){return i.a.createElement(u,Object.assign({key:t.station,index:e+1},t))})))))}));e.default=v}}]);
//# sourceMappingURL=10.1d84e0c0.chunk.js.map