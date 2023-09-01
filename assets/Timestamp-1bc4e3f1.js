import{u as B,i as A}from"./action-eda1e18f.js";import{ae as a,d as h,y as L,z as k,D as N,I as O,H as U,r as $,A as j,c as D,w as m,f as b,v as s,j as i,m as x,B as Z,k as F,s as V,l as E,n as q}from"./tool-7061237f.js";import{u as G,t as J,a as C}from"./timezone-517935b9.js";import"./modulepreload-polyfill-3cfb730f.js";var H=(t=>(t[t.error=0]="error",t[t.empty=1]="empty",t[t.normal=2]="normal",t[t.unix=3]="unix",t))(H||{}),w=(t=>(t.second="second",t.millisecond="millisecond",t.nanosecond="nanosecond",t))(w||{});const g={second:0,millisecond:3,nanosecond:9},K=(t,p,u="auto")=>{const{type:n,format:l}=P(t);u=u==="auto"?l:u;try{if(n===1)return{isValid:!1,second:"",millisecond:"",nanosecond:""};if(n===0)throw new Error($t("time_error_format"));let c,d;const f=g[u];if(n===2){const _=t.split(".");c=(_[1]||"").slice(0,f),d=a.tz(_[0],p)}else d=a(parseInt(f?t.slice(0,-1*f):t)*1e3).tz(p),c=f?t.slice(-1*f):"";if(!d.isValid())throw new Error($t("time_error_format"));const e=n===2?d.unix().toString():d.format("YYYY-MM-DD HH:mm:ss"),o=c.slice(0,g.millisecond).padEnd(g.millisecond,"0"),y=c.slice(0,g.nanosecond).padEnd(g.nanosecond,"0"),v=n===2?"":".";return{isValid:!0,second:e,millisecond:`${e}${v}${o}`,nanosecond:`${e}${v}${y}`,format:u,autoFormat:l,type:n}}catch(c){const d=$error(c);return{isValid:!1,second:d,millisecond:d,nanosecond:d,type:n,format:u,autoFormat:l}}},P=t=>t===""?{type:1,format:"second"}:new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+$/).test(t)?{type:2,format:"second"}:new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d{0,3}$/).test(t)?{type:2,format:"millisecond"}:new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d{4,9}$/).test(t)?{type:2,format:"nanosecond"}:new RegExp(/^-?\d{1,12}$/).test(t)?{type:3,format:"second"}:new RegExp(/^-?\d{13,16}$/).test(t)?{type:3,format:"millisecond"}:new RegExp(/^-?\d{17,}$/).test(t)?{type:3,format:"nanosecond"}:{type:0,format:"second"},Q="auto",te=h({__name:"Timestamp",async setup(t){let p,u;a.extend(G),a.extend(J);const n=B(([p,u]=L(()=>A({input:"",timezone:a.tz.guess(),format:Q},{paste:e=>new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+$/).test(e)||new RegExp(/^\d+-\d+-\d+ \d+:\d+:\d+\.\d+$/).test(e)||new RegExp(/^-?\d{5,}$/).test(e)})),p=await p,u(),p)),l=k(()=>K((n.current.input||"").trim(),n.current.timezone,n.current.format));N(()=>({data:n.current,is_valid:l.value.isValid,format:l.value.format}),({is_valid:e})=>{e&&n.save()},{immediate:!0,deep:!0});let c=O(a().valueOf());const d=setInterval(()=>{c.value=a().valueOf()},100);U(()=>{clearInterval(d)});const f=k(()=>{const e=a(c.value).tz(n.current.timezone);return[{format:$t("time_normal_second"),value:e.format("YYYY-MM-DD HH:mm:ss")},{format:$t("time_unix_second"),value:e.unix().toString()},{format:$t("time_normal_millisecond"),value:e.format("YYYY-MM-DD HH:mm:ss.SSS")},{format:$t("time_unix_millisecond"),value:e.valueOf().toString()}]});return console.log(a.tz(a("2013-12-01"),"Europe/Dublin").format("YYYY-MM-DD HH:mm:ss")),console.log(a.tz(a("2013-06-01"),"Europe/Dublin").format("YYYY-MM-DD HH:mm:ss")),console.log(a.tz(a(),"Europe/Dublin").format("Z")),console.log(a.tz(a("2023-01-01 07:09:50"),"Europe/Dublin").format("Z")),console.log(C),(e,o)=>{const y=$("Select"),v=$("Input"),_=$("Button"),Y=$("Align"),z=$("Display"),M=$("Link"),R=$("Table"),S=j("row");return b(),D(Y,{direction:"vertical"},{default:m(()=>[s(y,{size:"large",width:"100%",center:!1,label:e.$t("time_timezone"),modelValue:i(n).current.timezone,"onUpdate:modelValue":o[0]||(o[0]=r=>i(n).current.timezone=r),options:i(C),onChange:o[1]||(o[1]=r=>i(n).current.timezone=r)},null,8,["label","modelValue","options"]),s(z,{position:"right-center"},{extra:m(()=>[s(Y,null,{default:m(()=>[l.value.type===i(H).unix?(b(),D(y,{key:0,modelValue:i(n).current.format,"onUpdate:modelValue":o[3]||(o[3]=r=>i(n).current.format=r),size:"small",options:[{value:"auto",label:`${e.$t("time_unix_auto")}:${e.$t(`time_unix_${l.value.autoFormat}`)}`},{value:i(w).second,label:e.$t("time_unix_second")},{value:i(w).millisecond,label:e.$t("time_unix_millisecond")},{value:i(w).nanosecond,label:e.$t("time_unix_nanosecond")}]},null,8,["modelValue","options"])):x("",!0),i(n).current.input!==""?(b(),D(_,{key:1,text:e.$t("main_ui_clear"),onClick:o[4]||(o[4]=r=>i(n).current.input=""),size:"small"},null,8,["text"])):x("",!0)]),_:1})]),default:m(()=>[s(v,{size:"large",modelValue:i(n).current.input,"onUpdate:modelValue":o[2]||(o[2]=r=>i(n).current.input=r),label:e.$t("main_ui_input"),placeholder:e.$t("time_timestamp_input_placeholder")},null,8,["modelValue","label","placeholder"])]),_:1}),s(z,{position:"right-center",text:l.value.isValid?e.$t("main_ui_copy"):"",onClick:o[5]||(o[5]=()=>e.$copy(l.value.second))},{default:m(()=>[s(v,{readonly:"",size:"large","model-value":l.value.second,label:e.$t("time_second")},null,8,["model-value","label"])]),_:1},8,["text"]),Z((b(),F("div",null,[s(z,{position:"right-center",text:l.value.isValid?e.$t("main_ui_copy"):"",onClick:o[6]||(o[6]=()=>e.$copy(l.value.millisecond))},{default:m(()=>[s(v,{readonly:"",size:"large","model-value":l.value.millisecond,label:e.$t("time_millisecond")},null,8,["model-value","label"])]),_:1},8,["text"]),s(z,{position:"right-center",text:l.value.isValid?e.$t("main_ui_copy"):"",onClick:o[7]||(o[7]=()=>e.$copy(l.value.nanosecond))},{default:m(()=>[s(v,{readonly:"",size:"large","model-value":l.value.nanosecond,label:e.$t("time_nanosecond")},null,8,["model-value","label"])]),_:1},8,["text"])])),[[S,"1-1"]]),V("div",null,[s(R,{columns:[{title:e.$t("time_format"),key:"format"},{title:e.$t("time_value"),key:"value"}],lists:f.value,"action-width":100,border:""},{column:m(({row:r})=>[V("td",null,E(r.format),1),V("td",null,[s(M,{onClick:T=>e.$copy(r.value)},{default:m(()=>[q(E(r.value),1)]),_:2},1032,["onClick"])])]),default:m(({row:r})=>[s(_,{text:e.$t("main_ui_load"),onClick:()=>i(n).current.input=`${r.value}`,size:"small"},null,8,["text","onClick"])]),_:1},8,["columns","lists"])])]),_:1})}}});export{te as default};
