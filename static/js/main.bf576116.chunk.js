(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{10:function(e,t,n){e.exports={button:"Button_button__kmM_l",disabled:"Button_disabled__13B_L"}},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),i=n.n(r),s=(n(18),n(13)),o=n(3),l=n.n(o),u=n(10),b=n.n(u),j=n(1),d=function(e){var t=e.title,n=e.buttonDisable,a=e.onClick,c="".concat(b.a.button," ").concat(n?b.a.disabled:"");return Object(j.jsx)("button",{disabled:n,onClick:a,className:c,children:t})},O=c.a.memo(d),p=function(e){var t=e.isError,n=e.counterValue;return Object(j.jsx)("div",{className:"".concat(l.a.display," ").concat(t?l.a.displayError:""),children:n})},_=n(5),m=n.n(_),g=function(e){var t=e.isError,n=e.maxValue,a=e.onChangeMax,c=e.onChangeMin,r=e.minValue,i=t?m.a.inputError:m.a.input,s=t?m.a.textError:m.a.text,o=t?"incorrect max number":"max value",l=t?"incorrect min number":"min value";return Object(j.jsxs)("div",{className:m.a.content,children:[Object(j.jsx)("div",{className:s,children:o}),Object(j.jsx)("input",{value:n,onChange:a,className:i,type:"number"}),Object(j.jsx)("div",{className:s,children:l}),Object(j.jsx)("input",{value:r,onChange:c,className:i,type:"number"})]})},x=n(4),E=n(2),h={counterValue:0,maxValue:0,minValue:0,displayMode:!1},N=function(e){return e.counter.displayMode},C=function(e){return e.counter.counterValue},v=function(e){return e.counter.maxValue},f=function(e){return e.counter.minValue},V=n(7),k=n.n(V),A=function(e){var t=e.onClick,n=e.isDark;return console.log("toggle rendered"),Object(j.jsx)("div",{className:k.a.main,children:Object(j.jsxs)("label",{className:k.a.switch,children:[Object(j.jsx)("input",{type:"checkbox",defaultChecked:n,onClick:t}),Object(j.jsx)("span",{className:k.a.slider})]})})},y=c.a.memo(A);var M,S=function(){var e=Object(x.b)(),t=Object(x.c)(N),n=Object(x.c)(C),c=Object(x.c)(v),r=Object(x.c)(f),i=Object(a.useCallback)((function(){return e({type:"INCREMENT-COUNTER-VALUE"})}),[e]),o=Object(a.useCallback)((function(){return e({type:"RESET-VALUE"})}),[e]),u=Object(a.useCallback)((function(){return e({type:"CHANGE-DISPLAY-MODE",mode:!1})}),[e]),b=Object(a.useCallback)((function(){return e({type:"SET-CONFIG",mode:!0})}),[e]),d=Object(a.useState)(JSON.parse(localStorage.getItem("isDark"))),_=Object(s.a)(d,2),m=_[0],E=_[1],h=Object(a.useCallback)((function(){E(!m),localStorage.setItem("isDark",JSON.stringify(!m))}),[m]),V=c<=r||c<=0||r<0,k=n===c;return Object(j.jsx)("div",{className:"".concat(l.a.root," ").concat(m?l.a.dark:l.a.light),children:Object(j.jsx)("div",{className:l.a.main,children:t?Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsx)("div",{className:l.a.toggleMode,children:Object(j.jsx)(y,{onClick:h,isDark:m})}),Object(j.jsx)("div",{children:Object(j.jsx)(p,{counterValue:n,isError:k})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{onClick:i,title:"inc",buttonDisable:k}),Object(j.jsx)(O,{onClick:o,title:"reset"}),Object(j.jsx)(O,{onClick:u,title:"set"})]})]}):Object(j.jsxs)("div",{className:l.a.settings,children:[Object(j.jsx)(g,{minValue:r,maxValue:c,onChangeMax:function(t){return e({type:"CHANGE-MAX-VALUE",value:Number(t.currentTarget.value)})},onChangeMin:function(t){return e({type:"CHANGE-MIN-VALUE",value:Number(t.currentTarget.value)})},isError:V}),Object(j.jsx)("div",{children:Object(j.jsx)(O,{title:"set",onClick:b,buttonDisable:V})})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},D=n(12),T=Object(D.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT-COUNTER-VALUE":return Object(E.a)(Object(E.a)({},e),{},{counterValue:e.counterValue+1});case"RESET-VALUE":return Object(E.a)(Object(E.a)({},e),{},{counterValue:e.minValue});case"CHANGE-MAX-VALUE":return Object(E.a)(Object(E.a)({},e),{},{maxValue:t.value});case"CHANGE-MIN-VALUE":return Object(E.a)(Object(E.a)({},e),{},{minValue:t.value});case"CHANGE-DISPLAY-MODE":return Object(E.a)(Object(E.a)({},e),{},{displayMode:t.mode});case"SET-CONFIG":return Object(E.a)(Object(E.a)({},e),{},{counterValue:e.minValue,displayMode:t.mode});default:return e}}}),L=localStorage.getItem("state");L&&(M=JSON.parse(L));var U=Object(D.b)(T,M);U.subscribe((function(){localStorage.setItem("state",JSON.stringify(U.getState()))})),i.a.render(Object(j.jsx)(x.a,{store:U,children:Object(j.jsx)(S,{})}),document.getElementById("root")),I()},3:function(e,t,n){e.exports={root:"App_root__1MJkD",light:"App_light__3D9E8",dark:"App_dark__2chFq",main:"App_main__G3Mzg",container:"App_container__23PRE",display:"App_display__JbaKJ",displayError:"App_displayError__177xh",settings:"App_settings__37atg",toggleMode:"App_toggleMode__2Aghm"}},5:function(e,t,n){e.exports={input:"Settings_input__1JDIG",inputError:"Settings_inputError__1idYa",text:"Settings_text__23pU0",textError:"Settings_textError__2nIXU",content:"Settings_content__1GQL2"}},7:function(e,t,n){e.exports={dark:"Toggle_dark__23_Y2",switch:"Toggle_switch__1VuK5",slider:"Toggle_slider__2VrEP"}}},[[24,1,2]]]);
//# sourceMappingURL=main.bf576116.chunk.js.map