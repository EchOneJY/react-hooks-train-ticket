(this["webpackJsonpmy-train-ticket-ts"]=this["webpackJsonpmy-train-ticket-ts"]||[]).push([[3],{1:function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=new Date(e);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t.getTime()}n.d(t,"a",(function(){return a}))},10:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(3),l=n.n(i),c=n(4),o=n.n(c),u=(n(19),n(15),Object(a.memo)((function(e){var t=e.date,n=e.prev,i=e.next,c=e.isPrevDisabled,u=e.isNextDisabled,s=Object(a.useMemo)((function(){var e=o()(t);return e.format("M\u6708D\u65e5")+e.locale("zh-cn").format("ddd")}),[t]);return r.a.createElement("div",{className:"nav"},r.a.createElement("span",{onClick:n,className:l()("nav-prev",{"nav-disabled":c})},"\u524d\u4e00\u5929"),r.a.createElement("span",{className:"nav-current"},s),r.a.createElement("span",{onClick:i,className:l()("nav-next",{"nav-disabled":u})},"\u540e\u4e00\u5929"))})));t.a=u},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(1);function i(e,t,n,i){var l=Object(r.a)(e)<=Object(r.a)(),c=Object(r.a)(e)-Object(r.a)()>1728e6,o=Object(a.useCallback)((function(){l||t(n())}),[t,n,l]),u=Object(a.useCallback)((function(){c||t(i())}),[t,i,c]);return{isPrevDisabled:l,isNextDisabled:c,prev:o,next:u}}},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),l=n.n(i);n(21);function c(e){var t=l()(e);return t.format("MM-DD")+" "+t.locale("zh-cn").format("ddd")}var o=Object(a.memo)((function(e){var t=e.departStation,n=e.departTimeStr,i=e.departDate,l=e.trainNumber,o=e.durationStr,u=e.arriveStation,s=e.arriveTimeStr,d=e.arriveDate,m=Object(a.useMemo)((function(){return c(i)}),[i]),p=Object(a.useMemo)((function(){return c(d)}),[d]);return r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left"},r.a.createElement("p",{className:"city"},t),r.a.createElement("p",{className:"time"},n),r.a.createElement("p",{className:"date"},m)),r.a.createElement("div",{className:"middle"},r.a.createElement("p",{className:"train-name"},l),r.a.createElement("p",{className:"train-mid"},e.children),r.a.createElement("p",{className:"train-time"},"\u8017\u65f6",o)),r.a.createElement("div",{className:"right"},r.a.createElement("p",{className:"city"},u),r.a.createElement("p",{className:"time"},s),r.a.createElement("p",{className:"date"},p))))}));t.a=o},21:function(e,t,n){},61:function(e,t,n){e.exports=n(67)},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),l=n.n(i),c=n(6),o=(n(18),n(2)),u=n(17);var s=n(13);function d(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(s.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw r}}}}function p(e){return function(t){fetch(e).then((function(e){return e.json()})).then((function(e){var n=e.departTimeStr,a=e.arriveTimeStr,r=e.arriveDate,i=e.durationStr,l=e.price;t({type:"SET_DEPART_TIME",payload:n}),t(function(e){return{type:"SET_ARRIVE_TIME",payload:e}}(a)),t({type:"SET_ARRIVE_DATE",payload:r}),t(function(e){return{type:"SET_DURATION_TIME",payload:e}}(i)),t(function(e){return{type:"SET_PRICE",payload:e}}(l))}))}}function f(e){return{type:"SET_DEPART_DATE",payload:e}}function v(){return function(e,t){e(f(t().departDate-864e5))}}function E(){return function(e,t){e(f(t().departDate+864e5))}}function y(e){return{type:"SET_PASSENGER",payload:e}}var h=0;function b(){return function(e,t){var n=t().passengers;console.log(n);var a,r=m(n);try{for(r.s();!(a=r.n()).done;)for(var i=a.value,l=Object.keys(i),c=0,o=l;c<o.length;c++){if(!i[o[c]])return void alert("\u8bf7\u8865\u5168\u4fe1\u606f\u540e\u518d\u6dfb\u52a0")}}catch(u){r.e(u)}finally{r.f()}e(y([].concat(d(n),[{id:++h,ticketType:"adult",name:"",licenceNo:"",seat:"Z"}])))}}function T(){return function(e,t){var n,a=t().passengers,r=null,i=m(a);try{for(i.s();!(n=i.n()).done;)for(var l=n.value,c=Object.keys(l),o=0,u=c;o<u.length;o++){if(!l[u[o]])return void alert("\u8bf7\u8865\u5168\u4fe1\u606f\u540e\u518d\u6dfb\u52a0");"adult"===l.ticketType&&(r=l.id)}}catch(s){i.e(s)}finally{i.f()}r?e(y([].concat(d(a),[{id:++h,name:"",ticketType:"child",gender:"male",birthday:"",followAdult:r,seat:"Z"}]))):alert("\u8bf7\u81f3\u5c11\u6b63\u786e\u6dfb\u52a0\u4e00\u4e2a\u540c\u884c\u6210\u4eba")}}function S(e){return function(t,n){t(y(n().passengers.filter((function(t){return t.id!==e&&t.followAdult!==e}))))}}function N(e,t,n){return function(a,r){var i=r().passengers,l=d(i),c=function(a){if(i[a].id===e)return l[a]=Object.assign({},i[a],t),n&&n.forEach((function(e){return delete l[a][e]})),"break"};for(var o in l){if("break"===c(o))break}a(y(l))}}function g(e){return{type:"SET_MENU_VISIBLE",payload:e}}function w(e){return function(t){t(function(e){return{type:"SET_MENU",payload:e}}(e)),t(g(!0))}}function A(){return function(e){e(g(!1))}}function k(e){return function(t,n){var a=n().passengers.find((function(t){return t.id===e}));a&&t(w({onPress:function(n){t(N(e,{gender:n})),t(A())},options:[{title:"\u7537",value:"male",active:"male"===a.gender},{title:"\u5973",value:"female",active:"female"===a.gender}]}))}}function O(e){return function(t,n){var a=n().passengers,r=a.find((function(t){return t.id===e}));r&&t(w({onPress:function(n){t(N(e,{followAdult:n})),t(A())},options:a.filter((function(e){return"adult"===e.ticketType})).map((function(e){return{title:e.name,value:e.id,active:e.id===r.followAdult}}))}))}}function D(e){return function(t,n){var a=n().passengers,r=a.find((function(t){return t.id===e}));r&&t(w({onPress:function(n){if("adult"===n)t(N(e,{ticketType:n,licenceNo:""},["gender","followAdult","birthday"]));else{var r=a.find((function(t){return t.id!==e&&"adult"===t.ticketType}));r?t(N(e,{ticketType:n,gender:"",followAdult:r.id,birthday:""},["licenceNo"])):alert("\u6ca1\u6709\u5176\u4ed6\u6210\u4eba\u4e58\u5ba2")}t(g(!1))},options:[{title:"\u6210\u4eba\u7968",value:"adult",active:"adult"===r.ticketType},{title:"\u513f\u7ae5\u7968",value:"child",active:"child"===r.ticketType}]}))}}var _={trainNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_TRAIN_NUMBER":return a}return e},departStation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_DEPART_STATION":return a}return e},arriveStation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ARRIVE_STATION":return a}return e},departDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_DEPART_DATE":return a}return e},arriveDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ARRIVE_DATE":return a}return e},departTimeStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_DEPART_TIME":return a}return e},arriveTimeStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ARRIVE_TIME":return a}return e},durationTimeStr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_DURATION_TIME":return a}return e},seatType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_SEAT_TYPE":return a}return e},price:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_PRICE":return a}return e},passengers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_PASSENGER":return a}return e},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_MENU":return a}return e},isMenuVisible:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_MENU_VISIBLE":return a}return e},searchParsed:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_SEARCH_PARSED":return a}return e}},j=n(12),M=Object(o.d)(Object(o.c)(_),{trainNumber:null,departStation:null,arriveStation:null,departDate:Date.now(),arriveDate:Date.now(),departTimeStr:null,arriveTimeStr:null,durationTimeStr:null,seatType:null,price:null,passengers:[],menu:null,isMenuVisible:!1,searchParsed:!1},Object(o.a)(j.a)),P=(n(62),n(8)),I=n.n(P),R=n(4),C=n.n(R),x=(n(63),n(7)),V=n(10),U=n(16),B=(n(64),Object(a.memo)((function(e){var t=e.price,n=e.type;return r.a.createElement("div",{className:"ticket"},r.a.createElement("p",null,r.a.createElement("span",{className:"ticket-type"},n),r.a.createElement("span",{className:"ticket-price"},t)),r.a.createElement("div",{className:"label"},"\u5750\u5e2d"))}))),G=(n(65),function(e){var t=e.id,n=e.name,a=e.ticketType,i=e.followAdultName,l=e.licenceNo,c=e.gender,o=e.birthday,u=e.removePassenger,s=e.updatePassenger,d=e.showGenderMenu,m=e.showTicketTypeMenu,p=e.showFollowAdultMenu,f="adult"===a;return r.a.createElement("li",{className:"passenger"},r.a.createElement("i",{className:"delete",onClick:function(){u(t)}},"-"),r.a.createElement("ol",{className:"items"},r.a.createElement("li",{className:"item"},r.a.createElement("label",{className:"label name"},"\u59d3\u540d"),r.a.createElement("input",{type:"text",className:"input name",placeholder:"\u4e58\u5ba2\u59d3\u540d",value:n,onChange:function(e){return s(t,{name:e.target.value})}}),r.a.createElement("label",{className:"ticket-type",onClick:function(){return m(t)}},f?"\u6210\u4eba\u7968":"\u513f\u7ae5\u7968")),f&&r.a.createElement("li",{className:"item"},r.a.createElement("label",{className:"label licenceNo"},"\u8eab\u4efd\u8bc1"),r.a.createElement("input",{type:"text",className:"input licenceNo",placeholder:"\u8bc1\u4ef6\u53f7\u7801",value:l,onChange:function(e){return s(t,{licenceNo:e.target.value})}})),!f&&r.a.createElement("li",{className:"item arrow"},r.a.createElement("label",{className:"label gender"},"\u6027\u522b"),r.a.createElement("input",{type:"text",className:"input gender",placeholder:"\u8bf7\u9009\u62e9",value:"male"===c?"\u7537":"\u5973",readOnly:!0,onClick:function(){return d(t)}})),!f&&r.a.createElement("li",{className:"item"},r.a.createElement("label",{className:"label birthday"},"\u51fa\u751f\u65e5\u671f"),r.a.createElement("input",{type:"text",className:"input birthday",placeholder:"\u5982 19951015",value:o,onChange:function(e){return s(t,{birthday:e.target.value})}})),!f&&r.a.createElement("li",{className:"item arrow"},r.a.createElement("label",{className:"label followAdult"},"\u540c\u884c\u6210\u4eba"),r.a.createElement("input",{type:"text",className:"input followAdult",placeholder:"\u8bf7\u9009\u62e9",value:i,readOnly:!0,onClick:function(){return p(t)}}))))}),Y=Object(a.memo)((function(e){var t=e.passengers,n=e.createAdult,i=e.createChild,l=e.removePassenger,c=e.updatePassenger,o=e.showGenderMenu,u=e.showTicketTypeMenu,s=e.showFollowAdultMenu,d=Object(a.useMemo)((function(){var e,n={},a=m(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;n[r.id]=r.name}}catch(i){a.e(i)}finally{a.f()}return n}),[t]);return r.a.createElement("div",{className:"passengers"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(G,Object.assign({},e,{key:e.id,followAdultName:e.followAdult&&d[e.followAdult]||"",removePassenger:l,updatePassenger:c,showGenderMenu:o,showTicketTypeMenu:u,showFollowAdultMenu:s}))}))),r.a.createElement("section",{className:"add"},r.a.createElement("div",{className:"adult",onClick:function(){return n()}},"\u6dfb\u52a0\u6210\u4eba"),r.a.createElement("div",{className:"child",onClick:function(){return i()}},"\u6dfb\u52a0\u513f\u7ae5")))})),F=n(3),H=n.n(F),z=(n(66),function(e){var t=e.title,n=e.value,a=e.active,i=e.onPress;return r.a.createElement("li",{className:H()({active:a}),onClick:function(){return i(n)}},t)}),J=Object(a.memo)((function(e){var t=e.show,n=e.onPress,a=e.options,i=e.hideMenu;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:"menu-mask",onClick:function(){return i()}}),r.a.createElement("div",{className:H()("menu",{show:t})},r.a.createElement("div",{className:"menu-title"}),r.a.createElement("ul",null,a&&a.map((function(e){return r.a.createElement(z,Object.assign({},e,{key:e.value,onPress:n}))})))))})),L=n(11),Z=Object(c.b)((function(e){return{trainNumber:e.trainNumber,departDate:e.departDate,arriveDate:e.arriveDate,departStation:e.departStation,arriveStation:e.arriveStation,departTimeStr:e.departTimeStr,arriveTimeStr:e.arriveTimeStr,durationTimeStr:e.durationTimeStr,price:e.price,seatType:e.seatType,passengers:e.passengers,menu:e.menu,isMenuVisible:e.isMenuVisible,searchParsed:e.searchParsed}}),(function(e){return{dispatch:e,fetchInfo:Object(o.b)(p,e)}}))((function(e){var t=e.trainNumber,n=e.departDate,i=e.arriveDate,l=e.departStation,c=e.arriveStation,u=e.departTimeStr,s=e.arriveTimeStr,d=e.durationTimeStr,m=e.price,p=e.seatType,y=e.passengers,h=e.menu,g=e.isMenuVisible,w=e.searchParsed,_=e.fetchInfo,j=e.dispatch,M=Object(a.useCallback)((function(){return window.history.back()}),[]),P=Object(L.a)(n,j,v,E),R=P.isPrevDisabled,G=P.isNextDisabled,F=P.prev,H=P.next;Object(a.useEffect)((function(){var e={trainNumber:null,dStation:null,aStation:null,type:null,date:Date.now()},t=Object.assign(e,I.a.parseQuery(window.location.search)),n=t.trainNumber,a=t.dStation,r=t.aStation,i=t.type,l=t.date;j({type:"SET_TRAIN_NUMBER",payload:n}),j({type:"SET_DEPART_STATION",payload:a}),j(function(e){return{type:"SET_ARRIVE_STATION",payload:e}}(r)),j(f(C()(l).valueOf())),j(function(e){return{type:"SET_SEAT_TYPE",payload:e}}(i)),j({type:"SET_SEARCH_PARSED",payload:!0})}),[j]),Object(a.useEffect)((function(){if(w){var e=new I.a("http://easy-mock.liuup.com/mock/5efef790339f163501d502b7/api/order").setSearch("trainNumber",t+"").setSearch("date",C()(n).format("YYYY-MM-DD")).toString();_(e)}}),[w,t,n,_]);var z=Object(a.useMemo)((function(){return Object(o.b)({createAdult:b,createChild:T,removePassenger:S,updatePassenger:N,showGenderMenu:k,showTicketTypeMenu:D,showFollowAdultMenu:O},j)}),[j]),Z=Object(a.useMemo)((function(){return Object(o.b)({hideMenu:A},j)}),[j]),Q=Object(a.useMemo)((function(){return h&&Object.keys(h).length?h:{options:[],onPress:function(){}}}),[h]);return w?r.a.createElement("div",{className:"order"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(x.a,{title:t+"",onBack:M})),r.a.createElement(V.a,{date:n,isPrevDisabled:R,isNextDisabled:G,prev:F,next:H}),r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement(U.a,{departStation:l,departTimeStr:u,departDate:n,trainNumber:t,durationStr:d,arriveStation:c,arriveTimeStr:s,arriveDate:i},r.a.createElement("span",{style:{display:"block"},className:"train-icon"}))),r.a.createElement(B,{price:m,type:p}),r.a.createElement(Y,Object.assign({passengers:y},z)),r.a.createElement(J,Object.assign({show:g},Z,Q))):null}));l.a.render(r.a.createElement(c.a,{store:M},r.a.createElement(Z,null)),document.getElementById("root"))},7:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=(n(14),Object(a.memo)((function(e){var t=e.onBack,n=e.title;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-back",onClick:t},r.a.createElement("svg",{width:"42",height:"42"},r.a.createElement("polyline",{points:"25,13 16,21 25,29",stroke:"#fff",strokeWidth:"2",fill:"none"}))),r.a.createElement("h1",{className:"header-title"},n))})));t.a=i}},[[61,6,0,1]]]);
//# sourceMappingURL=order.5f5e288e.chunk.js.map