(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={root:"ChangeDateTimePopup_root__azuEB",btn_group:"ChangeDateTimePopup_btn_group__-ni1T",time:"ChangeDateTimePopup_time__3u63z",dots:"ChangeDateTimePopup_dots__2T2I8",input:"ChangeDateTimePopup_input__F6E80",btn:"ChangeDateTimePopup_btn__1YwGA",input_time:"ChangeDateTimePopup_input_time__3VnnM",timePlaceholoders:"ChangeDateTimePopup_timePlaceholoders__pCIgX",validation:"ChangeDateTimePopup_validation__1R0F5"}},,,,,function(e,t,n){e.exports={root:"App_root__T2BF6",menuBtn:"App_menuBtn__2kjui",sidebar:"App_sidebar__3rJgO","sidebar--open":"App_sidebar--open__1oQFu",footer:"App_footer__RwsGr"}},,function(e,t,n){e.exports={root:"Button_root__32G6N",lg:"Button_lg__1F3KB",md:"Button_md__2zu23",icon:"Button_icon__3Ng3d",uppercase:"Button_uppercase__3Te6r",staticWidth:"Button_staticWidth__2YrbI",active:"Button_active__YoYzo"}},function(e,t,n){e.exports={root:"Date_root__2Iocu",row:"Date_row__1BsfJ",wrap:"Date_wrap__1pscn",refresh_btn:"Date_refresh_btn__fPqQz"}},function(e,t,n){e.exports={root:"Popup_root__1onLX",wrap:"Popup_wrap__3c9BD",open:"Popup_open__NABwl",fadeIn:"Popup_fadeIn__Xxliw",close:"Popup_close__2KuKx",fadeOut:"Popup_fadeOut__ZBbNj"}},function(e,t,n){e.exports={root:"SidebarButton_root__13TSZ",icon_left:"SidebarButton_icon_left__2QywR",icon_right:"SidebarButton_icon_right__1k0cr",outlined:"SidebarButton_outlined__17xef",active:"SidebarButton_active__QHA8z",text:"SidebarButton_text__2-5Jl"}},,function(e,t,n){e.exports={root:"Footer_root__2KrEc",dateWrap:"Footer_dateWrap__1d93P",speedWrap:"Footer_speedWrap__1XhiL"}},,,function(e,t,n){e.exports={root:"Speed_root__3UTl0",title:"Speed_title__1FsId",range:"Speed_range__2HkIc",input_wrap:"Speed_input_wrap__3-cCW"}},,function(e,t,n){e.exports={root:"Sidebar_root__2YFZw"}},,,,,function(e,t,n){e.exports={root:"PlayBar_root__2quDb"}},,,,function(e,t,n){e.exports={root:"MenuButton_root__vGZCH"}},,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,u,l,d,p,j,f,b=n(0),h=n.n(b),v=n(24),O=n.n(v),_=n(12),m=n(7),x=n.n(m),w=n(2),g=n(5),N=n.n(g),C=n(8),y=n(9),z=(n(47),"SET_TIME_DIRECTION_STATUS"),L="SET_PAUSE",k="SET_TIME",S="SET_DATE",T="OPEN_POPUP",E="CLOSE_POPUP",P="SET_SPEED",B=function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:k,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:S,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=n(1),F=h.a.memo((function(){var e=Object(w.b)();Object(w.c)((function(e){return e.pause}));return Object(b.useEffect)((function(){var t=new y.WorldWindow("canvasOne");t.addLayer(new y.BMNGOneImageLayer),t.addLayer(new y.BMNGLandsatLayer),t.addLayer(new y.BingAerialLayer),t.addLayer(new y.AtmosphereLayer(t));var n=new y.RenderableLayer;t.addLayer(n);var a=new y.PlacemarkAttributes(null);a.imageColor=y.Color.WHITE,a.imageSource="https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/images/white-dot.png",a.imageOffset=new y.Offset(y.OFFSET_FRACTION,.5,y.OFFSET_FRACTION,.5),a.imageScale=.05;var r=setInterval((function(){var n=function(){var n=Object(C.a)(N.a.mark((function n(){var r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://192.168.42.165:5000/v1/satelliteio/get",{method:"GET"}).then((function(e){return e.json()}));case 2:return r=n.sent,n.next=5,e(D(r.date));case 5:return c=r.time.split(":"),n.next=8,e(B({hh:c[0],mm:c[1],ss:c[2]}));case 8:r.data.forEach((function(e){var n=new y.Position(e.x,e.y,e.z),r=new y.Placemark(n,!1,a),c=new y.RenderableLayer("Custom Placemark");c.addRenderable(r),t.addLayer(c)}));case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),1e3);return function(){return clearInterval(r)}}),[e]),Object(I.jsx)("canvas",{id:"canvasOne",width:window.innerWidth+"px",height:window.innerHeight+"px",children:"Your browser does not support HTML5 Canvas."})})),A=F,M=n(22),V=n.n(M),W=n(18),Z=n.n(W),H=n(17),R=n.n(H),G=function(e){var t=e.className,n=void 0===t?"":t,a=e.size,r=void 0===a?"md":a,c=e.uppercase,i=void 0!==c&&c,o=e.active,s=void 0!==o&&o,u=e.disabled,l=void 0!==u&&u,d=e.children,p=void 0===d?"":d,j=e.icon,f=void 0===j?"":j,b=e.onClick,h=void 0===b?function(){}:b,v=x()(n,R.a.root,R.a[r],i&&R.a.uppercase,l&&R.a.disabled,s&&R.a.active);return Object(I.jsxs)("button",{onClick:h,className:v,children:[p,""!==f&&Object(I.jsx)("span",{className:R.a.icon,children:f})]})},X=function(e){var t=e.className,n=void 0===t?"":t,a=e.hh,r=void 0===a?"":a,c=e.mm,i=void 0===c?"":c,o=e.ss,s=void 0===o?"":o,u=e.date,l=void 0===u?"":u,d=e.onClick,p=void 0===d?function(){}:d;return Object(I.jsxs)("div",{className:Z.a.wrap,children:[Object(I.jsxs)("button",{className:x()(n,Z.a.root),onClick:p,children:[Object(I.jsxs)("div",{className:Z.a.row,children:[r,Object(I.jsx)("span",{children:":"}),i,Object(I.jsx)("span",{children:":"}),s,"Z"]}),Object(I.jsx)("div",{className:Z.a.row,children:l})]}),Object(I.jsx)(G,{className:Z.a.refresh_btn,onClick:function(){console.log("hello"),fetch("http://192.168.42.165:5000/v1/satelliteio/set?seconds=0&status=1",{method:"POST"})},children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})]})},J=n(32),U=n.n(J),Y=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,r=void 0===a?"":a;return Object(I.jsx)("div",{className:x()(n,U.a.root),children:r})},K=n(3),Q=n(4),q=Q.a.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"})(a||(a=Object(K.a)([""]))),$=(Object(Q.a)(q)(r||(r=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Object(Q.a)(q)(c||(c=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Object(Q.a)(q)(i||(i=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Object(Q.a)(q)(o||(o=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size}))),ee=function(e){var t=e.className,n=e.size,a=void 0===n?24:n;return Object(I.jsx)($,{viewBox:"0 0 24 24",className:t,size:a,fill:"currentColor",children:Object(I.jsx)("path",{fill:"currentColor",d:"M15 6L9 12L15 18",stroke:"white",strokeWidth:"2"})})},te=Object(Q.a)(q)(s||(s=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),ne=function(e){var t=e.className,n=e.size,a=void 0===n?24:n;return Object(I.jsx)(te,{viewBox:"0 0 24 24",className:t,size:a,fill:"currentColor",children:Object(I.jsx)("path",{fill:"currentColor",d:"M21.6667 2H1.66667C1.48986 2 1.32029 2.07024 1.19526 2.19526C1.07024 2.32029 1 2.48986 1 2.66667V3.78C1.00012 3.93746 1.03141 4.09333 1.09205 4.23865C1.15269 4.38396 1.24149 4.51583 1.35333 4.62667L9 12.3867V19.1867L10.3333 19.6933V12C10.3338 11.9123 10.317 11.8253 10.2838 11.7441C10.2507 11.6628 10.2018 11.589 10.14 11.5267L2.33333 3.72667V3.33333H21V3.74L13.22 11.5267C13.1534 11.5867 13.0996 11.6596 13.0618 11.7409C13.0239 11.8222 13.0029 11.9104 13 12V20.8067L14.3333 21.3333V12.3333L21.98 4.66667C22.0936 4.55302 22.1834 4.41781 22.2441 4.26899C22.3048 4.12016 22.3351 3.96071 22.3333 3.8V2.66667C22.3333 2.48986 22.2631 2.32029 22.1381 2.19526C22.013 2.07024 21.8435 2 21.6667 2Z"})})},ae=(Object(Q.a)(q)(u||(u=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Object(Q.a)(q)(l||(l=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Object(Q.a)(q)(d||(d=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size}))),re=function(e){var t=e.className,n=e.size,a=void 0===n?24:n;return Object(I.jsx)(ae,{viewBox:"0 0 24 24",className:t,size:a,fill:"currentColor",children:Object(I.jsx)("path",{fill:"currentColor",d:"M7.125 4.125H9V19.875H7.125V4.125ZM16.6875 4.125H15.1875C15.0844 4.125 15 4.20937 15 4.3125V19.6875C15 19.7906 15.0844 19.875 15.1875 19.875H16.6875C16.7906 19.875 16.875 19.7906 16.875 19.6875V4.3125C16.875 4.20937 16.7906 4.125 16.6875 4.125Z"})})},ce=Object(Q.a)(q)(p||(p=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),ie=function(e){var t=e.className,n=e.size,a=void 0===n?24:n;return Object(I.jsx)(ce,{viewBox:"0 0 24 24",className:t,size:a,fill:"currentColor",children:Object(I.jsx)("path",{fill:"currentColor",d:"M20.8313 11.0267L6.20039 2.31789C6.02961 2.21624 5.83495 2.16164 5.63621 2.15966C5.43748 2.15768 5.24177 2.20838 5.06899 2.30661C4.89622 2.40484 4.75255 2.54708 4.6526 2.71886C4.55266 2.89065 4.5 3.08584 4.5 3.28459V20.3537C4.50023 20.5507 4.55213 20.7442 4.65052 20.9148C4.74891 21.0854 4.89035 21.2273 5.0607 21.3261C5.23105 21.425 5.42436 21.4774 5.62133 21.4782C5.81829 21.479 6.01201 21.4281 6.18314 21.3306L20.8139 12.9703C20.9846 12.8727 21.1268 12.7321 21.2262 12.5625C21.3257 12.3928 21.3789 12.2001 21.3807 12.0035C21.3824 11.8068 21.3326 11.6132 21.2362 11.4418C21.1397 11.2705 21.0002 11.1272 20.8313 11.0267ZM6 19.7076V3.94421L19.5114 11.9867L6 19.7076Z"})})},oe=(Object(Q.a)(q)(j||(j=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Object(Q.a)(q)(f||(f=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size}))),se=function(e){var t=e.className,n=e.size;return Object(I.jsx)(oe,{viewBox:"0 0 24 24",className:t,size:n,fill:"currentColor",children:Object(I.jsx)("path",{fill:"currentColor",d:"M11.67 3.87L9.9 2.1L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.87Z"})})};se.defaultProps={className:"",size:24};var ue,le=Object(Q.a)(q)(ue||(ue=Object(K.a)([" \n  width: ","px; \n  height: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),de=function(e){var t=e.className,n=e.size;return Object(I.jsx)(le,{viewBox:"0 0 24 24",className:t,size:n,fill:"currentColor",children:Object(I.jsx)("path",{fill:"currentColor",d:"M5.88 4.12L13.76 12L5.88 19.88L8 22L18 12L8 2L5.88 4.12Z"})})};de.defaultProps={className:"",size:24};var pe=function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:z,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},je=function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:E});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=n(10),be=n.n(fe),he=function(e){var t=e.className,n=Object(w.c)((function(e){return e.time})),a=Object(w.c)((function(e){return e.date})),r=Object(w.b)(),c=Object(b.useState)(n.hh),i=Object(_.a)(c,2),o=i[0],s=i[1],u=Object(b.useState)(n.mm),l=Object(_.a)(u,2),d=l[0],p=l[1],j=Object(b.useState)(n.ss),f=Object(_.a)(j,2),h=f[0],v=f[1],O=Object(b.useState)(a),m=Object(_.a)(O,2),g=m[0],N=m[1],C=Object(b.useState)(""),y=Object(_.a)(C,2),z=y[0],L=y[1],k=Object(w.c)((function(e){return e.timeDirectionStatus})),S=function(){if(""===o||Number(o)>24||Number(o)<0||""===d||Number(d)>60||Number(d)<0?(L("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),0):!(""===h||Number(h)>60||Number(h)<0)||(L("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"),0)){var e=new Date(g+"T"+o+":"+d+":"+h+".000Z").getTime()/1e3;fetch("http://192.168.42.165:5000/v1/satelliteio/set?seconds="+e+"&status="+k,{method:"POST"}),r(je())}};return Object(I.jsxs)("div",{className:x()(t,be.a.root),children:[Object(I.jsx)("input",{className:be.a.input_time,type:"date",value:g,onChange:function(e){return N(e.target.value)}}),Object(I.jsxs)("div",{className:be.a.timePlaceholoders,children:[Object(I.jsx)("span",{children:"hh"}),Object(I.jsx)("span",{}),Object(I.jsx)("span",{children:"mm"}),Object(I.jsx)("span",{}),Object(I.jsx)("span",{children:"ss"})]}),Object(I.jsxs)("div",{className:be.a.time,children:[Object(I.jsx)("input",{type:"text",value:o,onChange:function(e){isNaN(e.target.value)||s(e.target.value)},className:be.a.input}),Object(I.jsx)("span",{className:be.a.dots,children:":"}),Object(I.jsx)("input",{type:"text",value:d,onChange:function(e){isNaN(e.target.value)||p(e.target.value)},className:be.a.input}),Object(I.jsx)("span",{className:be.a.dots,children:":"}),Object(I.jsx)("input",{type:"text",value:h,onChange:function(e){isNaN(e.target.value)||v(e.target.value)},className:be.a.input})]}),""!==z&&Object(I.jsx)("div",{className:be.a.validation,children:z}),Object(I.jsxs)("div",{className:be.a.btn_group,children:[Object(I.jsx)(G,{size:"lg",className:be.a.btn,onClick:function(){return r(je())},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(I.jsx)(G,{size:"lg",className:be.a.btn,onClick:function(){return S()},children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0430\u0442\u0443"})]})]})},ve=n(25),Oe=n.n(ve),_e=function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:P,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},me=function(e){var t=e.className,n=Object(w.c)((function(e){return e.speed})),a=Object(w.b)();return Object(I.jsxs)("div",{className:x()(t,Oe.a.root),children:[Object(I.jsxs)("div",{className:Oe.a.title,children:[Object(I.jsx)("span",{children:"speed"}),Object(I.jsx)("span",{children:Object(I.jsx)("input",{value:n,type:"text",onChange:function(e){isNaN(e.target.value)||Number(e.target.value)>1e6||(""===e.target.value?a(_e("1")):a(_e(e.target.value)))}})})]}),Object(I.jsx)("input",{type:"range",className:Oe.a.range,value:n,min:"-1000000",max:"1000000",onChange:function(e){return a(_e(e.target.value))}})]})},xe=function(e){var t=e.className,n=void 0===t?"":t,a=Object(w.c)((function(e){return e.timeDirectionStatus})),r=Object(w.c)((function(e){return e.pause})),c=Object(w.c)((function(e){return e.time})),i=Object(w.c)((function(e){return e.date})),o=Object(w.b)();return Object(I.jsxs)("div",{className:x()(n,V.a.root),children:[Object(I.jsx)("div",{className:V.a.dateWrap,children:Object(I.jsx)(X,{hh:c.hh,mm:c.mm,ss:c.ss,date:i,onClick:function(){return o((e=Object(I.jsx)(he,{}),function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:T,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var e},className:V.a.date})}),Object(I.jsxs)(Y,{children:[Object(I.jsx)(G,{size:"md",uppercase:!0,active:"backward"===a,onClick:function(){return o(pe("backward"))},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(I.jsx)(G,{size:"md",uppercase:!0,active:r,onClick:function(){return o((e=!r,function(){var t=Object(C.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:L,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var e},children:r?Object(I.jsx)(ie,{}):Object(I.jsx)(re,{})}),Object(I.jsx)(G,{size:"md",uppercase:!0,active:"forward"===a,onClick:function(){return o(pe("forward"))},children:"\u0412\u043f\u0435\u0440\u0451\u0434"})]}),Object(I.jsx)("div",{className:V.a.speedWrap,children:Object(I.jsx)(me,{})})]})},we=n(36),ge=n.n(we),Ne=function(e){var t=e.className,n=void 0===t?"":t,a=e.onClick,r=void 0===a?function(){}:a;return Object(I.jsx)("button",{className:x()(n,ge.a.root),onClick:r,children:Object(I.jsx)(ne,{})})},Ce=n(19),ye=n.n(Ce),ze=function(e){var t=e.className,n=Object(w.c)((function(e){return e.popup})),a=Object(w.b)(),r=Object(b.useState)(!1),c=Object(_.a)(r,2),i=c[0],o=c[1];return Object(b.useEffect)((function(){n.active?o(!0):setTimeout((function(){n.active||o(!1)}),220)}),[n.active]),Object(b.useEffect)((function(){var e=function(e){if(!e.target.closest("."+ye.a.wrap)&&i)return a(je())};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[a,i]),i?Object(I.jsx)("div",{className:x()(t,ye.a.root,n.active&&ye.a.open,!n.active&&ye.a.close),children:Object(I.jsx)("div",{className:ye.a.wrap,children:n.content})}):Object(I.jsx)(I.Fragment,{})},Le=n(27),ke=n.n(Le),Se=n(20),Te=n.n(Se),Ee=function(e){var t=e.className,n=void 0===t?"":t,a=e.children,r=void 0===a?"":a,c=e.iconRight,i=void 0===c?"":c,o=e.iconLeft,s=void 0===o?"":o,u=e.onClick,l=void 0===u?function(){}:u,d=e.type,p=void 0===d?"outlined":d,j=e.disabled,f=void 0!==j&&j,b=x()(n,Te.a.root,Te.a[p],f&&Te.a.disabled);return Object(I.jsxs)("button",{onClick:l,className:b,children:[Object(I.jsx)("span",{className:Te.a.icon_left,children:s}),r,Object(I.jsx)("span",{className:Te.a.icon_right,children:i})]})},Pe=function(e){var t=e.onExit;return Object(I.jsx)("div",{className:ke.a.main,children:Object(I.jsx)(Ee,{type:"text",iconLeft:Object(I.jsx)(ee,{}),onClick:t,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e"})})},Be=function(e){var t=e.className,n=void 0===t?"":t,a=e.onExit,r=void 0===a?function(){}:a;return Object(I.jsx)("div",{className:x()(n,ke.a.root),children:Object(I.jsx)(Pe,{onExit:r})})},De=n(15),Ie=n.n(De),Fe=function(){var e=Object(b.useState)(!1),t=Object(_.a)(e,2),n=t[0],a=t[1],r=Object(w.c)((function(e){return e.timeDirectionStatus})),c=Object(w.c)((function(e){return e.time})),i=Object(w.c)((function(e){return e.date}));return Object(b.useEffect)((function(){var e=function(e){if(!e.target.closest("."+Ie.a.sidebar)&&!e.target.closest("."+Ie.a.menuBtn))return a(!1)};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[]),Object(b.useEffect)((function(){var e=new Date(i+"T"+c.hh+":"+c.mm+":"+c.ss+".000Z").getTime()/1e3;fetch("http://192.168.42.165:5000/v1/satelliteio/set?seconds="+e+"&status="+r,{method:"POST"})}),[r,i,c]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(A,{}),Object(I.jsx)(ze,{}),Object(I.jsxs)("div",{className:Ie.a.root,children:[!n&&Object(I.jsx)(Ne,{onClick:function(){return a(!0)},className:Ie.a.menuBtn}),Object(I.jsx)(xe,{className:Ie.a.footer}),Object(I.jsx)(Be,{className:x()(Ie.a.sidebar,n&&Ie.a["sidebar--open"]),onExit:function(){return a(!1)}})]})]})},Ae=(n(49),n(23)),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"forward",t=arguments.length>1?arguments[1]:void 0;return t.type===z?t.payload:e},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{active:!1,content:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{active:!0,content:t.payload};case E:return{active:!1,content:""};default:return e}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===L?t.payload:e},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{hh:"00",mm:"00",ss:"00"},t=arguments.length>1?arguments[1]:void 0;return t.type===k?t.payload:e},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2002-11-22",t=arguments.length>1?arguments[1]:void 0;return t.type===S?t.payload:e},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return t.type===P?t.payload:e},Ge=[n(37).a],Xe=Object(Ae.b)({timeDirectionStatus:Me,popup:Ve,pause:We,time:Ze,date:He,speed:Re}),Je=function(){try{var e=localStorage.getItem("paymona-bi-state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.c,Ye=Object(Ae.d)(Xe,Je,Ue(Ae.a.apply(void 0,Ge))),Ke=n(54);O.a.render(Object(I.jsx)(Ke.a,{initialEntries:["/employees"],children:Object(I.jsx)(w.a,{store:Ye,children:Object(I.jsx)(Fe,{})})}),document.getElementById("root"))}],[[52,1,2]]]);
//# sourceMappingURL=main.700e8738.chunk.js.map