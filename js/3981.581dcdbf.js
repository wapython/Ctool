(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[3981],{2398:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},n=[],a=(r(9653),r(92222),r(69600),r(96486)),o=r.n(a),u={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(o().isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},c=u,l=r(1001),s=(0,l.Z)(c,i,n,!1,null,null,null),p=s.exports},46976:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},n=[],a=r(62032),o=(r(9653),r(92222),r(57327),r(41539),r(26699),r(32023),r(34809));function u(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),i=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+i)}var c={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){var t=this;setTimeout((function(){return t.resize()}),2)},resize:function(){var t,e=this,r=window.innerHeight,i=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],n=i.filter((function(t){return!e.remove.includes(t)})).concat(this.append),o=(0,a.Z)(n);try{for(o.s();!(t=o.n()).done;){var c=t.value;r-=u(c)}}catch(l){o.e(l)}finally{o.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener(o.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(o.KU,this.reportWindowSize),this.resize()}},l=c,s=r(1001),p=(0,s.Z)(l,i,n,!1,null,null,null),h=p.exports},23981:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("heightResize",{attrs:{ignore:"",append:[".page-option-block"]},on:{resize:t.resize}},[r("autoHeightTextarea",{attrs:{height:t.inputHeight,placeholder:t.$t("html_input")},model:{value:t.current.input,callback:function(e){t.$set(t.current,"input",e)},expression:"current.input"}}),r("option-block",{staticClass:"page-option-block"},[r("FormItem",[r("ButtonGroup",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("encode")}}},[t._v(t._s(t.$t("html_encode")))]),r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("decode")}}},[t._v(t._s(t.$t("html_decode")))])],1)],1)],1),r("autoHeightTextarea",{attrs:{value:t.current.output,height:t.outputHeight,placeholder:t.$t("html_output")}})],1)},n=[],a=r(46976),o=r(2398),u={components:{heightResize:a.Z,autoHeightTextarea:o.Z},created:function(){this.$initToolData("input")},methods:{handle:function(t){this.current.input&&(this.current.output="encode"===t?r(65605).htmlEncode(this.current.input):r(65605).htmlDecode(this.current.input),this.current.operation=t,this.$clipboardCopy(this.current.output),this.$saveToolData(this.current))},resize:function(t){this.inputHeight=Math.min(160,Math.ceil(t/2)),this.outputHeight=t-this.inputHeight}},data:function(){return{current:{input:"",output:"",operation:""},inputHeight:100,outputHeight:100}}},c=u,l=r(1001),s=(0,l.Z)(c,i,n,!1,null,null,null),p=s.exports},50863:function(t,e,r){var i=r(1702);t.exports=i(1..valueOf)},92222:function(t,e,r){"use strict";var i=r(82109),n=r(17854),a=r(47293),o=r(43157),u=r(70111),c=r(47908),l=r(26244),s=r(86135),p=r(65417),h=r(81194),d=r(5112),f=r(7392),m=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=n.TypeError,y=f>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),E=h("concat"),N=function(t){if(!u(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},x=!y||!E;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,r,i,n,a,o=c(this),u=p(o,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?o:arguments[e],N(a)){if(n=l(a),h+n>g)throw b(v);for(r=0;r<n;r++,h++)r in a&&s(u,h,a[r])}else{if(h>=g)throw b(v);s(u,h++,a)}return u.length=h,u}})},9653:function(t,e,r){"use strict";var i=r(19781),n=r(17854),a=r(1702),o=r(54705),u=r(31320),c=r(92597),l=r(79587),s=r(47976),p=r(52190),h=r(57593),d=r(47293),f=r(8006).f,m=r(31236).f,g=r(3070).f,v=r(50863),b=r(53111).trim,y="Number",E=n[y],N=E.prototype,x=n.TypeError,_=a("".slice),w=a("".charCodeAt),I=function(t){var e=h(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,i,n,a,o,u,c,l=h(t,"number");if(p(l))throw x("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),e=w(l,0),43===e||45===e){if(r=w(l,2),88===r||120===r)return NaN}else if(48===e){switch(w(l,1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(a=_(l,2),o=a.length,u=0;u<o;u++)if(c=w(a,u),c<48||c>n)return NaN;return parseInt(a,i)}return+l};if(o(y,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var S,O=function(t){var e=arguments.length<1?0:E(I(t)),r=this;return s(N,r)&&d((function(){v(r)}))?l(Object(e),r,O):e},T=i?f(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;T.length>z;z++)c(E,S=T[z])&&!c(O,S)&&g(O,S,m(E,S));O.prototype=N,N.constructor=O,u(n,y,O)}},65605:function(t,e,r){var i,n=r(34155);
/**
 * [js-htmlencode]{@link https://github.com/emn178/js-htmlencode}
 *
 * @version 0.3.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){"use strict";var e="object"===typeof window?window:{},a=!e.JS_HTMLENCODE_NO_NODE_JS&&"object"===typeof n&&n.versions&&n.versions.node;a&&(e=r.g);var o=!e.JS_HTMLENCODE_NO_COMMON_JS&&t.exports,u=r.amdO,c={"&nbsp;":" ","&iexcl;":"¡","&cent;":"¢","&pound;":"£","&curren;":"¤","&yen;":"¥","&brvbar;":"¦","&sect;":"§","&uml;":"¨","&copy;":"©","&ordf;":"ª","&laquo;":"«","&not;":"¬","&shy;":"­","&reg;":"®","&macr;":"¯","&deg;":"°","&plusmn;":"±","&sup2;":"²","&sup3;":"³","&acute;":"´","&micro;":"µ","&para;":"¶","&middot;":"·","&cedil;":"¸","&sup1;":"¹","&ordm;":"º","&raquo;":"»","&frac14;":"¼","&frac12;":"½","&frac34;":"¾","&iquest;":"¿","&Agrave;":"À","&Aacute;":"Á","&Acirc;":"Â","&Atilde;":"Ã","&Auml;":"Ä","&Aring;":"Å","&AElig;":"Æ","&Ccedil;":"Ç","&Egrave;":"È","&Eacute;":"É","&Ecirc;":"Ê","&Euml;":"Ë","&Igrave;":"Ì","&Iacute;":"Í","&Icirc;":"Î","&Iuml;":"Ï","&ETH;":"Ð","&Ntilde;":"Ñ","&Ograve;":"Ò","&Oacute;":"Ó","&Ocirc;":"Ô","&Otilde;":"Õ","&Ouml;":"Ö","&times;":"×","&Oslash;":"Ø","&Ugrave;":"Ù","&Uacute;":"Ú","&Ucirc;":"Û","&Uuml;":"Ü","&Yacute;":"Ý","&THORN;":"Þ","&szlig;":"ß","&agrave;":"à","&aacute;":"á","&acirc;":"â","&atilde;":"ã","&auml;":"ä","&aring;":"å","&aelig;":"æ","&ccedil;":"ç","&egrave;":"è","&eacute;":"é","&ecirc;":"ê","&euml;":"ë","&igrave;":"ì","&iacute;":"í","&icirc;":"î","&iuml;":"ï","&eth;":"ð","&ntilde;":"ñ","&ograve;":"ò","&oacute;":"ó","&ocirc;":"ô","&otilde;":"õ","&ouml;":"ö","&divide;":"÷","&oslash;":"ø","&ugrave;":"ù","&uacute;":"ú","&ucirc;":"û","&uuml;":"ü","&yacute;":"ý","&thorn;":"þ","&yuml;":"ÿ","&quot;":'"',"&amp;":"&","&lt;":"<","&gt;":">","&apos;":"'","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},l=function(t){if("#"!==t.charAt(1))return c[t]||t;var e,r=t.charAt(2);return"x"===r||"X"===r?(r=t.substring(3,t.length-1),e=parseInt(r,16)):(r=t.substring(2,t.length-1),e=parseInt(r)),isNaN(e)?t:String.fromCharCode(e)},s=function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},p=function(t){return t.replace(/&#?\w+;/g,l)},h=s;s.htmlEncode=s,s.htmlDecode=p,o?t.exports=h:(e.htmlEncode=s,e.htmlDecode=p,u&&(i=function(){return h}.call(h,r,h,t),void 0===i||(t.exports=i)))})()}}]);