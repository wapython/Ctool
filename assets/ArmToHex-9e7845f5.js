import{u as b,i as R}from"./action-2ea1a1de.js";import{r as C,h as f}from"./util-ed31d726.js";import{d as T,y as H,I as M,z as k,r,A as D,k as E,v as t,w as s,j as l,s as U,B as z,c as I,F as N,f as x}from"./tool-febbd1cf.js";import"./proxy-a3a7499f.js";import"./modulepreload-polyfill-3cfb730f.js";const F=`Input Assembly code:
NOP
RET
B #0x1018DE444
MOV X0, #0x11FE00000000
BEQ #0x10020C
CBNZ R0, #0x682C4
`,G=T({__name:"ArmToHex",async setup(L){let p,h;const e=b(([p,h]=H(()=>R({input:"",offset:"",prefix_0x:!1,swap_endian:!1,response:""})),p=await p,h(),p));let i=M(!1);const v=async()=>{if(i.value=!0,e.current.input.trim()===""){e.current.response="";return}C({asm:e.current.input,offset:e.current.offset,arch:["arm64","arm","thumb"]}).then(({data:u})=>{e.current.response=u,e.success()}).finally(()=>{i.value=!1})},m=k(()=>({arm64:f("hex","arm64",e.current),arm:f("hex","arm",e.current),thumb:f("hex","thumb",e.current)})),a=u=>`${u}${e.current.swap_endian?" Big Endian":""}`;return(u,n)=>{const _=r("Bool"),g=r("HelpTip"),d=r("Align"),B=r("Input"),c=r("Textarea"),y=r("Button"),V=r("HeightResize"),w=D("row");return x(),E(N,null,[t(B,{class:"ctool-page-option",label:"Offset (hex) 0x",modelValue:l(e).current.offset,"onUpdate:modelValue":n[2]||(n[2]=o=>l(e).current.offset=o),placeholder:"0 - for branch and LDR put hex value here",style:{"margin-bottom":"5px"}},{append:s(()=>[t(d,null,{default:s(()=>[t(_,{modelValue:l(e).current.prefix_0x,"onUpdate:modelValue":n[0]||(n[0]=o=>l(e).current.prefix_0x=o),label:"0x"},null,8,["modelValue"]),t(_,{modelValue:l(e).current.swap_endian,"onUpdate:modelValue":n[1]||(n[1]=o=>l(e).current.swap_endian=o),label:"GDB/LLDB"},null,8,["modelValue"]),t(g,{link:"https://armconverter.com/"})]),_:1})]),_:1},8,["modelValue"]),U("div",null,[z((x(),I(V,{append:[".ctool-page-option"]},{default:s(({height:o})=>[t(d,{direction:"vertical"},{default:s(()=>[t(c,{modelValue:l(e).current.input,"onUpdate:modelValue":n[3]||(n[3]=A=>l(e).current.input=A),height:o-37,placeholder:F},null,8,["modelValue","height"]),t(y,{type:"primary",loading:l(i),onClick:v,long:"",text:u.$t("arm_convert")},null,8,["loading","text"])]),_:2},1024),t(d,{direction:"vertical"},{default:s(()=>[t(c,{"model-value":m.value.arm64,placeholder:a("ARM64"),height:(o-10)/3,copy:a("ARM64")},null,8,["model-value","placeholder","height","copy"]),t(c,{"model-value":m.value.arm,placeholder:a("ARM"),height:(o-10)/3,copy:a("ARM")},null,8,["model-value","placeholder","height","copy"]),t(c,{"model-value":m.value.thumb,placeholder:a("THUMB"),height:(o-10)/3,copy:a("THUMB")},null,8,["model-value","placeholder","height","copy"])]),_:2},1024)]),_:1},8,["append"])),[[w,"10-14"]])])],64)}}});export{G as default};
