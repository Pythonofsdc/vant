import{e,t as l,g as a,u as o}from"./use-translate.91889477.js";import{I as s}from"./index.d38d9435.js";import{z as i,D as t,C as n,e as r}from"./vue-libs.71fdcafc.js";const c={name:o,disabled:Boolean,iconSize:[Number,String],modelValue:o,checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"}};var d=i({props:e({},c,{role:String,parent:Object,checked:Boolean,bindGroup:l,bem:{type:Function,required:!0}}),emits:["click","toggle"],setup(e,{emit:l,slots:o}){const i=t(),c=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},d=n((()=>c("disabled")||e.disabled)),u=n((()=>c("direction"))),b=n((()=>{const l=e.checkedColor||c("checkedColor");if(l&&e.checked&&!d.value)return{borderColor:l,backgroundColor:l}})),p=a=>{const{target:o}=a,s=i.value,t=s===o||(null==s?void 0:s.contains(o));d.value||!t&&e.labelDisabled||l("toggle"),l("click",a)},m=()=>{const{bem:l,shape:t,checked:n}=e,u=e.iconSize||c("iconSize");return r("div",{ref:i,class:l("icon",[t,{disabled:d.value,checked:n}]),style:{fontSize:a(u)}},[o.icon?o.icon({checked:n,disabled:d.value}):r(s,{name:"success",style:b.value},null)])},f=()=>{if(o.default)return r("span",{class:e.bem("label",[e.labelPosition,{disabled:d.value}])},[o.default()])};return()=>{const l=[m()];return"left"===e.labelPosition?l.unshift(f()):l.push(f()),r("div",{role:e.role,class:e.bem([{disabled:d.value,"label-disabled":e.labelDisabled},u.value]),tabindex:d.value?-1:0,"aria-checked":e.checked,onClick:p},[l])}}});export{d as C,c};