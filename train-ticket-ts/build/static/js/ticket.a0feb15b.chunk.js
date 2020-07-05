(this["webpackJsonpmy-train-ticket-ts"]=this["webpackJsonpmy-train-ticket-ts"]||[]).push([[9],{1:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=new Date(e);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.getTime()}a.d(t,"a",(function(){return n}))},10:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(3),c=a.n(i),l=a(4),o=a.n(l),s=(a(19),a(15),Object(n.memo)((function(e){var t=e.date,a=e.prev,i=e.next,l=e.isPrevDisabled,s=e.isNextDisabled,u=Object(n.useMemo)((function(){var e=o()(t);return e.format("M\u6708D\u65e5")+e.locale("zh-cn").format("ddd")}),[t]);return r.a.createElement("div",{className:"nav"},r.a.createElement("span",{onClick:a,className:c()("nav-prev",{"nav-disabled":l})},"\u524d\u4e00\u5929"),r.a.createElement("span",{className:"nav-current"},u),r.a.createElement("span",{onClick:i,className:c()("nav-next",{"nav-disabled":s})},"\u540e\u4e00\u5929"))})));t.a=s},11:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a(1);function i(e,t,a,i){var c=Object(r.a)(e)<=Object(r.a)(),l=Object(r.a)(e)-Object(r.a)()>1728e6,o=Object(n.useCallback)((function(){c||t(a())}),[t,a,c]),s=Object(n.useCallback)((function(){l||t(i())}),[t,i,l]);return{isPrevDisabled:c,isNextDisabled:l,prev:o,next:s}}},14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i);a(21);function l(e){var t=c()(e);return t.format("MM-DD")+" "+t.locale("zh-cn").format("ddd")}var o=Object(n.memo)((function(e){var t=e.departStation,a=e.departTimeStr,i=e.departDate,c=e.trainNumber,o=e.durationStr,s=e.arriveStation,u=e.arriveTimeStr,d=e.arriveDate,m=Object(n.useMemo)((function(){return l(i)}),[i]),p=Object(n.useMemo)((function(){return l(d)}),[d]);return r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left"},r.a.createElement("p",{className:"city"},t),r.a.createElement("p",{className:"time"},a),r.a.createElement("p",{className:"date"},m)),r.a.createElement("div",{className:"middle"},r.a.createElement("p",{className:"train-name"},c),r.a.createElement("p",{className:"train-mid"},e.children),r.a.createElement("p",{className:"train-time"},"\u8017\u65f6",o)),r.a.createElement("div",{className:"right"},r.a.createElement("p",{className:"city"},s),r.a.createElement("p",{className:"time"},u),r.a.createElement("p",{className:"date"},p))))}));t.a=o},21:function(e,t,a){},5:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(13);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,i=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},57:function(e,t,a){e.exports=a(70)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},7:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(14),Object(n.memo)((function(e){var t=e.onBack,a=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-back",onClick:t},r.a.createElement("svg",{width:"42",height:"42"},r.a.createElement("polyline",{points:"25,13 16,21 25,29",stroke:"#fff",strokeWidth:"2",fill:"none"}))),r.a.createElement("h1",{className:"header-title"},a))})));t.a=i},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=a(6),o=(a(18),a(2)),s=a(1);function u(e){return{type:"ACTION_SET_DEPART_DATE",payload:e}}function d(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){var a=e.detail,n=e.candidates,r=a.departTimeStr,i=a.durationStr,c=a.arriveTimeStr,l=a.arriveDate;t({type:"ACTION_SET_DEPART_TIME",payload:r}),t({type:"ACTION_SET_ARRIVE_DATE",payload:l}),t(function(e){return{type:"ACTION_SET_ARRIVE_TIME",payload:e}}(c)),t(function(e){return{type:"ACTION_SET_DURATION",payload:e}}(i)),t({type:"ACTION_SET_TICKETS",payload:n})}))}}function m(){return function(e,t){var a=t().departDate;e(u(Object(s.a)(a)+864e5))}}function p(){return function(e,t){var a=t().departDate;e(u(Object(s.a)(a)-864e5))}}function v(e){return{type:"ACTION_TOGGLE_SCHEDULE_VISIBLE",payload:e}}var E={trainNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_TRAIN_NUMBER":return n}return e},departDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_DEPART_DATE":return n}return e},arriveDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_ARRIVE_DATE":return n}return e},departStation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_DEPART_STATION":return n}return e},arriveStation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_ARRIVE_STATION":return n}return e},departTimeStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_DEPART_TIME":return n}return e},arriveTimeStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_ARRIVE_TIME":return n}return e},durationStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_DURATION":return n}return e},tickets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_TICKETS":return n}return e},isScheduleVisible:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_TOGGLE_SCHEDULE_VISIBLE":return n}return e},searchParsed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ACTION_SET_SEARCH_PARSED":return n}return e}},f=a(12),S=Object(o.d)(Object(o.c)(E),{trainNumber:null,departDate:Date.now(),arriveDate:Date.now(),departStation:null,arriveStation:null,departTimeStr:null,arriveTimeStr:null,durationStr:null,tickets:[],searchParsed:!1,isScheduleVisible:!1},Object(o.a)(f.a)),h=(a(58),a(8)),T=a.n(h),b=a(4),N=a.n(b),y=(a(59),a(7)),O=a(10),_=a(11),D=a(16),A=a(5),I={trainNumber:null,departStation:null,arriveStation:null,departDate:Date.now()},g=Object(n.createContext)(I),j=(a(60),function(e){var t=e.name,a=e.desc,i=e.type,c=Object(n.useContext)(g),l=c.trainNumber,o=c.departStation,s=c.arriveStation,u=c.departDate,d=Object(n.useMemo)((function(){return new T.a("order.html").setSearch("trainNumber",l+"").setSearch("dStation",o+"").setSearch("aStation",s+"").setSearch("type",i).setSearch("date",N()(u).format("YYYY-MM-DD")).toString()}),[i,l,o,s,u]);return r.a.createElement("div",{className:"channel"},r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"name"},t),r.a.createElement("div",{className:"desc"},a)),r.a.createElement("a",{href:d,className:"buy-wrapper"},r.a.createElement("div",{className:"buy"},"\u4e70\u7968")))}),C=function(e){var t=e.type,a=e.priceMsg,n=e.ticketsLeft,i=e.channels,c=e.expanded,l=e.onToggle,o=e.idx;return r.a.createElement("li",null,r.a.createElement("div",{className:"bar",onClick:function(){return l(o)}},r.a.createElement("span",{className:"seat"},t),r.a.createElement("span",{className:"price"},r.a.createElement("i",null,"\uffe5"),a),r.a.createElement("span",{className:"btn"},c?"\u6536\u8d77":"\u9884\u5b9a"),r.a.createElement("span",{className:"num"},n)),r.a.createElement("div",{className:"channels",style:{height:c?55*i.length+"px":0}},i.map((function(e){return r.a.createElement(j,Object.assign({key:e.name},e,{type:t}))}))))},k=Object(n.memo)((function(e){var t=e.tickets,a=Object(n.useState)(-1),i=Object(A.a)(a,2),c=i[0],l=i[1],o=Object(n.useCallback)((function(e){l(e===c?-1:e)}),[c]);return r.a.createElement("div",{className:"candidate"},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(C,Object.assign({idx:t,onToggle:o,expanded:c===t,key:e.type},e))}))))})),w=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,72))})),R=Object(l.b)((function(e){return{trainNumber:e.trainNumber,departDate:e.departDate,arriveDate:e.arriveDate,departStation:e.departStation,arriveStation:e.arriveStation,departTimeStr:e.departTimeStr,arriveTimeStr:e.arriveTimeStr,durationStr:e.durationStr,tickets:e.tickets,isScheduleVisible:e.isScheduleVisible,searchParsed:e.searchParsed}}),(function(e){return{dispatch:e,fetchInfo:Object(o.b)(d,e)}}))((function(e){var t=e.trainNumber,a=e.departDate,i=e.arriveDate,c=e.departStation,l=e.arriveStation,o=e.departTimeStr,d=e.arriveTimeStr,E=e.durationStr,f=e.tickets,S=e.isScheduleVisible,h=e.searchParsed,b=e.fetchInfo,A=e.dispatch,I=Object(n.useCallback)((function(){window.history.back()}),[]);Object(n.useEffect)((function(){var e={trainNumber:null,dStation:null,aStation:null,date:Date.now()},t=Object.assign(e,T.a.parseQuery(window.location.search)),a=t.trainNumber,n=t.dStation,r=t.aStation,i=t.date;A({type:"ACTION_SET_TRAIN_NUMBER",payload:a}),A({type:"ACTION_SET_DEPART_STATION",payload:n}),A(function(e){return{type:"ACTION_SET_ARRIVE_STATION",payload:e}}(r)),A(u(Object(s.a)(N()(i).valueOf()))),A({type:"ACTION_SET_SEARCH_PARSED",payload:!0})}),[A]),Object(n.useEffect)((function(){document.title=t+""}),[t]),Object(n.useEffect)((function(){if(h){var e=new T.a("http://easy-mock.liuup.com/mock/5efef790339f163501d502b7/api/ticket/detail").setSearch("date",N()(a).format("YYYY-MM-DD")).setSearch("trainNumber",t+"").toString();b(e)}}),[h,a,t,A,b]);var j=Object(_.a)(a,A,p,m),C=j.isPrevDisabled,R=j.isNextDisabled,M=j.prev,x=j.next;return h?r.a.createElement("div",null,r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(y.a,{title:t+"",onBack:I})),r.a.createElement(O.a,{date:a,isPrevDisabled:C,isNextDisabled:R,prev:M,next:x}),r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement(D.a,{departStation:c,departTimeStr:o,departDate:a,trainNumber:t,durationStr:E,arriveStation:l,arriveTimeStr:d,arriveDate:i},r.a.createElement("span",{className:"left"}),r.a.createElement("span",{className:"schedule",onClick:function(){return A(v(!S))}},"\u65f6\u523b\u8868"),r.a.createElement("span",{className:"right"}))),r.a.createElement(g.Provider,{value:{trainNumber:t,departStation:c,arriveStation:l,departDate:a}},r.a.createElement(k,{tickets:f})),S&&r.a.createElement("div",{className:"mask",onClick:function(){return A(v(!S))}},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"loading")},r.a.createElement(w,{date:a,trainNumber:t,departStation:c,arriveStation:l})))):null}));c.a.render(r.a.createElement(l.a,{store:S},r.a.createElement(R,null)),document.getElementById("root"))}},[[57,8,0,1]]]);
//# sourceMappingURL=ticket.a0feb15b.chunk.js.map