import{c as g,h as i,i as v,j as B,d as w,k as C}from"./use-translate.c56bc05e.js";import{n as m,m as d,t as _,w as $}from"./with-install.2d06a5b3.js";import{A as l,D as h,e as u,y as j,I as O,E as k,B as E}from"./vue-libs.a3cd7f61.js";const[N,y]=g("badge"),z={dot:Boolean,max:m,tag:d("div"),color:String,offset:Array,content:m,showZero:_,position:d("top-right")},D=l({name:N,props:z,setup(e,{slots:t}){const o=()=>{if(t.content)return!0;const{content:n,showZero:a}=e;return v(n)&&n!==""&&(a||n!==0)},r=()=>{const{dot:n,max:a,content:s}=e;if(!n&&o())return t.content?t.content():v(a)&&B(s)&&+s>a?`${a}+`:s},c=h(()=>{const n={background:e.color};if(e.offset){const[a,s]=e.offset;t.default?(n.top=i(s),typeof a=="number"?n.right=i(-a):n.right=a.startsWith("-")?a.replace("-",""):`-${a}`):(n.marginTop=i(s),n.marginLeft=i(a))}return n}),f=()=>{if(o()||e.dot)return u("div",{class:y([e.position,{dot:e.dot,fixed:!!t.default}]),style:c.value},[r()])};return()=>{if(t.default){const{tag:n}=e;return u(n,{class:y("wrapper")},{default:()=>[t.default(),f()]})}return f()}}}),x=$(D),q=x,[S,L]=g("config-provider"),V=Symbol(S),T={tag:d("div"),theme:d("light"),themeVars:Object,iconPrefix:String};function A(e){const t={};return Object.keys(e).forEach(o=>{t[`--van-${C(o)}`]=e[o]}),t}const H=l({name:S,props:T,setup(e,{slots:t}){const o=h(()=>{if(e.themeVars)return A(e.themeVars)});return w&&j(()=>e.theme,(r,c)=>{document.body.classList.remove(`van-theme-${c}`),document.body.classList.add(`van-theme-${r}`)},{immediate:!0}),O(V,e),()=>u(e.tag,{class:L(),style:o.value},{default:()=>{var r;return[(r=t.default)==null?void 0:r.call(t)]}})}}),[R,I]=g("icon"),Z=e=>e==null?void 0:e.includes("/"),F={dot:Boolean,tag:d("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String},G=l({name:R,props:F,setup(e,{slots:t}){const o=k(V,null),r=h(()=>e.classPrefix||(o==null?void 0:o.iconPrefix)||I());return()=>{const{tag:c,dot:f,name:n,size:a,badge:s,color:p}=e,b=Z(n);return u(x,E({dot:f,tag:c,class:[r.value,b?"":`${r.value}-${n}`],style:{color:p,fontSize:i(a)},content:s},e.badgeProps),{default:()=>{var P;return[(P=t.default)==null?void 0:P.call(t),b&&u("img",{class:I("image"),src:n},null)]}})}}}),K=$(G),J=K;export{x as B,K as I,q as V,H as _,J as a};