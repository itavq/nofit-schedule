(this["webpackJsonpnofit-schedule"]=this["webpackJsonpnofit-schedule"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),o=(a(10),a(1)),c={apiKey:"AIzaSyC2qP-fbbvdZAmVaHs1pQ2iy5sZKsOCddc",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"16VadQQcgc4YeHW_AKlaaO0Z9u9yEsho9P4EiLfoncfs"},i=a(4),u=a.n(i),m=(a(11),function(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:c.spreadsheetId,ranges:["'\u05de\u05e2\u05e8\u05db\u05ea'!B2:H","'\u05ea\u05db\u05e0\u05d9\u05dd'!A1:G"]}).then((function(t){var a=p(t.result.valueRanges);e(a)}),(function(e){console.error(e.result.error)}))}))}),p=function(e){console.log(e);for(var t=e[0].values,a=e[0].values[0],n=[],l=[],r=[],s={},o=1;o<a.length;o++){var c=a[o];r.push(c);for(var i=function(a){var r=t[a][0],i=t[a][o];if(i&&!s[i]){var u=e[1].values.find((function(e){return e[0]===i}));u&&(s[i]={label:i,who:u.slice(1,5).map((function(e,t){return"TRUE"===e&&t+1})),link:u[5],tooltip:u[6]})}-1===l.indexOf(r)&&l.push(r),n[c]=n[c]?n[c]:[],n[c][r]=n[c][r]?n[c][r]:[],n[c][r].push(i)},u=1;u<t.length;u++)i(u)}return{days:r,hours:l,lessons:s,schedule:n}};var d=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),i=Object(o.a)(s,2),p=i[0],d=i[1];return Object(n.useEffect)((function(){window.gapi.load("client",(function(){return function(e){window.gapi.client.init({apiKey:c.apiKey,discoveryDocs:c.discoveryDocs}).then((function(){m(e)}))}(r)}))}),[]),console.log(a),l.a.createElement("div",{className:"App container"},l.a.createElement("header",null,l.a.createElement("div",{className:"selector"},l.a.createElement("span",null,"\u05e9\u05d9\u05e2\u05d5\u05e8\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05de\u05d9\u05dd \u05dc:"),l.a.createElement("select",{value:p,onChange:function(e){d(e.target.value)}},l.a.createElement("option",{value:"0"},"\u05db\u05d5\u05dc\u05dd"),l.a.createElement("option",{value:"1"},"\u05d0"),l.a.createElement("option",{value:"2"},"\u05d1"),l.a.createElement("option",{value:"3"},"\u05d2"),l.a.createElement("option",{value:"4"},"\u05d3"))),l.a.createElement("h1",null,"\u05de\u05e2\u05e8\u05db\u05ea \u05e9\u05e2\u05d5\u05ea - \u05de\u05e1\u05dc\u05d5\u05dc \u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9 \u05d1\u05e0\u05d5\u05e4\u05d9\u05ea")),a?l.a.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"days"},l.a.createElement("th",null),a.days.map((function(e){return l.a.createElement("th",{key:e||"empty"},e)})))),l.a.createElement("tbody",null,a.hours.map((function(e){return l.a.createElement("tr",{key:e||"empty"},l.a.createElement("td",{className:"time"},e),a.days.map((function(t){return l.a.createElement("td",{key:t},a.schedule[t][e].map((function(e,t){var n=a.lessons[e];if(!n)return null;var r=!(!n||!n.who.includes(parseInt(p)));return 0===parseInt(p)||r?l.a.createElement("div",{key:e+t,className:"lesson color-"+Object.keys(a.lessons).indexOf(e)%6,"data-tooltip":n.tooltip?n.tooltip:null},n.link?l.a.createElement("a",{href:n.link,target:"_blank",rel:"noopener noreferrer"},e):e):null})))})))})))):l.a.createElement("div",{className:"logo-wrp"},l.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"})),l.a.createElement("p",{className:"links"},l.a.createElement("span",null,"\u05dc\u05d9\u05e0\u05e7\u05d9\u05dd: "),l.a.createElement("span",null,l.a.createElement("a",{href:"https://drive.google.com/drive/folders/1q_nmaCrEJy1qW_ypgAT6GVgyVyTw1sk1?usp=sharing"},"\u05e1\u05e4\u05e8\u05d9\u05d9\u05ea \u05d3\u05e8\u05d9\u05d9\u05d1")),l.a.createElement("span",null,"\xa0| "),l.a.createElement("span",null,l.a.createElement("a",{href:"https://edu-il.zoom.us/j/4098147467%23success"},"\u05d6\u05d5\u05dd \u05d7\u05dc\u05d9")),l.a.createElement("span",null,"\xa0| "),l.a.createElement("span",null,l.a.createElement("a",{href:"https://edu-il.zoom.us/j/4098147467%23success"},"\u05d6\u05d5\u05dd \u05e2\u05d9\u05e8\u05d9\u05ea")),l.a.createElement("span",null,"\xa0| "),l.a.createElement("span",null,l.a.createElement("a",{href:"https://edu-il.zoom.us/j/4098147467%23success"},"\u05d6\u05d5\u05dd \u05e9\u05dc\u05d4\u05d1\u05ea"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.189f6298.chunk.js.map