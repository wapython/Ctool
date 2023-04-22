import{s as k}from"./index-636623a5.js";import{u as E,i as T}from"./action-a6b0c88b.js";import{c as a,a as H,T as c}from"./index-9c4a40c4.js";import{D as C,bj as U,l as A,bf as B,n as b,bk as s,aG as u,aH as I,at as f,y as r,b0 as e,bm as z}from"./history-03a9f07a.js";import"./_commonjsHelpers-87174ba5.js";import"./index-b1ff2442.js";import"./shim-03580cdb.js";const K=C({__name:"Encrypt",async setup(D){let p,d;const t=E(([p,d]=U(()=>T({input:a("text"),option:{key:a("hex"),padding:!0,is_cbc:!1,iv:a("hex")},output:H("hex")})),p=await p,d(),p)),m=A(()=>{if(t.current.input.text.isEmpty()||t.current.option.key.text.isEmpty()||t.current.option.is_cbc&&t.current.option.iv.text.isEmpty())return c.empty();if(t.current.input.text.isError())return t.current.input.text;if(t.current.option.key.text.isError())return t.current.option.key.text;if(t.current.option.is_cbc&&t.current.option.iv.text.isError())return t.current.option.iv.text;try{if(!t.current.input.text.isText())throw new Error("input content must text / text file");const i=k.sm4.encrypt(t.current.input.text.toString(),t.current.option.key.text.toHexString(),{padding:t.current.option.padding?"pkcs#5":"none",mode:t.current.option.is_cbc?"cbc":void 0,iv:t.current.option.is_cbc?t.current.option.iv.text.toHexString():void 0});if(i==="")throw new Error("Encrypt Failure");return c.fromHex(i)}catch(i){return c.fromError($error(i))}});return B(()=>m.value,i=>{i.isEmpty()||t.save()},{immediate:!0,deep:!0}),(i,o)=>{const l=u("TextInput"),x=u("Bool"),g=u("HelpTip"),_=u("Align"),y=u("TextOutput"),V=u("HeightResize"),v=I("row");return f(),b(V,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:s(({small:h,large:w})=>[r(_,{direction:"vertical"},{default:s(()=>[r(l,{modelValue:e(t).current.input,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).current.input=n),height:h,upload:"file"},null,8,["modelValue","height"]),z((f(),b(_,{class:"ctool-page-option"},{default:s(()=>[r(l,{modelValue:e(t).current.option.key,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).current.option.key=n),"use-input":"Key",allow:["text","hex","base64"]},null,8,["modelValue"]),r(x,{modelValue:e(t).current.option.padding,"onUpdate:modelValue":o[2]||(o[2]=n=>e(t).current.option.padding=n),label:"Padding",border:""},null,8,["modelValue"]),r(x,{modelValue:e(t).current.option.is_cbc,"onUpdate:modelValue":o[3]||(o[3]=n=>e(t).current.option.is_cbc=n),label:"CBC",border:""},null,8,["modelValue"]),r(l,{disabled:!e(t).current.option.is_cbc,modelValue:e(t).current.option.iv,"onUpdate:modelValue":o[4]||(o[4]=n=>e(t).current.option.iv=n),"use-input":"IV",allow:["text","hex","base64"]},null,8,["disabled","modelValue"]),r(g,{link:"https://github.com/JuneAndGreen/sm-crypto"})]),_:1})),[[v,"1-auto-auto-1-auto"]]),r(y,{modelValue:e(t).current.output,"onUpdate:modelValue":o[5]||(o[5]=n=>e(t).current.output=n),allow:["base64","hex"],content:m.value,height:w},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{K as default};