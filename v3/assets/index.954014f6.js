import{c as e,u as a,g as o}from"./use-translate.91889477.js";import{w as i}from"./with-install.c9eedd0e.js";import{L as l}from"./index.6e9dbec3.js";import{u as t}from"./index.a16d08bc.js";import{z as s,e as n}from"./vue-libs.71fdcafc.js";const[c,d]=e("switch");const r=i(s({name:c,props:{size:[Number,String],loading:Boolean,disabled:Boolean,modelValue:a,activeColor:String,inactiveColor:String,activeValue:{type:a,default:!0},inactiveValue:{type:a,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:a}){const i=()=>e.modelValue===e.activeValue,s=()=>{if(!e.disabled&&!e.loading){const o=i()?e.inactiveValue:e.activeValue;a("update:modelValue",o),a("change",o)}},c=()=>{if(e.loading){const a=i()?e.activeColor:e.inactiveColor;return n(l,{class:d("loading"),color:a},null)}};return t((()=>e.modelValue)),()=>{const{size:a,loading:l,disabled:t,activeColor:r,inactiveColor:u}=e,m=i(),v={fontSize:o(a),backgroundColor:m?r:u};return n("div",{role:"switch",class:d({on:m,loading:l,disabled:t}),style:v,"aria-checked":m,onClick:s},[n("div",{class:d("node")},[c()])])}}}));export{r as S};