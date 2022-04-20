"use strict";(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[3558],{2398:function(t,e,r){r.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},i=[],a=(r(9653),r(92222),r(69600),r(96486)),s=r.n(a),o={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(s().isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},u=o,c=r(1001),p=(0,c.Z)(u,n,i,!1,null,null,null),l=p.exports},63486:function(t,e,r){r.d(e,{Z:function(){return d}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},i=[],a=r(62032),s=(r(9653),r(92222),r(57327),r(41539),r(26699),r(32023),r(34809));function o(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),n=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+n)}var u={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var t,e=this,r=window.innerHeight,n=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],i=n.filter((function(t){return!e.remove.includes(t)})).concat(this.append),s=(0,a.Z)(i);try{for(s.s();!(t=s.n()).done;){var u=t.value;r-=o(u)}}catch(c){s.e(c)}finally{s.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener(s.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(s.KU,this.reportWindowSize),this.resize()}},c=u,p=r(1001),l=(0,p.Z)(c,n,i,!1,null,null,null),d=l.exports},43558:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("heightResize",{attrs:{ignore:"",append:[".page-option-block"]},on:{resize:t.resize}},[r("autoHeightTextarea",{attrs:{height:t.inputHeight,placeholder:t.$t("encrypt_input")},model:{value:t.current.input,callback:function(e){t.$set(t.current,"input",e)},expression:"current.input"}}),r("option-block",{staticClass:"page-option-block"},[r("Form",{attrs:{model:t.formItem,"label-position":"top"}},[r("Form-item",{attrs:{label:"算法: "}},[r("Select",{model:{value:t.current.type,callback:function(e){t.$set(t.current,"type",e)},expression:"current.type"}},t._l(t.type,(function(e){return r("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),r("Form-item",{attrs:{label:"密钥: "}},[r("Select",{model:{value:t.current.keyFormat,callback:function(e){t.$set(t.current,"keyFormat",e)},expression:"current.keyFormat"}},[r("Option",{attrs:{value:"Hex"}},[t._v("Hex")]),r("Option",{attrs:{value:"Base64"}},[t._v("Base64")]),r("Option",{attrs:{value:"Password"}},[t._v("Password")])],1),r("Input",{attrs:{placeholder:t.$t("encrypt_password"),type:"textarea",autosize:{minRows:2,maxRows:5}},model:{value:t.current.password,callback:function(e){t.$set(t.current,"password",e)},expression:"current.password"}})],1),r("Form-item",{attrs:{label:"IV 向量(Hex 格式): "}},[r("Input",{attrs:{placeholder:t.$t("iv"),type:"textarea",autosize:{minRows:3,maxRows:5}},model:{value:t.current.iv,callback:function(e){t.$set(t.current,"iv",e)},expression:"current.iv"}})],1),"SM2"===t.current.type?r("Form-item",{attrs:{label:"加密模式: "}},[r("Select",{model:{value:t.current.sm2CipherMode,callback:function(e){t.$set(t.current,"sm2CipherMode",e)},expression:"current.sm2CipherMode"}},[r("Option",{attrs:{value:"C1C3C2"}},[t._v("C1C3C2")]),r("Option",{attrs:{value:"C1C2C3"}},[t._v("C1C2C3")])],1)],1):"SM4"===t.current.type?r("Form-item",{attrs:{label:"加密模式: "}},[r("Select",{model:{value:t.current.mode,callback:function(e){t.$set(t.current,"mode",e)},expression:"current.mode"}},[r("Option",{attrs:{value:"ecb"}},[t._v("ECB")]),r("Option",{attrs:{value:"cbc"}},[t._v("CBC")])],1),r("Select",{model:{value:t.current.padding,callback:function(e){t.$set(t.current,"padding",e)},expression:"current.padding"}},[r("Option",{attrs:{value:"pkcs#7"}},[t._v("Pkcs7")]),r("Option",{attrs:{value:"none"}},[t._v("NoPadding")])],1)],1):r("Form-item",{attrs:{label:"加密模式: "}},[r("Select",{model:{value:t.current.mode,callback:function(e){t.$set(t.current,"mode",e)},expression:"current.mode"}},[r("Option",{attrs:{value:"ECB"}},[t._v("ECB")]),r("Option",{attrs:{value:"CBC"}},[t._v("CBC")]),r("Option",{attrs:{value:"CFB"}},[t._v("CFB")]),r("Option",{attrs:{value:"OFB"}},[t._v("OFB")]),r("Option",{attrs:{value:"CTR"}},[t._v("CTR")])],1),r("Select",{model:{value:t.current.padding,callback:function(e){t.$set(t.current,"padding",e)},expression:"current.padding"}},[r("Option",{attrs:{value:"Pkcs7"}},[t._v("Pkcs7")]),r("Option",{attrs:{value:"Iso97971"}},[t._v("Iso97971")]),r("Option",{attrs:{value:"AnsiX923"}},[t._v("AnsiX923")]),r("Option",{attrs:{value:"Iso10126"}},[t._v("Iso10126")]),r("Option",{attrs:{value:"ZeroPadding"}},[t._v("ZeroPadding")]),r("Option",{attrs:{value:"NoPadding"}},[t._v("NoPadding")])],1)],1),r("Form-item",[r("ButtonGroup",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("encrypt")}}},[t._v(t._s(t.$t("encrypt_encrypt")))]),r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("decrypt")}}},[t._v(t._s(t.$t("encrypt_decrypt")))]),"SM2"===t.current.type?r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.sm2Generate()}}},[t._v(" "+t._s(t.$t("encrypt_generate_secret_key"))+" ")]):t._e()],1)],1)],1)],1),r("autoHeightTextarea",{attrs:{value:t.current.output,height:t.outputHeight,placeholder:t.$t("encrypt_output")}})],1)},i=[],a=(r(41539),r(39714),r(21703),r(69600),r(81354)),s=r.n(a),o=r(63486),u=r(2398),c=r(31166),p={components:{heightResize:o.Z,autoHeightTextarea:u.Z},created:function(){this.$initToolData("input")},methods:{handle:function(t){var e=r(52664).sm2,n=r(52664).sm4;if(this.current.input){try{var i="";switch(this.current.type){case"AES":case"DES":case"RC4":case"Rabbit":case"TripleDES":if("encrypt"===t)i="Password"!==this.current.keyFormat?s()[this.current.type].encrypt(this.current.input,s().enc[this.current.keyFormat].parse(this.current.password),{iv:s().enc.Hex.parse(this.current.iv),mode:s().mode[this.current.mode],padding:s().pad[this.current.padding]}).ciphertext:s()[this.current.type].encrypt(this.current.input,this.current.password).toString();else if("Password"!==this.current.keyFormat){var a=c.CryptoJS.lib.CipherParams.create({ciphertext:s().enc.Hex.parse(this.current.input)});i=s()[this.current.type].decrypt(a,s().enc[this.current.keyFormat].parse(this.current.password),{iv:s().enc.Hex.parse(this.current.iv),mode:s().mode[this.current.mode],padding:s().pad[this.current.padding]}).toString(s().enc.Utf8)}else i=s()[this.current.type].decrypt(this.current.input,this.current.password).toString(s().enc.Utf8);break;case"SM2":i="encrypt"===t?e.doEncrypt(this.current.input,this.current.password,this.current.sm2CipherMode):e.doDecrypt(this.current.input,this.current.password,this.current.sm2CipherMode);break;case"SM4":var o=this.current.password;"Base64"===this.current.keyFormat?o=s().enc.Hex.stringify(s().enc[this.current.keyFormat].parse(this.current.password)):"Password"===this.current.keyFormat&&(o=s().enc.Hex.stringify(s().enc.Utf8.parse(this.current.password))),i="encrypt"===t?n.encrypt(this.current.input,o,{mode:this.current.mode.toLowerCase(),iv:this.current.iv,padding:this.current.padding}):n.decrypt(this.current.input,o,{mode:this.current.mode.toLowerCase(),iv:this.current.iv,padding:this.current.padding})}if(!i)throw new Error("output null");this.current.output=i}catch(u){return this.$Message.error(this.$t("encrypt_failed",[u.message]).toString())}this.current.operation=t,this.$clipboardCopy(this.current.output),this.$saveToolData(this.current)}},sm2Generate:function(){var t=r(52664).sm2,e=t.generateKeyPairHex(),n=[this.$t("encrypt_public_key"),e.publicKey,this.$t("encrypt_private_key"),e.privateKey,"",this.$t("encrypt_secret_key_prompt")].join("\n");this.$Modal.info({render:function(t){return t("Input",{props:{value:n,type:"textarea",rows:9}})},okText:this.$t("encrypt_close"),width:600})},resize:function(t){this.inputHeight=Math.min(160,Math.ceil(t/2)),this.outputHeight=t-this.inputHeight}},data:function(){return{current:{input:"",password:"",keyFormat:"Hex",iv:"",mode:"ECB",padding:"Pkcs7",sm2CipherMode:"C1C3C2",output:"",type:"AES",operation:""},type:["AES","DES","RC4","Rabbit","TripleDES","SM2","SM4"],inputHeight:100,outputHeight:100}}},l=p,d=r(1001),h=(0,d.Z)(l,n,i,!1,null,null,null),m=h.exports}}]);