(this["webpackJsonpppt-widget"]=this["webpackJsonpppt-widget"]||[]).push([[0],{33:function(e,t,n){e.exports=n(41)},38:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(28),o=n.n(a),i=(n(38),n(16)),u=n(32),l=n(9),s=n(10),f=n(44),p=n(46),d=n(19),m=n(45);function b(){var e=Object(l.a)(["\n  position: absolute;\n"]);return b=function(){return e},e}var E=s.a.div(b()),v=function(e){var t=e.children,n=e.relativeEl,a=e.onPositionSet,o=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=Object(f.a)(o.current,"mousedown"),t=Object(f.a)(document,"mousemove"),r=Object(f.a)(document,"mouseup"),c=e.pipe(Object(p.a)((function(e){return t.pipe(Object(d.a)((function(t){return t.preventDefault(),{left:t.clientX-e.offsetX-n.current.offsetWidth+window.scrollX,top:t.clientY-e.offsetY-n.current.offsetTop+window.scrollY}})),Object(m.a)(r))}))).subscribe((function(e){var t=e.left,n=e.top;o.current.style.top="".concat(n,"px"),o.current.style.left="".concat(t,"px"),a(t,n)}));return function(){return c.unsubscribe()}}),[n,o,a]),c.a.createElement(E,{ref:o},t)};function O(){var e=Object(l.a)(["\n  width: 50%;\n  justify-content: center;\n"]);return O=function(){return e},e}function h(){var e=Object(l.a)(["\n  width: 50%;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return h=function(){return e},e}function w(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n"]);return w=function(){return e},e}var j=s.a.div(w()),g=s.a.div(h()),y=s.a.div(O()),N=function(e){var t=e.setData,n=Object(r.useState)(null),a=Object(i.a)(n,2),o=a[0],l=a[1],s=Object(r.useState)([]),f=Object(i.a)(s,2),p=f[0],d=f[1],m=Object(r.useRef)(null),b=function(e){d([].concat(Object(u.a)(p),[{type:e,left:0,top:0}]))},E=function(e){return function(t,n){var r=p;r[e].left=t,r[e].top=n,d(r)}};return c.a.createElement(j,null,c.a.createElement(j,null,c.a.createElement(g,null,c.a.createElement("input",{type:"file",onChange:function(e){l(URL.createObjectURL(e.target.files[0]))}}),c.a.createElement("button",{onClick:function(){return b("INPUT_NUMBER")}},"create input number widget"),c.a.createElement("button",{onClick:function(){return b("EXPRESSION")}},"create expression widget"),c.a.createElement("button",{onClick:function(){return b("DROPDOWN")}},"create dropdown widget"),c.a.createElement("button",{onClick:function(){return b("NUMBERIC_INPUT")}},"create numberic input widget"),c.a.createElement("button",{onClick:function(){t({file:o,pptWidth:m.current.offsetWidth,pptHeight:m.current.offsetHeight,boxes:p})}},"Preview")),c.a.createElement(y,null,c.a.createElement("div",{ref:m,style:{position:"relative",maxWidth:"800px",minWidth:"400px"}},c.a.createElement("img",{alt:"preview",src:o,style:{width:"100%"}}),p.map((function(e,t){switch(e.type){case"INPUT_NUMBER":return c.a.createElement(v,{key:"draggable-input-".concat(t),relativeEl:m,onPositionSet:E(t)},c.a.createElement("input",null));case"EXPRESSION":case"DROPDOWN":case"NUMBERIC_INPUT":default:return null}}))))))};function R(){var e=Object(l.a)(["\n  position: absolute;\n\n  left: ","%;\n  top: ","%;\n"]);return R=function(){return e},e}var P=s.a.div(R(),(function(e){return e.left}),(function(e){return e.top})),x=function(e){var t=e.data,n=t.file,a=t.pptWidth,o=t.pptHeight,i=t.boxes,u=Object(r.useRef)(null);return u.current&&console.log(u.current.offsetWidth,u.current.offsetHeight),c.a.createElement("div",{ref:u,style:{position:"relative"}},c.a.createElement("img",{alt:"preview",src:n,style:{width:"100%"}}),u.current&&i.map((function(e,t){console.log(i,o,a);var n=e.type,r=e.left,u=e.top,l=100*r/a,s=100*u/o;switch(n){case"INPUT_NUMBER":return c.a.createElement(P,{left:l,top:s},c.a.createElement("input",null));case"EXPRESSION":case"DROPDOWN":case"NUMBERIC_INPUT":default:return null}})))};var U=function(){var e=Object(r.useState)({boxes:[]}),t=Object(i.a)(e,2),n=t[0],a=t[1];return c.a.createElement("div",null,c.a.createElement(N,{setData:a}),c.a.createElement("div",{style:{marginBottom:"100px"}}),c.a.createElement(x,{data:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.694fb837.chunk.js.map