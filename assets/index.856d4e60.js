import{a as c,T as h}from"./index.8957fa9e.js";import{P as g}from"./index.7fdf0539.js";import{c as i}from"./index.f7fe2ea8.js";import{T as x}from"./function-call.67aa4b4e.js";import{a as T}from"./use-translate.82d1675a.js";import{z as _,C as v,D as B,N as V,o as y,c as R,w as o,e as l,B as e,d as a,t as f,g as C}from"./vue-libs.d483629c.js";import"./with-install.1e1e6f3a.js";import"./use-id.af179088.js";import"./use-expose.0b7af251.js";import"./use-route.e59fb0a1.js";import"./index.c224689a.js";import"./use-touch.2a7e3be3.js";import"./on-popup-reopen.27c65306.js";import"./constant.80c6de18.js";import"./interceptor.693bb092.js";import"./use-refs.4f5e4be1.js";import"./index.bde7cabc.js";import"./index.1aafb839.js";import"./index.185a61a8.js";import"./mount-component.55786c8c.js";import"./index.d942910e.js";import"./use-lazy-render.13317edf.js";import"./index.a7d685e6.js";const b=["src"],w=["src"],D=["src"],ee=_({__name:"index",setup(U){const r=T({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),p=v(0),u=v(!1),d=B(()=>p.value?`${r("text")}: ${p.value}`:r("try")),m=n=>{setTimeout(()=>{n&&x(r("success")),u.value=!1,p.value++},1e3)};return V(()=>{const n=new Image,s=new Image;n.src=i("doge.png"),s.src=i("doge-fire.jpeg")}),(n,s)=>(y(),R(e(h),null,{default:o(()=>[l(e(c),{title:e(r)("basicUsage")},{default:o(()=>[l(e(g),{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=t=>u.value=t),onRefresh:s[1]||(s[1]=t=>m(!0))},{default:o(()=>[a("p",null,f(e(d)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(e(c),{title:e(r)("successTip")},{default:o(()=>[l(e(g),{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=t=>u.value=t),"success-text":e(r)("success"),onRefresh:s[3]||(s[3]=t=>m(!1))},{default:o(()=>[a("p",null,f(e(d)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),l(e(c),{title:e(r)("customTips")},{default:o(()=>[l(e(g),{modelValue:u.value,"onUpdate:modelValue":s[4]||(s[4]=t=>u.value=t),"head-height":"80",onRefresh:s[5]||(s[5]=t=>m(!0))},{pulling:o(({distance:t})=>[a("img",{class:"doge",src:e(i)("doge.png"),style:C({transform:`scale(${t/80})`})},null,12,b)]),loosing:o(()=>[a("img",{src:e(i)("doge.png"),class:"doge"},null,8,w)]),loading:o(()=>[a("img",{src:e(i)("doge-fire.jpeg"),class:"doge"},null,8,D)]),default:o(()=>[a("p",null,f(e(d)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{ee as default};