import{c as A,s as C,t as v,n as _,m as g,g as w,j as S,a as p}from"./use-translate.39547e32.js";import{w as B}from"./with-install.cc9696bc.js";import{z as E,e,D as y,r as b,o as V,a as k,w as c,B as u,d as i,t as f,F as D}from"./vue-libs.71fdcafc.js";import{S as W}from"./index.c0ecfe94.js";import"./index.b9a228ca.js";import"./index.a16d08bc.js";const[x,s]=A("skeleton"),F="100%",j="60%";var z=E({name:x,props:{row:C(0),title:Boolean,round:Boolean,avatar:Boolean,loading:v,animate:v,avatarSize:_,titleWidth:_,avatarShape:g("round"),rowWidth:{type:[Number,String,Array],default:F}},setup(t,{slots:a}){const l=()=>{if(t.avatar)return e("div",{class:s("avatar",t.avatarShape),style:S(t.avatarSize)},null)},h=()=>{if(t.title)return e("h3",{class:s("title"),style:{width:w(t.titleWidth)}},null)},d=n=>{const{rowWidth:r}=t;return r===F&&n===+t.row-1?j:Array.isArray(r)?r[n]:r},o=()=>Array(t.row).fill("").map((n,r)=>e("div",{class:s("row"),style:{width:w(d(r))}},null));return()=>{var n;return t.loading?e("div",{class:s({animate:t.animate,round:t.round})},[l(),e("div",{class:s("content")},[h(),o()])]):(n=a.default)==null?void 0:n.call(a)}}});const m=B(z);const T={class:"demo-preview"},U=i("img",{src:"https://img.yzcdn.cn/vant/logo.png"},null,-1),N={class:"demo-content"},M=E({setup(t){const a=p({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),l=y(!1);return(h,d)=>{const o=b("demo-block");return V(),k(D,null,[e(o,{title:u(a)("basicUsage")},{default:c(()=>[e(u(m),{title:"",row:3})]),_:1},8,["title"]),e(o,{title:u(a)("showAvatar")},{default:c(()=>[e(u(m),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(o,{title:u(a)("showChildren")},{default:c(()=>[e(u(W),{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=n=>l.value=n),size:"24px"},null,8,["modelValue"]),e(u(m),{title:"",avatar:"",row:3,loading:!l.value},{default:c(()=>[i("div",T,[U,i("div",N,[i("h3",null,f(u(a)("title")),1),i("p",null,f(u(a)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{M as default};