import{c as t,t as e,a}from"./use-translate.91889477.js";import{w as s}from"./with-install.c9eedd0e.js";import{z as o,e as l,r as i,o as n,a as d,w as r,B as u,h as c,t as f,F as h}from"./vue-libs.71fdcafc.js";const[p,x]=t("divider");const m=s(o({name:p,props:{dashed:Boolean,hairline:e,contentPosition:{type:String,default:"center"}},setup:(t,{slots:e})=>()=>{var a;return l("div",{role:"separator",class:x({dashed:t.dashed,hairline:t.hairline,[`content-${t.contentPosition}`]:!!e.default})},[null==(a=e.default)?void 0:a.call(e)])}}));const _=o({setup(t){const e=a({"zh-CN":{text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}});return(t,a)=>{const s=i("demo-block");return n(),d(h,null,[l(s,{title:u(e)("basicUsage")},{default:r((()=>[l(u(m))])),_:1},8,["title"]),l(s,{title:u(e)("withText")},{default:r((()=>[l(u(m),null,{default:r((()=>[c(f(u(e)("text")),1)])),_:1})])),_:1},8,["title"]),l(s,{title:u(e)("contentPosition")},{default:r((()=>[l(u(m),{"content-position":"left"},{default:r((()=>[c(f(u(e)("text")),1)])),_:1}),l(u(m),{"content-position":"right"},{default:r((()=>[c(f(u(e)("text")),1)])),_:1})])),_:1},8,["title"]),l(s,{title:u(e)("dashed")},{default:r((()=>[l(u(m),{dashed:"",hairline:!1},{default:r((()=>[c(f(u(e)("text")),1)])),_:1})])),_:1},8,["title"]),l(s,{title:u(e)("customStyle")},{default:r((()=>[l(u(m),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:r((()=>[c(f(u(e)("text")),1)])),_:1})])),_:1},8,["title"])],64)}}});export{_ as default};