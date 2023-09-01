import{u as P,i as q}from"./action-eda1e18f.js";import{d as G,ae as u,y as O,I as J,D as K,z as a,r as d,A as Q,k,v as i,w as p,j as n,V as E,F as w,f as l,q as M,c as x,m as W,G as X,B as Z}from"./tool-7061237f.js";import{u as ee,t as te,a as H}from"./timezone-517935b9.js";import"./modulepreload-polyfill-3cfb730f.js";const ne={key:1},_="large",le=G({__name:"Timezone",async setup(re){let y,h;u.extend(ee),u.extend(te);const B=["Asia/Shanghai","Europe/London","Asia/Tokyo","America/Chicago","Europe/Berlin","Africa/Cairo","Asia/Calcutta"],Y=t=>new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+$/).test(t.trim())||new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d+$/).test(t.trim()),e=P(([y,h]=O(()=>q({type:"",input:"",timezone:[...new Set([u.tz.guess(),...B])].slice(0,7)},{paste:!1})),y=await y,h(),y));let s=J(!1);const c=t=>{if(!e.current.type||e.current.input.trim()==="")return"";if(e.current.type===t)return e.current.input;try{if(!f.value)throw new Error($t("time_error_format"));return C(e.current.input,e.current.type,t)}catch(o){return $error(o)}},m=(t,o)=>{e.current.input=o,e.current.type=t};K(()=>e.current,t=>{!Y(t.input)||t.type===""||e.save()},{immediate:!0,deep:!0});const f=a(()=>Y(e.current.input.trim())),C=(t,o,z)=>t.includes(".")?u.tz(u.tz(t,o),z).format("YYYY-MM-DD HH:mm:ss.SSS"):u.tz(u.tz(t,o),z).format("YYYY-MM-DD HH:mm:ss"),S=()=>{e.current.type=e.current.timezone[0],e.current.input=u.tz(u(),e.current.type).format("YYYY-MM-DD HH:mm:ss")},U=a({get:()=>c(e.current.timezone[0]),set:t=>m(e.current.timezone[0],t)}),I=a({get:()=>c(e.current.timezone[1]),set:t=>m(e.current.timezone[1],t)}),b=a({get:()=>c(e.current.timezone[2]),set:t=>m(e.current.timezone[2],t)}),L=a({get:()=>c(e.current.timezone[3]),set:t=>m(e.current.timezone[3],t)}),R=a({get:()=>c(e.current.timezone[4]),set:t=>m(e.current.timezone[4],t)}),T=a({get:()=>c(e.current.timezone[5]),set:t=>m(e.current.timezone[5],t)}),j=a({get:()=>c(e.current.timezone[6]),set:t=>m(e.current.timezone[6],t)}),$={output0:U,output1:I,output2:b,output3:L,output4:R,output5:T,output6:j};return(t,o)=>{const z=d("Input"),D=d("Select"),v=d("Button"),V=d("Align"),A=d("Display"),F=d("ExtendPage"),N=Q("row");return l(),k(w,null,[i(V,{direction:"vertical"},{default:p(()=>[(l(!0),k(w,null,M(n(X.range)(0,7),r=>(l(),x(A,{position:"right-center"},{extra:p(()=>[i(V,null,{default:p(()=>[i(D,{modelValue:n(e).current.timezone[r],"onUpdate:modelValue":g=>n(e).current.timezone[r]=g,options:n(H),size:"small",disabled:n(f)&&n(e).current.timezone[r]===n(e).current.type},null,8,["modelValue","onUpdate:modelValue","options","disabled"]),n(f)?(l(),x(v,{key:0,text:t.$t("main_ui_copy"),onClick:g=>t.$copy($[`output${r}`].value),size:"small",type:"primary"},null,8,["text","onClick"])):W("",!0)]),_:2},1024)]),default:p(()=>[i(z,{modelValue:$[`output${r}`].value,"onUpdate:modelValue":g=>$[`output${r}`].value=g,placeholder:t.$t("time_timezone_input_placeholder"),size:_},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024))),256)),n(f)?Z((l(),k("div",ne,[i(v,{size:_,onClick:o[0]||(o[0]=r=>E(s)?s.value=!0:s=!0),text:t.$t("main_ui_more")},null,8,["text"]),i(v,{size:_,onClick:o[1]||(o[1]=r=>n(e).current.input=""),text:t.$t("main_ui_clear")},null,8,["text"])])),[[N,"1-100px"]]):(l(),x(v,{key:0,size:_,text:t.$t("time_current_time"),onClick:S},null,8,["text"]))]),_:1}),i(F,{modelValue:n(s),"onUpdate:modelValue":o[2]||(o[2]=r=>E(s)?s.value=r:s=r)},{default:p(()=>[i(V,{direction:"vertical"},{default:p(()=>[(l(!0),k(w,null,M(n(H),r=>(l(),x(A,{position:"right-center",text:r.label,type:r.value===n(e).current.type?"danger":"general",onClick:()=>t.$copy(C(n(e).current.input,n(e).current.type,r.value))},{default:p(()=>[i(z,{"model-value":C(n(e).current.input,n(e).current.type,r.value),size:_},null,8,["model-value"])]),_:2},1032,["text","type","onClick"]))),256))]),_:1})]),_:1},8,["modelValue"])],64)}}});export{le as default};
