import{c as D,e as C,m as x,t as S,r as k,p as T,a as U}from"./use-translate.39547e32.js";import{w as y}from"./with-install.cc9696bc.js";import{f as B,F as _}from"./index.1bfd2dc9.js";import{u as P}from"./use-expose.877c018b.js";import{z as E,D as s,e as o,I as N,r as I,o as z,a as K,w as r,B as a,d as A,t as L,F as O}from"./vue-libs.71fdcafc.js";import{T as w}from"./function-call.025b6196.js";import"./constant.4d85ecb9.js";import"./index.f7946dd6.js";import"./use-route.913efdd2.js";import"./index.5e447543.js";import"./index.a16d08bc.js";import"./useParent.e4fd6deb.js";import"./mount-component.a2b5841e.js";import"./index.760aa272.js";import"./interceptor.33314343.js";import"./use-touch.30351383.js";import"./index.92de2fdc.js";import"./utils.39620306.js";import"./index.c1e8d10d.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.0ff7945f.js";import"./index.b9a228ca.js";const[R,m,q]=D("search"),G=C({},B,{label:String,shape:x("square"),leftIcon:x("search"),clearable:S,actionText:String,background:String,showAction:Boolean});var H=E({name:R,props:G,emits:["search","cancel","update:modelValue"],setup(u,{emit:l,slots:n,attrs:f}){const c=s(),b=()=>{n.action||(l("update:modelValue",""),l("cancel"))},h=e=>{const g=13;e.keyCode===g&&(T(e),l("search",u.modelValue))},v=()=>{if(n.label||u.label)return o("label",{class:m("label"),for:u.id},[n.label?n.label():u.label])},p=()=>{if(u.showAction){const e=u.actionText||q("cancel");return o("div",{class:m("action"),role:"button",tabindex:0,onClick:b},[n.action?n.action():e])}},j=()=>{var e;return(e=c.value)==null?void 0:e.blur()},V=()=>{var e;return(e=c.value)==null?void 0:e.focus()},t=Object.keys(B),d=()=>{const e=C({},f,k(u,t)),g=F=>l("update:modelValue",F);return o(_,N({ref:c,type:"search",class:m("field"),border:!1,onKeypress:h},e,{"onUpdate:modelValue":g}),k(n,["left-icon","right-icon"]))};return P({focus:V,blur:j}),()=>{var e;return o("div",{class:m({"show-action":u.showAction}),style:{background:u.background}},[(e=n.left)==null?void 0:e.call(n),o("div",{class:m("content",u.shape)},[v(),d()]),p()])}}});const i=y(H),J={action:"/"},he=E({setup(u){const l=U({"zh-CN":{label:"\u5730\u5740",disabled:"\u7981\u7528\u641C\u7D22\u6846",inputAlign:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",background:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE",listenToEvents:"\u4E8B\u4EF6\u76D1\u542C"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),n=s(""),f=s(""),c=s(""),b=s(""),h=s(""),v=s(""),p=V=>w(V),j=()=>w(l("cancel"));return(V,t)=>{const d=I("demo-block");return z(),K(O,null,[o(d,{title:a(l)("basicUsage")},{default:r(()=>[o(a(i),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),placeholder:a(l)("placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(d,{title:a(l)("listenToEvents")},{default:r(()=>[A("form",J,[o(a(i),{modelValue:h.value,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value=e),placeholder:a(l)("placeholder"),"show-action":"",onSearch:p,onCancel:j},null,8,["modelValue","placeholder"])])]),_:1},8,["title"]),o(d,{title:a(l)("inputAlign")},{default:r(()=>[o(a(i),{modelValue:b.value,"onUpdate:modelValue":t[2]||(t[2]=e=>b.value=e),placeholder:a(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(d,{title:a(l)("disabled")},{default:r(()=>[o(a(i),{modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=e=>c.value=e),placeholder:a(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(d,{title:a(l)("background")},{default:r(()=>[o(a(i),{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=e=>f.value=e),placeholder:a(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(d,{title:a(l)("customButton")},{default:r(()=>[o(a(i),{modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=e=>v.value=e),"show-action":"",label:a(l)("label"),placeholder:a(l)("placeholder"),onSearch:p},{action:r(()=>[A("div",{onClick:p},L(a(l)("search")),1)]),_:1},8,["modelValue","label","placeholder"])]),_:1},8,["title"])],64)}}});export{he as default};