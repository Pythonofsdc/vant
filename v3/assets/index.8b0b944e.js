var Z=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var M=(e,n,t)=>n in e?Z(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))K.call(n,t)&&M(e,t,n[t]);if(L)for(var t of L(n))Q.call(n,t)&&M(e,t,n[t]);return e},C=(e,n)=>H(e,J(n));import{c as $,t as y,m as j,s as W,i as N,N as V,a as X}from"./use-translate.39547e32.js";import{w as A}from"./with-install.cc9696bc.js";import{C as ee}from"./index.f7946dd6.js";import{z as E,e as o,C as l,E as ne,x as S,G as oe,k as te,v as ae,q as se,D as _,r as ce,o as ue,c as ie,w as U,B as g}from"./vue-libs.71fdcafc.js";import{P as le}from"./index.760aa272.js";import{u as de}from"./use-refs.6c094865.js";import{T as re,a as z}from"./index.4fa5674d.js";import{F as me}from"./index.1bfd2dc9.js";import{B as R}from"./index.64adedce.js";import{C as pe}from"./index.775033c1.js";import{T as he}from"./function-call.025b6196.js";import"./use-route.913efdd2.js";import"./index.5e447543.js";import"./interceptor.33314343.js";import"./use-expose.877c018b.js";import"./use-touch.30351383.js";import"./index.92de2fdc.js";import"./utils.39620306.js";import"./index.c1e8d10d.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.0ff7945f.js";import"./index.51c98a99.js";import"./useChildren.edf9a3d1.js";import"./useParent.e4fd6deb.js";import"./constant.4d85ecb9.js";import"./index.5645eda4.js";import"./index.43faf238.js";import"./index.a16d08bc.js";import"./index.b9a228ca.js";import"./Checker.a5655ec8.js";import"./mount-component.a2b5841e.js";const[fe,q,P]=$("coupon-cell");function be(e,n,t){const u=e[+n];if(u){let a=0;return N(u.value)?{value:a}=u:N(u.denominations)&&(a=u.denominations),`-${t} ${(a/100).toFixed(2)}`}return e.length===0?P("noCoupon"):P("count",e.length)}var ge=E({name:fe,props:{title:String,border:y,editable:y,currency:j("\xA5"),chosenCoupon:W(-1),coupons:{type:Array,default:()=>[]}},setup(e){return()=>{const n=e.coupons[+e.chosenCoupon],t=be(e.coupons,e.chosenCoupon,e.currency);return o(ee,{class:q(),value:t,title:e.title||P("title"),border:e.border,isLink:e.editable,valueClass:q("value",{selected:n})},null)}}});const ve=A(ge),[xe,d,I]=$("coupon");function G(e){const n=new Date(e*1e3);return`${n.getFullYear()}.${V(n.getMonth()+1)}.${V(n.getDate())}`}const Ce=e=>(e/10).toFixed(e%10==0?0:1),Y=e=>(e/100).toFixed(e%100==0?0:e%10==0?1:2);var ye=E({name:xe,props:{chosen:Boolean,disabled:Boolean,currency:j("\xA5"),coupon:{type:Object,required:!0}},setup(e){const n=l(()=>{const{startAt:a,endAt:s}=e.coupon;return`${G(a)} - ${G(s)}`}),t=l(()=>{const{coupon:a,currency:s}=e;if(a.valueDesc)return[a.valueDesc,o("span",null,[a.unitDesc||""])];if(a.denominations){const i=Y(a.denominations);return[o("span",null,[s]),` ${i}`]}return a.discount?I("discount",Ce(a.discount)):""}),u=l(()=>{const a=Y(e.coupon.originCondition||0);return a==="0"?I("unlimited"):I("condition",a)});return()=>{const{chosen:a,coupon:s,disabled:i}=e,f=i&&s.reason||s.description;return o("div",{class:d({disabled:i})},[o("div",{class:d("content")},[o("div",{class:d("head")},[o("h2",{class:d("amount")},[t.value]),o("p",{class:d("condition")},[s.condition||u.value])]),o("div",{class:d("body")},[o("p",{class:d("name")},[s.name]),o("p",{class:d("valid")},[n.value]),!i&&o(pe,{class:d("corner"),modelValue:a},null)])]),f&&o("p",{class:d("description")},[f])])}}});const O=A(ye),[je,r,v]=$("coupon-list"),we="https://img.yzcdn.cn/vant/coupon-empty.png";var Be=E({name:je,props:{code:j(""),currency:j("\xA5"),showCount:y,emptyImage:j(we),enabledTitle:String,disabledTitle:String,showExchangeBar:y,showCloseButton:y,closeButtonText:String,inputPlaceholder:String,exchangeButtonText:String,exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean,exchangeMinLength:{type:Number,default:1},chosenCoupon:{type:Number,default:-1},coupons:{type:Array,default:()=>[]},disabledCoupons:{type:Array,default:()=>[]},displayedCouponIndex:{type:Number,default:-1}},emits:["change","exchange","update:code"],setup(e,{emit:n,slots:t}){const[u,a]=de(),s=ne({tab:0,code:e.code}),i=l(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!s.code||s.code.length<e.exchangeMinLength)),f=()=>{n("exchange",s.code),e.code||(s.code="")},w=c=>{se(()=>{u.value[c]&&u.value[c].scrollIntoView()})},B=()=>o("div",{class:r("empty")},[o("img",{src:e.emptyImage},null),o("p",null,[v("noCoupon")])]),D=()=>{if(e.showExchangeBar)return o("div",{class:r("exchange-bar")},[o(me,{modelValue:s.code,"onUpdate:modelValue":c=>s.code=c,clearable:!0,border:!1,class:r("field"),placeholder:e.inputPlaceholder||v("placeholder"),maxlength:"20"},null),o(R,{plain:!0,type:"danger",class:r("exchange"),text:e.exchangeButtonText||v("exchange"),loading:e.exchangeButtonLoading,disabled:i.value,onClick:f},null)])},F=()=>{const{coupons:c}=e,m=e.showCount?` (${c.length})`:"",p=(e.enabledTitle||v("enable"))+m;return o(z,{title:p},{default:()=>{var b;return[o("div",{class:r("list",{"with-bar":e.showExchangeBar,"with-bottom":e.showCloseButton})},[c.map((h,k)=>o(O,{key:h.id,ref:a(k),coupon:h,chosen:k===e.chosenCoupon,currency:e.currency,onClick:()=>n("change",k)},null)),!c.length&&B(),(b=t["list-footer"])==null?void 0:b.call(t)])]}})},T=()=>{const{disabledCoupons:c}=e,m=e.showCount?` (${c.length})`:"",p=(e.disabledTitle||v("disabled"))+m;return o(z,{title:p},{default:()=>{var b;return[o("div",{class:r("list",{"with-bar":e.showExchangeBar,"with-bottom":e.showCloseButton})},[c.map(h=>o(O,{disabled:!0,key:h.id,coupon:h,currency:e.currency},null)),!c.length&&B(),(b=t["disabled-list-footer"])==null?void 0:b.call(t)])]}})};return S(()=>e.code,c=>{s.code=c}),S(()=>s.code,c=>n("update:code",c)),S(()=>e.displayedCouponIndex,w),oe(()=>{w(e.displayedCouponIndex)}),()=>o("div",{class:r()},[D(),o(re,{active:s.tab,"onUpdate:active":c=>s.tab=c,class:r("tab"),border:!1},{default:()=>[F(),T()]}),o("div",{class:r("bottom")},[te(o(R,{round:!0,block:!0,type:"danger",class:r("close"),text:e.closeButtonText||v("close"),onClick:()=>n("change",-1)},null),[[ae,e.showCloseButton]])])])}});const De=A(Be),sn=E({setup(e){const n=X({"zh-CN":{coupon:{name:"\u4F18\u60E0\u5238\u540D\u79F0",reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0",description:"\u63CF\u8FF0\u4FE1\u606F"},exchange:"\u5151\u6362\u6210\u529F"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),t=(m=999999)=>String(Math.floor(Math.random()*m)+1),u=_(!1),a=_(-1),s=_([]),i=l(()=>({id:1,condition:`\u65E0\u4F7F\u7528\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:n("coupon.name"),description:n("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"})),f=l(()=>C(x({},i.value),{id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"})),w=l(()=>C(x({},i.value),{id:3,reason:n("coupon.reason")})),B=l(()=>C(x({},f.value),{valueDesc:"1",unitDesc:"\u6298",id:4,reason:n("coupon.reason")})),D=l(()=>[i.value,f.value,...s.value]),F=l(()=>[w.value,B.value]),T=m=>{u.value=!1,a.value=m},c=()=>{he(n("exchange")),s.value.push(C(x({},i.value),{id:t()}))};return(m,p)=>{const b=ce("demo-block");return ue(),ie(b,{title:g(n)("basicUsage")},{default:U(()=>[o(g(ve),{coupons:g(D),"chosen-coupon":a.value,onClick:p[0]||(p[0]=h=>u.value=!0)},null,8,["coupons","chosen-coupon"]),o(g(le),{show:u.value,"onUpdate:show":p[1]||(p[1]=h=>u.value=h),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:U(()=>[o(g(De),{coupons:g(D),"chosen-coupon":a.value,"disabled-coupons":g(F),onChange:T,onExchange:c},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{sn as default};