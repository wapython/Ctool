(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[2664],{36077:function(t,i){(function(){var i,e=0xdeadbeefcafe,r=15715070==(16777215&e);function n(t,i,e){null!=t&&("number"==typeof t?this.fromNumber(t,i,e):null==i&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,i))}function s(){return new n(null)}function o(t,i,e,r,n,s){while(--s>=0){var o=i*this[t++]+e[r]+n;n=Math.floor(o/67108864),e[r++]=67108863&o}return n}function h(t,i,e,r,n,s){var o=32767&i,h=i>>15;while(--s>=0){var u=32767&this[t],l=this[t++]>>15,a=h*u+l*o;u=o*u+((32767&a)<<15)+e[r]+(1073741823&n),n=(u>>>30)+(a>>>15)+h*l+(n>>>30),e[r++]=1073741823&u}return n}function u(t,i,e,r,n,s){var o=16383&i,h=i>>14;while(--s>=0){var u=16383&this[t],l=this[t++]>>14,a=h*u+l*o;u=o*u+((16383&a)<<14)+e[r]+n,n=(u>>28)+(a>>14)+h*l,e[r++]=268435455&u}return n}var l="undefined"!==typeof navigator;l&&r&&"Microsoft Internet Explorer"==navigator.appName?(n.prototype.am=h,i=30):l&&r&&"Netscape"!=navigator.appName?(n.prototype.am=o,i=26):(n.prototype.am=u,i=28),n.prototype.DB=i,n.prototype.DM=(1<<i)-1,n.prototype.DV=1<<i;var a=52;n.prototype.FV=Math.pow(2,a),n.prototype.F1=a-i,n.prototype.F2=2*i-a;var c,f,p="0123456789abcdefghijklmnopqrstuvwxyz",m=new Array;for(c="0".charCodeAt(0),f=0;f<=9;++f)m[c++]=f;for(c="a".charCodeAt(0),f=10;f<36;++f)m[c++]=f;for(c="A".charCodeAt(0),f=10;f<36;++f)m[c++]=f;function g(t){return p.charAt(t)}function y(t,i){var e=m[t.charCodeAt(i)];return null==e?-1:e}function d(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s}function v(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0}function T(t){var i=s();return i.fromInt(t),i}function F(t,i){var e;if(16==i)e=4;else if(8==i)e=3;else if(256==i)e=8;else if(2==i)e=1;else if(32==i)e=5;else{if(4!=i)return void this.fromRadix(t,i);e=2}this.t=0,this.s=0;var r=t.length,s=!1,o=0;while(--r>=0){var h=8==e?255&t[r]:y(t,r);h<0?"-"==t.charAt(r)&&(s=!0):(s=!1,0==o?this[this.t++]=h:o+e>this.DB?(this[this.t-1]|=(h&(1<<this.DB-o)-1)<<o,this[this.t++]=h>>this.DB-o):this[this.t-1]|=h<<o,o+=e,o>=this.DB&&(o-=this.DB))}8==e&&0!=(128&t[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),s&&n.ZERO.subTo(this,this)}function w(){var t=this.s&this.DM;while(this.t>0&&this[this.t-1]==t)--this.t}function b(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var e,r=(1<<i)-1,n=!1,s="",o=this.t,h=this.DB-o*this.DB%i;if(o-- >0){h<this.DB&&(e=this[o]>>h)>0&&(n=!0,s=g(e));while(o>=0)h<i?(e=(this[o]&(1<<h)-1)<<i-h,e|=this[--o]>>(h+=this.DB-i)):(e=this[o]>>(h-=i)&r,h<=0&&(h+=this.DB,--o)),e>0&&(n=!0),n&&(s+=g(e))}return n?s:"0"}function B(){var t=s();return n.ZERO.subTo(this,t),t}function x(){return this.s<0?this.negate():this}function D(t){var i=this.s-t.s;if(0!=i)return i;var e=this.t;if(i=e-t.t,0!=i)return this.s<0?-i:i;while(--e>=0)if(0!=(i=this[e]-t[e]))return i;return 0}function S(t){var i,e=1;return 0!=(i=t>>>16)&&(t=i,e+=16),0!=(i=t>>8)&&(t=i,e+=8),0!=(i=t>>4)&&(t=i,e+=4),0!=(i=t>>2)&&(t=i,e+=2),0!=(i=t>>1)&&(t=i,e+=1),e}function I(){return this.t<=0?0:this.DB*(this.t-1)+S(this[this.t-1]^this.s&this.DM)}function q(t,i){var e;for(e=this.t-1;e>=0;--e)i[e+t]=this[e];for(e=t-1;e>=0;--e)i[e]=0;i.t=this.t+t,i.s=this.s}function E(t,i){for(var e=t;e<this.t;++e)i[e-t]=this[e];i.t=Math.max(this.t-t,0),i.s=this.s}function A(t,i){var e,r=t%this.DB,n=this.DB-r,s=(1<<n)-1,o=Math.floor(t/this.DB),h=this.s<<r&this.DM;for(e=this.t-1;e>=0;--e)i[e+o+1]=this[e]>>n|h,h=(this[e]&s)<<r;for(e=o-1;e>=0;--e)i[e]=0;i[o]=h,i.t=this.t+o+1,i.s=this.s,i.clamp()}function R(t,i){i.s=this.s;var e=Math.floor(t/this.DB);if(e>=this.t)i.t=0;else{var r=t%this.DB,n=this.DB-r,s=(1<<r)-1;i[0]=this[e]>>r;for(var o=e+1;o<this.t;++o)i[o-e-1]|=(this[o]&s)<<n,i[o-e]=this[o]>>r;r>0&&(i[this.t-e-1]|=(this.s&s)<<n),i.t=this.t-e,i.clamp()}}function M(t,i){var e=0,r=0,n=Math.min(t.t,this.t);while(e<n)r+=this[e]-t[e],i[e++]=r&this.DM,r>>=this.DB;if(t.t<this.t){r-=t.s;while(e<this.t)r+=this[e],i[e++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(e<t.t)r-=t[e],i[e++]=r&this.DM,r>>=this.DB;r-=t.s}i.s=r<0?-1:0,r<-1?i[e++]=this.DV+r:r>0&&(i[e++]=r),i.t=e,i.clamp()}function P(t,i){var e=this.abs(),r=t.abs(),s=e.t;i.t=s+r.t;while(--s>=0)i[s]=0;for(s=0;s<r.t;++s)i[s+e.t]=e.am(0,r[s],i,s,0,e.t);i.s=0,i.clamp(),this.s!=t.s&&n.ZERO.subTo(i,i)}function O(t){var i=this.abs(),e=t.t=2*i.t;while(--e>=0)t[e]=0;for(e=0;e<i.t-1;++e){var r=i.am(e,i[e],t,2*e,0,1);(t[e+i.t]+=i.am(e+1,2*i[e],t,2*e+1,r,i.t-e-1))>=i.DV&&(t[e+i.t]-=i.DV,t[e+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(e,i[e],t,2*e,0,1)),t.s=0,t.clamp()}function C(t,i,e){var r=t.abs();if(!(r.t<=0)){var o=this.abs();if(o.t<r.t)return null!=i&&i.fromInt(0),void(null!=e&&this.copyTo(e));null==e&&(e=s());var h=s(),u=this.s,l=t.s,a=this.DB-S(r[r.t-1]);a>0?(r.lShiftTo(a,h),o.lShiftTo(a,e)):(r.copyTo(h),o.copyTo(e));var c=h.t,f=h[c-1];if(0!=f){var p=f*(1<<this.F1)+(c>1?h[c-2]>>this.F2:0),m=this.FV/p,g=(1<<this.F1)/p,y=1<<this.F2,d=e.t,v=d-c,T=null==i?s():i;h.dlShiftTo(v,T),e.compareTo(T)>=0&&(e[e.t++]=1,e.subTo(T,e)),n.ONE.dlShiftTo(c,T),T.subTo(h,h);while(h.t<c)h[h.t++]=0;while(--v>=0){var F=e[--d]==f?this.DM:Math.floor(e[d]*m+(e[d-1]+y)*g);if((e[d]+=h.am(0,F,e,v,0,c))<F){h.dlShiftTo(v,T),e.subTo(T,e);while(e[d]<--F)e.subTo(T,e)}}null!=i&&(e.drShiftTo(c,i),u!=l&&n.ZERO.subTo(i,i)),e.t=c,e.clamp(),a>0&&e.rShiftTo(a,e),u<0&&n.ZERO.subTo(e,e)}}}function V(t){var i=s();return this.abs().divRemTo(t,null,i),this.s<0&&i.compareTo(n.ZERO)>0&&t.subTo(i,i),i}function H(t){this.m=t}function N(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function L(t){return t}function z(t){t.divRemTo(this.m,null,t)}function Z(t,i,e){t.multiplyTo(i,e),this.reduce(e)}function k(t,i){t.squareTo(i),this.reduce(i)}function j(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return i=i*(2-(15&t)*i)&15,i=i*(2-(255&t)*i)&255,i=i*(2-((65535&t)*i&65535))&65535,i=i*(2-t*i%this.DV)%this.DV,i>0?this.DV-i:-i}function K(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function X(t){var i=s();return t.abs().dlShiftTo(this.m.t,i),i.divRemTo(this.m,null,i),t.s<0&&i.compareTo(n.ZERO)>0&&this.m.subTo(i,i),i}function U(t){var i=s();return t.copyTo(i),this.reduce(i),i}function Y(t){while(t.t<=this.mt2)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var e=32767&t[i],r=e*this.mpl+((e*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t.DM;e=i+this.m.t,t[e]+=this.m.am(0,r,t,i,0,this.m.t);while(t[e]>=t.DV)t[e]-=t.DV,t[++e]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function G(t,i){t.squareTo(i),this.reduce(i)}function _(t,i,e){t.multiplyTo(i,e),this.reduce(e)}function J(){return 0==(this.t>0?1&this[0]:this.s)}function Q(t,i){if(t>4294967295||t<1)return n.ONE;var e=s(),r=s(),o=i.convert(this),h=S(t)-1;o.copyTo(e);while(--h>=0)if(i.sqrTo(e,r),(t&1<<h)>0)i.mulTo(r,o,e);else{var u=e;e=r,r=u}return i.revert(e)}function W(t,i){var e;return e=t<256||i.isEven()?new H(i):new K(i),this.exp(t,e)}function $(){var t=s();return this.copyTo(t),t}function tt(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function it(){return 0==this.t?this.s:this[0]<<24>>24}function et(){return 0==this.t?this.s:this[0]<<16>>16}function rt(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function nt(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function st(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var i=this.chunkSize(t),e=Math.pow(t,i),r=T(e),n=s(),o=s(),h="";this.divRemTo(r,n,o);while(n.signum()>0)h=(e+o.intValue()).toString(t).substr(1)+h,n.divRemTo(r,n,o);return o.intValue().toString(t)+h}function ot(t,i){this.fromInt(0),null==i&&(i=10);for(var e=this.chunkSize(i),r=Math.pow(i,e),s=!1,o=0,h=0,u=0;u<t.length;++u){var l=y(t,u);l<0?"-"==t.charAt(u)&&0==this.signum()&&(s=!0):(h=i*h+l,++o>=e&&(this.dMultiply(r),this.dAddOffset(h,0),o=0,h=0))}o>0&&(this.dMultiply(Math.pow(i,o)),this.dAddOffset(h,0)),s&&n.ZERO.subTo(this,this)}function ht(t,i,e){if("number"==typeof i)if(t<2)this.fromInt(1);else{this.fromNumber(t,e),this.testBit(t-1)||this.bitwiseTo(n.ONE.shiftLeft(t-1),gt,this),this.isEven()&&this.dAddOffset(1,0);while(!this.isProbablePrime(i))this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(n.ONE.shiftLeft(t-1),this)}else{var r=new Array,s=7&t;r.length=1+(t>>3),i.nextBytes(r),s>0?r[0]&=(1<<s)-1:r[0]=0,this.fromString(r,256)}}function ut(){var t=this.t,i=new Array;i[0]=this.s;var e,r=this.DB-t*this.DB%8,n=0;if(t-- >0){r<this.DB&&(e=this[t]>>r)!=(this.s&this.DM)>>r&&(i[n++]=e|this.s<<this.DB-r);while(t>=0)r<8?(e=(this[t]&(1<<r)-1)<<8-r,e|=this[--t]>>(r+=this.DB-8)):(e=this[t]>>(r-=8)&255,r<=0&&(r+=this.DB,--t)),0!=(128&e)&&(e|=-256),0==n&&(128&this.s)!=(128&e)&&++n,(n>0||e!=this.s)&&(i[n++]=e)}return i}function lt(t){return 0==this.compareTo(t)}function at(t){return this.compareTo(t)<0?this:t}function ct(t){return this.compareTo(t)>0?this:t}function ft(t,i,e){var r,n,s=Math.min(t.t,this.t);for(r=0;r<s;++r)e[r]=i(this[r],t[r]);if(t.t<this.t){for(n=t.s&this.DM,r=s;r<this.t;++r)e[r]=i(this[r],n);e.t=this.t}else{for(n=this.s&this.DM,r=s;r<t.t;++r)e[r]=i(n,t[r]);e.t=t.t}e.s=i(this.s,t.s),e.clamp()}function pt(t,i){return t&i}function mt(t){var i=s();return this.bitwiseTo(t,pt,i),i}function gt(t,i){return t|i}function yt(t){var i=s();return this.bitwiseTo(t,gt,i),i}function dt(t,i){return t^i}function vt(t){var i=s();return this.bitwiseTo(t,dt,i),i}function Tt(t,i){return t&~i}function Ft(t){var i=s();return this.bitwiseTo(t,Tt,i),i}function wt(){for(var t=s(),i=0;i<this.t;++i)t[i]=this.DM&~this[i];return t.t=this.t,t.s=~this.s,t}function bt(t){var i=s();return t<0?this.rShiftTo(-t,i):this.lShiftTo(t,i),i}function Bt(t){var i=s();return t<0?this.lShiftTo(-t,i):this.rShiftTo(t,i),i}function xt(t){if(0==t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function Dt(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+xt(this[t]);return this.s<0?this.t*this.DB:-1}function St(t){var i=0;while(0!=t)t&=t-1,++i;return i}function It(){for(var t=0,i=this.s&this.DM,e=0;e<this.t;++e)t+=St(this[e]^i);return t}function qt(t){var i=Math.floor(t/this.DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this.DB)}function Et(t,i){var e=n.ONE.shiftLeft(t);return this.bitwiseTo(e,i,e),e}function At(t){return this.changeBit(t,gt)}function Rt(t){return this.changeBit(t,Tt)}function Mt(t){return this.changeBit(t,dt)}function Pt(t,i){var e=0,r=0,n=Math.min(t.t,this.t);while(e<n)r+=this[e]+t[e],i[e++]=r&this.DM,r>>=this.DB;if(t.t<this.t){r+=t.s;while(e<this.t)r+=this[e],i[e++]=r&this.DM,r>>=this.DB;r+=this.s}else{r+=this.s;while(e<t.t)r+=t[e],i[e++]=r&this.DM,r>>=this.DB;r+=t.s}i.s=r<0?-1:0,r>0?i[e++]=r:r<-1&&(i[e++]=this.DV+r),i.t=e,i.clamp()}function Ot(t){var i=s();return this.addTo(t,i),i}function Ct(t){var i=s();return this.subTo(t,i),i}function Vt(t){var i=s();return this.multiplyTo(t,i),i}function Ht(){var t=s();return this.squareTo(t),t}function Nt(t){var i=s();return this.divRemTo(t,i,null),i}function Lt(t){var i=s();return this.divRemTo(t,null,i),i}function zt(t){var i=s(),e=s();return this.divRemTo(t,i,e),new Array(i,e)}function Zt(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function kt(t,i){if(0!=t){while(this.t<=i)this[this.t++]=0;this[i]+=t;while(this[i]>=this.DV)this[i]-=this.DV,++i>=this.t&&(this[this.t++]=0),++this[i]}}function jt(){}function Kt(t){return t}function Xt(t,i,e){t.multiplyTo(i,e)}function Ut(t,i){t.squareTo(i)}function Yt(t){return this.exp(t,new jt)}function Gt(t,i,e){var r,n=Math.min(this.t+t.t,i);e.s=0,e.t=n;while(n>0)e[--n]=0;for(r=e.t-this.t;n<r;++n)e[n+this.t]=this.am(0,t[n],e,n,0,this.t);for(r=Math.min(t.t,i);n<r;++n)this.am(0,t[n],e,n,0,i-n);e.clamp()}function _t(t,i,e){--i;var r=e.t=this.t+t.t-i;e.s=0;while(--r>=0)e[r]=0;for(r=Math.max(i-this.t,0);r<t.t;++r)e[this.t+r-i]=this.am(i-r,t[r],e,0,0,this.t+r-i);e.clamp(),e.drShiftTo(1,e)}function Jt(t){this.r2=s(),this.q3=s(),n.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function Qt(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var i=s();return t.copyTo(i),this.reduce(i),i}function Wt(t){return t}function $t(t){t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(t.compareTo(this.r2)<0)t.dAddOffset(1,this.m.t+1);t.subTo(this.r2,t);while(t.compareTo(this.m)>=0)t.subTo(this.m,t)}function ti(t,i){t.squareTo(i),this.reduce(i)}function ii(t,i,e){t.multiplyTo(i,e),this.reduce(e)}function ei(t,i){var e,r,n=t.bitLength(),o=T(1);if(n<=0)return o;e=n<18?1:n<48?3:n<144?4:n<768?5:6,r=n<8?new H(i):i.isEven()?new Jt(i):new K(i);var h=new Array,u=3,l=e-1,a=(1<<e)-1;if(h[1]=r.convert(this),e>1){var c=s();r.sqrTo(h[1],c);while(u<=a)h[u]=s(),r.mulTo(c,h[u-2],h[u]),u+=2}var f,p,m=t.t-1,g=!0,y=s();n=S(t[m])-1;while(m>=0){n>=l?f=t[m]>>n-l&a:(f=(t[m]&(1<<n+1)-1)<<l-n,m>0&&(f|=t[m-1]>>this.DB+n-l)),u=e;while(0==(1&f))f>>=1,--u;if((n-=u)<0&&(n+=this.DB,--m),g)h[f].copyTo(o),g=!1;else{while(u>1)r.sqrTo(o,y),r.sqrTo(y,o),u-=2;u>0?r.sqrTo(o,y):(p=o,o=y,y=p),r.mulTo(y,h[f],o)}while(m>=0&&0==(t[m]&1<<n))r.sqrTo(o,y),p=o,o=y,y=p,--n<0&&(n=this.DB-1,--m)}return r.revert(o)}function ri(t){var i=this.s<0?this.negate():this.clone(),e=t.s<0?t.negate():t.clone();if(i.compareTo(e)<0){var r=i;i=e,e=r}var n=i.getLowestSetBit(),s=e.getLowestSetBit();if(s<0)return i;n<s&&(s=n),s>0&&(i.rShiftTo(s,i),e.rShiftTo(s,e));while(i.signum()>0)(n=i.getLowestSetBit())>0&&i.rShiftTo(n,i),(n=e.getLowestSetBit())>0&&e.rShiftTo(n,e),i.compareTo(e)>=0?(i.subTo(e,i),i.rShiftTo(1,i)):(e.subTo(i,e),e.rShiftTo(1,e));return s>0&&e.lShiftTo(s,e),e}function ni(t){if(t<=0)return 0;var i=this.DV%t,e=this.s<0?t-1:0;if(this.t>0)if(0==i)e=this[0]%t;else for(var r=this.t-1;r>=0;--r)e=(i*e+this[r])%t;return e}function si(t){var i=t.isEven();if(this.isEven()&&i||0==t.signum())return n.ZERO;var e=t.clone(),r=this.clone(),s=T(1),o=T(0),h=T(0),u=T(1);while(0!=e.signum()){while(e.isEven())e.rShiftTo(1,e),i?(s.isEven()&&o.isEven()||(s.addTo(this,s),o.subTo(t,o)),s.rShiftTo(1,s)):o.isEven()||o.subTo(t,o),o.rShiftTo(1,o);while(r.isEven())r.rShiftTo(1,r),i?(h.isEven()&&u.isEven()||(h.addTo(this,h),u.subTo(t,u)),h.rShiftTo(1,h)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);e.compareTo(r)>=0?(e.subTo(r,e),i&&s.subTo(h,s),o.subTo(u,o)):(r.subTo(e,r),i&&h.subTo(s,h),u.subTo(o,u))}return 0!=r.compareTo(n.ONE)?n.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u}H.prototype.convert=N,H.prototype.revert=L,H.prototype.reduce=z,H.prototype.mulTo=Z,H.prototype.sqrTo=k,K.prototype.convert=X,K.prototype.revert=U,K.prototype.reduce=Y,K.prototype.mulTo=_,K.prototype.sqrTo=G,n.prototype.copyTo=d,n.prototype.fromInt=v,n.prototype.fromString=F,n.prototype.clamp=w,n.prototype.dlShiftTo=q,n.prototype.drShiftTo=E,n.prototype.lShiftTo=A,n.prototype.rShiftTo=R,n.prototype.subTo=M,n.prototype.multiplyTo=P,n.prototype.squareTo=O,n.prototype.divRemTo=C,n.prototype.invDigit=j,n.prototype.isEven=J,n.prototype.exp=Q,n.prototype.toString=b,n.prototype.negate=B,n.prototype.abs=x,n.prototype.compareTo=D,n.prototype.bitLength=I,n.prototype.mod=V,n.prototype.modPowInt=W,n.ZERO=T(0),n.ONE=T(1),jt.prototype.convert=Kt,jt.prototype.revert=Kt,jt.prototype.mulTo=Xt,jt.prototype.sqrTo=Ut,Jt.prototype.convert=Qt,Jt.prototype.revert=Wt,Jt.prototype.reduce=$t,Jt.prototype.mulTo=ii,Jt.prototype.sqrTo=ti;var oi,hi,ui,li=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],ai=(1<<26)/li[li.length-1];function ci(t){var i,e=this.abs();if(1==e.t&&e[0]<=li[li.length-1]){for(i=0;i<li.length;++i)if(e[0]==li[i])return!0;return!1}if(e.isEven())return!1;i=1;while(i<li.length){var r=li[i],n=i+1;while(n<li.length&&r<ai)r*=li[n++];r=e.modInt(r);while(i<n)if(r%li[i++]==0)return!1}return e.millerRabin(t)}function fi(t){var i=this.subtract(n.ONE),e=i.getLowestSetBit();if(e<=0)return!1;var r=i.shiftRight(e);t=t+1>>1,t>li.length&&(t=li.length);for(var o=s(),h=0;h<t;++h){o.fromInt(li[Math.floor(Math.random()*li.length)]);var u=o.modPow(r,this);if(0!=u.compareTo(n.ONE)&&0!=u.compareTo(i)){var l=1;while(l++<e&&0!=u.compareTo(i))if(u=u.modPowInt(2,this),0==u.compareTo(n.ONE))return!1;if(0!=u.compareTo(i))return!1}}return!0}function pi(t){hi[ui++]^=255&t,hi[ui++]^=t>>8&255,hi[ui++]^=t>>16&255,hi[ui++]^=t>>24&255,ui>=Di&&(ui-=Di)}function mi(){pi((new Date).getTime())}if(n.prototype.chunkSize=rt,n.prototype.toRadix=st,n.prototype.fromRadix=ot,n.prototype.fromNumber=ht,n.prototype.bitwiseTo=ft,n.prototype.changeBit=Et,n.prototype.addTo=Pt,n.prototype.dMultiply=Zt,n.prototype.dAddOffset=kt,n.prototype.multiplyLowerTo=Gt,n.prototype.multiplyUpperTo=_t,n.prototype.modInt=ni,n.prototype.millerRabin=fi,n.prototype.clone=$,n.prototype.intValue=tt,n.prototype.byteValue=it,n.prototype.shortValue=et,n.prototype.signum=nt,n.prototype.toByteArray=ut,n.prototype.equals=lt,n.prototype.min=at,n.prototype.max=ct,n.prototype.and=mt,n.prototype.or=yt,n.prototype.xor=vt,n.prototype.andNot=Ft,n.prototype.not=wt,n.prototype.shiftLeft=bt,n.prototype.shiftRight=Bt,n.prototype.getLowestSetBit=Dt,n.prototype.bitCount=It,n.prototype.testBit=qt,n.prototype.setBit=At,n.prototype.clearBit=Rt,n.prototype.flipBit=Mt,n.prototype.add=Ot,n.prototype.subtract=Ct,n.prototype.multiply=Vt,n.prototype.divide=Nt,n.prototype.remainder=Lt,n.prototype.divideAndRemainder=zt,n.prototype.modPow=ei,n.prototype.modInverse=si,n.prototype.pow=Yt,n.prototype.gcd=ri,n.prototype.isProbablePrime=ci,n.prototype.square=Ht,n.prototype.Barrett=Jt,null==hi){var gi;if(hi=new Array,ui=0,"undefined"!==typeof window&&window.crypto)if(window.crypto.getRandomValues){var yi=new Uint8Array(32);for(window.crypto.getRandomValues(yi),gi=0;gi<32;++gi)hi[ui++]=yi[gi]}else if("Netscape"==navigator.appName&&navigator.appVersion<"5"){var di=window.crypto.random(32);for(gi=0;gi<di.length;++gi)hi[ui++]=255&di.charCodeAt(gi)}while(ui<Di)gi=Math.floor(65536*Math.random()),hi[ui++]=gi>>>8,hi[ui++]=255&gi;ui=0,mi()}function vi(){if(null==oi){for(mi(),oi=xi(),oi.init(hi),ui=0;ui<hi.length;++ui)hi[ui]=0;ui=0}return oi.next()}function Ti(t){var i;for(i=0;i<t.length;++i)t[i]=vi()}function Fi(){}function wi(){this.i=0,this.j=0,this.S=new Array}function bi(t){var i,e,r;for(i=0;i<256;++i)this.S[i]=i;for(e=0,i=0;i<256;++i)e=e+this.S[i]+t[i%t.length]&255,r=this.S[i],this.S[i]=this.S[e],this.S[e]=r;this.i=0,this.j=0}function Bi(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function xi(){return new wi}Fi.prototype.nextBytes=Ti,wi.prototype.init=bi,wi.prototype.next=Bi;var Di=256;t.exports={default:n,BigInteger:n,SecureRandom:Fi}}).call(this)},52664:function(t,i,e){t.exports={sm2:e(25251),sm3:e(4748),sm4:e(24810)}},38563:function(t,i,e){const{BigInteger:r}=e(36077);function n(t){let i=t.toString(16);if("-"!==i[0])i.length%2===1?i="0"+i:i.match(/^[0-7]/)||(i="00"+i);else{i=i.substr(1);let e=i.length;e%2===1?e+=1:i.match(/^[0-7]/)||(e+=2);let n="";for(let t=0;t<e;t++)n+="f";n=new r(n,16),i=n.xor(t).add(r.ONE),i=i.toString(16).replace(/^-/,"")}return i}class s{constructor(){this.tlv=null,this.t="00",this.l="00",this.v=""}getEncodedHex(){return this.tlv||(this.v=this.getValue(),this.l=this.getLength(),this.tlv=this.t+this.l+this.v),this.tlv}getLength(){const t=this.v.length/2;let i=t.toString(16);if(i.length%2===1&&(i="0"+i),t<128)return i;{const t=128+i.length/2;return t.toString(16)+i}}getValue(){return""}}class o extends s{constructor(t){super(),this.t="02",t&&(this.v=n(t))}getValue(){return this.v}}class h extends s{constructor(t){super(),this.t="30",this.asn1Array=t}getValue(){return this.v=this.asn1Array.map((t=>t.getEncodedHex())).join(""),this.v}}function u(t,i){return+t[i+2]<8?1:128&+t.substr(i+2,2)}function l(t,i){const e=u(t,i),n=t.substr(i+2,2*e);if(!n)return-1;const s=+n[0]<8?new r(n,16):new r(n.substr(2),16);return s.intValue()}function a(t,i){const e=u(t,i);return i+2*(e+1)}t.exports={encodeDer(t,i){const e=new o(t),r=new o(i),n=new h([e,r]);return n.getEncodedHex()},decodeDer(t){const i=a(t,0),e=a(t,i),n=l(t,i),s=t.substr(e,2*n),o=e+s.length,h=a(t,o),u=l(t,o),c=t.substr(h,2*u),f=new r(s,16),p=new r(c,16);return{r:f,s:p}}}},84013:function(t,i,e){const{BigInteger:r}=e(36077),n=new r("3");class s{constructor(t,i){this.x=i,this.q=t}equals(t){return t===this||this.q.equals(t.q)&&this.x.equals(t.x)}toBigInteger(){return this.x}negate(){return new s(this.q,this.x.negate().mod(this.q))}add(t){return new s(this.q,this.x.add(t.toBigInteger()).mod(this.q))}subtract(t){return new s(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}multiply(t){return new s(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}divide(t){return new s(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}square(){return new s(this.q,this.x.square().mod(this.q))}}class o{constructor(t,i,e,n){this.curve=t,this.x=i,this.y=e,this.z=null==n?r.ONE:n,this.zinv=null}getX(){return null===this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}getY(){return null===this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}equals(t){if(t===this)return!0;if(this.isInfinity())return t.isInfinity();if(t.isInfinity())return this.isInfinity();const i=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q);if(!i.equals(r.ZERO))return!1;const e=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);return e.equals(r.ZERO)}isInfinity(){return null===this.x&&null===this.y||this.z.equals(r.ZERO)&&!this.y.toBigInteger().equals(r.ZERO)}negate(){return new o(this.curve,this.x,this.y.negate(),this.z)}add(t){if(this.isInfinity())return t;if(t.isInfinity())return this;const i=this.x.toBigInteger(),e=this.y.toBigInteger(),n=this.z,s=t.x.toBigInteger(),h=t.y.toBigInteger(),u=t.z,l=this.curve.q,a=i.multiply(u).mod(l),c=s.multiply(n).mod(l),f=a.subtract(c),p=e.multiply(u).mod(l),m=h.multiply(n).mod(l),g=p.subtract(m);if(r.ZERO.equals(f))return r.ZERO.equals(g)?this.twice():this.curve.infinity;const y=a.add(c),d=n.multiply(u).mod(l),v=f.square().mod(l),T=f.multiply(v).mod(l),F=d.multiply(g.square()).subtract(y.multiply(v)).mod(l),w=f.multiply(F).mod(l),b=g.multiply(v.multiply(a).subtract(F)).subtract(p.multiply(T)).mod(l),B=T.multiply(d).mod(l);return new o(this.curve,this.curve.fromBigInteger(w),this.curve.fromBigInteger(b),B)}twice(){if(this.isInfinity())return this;if(!this.y.toBigInteger().signum())return this.curve.infinity;const t=this.x.toBigInteger(),i=this.y.toBigInteger(),e=this.z,r=this.curve.q,s=this.curve.a.toBigInteger(),h=t.square().multiply(n).add(s.multiply(e.square())).mod(r),u=i.shiftLeft(1).multiply(e).mod(r),l=i.square().mod(r),a=l.multiply(t).multiply(e).mod(r),c=u.square().mod(r),f=h.square().subtract(a.shiftLeft(3)).mod(r),p=u.multiply(f).mod(r),m=h.multiply(a.shiftLeft(2).subtract(f)).subtract(c.shiftLeft(1).multiply(l)).mod(r),g=u.multiply(c).mod(r);return new o(this.curve,this.curve.fromBigInteger(p),this.curve.fromBigInteger(m),g)}multiply(t){if(this.isInfinity())return this;if(!t.signum())return this.curve.infinity;const i=t.multiply(n),e=this.negate();let r=this;for(let n=i.bitLength()-2;n>0;n--){r=r.twice();const s=i.testBit(n),o=t.testBit(n);s!==o&&(r=r.add(s?this:e))}return r}}class h{constructor(t,i,e){this.q=t,this.a=this.fromBigInteger(i),this.b=this.fromBigInteger(e),this.infinity=new o(this,null,null)}equals(t){return t===this||this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}fromBigInteger(t){return new s(this.q,t)}decodePointHex(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:const i=(t.length-2)/2,e=t.substr(2,i),n=t.substr(i+2,i);return new o(this,this.fromBigInteger(new r(e,16)),this.fromBigInteger(new r(n,16)));default:return null}}}t.exports={ECPointFp:o,ECCurveFp:h}},25251:function(t,i,e){const{BigInteger:r}=e(36077),{encodeDer:n,decodeDer:s}=e(38563),o=e(8694),h=e(37570),{G:u,curve:l,n:a}=o.generateEcparam(),c=0;function f(t,i,e=1){t="string"===typeof t?o.hexToArray(o.utf8ToHex(t)):Array.prototype.slice.call(t),i=o.getGlobalCurve().decodePointHex(i);const n=o.generateKeyPairHex(),s=new r(n.privateKey,16);let u=n.publicKey;u.length>128&&(u=u.substr(u.length-128));const l=i.multiply(s),a=o.hexToArray(o.leftPad(l.getX().toBigInteger().toRadix(16),64)),f=o.hexToArray(o.leftPad(l.getY().toBigInteger().toRadix(16),64)),p=o.arrayToHex(h([].concat(a,t,f)));let m=1,g=0,y=[];const d=[].concat(a,f),v=()=>{y=h([...d,m>>24&255,m>>16&255,m>>8&255,255&m]),m++,g=0};v();for(let r=0,o=t.length;r<o;r++)g===y.length&&v(),t[r]^=255&y[g++];const T=o.arrayToHex(t);return e===c?u+T+p:u+p+T}function p(t,i,e=1,{output:n="string"}={}){i=new r(i,16);let s=t.substr(128,64),u=t.substr(192);e===c&&(s=t.substr(t.length-64),u=t.substr(128,t.length-128-64));const l=o.hexToArray(u),a=o.getGlobalCurve().decodePointHex("04"+t.substr(0,128)),f=a.multiply(i),p=o.hexToArray(o.leftPad(f.getX().toBigInteger().toRadix(16),64)),m=o.hexToArray(o.leftPad(f.getY().toBigInteger().toRadix(16),64));let g=1,y=0,d=[];const v=[].concat(p,m),T=()=>{d=h([...v,g>>24&255,g>>16&255,g>>8&255,255&g]),g++,y=0};T();for(let r=0,o=l.length;r<o;r++)y===d.length&&T(),l[r]^=255&d[y++];const F=o.arrayToHex(h([].concat(p,l,m)));return F===s?"array"===n?l:o.arrayToUtf8(l):"array"===n?[]:""}function m(t,i,{pointPool:e,der:s,hash:h,publicKey:u,userId:l}={}){let c="string"===typeof t?o.utf8ToHex(t):o.arrayToHex(t);h&&(u=u||d(i),c=y(c,u,l));const f=new r(i,16),p=new r(c,16);let m=null,g=null,T=null;do{do{let t;t=e&&e.length?e.pop():v(),m=t.k,g=p.add(t.x1).mod(a)}while(g.equals(r.ZERO)||g.add(m).equals(a));T=f.add(r.ONE).modInverse(a).multiply(m.subtract(g.multiply(f))).mod(a)}while(T.equals(r.ZERO));return s?n(g,T):o.leftPad(g.toString(16),64)+o.leftPad(T.toString(16),64)}function g(t,i,e,{der:n,hash:h,userId:c}={}){let f,p,m="string"===typeof t?o.utf8ToHex(t):o.arrayToHex(t);if(h&&(m=y(m,e,c)),n){const t=s(i);f=t.r,p=t.s}else f=new r(i.substring(0,64),16),p=new r(i.substring(64),16);const g=l.decodePointHex(e),d=new r(m,16),v=f.add(p).mod(a);if(v.equals(r.ZERO))return!1;const T=u.multiply(p).add(g.multiply(v)),F=d.add(T.getX().toBigInteger()).mod(a);return f.equals(F)}function y(t,i,e="1234567812345678"){e=o.utf8ToHex(e);const r=o.leftPad(u.curve.a.toBigInteger().toRadix(16),64),n=o.leftPad(u.curve.b.toBigInteger().toRadix(16),64),s=o.leftPad(u.getX().toBigInteger().toRadix(16),64),l=o.leftPad(u.getY().toBigInteger().toRadix(16),64);i.length>128&&(i=i.substr(2,128));const a=i.substr(0,64),c=i.substr(64,64),f=o.hexToArray(e+r+n+s+l+a+c),p=4*e.length;f.unshift(255&p),f.unshift(p>>8&255);const m=h(f);return o.arrayToHex(h(m.concat(o.hexToArray(t))))}function d(t){const i=u.multiply(new r(t,16)),e=o.leftPad(i.getX().toBigInteger().toString(16),64),n=o.leftPad(i.getY().toBigInteger().toString(16),64);return"04"+e+n}function v(){const t=o.generateKeyPairHex(),i=l.decodePointHex(t.publicKey);return t.k=new r(t.privateKey,16),t.x1=i.getX().toBigInteger(),t}t.exports={generateKeyPairHex:o.generateKeyPairHex,doEncrypt:f,doDecrypt:p,doSignature:m,doVerifySignature:g,getPoint:v,verifyPublicKey:o.verifyPublicKey}},37570:function(t){function i(t,i){const e=[],r=~~(i/8),n=i%8;for(let s=0,o=t.length;s<o;s++)e[s]=(t[(s+r)%o]<<n&255)+(t[(s+r+1)%o]>>>8-n&255);return e}function e(t,i){const e=[];for(let r=t.length-1;r>=0;r--)e[r]=255&(t[r]^i[r]);return e}function r(t,i){const e=[];for(let r=t.length-1;r>=0;r--)e[r]=t[r]&i[r]&255;return e}function n(t,i){const e=[];for(let r=t.length-1;r>=0;r--)e[r]=255&(t[r]|i[r]);return e}function s(t,i){const e=[];let r=0;for(let n=t.length-1;n>=0;n--){const s=t[n]+i[n]+r;s>255?(r=1,e[n]=255&s):(r=0,e[n]=255&s)}return e}function o(t){const i=[];for(let e=t.length-1;e>=0;e--)i[e]=255&~t[e];return i}function h(t){return e(e(t,i(t,9)),i(t,17))}function u(t){return e(e(t,i(t,15)),i(t,23))}function l(t,i,s,o){return o>=0&&o<=15?e(e(t,i),s):n(n(r(t,i),r(t,s)),r(i,s))}function a(t,i,s,h){return h>=0&&h<=15?e(e(t,i),s):n(r(t,i),r(o(t),s))}function c(t,r){const n=[],o=[];for(let i=0;i<16;i++){const t=4*i;n.push(r.slice(t,t+4))}for(let s=16;s<68;s++)n.push(e(e(u(e(e(n[s-16],n[s-9]),i(n[s-3],15))),i(n[s-13],7)),n[s-6]));for(let i=0;i<64;i++)o.push(e(n[i],n[i+4]));const c=[121,204,69,25],f=[122,135,157,138];let p,m,g,y,d=t.slice(0,4),v=t.slice(4,8),T=t.slice(8,12),F=t.slice(12,16),w=t.slice(16,20),b=t.slice(20,24),B=t.slice(24,28),x=t.slice(28,32);for(let u=0;u<64;u++){const t=u>=0&&u<=15?c:f;p=i(s(s(i(d,12),w),i(t,u)),7),m=e(p,i(d,12)),g=s(s(s(l(d,v,T,u),F),m),o[u]),y=s(s(s(a(w,b,B,u),x),p),n[u]),F=T,T=i(v,9),v=d,d=g,x=B,B=i(b,19),b=w,w=h(y)}return e([].concat(d,v,T,F,w,b,B,x),t)}t.exports=function(t){let i=8*t.length,e=i%512;e=e>=448?512-e%448-1:448-e-1;const r=new Array((e-7)/8);for(let u=0,l=r.length;u<l;u++)r[u]=0;const n=[];i=i.toString(2);for(let u=7;u>=0;u--)if(i.length>8){const t=i.length-8;n[u]=parseInt(i.substr(t),2),i=i.substr(0,t)}else i.length>0?(n[u]=parseInt(i,2),i=""):n[u]=0;const s=[].concat(t,[128],r,n),o=s.length/64;let h=[115,128,22,111,73,20,178,185,23,36,66,215,218,138,6,0,169,111,48,188,22,49,56,170,227,141,238,77,176,251,14,78];for(let u=0;u<o;u++){const t=64*u,i=s.slice(t,t+64);h=c(h,i)}return h}},8694:function(t,i,e){const{BigInteger:r,SecureRandom:n}=e(36077),{ECCurveFp:s}=e(84013),o=new n,{curve:h,G:u,n:l}=c();function a(){return h}function c(){const t=new r("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",16),i=new r("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",16),e=new r("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",16),n=new s(t,i,e),o="32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7",h="BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0",u=n.decodePointHex("04"+o+h),l=new r("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",16);return{curve:n,G:u,n:l}}function f(t,i,e){const n=t?new r(t,i,e):new r(l.bitLength(),o),s=n.mod(l.subtract(r.ONE)).add(r.ONE),h=m(s.toString(16),64),a=u.multiply(s),c=m(a.getX().toBigInteger().toString(16),64),f=m(a.getY().toBigInteger().toString(16),64),p="04"+c+f;return{privateKey:h,publicKey:p}}function p(t){t=unescape(encodeURIComponent(t));const i=t.length,e=[];for(let n=0;n<i;n++)e[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;const r=[];for(let n=0;n<i;n++){const t=e[n>>>2]>>>24-n%4*8&255;r.push((t>>>4).toString(16)),r.push((15&t).toString(16))}return r.join("")}function m(t,i){return t.length>=i?t:new Array(i-t.length+1).join("0")+t}function g(t){return t.map((t=>(t=t.toString(16),1===t.length?"0"+t:t))).join("")}function y(t){const i=[];let e=0;for(let n=0;n<2*t.length;n+=2)i[n>>>3]|=parseInt(t[e],10)<<24-n%8*4,e++;try{const e=[];for(let r=0;r<t.length;r++){const t=i[r>>>2]>>>24-r%4*8&255;e.push(String.fromCharCode(t))}return decodeURIComponent(escape(e.join("")))}catch(r){throw new Error("Malformed UTF-8 data")}}function d(t){const i=[];let e=t.length;e%2!==0&&(t=m(t,e+1)),e=t.length;for(let r=0;r<e;r+=2)i.push(parseInt(t.substr(r,2),16));return i}function v(t){const i=h.decodePointHex(t);if(!i)return!1;const e=i.getX(),r=i.getY();return r.square().equals(e.multiply(e.square()).add(e.multiply(h.a)).add(h.b))}t.exports={getGlobalCurve:a,generateEcparam:c,generateKeyPairHex:f,utf8ToHex:p,leftPad:m,arrayToHex:g,arrayToUtf8:y,hexToArray:d,verifyPublicKey:v}},4748:function(t,i,e){const r=e(37570);function n(t){return t.map((t=>(t=t.toString(16),1===t.length?"0"+t:t))).join("")}function s(t){const i=[];for(let e=0,r=t.length;e<r;e++){const r=t.codePointAt(e);if(r<=127)i.push(r);else if(r<=2047)i.push(192|r>>>6),i.push(128|63&r);else if(r<=55295||r>=57344&&r<=65535)i.push(224|r>>>12),i.push(128|r>>>6&63),i.push(128|63&r);else{if(!(r>=65536&&r<=1114111))throw i.push(r),new Error("input is not supported");e++,i.push(240|r>>>18&28),i.push(128|r>>>12&63),i.push(128|r>>>6&63),i.push(128|63&r)}}return i}t.exports=function(t){return t="string"===typeof t?s(t):Array.prototype.slice.call(t),n(r(t))}},24810:function(t){const i=0,e=32,r=16,n=[214,144,233,254,204,225,61,183,22,182,20,194,40,251,44,5,43,103,154,118,42,190,4,195,170,68,19,38,73,134,6,153,156,66,80,244,145,239,152,122,51,84,11,67,237,207,172,98,228,179,28,169,201,8,232,149,128,223,148,250,117,143,63,166,71,7,167,252,243,115,23,186,131,89,60,25,230,133,79,168,104,107,129,178,113,100,218,139,248,235,15,75,112,86,157,53,30,36,14,94,99,88,209,162,37,34,124,59,1,33,120,135,212,0,70,87,159,211,39,82,76,54,2,231,160,196,200,158,234,191,138,210,64,199,56,181,163,247,242,206,249,97,21,161,224,174,93,164,155,52,26,85,173,147,50,48,245,140,177,227,29,246,226,46,130,102,202,96,192,41,35,171,13,83,78,111,213,219,55,69,222,253,142,47,3,255,106,114,109,108,91,81,141,27,175,146,187,221,188,127,17,217,92,65,31,16,90,216,10,193,49,136,165,205,123,189,45,116,208,18,184,229,180,176,137,105,151,74,12,150,119,126,101,185,241,9,197,110,198,132,24,240,125,236,58,220,77,32,121,238,95,62,215,203,57,72],s=[462357,472066609,943670861,1415275113,1886879365,2358483617,2830087869,3301692121,3773296373,4228057617,404694573,876298825,1347903077,1819507329,2291111581,2762715833,3234320085,3705924337,4177462797,337322537,808926789,1280531041,1752135293,2223739545,2695343797,3166948049,3638552301,4110090761,269950501,741554753,1213159005,1684763257];function o(t){const i=[];for(let e=0,r=t.length;e<r;e+=2)i.push(parseInt(t.substr(e,2),16));return i}function h(t){return t.map((t=>(t=t.toString(16),1===t.length?"0"+t:t))).join("")}function u(t){const i=[];for(let e=0,r=t.length;e<r;e++){const r=t.codePointAt(e);if(r<=127)i.push(r);else if(r<=2047)i.push(192|r>>>6),i.push(128|63&r);else if(r<=55295||r>=57344&&r<=65535)i.push(224|r>>>12),i.push(128|r>>>6&63),i.push(128|63&r);else{if(!(r>=65536&&r<=1114111))throw i.push(r),new Error("input is not supported");e++,i.push(240|r>>>18&28),i.push(128|r>>>12&63),i.push(128|r>>>6&63),i.push(128|63&r)}}return i}function l(t){const i=[];for(let e=0,r=t.length;e<r;e++)t[e]>=240&&t[e]<=247?(i.push(String.fromCodePoint(((7&t[e])<<18)+((63&t[e+1])<<12)+((63&t[e+2])<<6)+(63&t[e+3]))),e+=3):t[e]>=224&&t[e]<=239?(i.push(String.fromCodePoint(((15&t[e])<<12)+((63&t[e+1])<<6)+(63&t[e+2]))),e+=2):t[e]>=192&&t[e]<=223?(i.push(String.fromCodePoint(((31&t[e])<<6)+(63&t[e+1]))),e++):i.push(String.fromCodePoint(t[e]));return i.join("")}function a(t,i){return t<<i|t>>>32-i}function c(t){return(255&n[t>>>24&255])<<24|(255&n[t>>>16&255])<<16|(255&n[t>>>8&255])<<8|255&n[255&t]}function f(t){return t^a(t,2)^a(t,10)^a(t,18)^a(t,24)}function p(t){return t^a(t,13)^a(t,23)}function m(t,i,e){const r=new Array(4),n=new Array(4);for(let s=0;s<4;s++)n[0]=255&t[4*s],n[1]=255&t[4*s+1],n[2]=255&t[4*s+2],n[3]=255&t[4*s+3],r[s]=n[0]<<24|n[1]<<16|n[2]<<8|n[3];for(let s,o=0;o<32;o+=4)s=r[1]^r[2]^r[3]^e[o+0],r[0]^=f(c(s)),s=r[2]^r[3]^r[0]^e[o+1],r[1]^=f(c(s)),s=r[3]^r[0]^r[1]^e[o+2],r[2]^=f(c(s)),s=r[0]^r[1]^r[2]^e[o+3],r[3]^=f(c(s));for(let s=0;s<16;s+=4)i[s]=r[3-s/4]>>>24&255,i[s+1]=r[3-s/4]>>>16&255,i[s+2]=r[3-s/4]>>>8&255,i[s+3]=255&r[3-s/4]}function g(t,e,r){const n=new Array(4),o=new Array(4);for(let i=0;i<4;i++)o[0]=255&t[0+4*i],o[1]=255&t[1+4*i],o[2]=255&t[2+4*i],o[3]=255&t[3+4*i],n[i]=o[0]<<24|o[1]<<16|o[2]<<8|o[3];n[0]^=2746333894,n[1]^=1453994832,n[2]^=1736282519,n[3]^=2993693404;for(let i,h=0;h<32;h+=4)i=n[1]^n[2]^n[3]^s[h+0],e[h+0]=n[0]^=p(c(i)),i=n[2]^n[3]^n[0]^s[h+1],e[h+1]=n[1]^=p(c(i)),i=n[3]^n[0]^n[1]^s[h+2],e[h+2]=n[2]^=p(c(i)),i=n[0]^n[1]^n[2]^s[h+3],e[h+3]=n[3]^=p(c(i));if(r===i)for(let i,s=0;s<16;s++)i=e[s],e[s]=e[31-s],e[31-s]=i}function y(t,n,s,{padding:a="pkcs#7",mode:c,iv:f=[],output:p="string"}={}){if("cbc"===c&&("string"===typeof f&&(f=o(f)),16!==f.length))throw new Error("iv is invalid");if("string"===typeof n&&(n=o(n)),16!==n.length)throw new Error("key is invalid");if(t="string"===typeof t?s!==i?u(t):o(t):[...t],("pkcs#5"===a||"pkcs#7"===a)&&s!==i){const i=r-t.length%r;for(let e=0;e<i;e++)t.push(i)}const y=new Array(e);g(n,y,s);const d=[];let v=f,T=t.length,F=0;while(T>=r){const e=t.slice(F,F+16),n=new Array(16);if("cbc"===c)for(let t=0;t<r;t++)s!==i&&(e[t]^=v[t]);m(e,n,y);for(let t=0;t<r;t++)"cbc"===c&&s===i&&(n[t]^=v[t]),d[F+t]=n[t];"cbc"===c&&(v=s!==i?n:e),T-=r,F+=r}if(("pkcs#5"===a||"pkcs#7"===a)&&s===i){const t=d[d.length-1];d.splice(d.length-t,t)}return"array"!==p?s!==i?h(d):l(d):d}t.exports={encrypt(t,i,e){return y(t,i,1,e)},decrypt(t,i,e){return y(t,i,0,e)}}}}]);