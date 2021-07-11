(this["webpackJsonpronas-weather-app"]=this["webpackJsonpronas-weather-app"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(24),c=n.n(a),o=n(7),s=n(25),u=n.n(s),l=(n(49),n(2)),d=function(e){var t=e.weatherType,n=e.children;return Object(l.jsx)("div",{className:u()("container",{"container_bad-weather":"BAD"===t,"container_good-weather":"GOOD"===t}),children:n})},f=(n(51),function(e){var t=e.children;return Object(l.jsx)("header",{className:"header",children:t})}),j=(n(52),function(e){var t=e.children;return Object(l.jsx)("main",{className:"main",children:t})}),b=(n(53),function(e){var t=e.children;return Object(l.jsx)("footer",{className:"footer",children:t})}),h=n(14),p=n.n(h),v=n(22),m=n(40),O=n(23),x=n(27),g=(n(55),function(e){var t=e.type,n=void 0===t?"default":t,r=e.label,i=e.icon,a=Object(x.a)(e,["type","label","icon"]);return Object(l.jsxs)("button",Object(O.a)(Object(O.a)({type:"button"},a),{},{className:u()("button",{button_outlined:"outlined"===n,"button_with-icon":i}),children:[i,r]}))});function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.489 0.838191L0.238948 11.6268L8.72799 13.2769L13.2146 20.7637L17.489 0.838191Z"});function C(e,t){var n=e.title,i=e.titleId,a=w(e,["title","titleId"]);return r.createElement("svg",y({width:18,height:21,viewBox:"0 0 18 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),n?r.createElement("title",{id:i},n):null,_)}var N=r.forwardRef(C),k=(n.p,n(56),function(e){var t=e.onConfirmClick,n=e.confirmDisabled,r=Object(x.a)(e,["onConfirmClick","confirmDisabled"]);return Object(l.jsxs)("div",{className:"input__container",children:[Object(l.jsx)("input",Object(O.a)({className:"input__field",onKeyPress:function(e){"Enter"===e.key&&t()}},r)),Object(l.jsx)("button",{disabled:n,type:"button",className:"input__confirm-button",onClick:t,children:"OK"})]})}),I=(n(57),n(16)),S=Object(I.c)({name:"city",initialState:{name:""},reducers:{setCityName:function(e,t){e.name=t.payload}}}),F=S.actions.setCityName,E=S.reducer,D=function(e){return void 0===e?"--":e},U=n(26),L=n.n(U),P={getWeatherInfo:function(e){return L.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:e,appid:"bb1ac8f65272ad3184db863cd2445dc2",lang:"ru"}}).then((function(e){return e.data}))}},M=Object(I.b)("weatherInfo/fetchWeatherData",function(){var e=Object(v.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,P.getWeatherInfo(t);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r("Loading Error"));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),W={info:{temp:void 0,description:void 0,wind:void 0,pressure:void 0,humidity:void 0,rainChance:void 0,icon:void 0},status:"idle"},B=Object(I.c)({name:"weatherInfo",initialState:W,reducers:{setError:function(e,t){e.error=t.payload}},extraReducers:function(e){e.addCase(M.pending,(function(e){e.status="loading",e.error=void 0})).addCase(M.fulfilled,(function(e,t){var n=t.payload,r=n.main,i=n.weather,a=n.wind,c=n.clouds,o=i[0],s=o.description,u=o.icon,l=r.temp,d=r.pressure,f=r.humidity;e.info.temp=l,e.info.description=s,e.info.wind=a,e.info.pressure=d,e.info.humidity=f,e.info.rainChance=c.all,e.info.icon=u,e.status="idle"})).addCase(M.rejected,(function(e){e.status="rejected",e.error="\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438",e.info.temp=void 0,e.info.description=void 0,e.info.wind=void 0,e.info.pressure=void 0,e.info.humidity=void 0,e.info.rainChance=void 0,e.info.icon=void 0}))}}),R=B.actions.setError,V=B.reducer,q={getCityInfo:function(e,t){return L.a.get("https://us1.locationiq.com/v1/reverse.php",{params:{key:"pk.bff272f6cad216c3925ac9bde8070458",lat:e,lon:t,format:"json","accept-language":"ru"}}).then((function(e){return e.data}))}},A=function(){var e,t=Object(r.useState)(!1),n=Object(m.a)(t,2),i=n[0],a=n[1],c=Object(o.c)((function(e){return e.city.name})),s=Object(o.b)(),u=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(M(c||""));case 2:a(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation?navigator.geolocation.getCurrentPosition(function(){var e=Object(v.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getCityInfo(t.coords.latitude,t.coords.longitude);case 2:return n=e.sent,r=n.address.city,s(F(r)),e.next=7,s(M(r));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):s(R("\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?Object(l.jsx)(k,{confirmDisabled:0===c.length,onConfirmClick:u,value:c,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",onChange:function(e){return s(F(e.target.value))}}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"city-name__title",children:c?(e=c,e.split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")):"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),Object(l.jsxs)("div",{className:"city-name__container",children:[Object(l.jsx)(g,{label:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434",onClick:function(){return a(!i)}}),Object(l.jsx)(g,{label:"\u041c\u043e\u0451 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u0436\u0435\u043d\u0438\u0435",icon:Object(l.jsx)(N,{}),onClick:d})]})]})},G=(n(76),function(e){var t=e.items,n=e.onChange,r=e.currentValue;return Object(l.jsx)("div",{className:"switch__container",children:t.map((function(e){return Object(l.jsxs)("div",{className:"switch__item",children:[Object(l.jsx)("input",{value:e.value.toString(),onChange:n,type:"radio",name:e.value.toString(),id:e.value.toString(),checked:e.value===r}),Object(l.jsx)("label",{htmlFor:e.value.toString(),children:e.label})]},e.value.toString())}))})}),J=Object(I.c)({name:"options",initialState:{measureUnits:"celsius"},reducers:{toggleMeasureUnits:function(e,t){e.measureUnits=t.payload}}}),K=J.actions.toggleMeasureUnits,T=J.reducer,z=(n(77),[{value:"celsius",label:"C"},{value:"fahrenheit",label:"F"}]),Z=function(){var e=Object(o.c)((function(e){return e.options.measureUnits})),t=Object(o.b)();return Object(l.jsxs)("div",{className:"weather-unit-toggler__container",children:[Object(l.jsx)("span",{className:"weather-unit-toggler__symbol",children:"\xb0"}),Object(l.jsx)(G,{items:z,onChange:function(e){t(K("celsius"===e.target.value?"celsius":"fahrenheit"))},currentValue:e})]})},H=n(112),Q=n(111),X=(n(78),n(39)),Y=function(){return Object(l.jsx)(X.PuffLoader,{color:"#FFF",size:150})},$=function(){var e=Object(o.c)((function(e){return e.weatherInfo})),t=e.info,n=t.temp,r=t.icon,i=t.description,a=e.status,c=e.error,s=Object(o.c)((function(e){return e.options.measureUnits})),u=n?function(e){switch(s){case"celsius":return(e-273.15).toFixed(1);case"fahrenheit":return function(e){return(9*(e-273.15)/5+32).toFixed(1)}(e);default:return e.toString()}}(n):"--";return Object(l.jsx)("div",{className:"weather-info__container",children:Object(l.jsxs)(H.a,{children:["loading"===a?Object(l.jsx)(Y,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(Q.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"weather-info__value",children:[r?Object(l.jsx)("img",{className:"weather-info__icon",src:"".concat("https://openweathermap.org/img/wn/").concat(r,"@4x.png"),alt:"Weather icon"}):null,Object(l.jsxs)("h1",{children:[u," \xb0"]})]}),Object(l.jsx)("span",{className:"weather-info__type",children:i||"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"})]}),"rejected"===a&&Object(l.jsx)(Q.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"weather-info__error",children:c})]})})},ee=(n(105),function(e){var t=e.label,n=e.value;return Object(l.jsxs)("div",{className:"value-display__container",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("span",{className:"value-display__value",children:n||"--"})]})}),te=function(){var e,t,n=Object(o.c)((function(e){return e.weatherInfo})).info,r=n.wind,i=n.pressure,a=n.humidity,c=n.rainChance,s=[{label:"\u0412\u0435\u0442\u0435\u0440",value:"".concat(D(null===r||void 0===r?void 0:r.speed)," \u043c/\u0441, ").concat((null===r||void 0===r?void 0:r.deg)?(t=r.deg,["\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439","\u0441\u0435\u0432\u0435\u0440\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439","\u044e\u0436\u043d\u044b\u0439","\u044e\u0436\u043d\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439","\u0437\u0430\u043f\u0430\u0434\u043d\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439"][Math.round(t/45)%8]):"")},{label:"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435",value:"".concat(i?(e=i,(e/1.333).toFixed(1)):"--"," \u043c\u043c. \u0440\u0442. \u0441\u0442.")},{label:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",value:"".concat(D(a),"%")},{label:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0436\u0434\u044f",value:"".concat(D(c),"%")}];return Object(l.jsx)(l.Fragment,{children:s.map((function(e){return Object(l.jsx)(ee,{label:e.label,value:e.value},e.label)}))})},ne=function(){var e=Object(o.c)((function(e){return e.weatherInfo.info.icon}));return Object(l.jsxs)(d,{weatherType:void 0===e||Number.parseInt(e.split("d")[0],10)<=9?"GOOD":"BAD",children:[Object(l.jsxs)(f,{children:[Object(l.jsx)(A,{}),Object(l.jsx)(Z,{})]}),Object(l.jsx)(j,{children:Object(l.jsx)($,{})}),Object(l.jsx)(b,{children:Object(l.jsx)(te,{})})]})},re=Object(I.a)({reducer:{city:E,options:T,weatherInfo:V}});n(106),n(107);c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o.a,{store:re,children:Object(l.jsx)(ne,{})})}),document.getElementById("root"))},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.9b11b2f6.chunk.js.map