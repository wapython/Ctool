import{u as _,i as d}from"./action-4a3c9b08.js";import{c as z,b as f}from"./index-cfeef7d6.js";import{A as S,bi as v,bl as V,m as w,bj as x,aF as a,aG as b,as as C,x as s,a$ as o}from"./history-e5ec4597.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";import"./_commonjsHelpers-87174ba5.js";import"./index-97821989.js";const B=S({__name:"Serialize",async setup(g){let n,r;const e=_(([n,r]=v(()=>d({input:z("json"),output:f("xml")},{paste:!1})),n=await n,r(),n));return(A,t)=>{const l=a("SerializeInput"),p=a("SerializeOutput"),m=a("HeightResize"),c=b("row");return V((C(),w(m,null,{default:x(({height:u})=>[s(l,{modelValue:o(e).current.input,"onUpdate:modelValue":t[0]||(t[0]=i=>o(e).current.input=i),height:u},null,8,["modelValue","height"]),s(p,{modelValue:o(e).current.output,"onUpdate:modelValue":t[1]||(t[1]=i=>o(e).current.output=i),height:u,content:o(e).current.input.serialization,onSuccess:t[2]||(t[2]=i=>o(e).save())},null,8,["modelValue","height","content"])]),_:1})),[[c,"1-1"]])}}});export{B as default};