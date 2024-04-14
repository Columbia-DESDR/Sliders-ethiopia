import{S as nn,i as rn,s as tn,K as de,g as j,k as W,l as P,m as q,d as O,q as U,r as L,a as Ue,v as E,L as fe,M as he,N as pe,t as ge,b as ve,U as Re,P as Ln,Q as Nn,n as Oe,R as Mi,V as ji,T as cn,c as yn,W as Pi,X as qi,f as Bi,o as $i}from"./index.b89b4bd1.js";import{_ as Hi,c as pi,M as zi,O as Vi,Q as Ri,d as Yi,e as Ce,g as pn,f as Wi,h as Ui,j as we,l as Gi,B as Ki,b as Fn}from"./index.11b70695.js";import{d as Qi,i as Zi,e as Xi,m as Ji,p as er,w as nr,g as ir,n as rr,h as tr,j as or,k as ar,l as lr,o as sr,q as cr,r as Mn,s as jn,t as ur,A as dr,B as fr,b as hr,D as pr,a as gr,L as vr,c as mr,S as _r,u as yr,v as br,x as wr,y as xr,z as kr,E as Er,F as bn,M as Ar,f as Sr,C as Cr}from"./http_client.31b4d3d8.js";import{H as Ir,S as Dr}from"./Header.736fa60d.js";import{w as Tr}from"./paths.f80634dc.js";import{m as Pn}from"./model_out.448f9c31.js";const Or={"@@functional/placeholder":!0};var Lr=Hi(function(n){return Qi(n.length,n)});const qn=Lr;var Nr=pi(function(n,i){for(var r={},t={},a=0,o=n.length;a<o;)t[n[a]]=1,a+=1;for(var l in i)t.hasOwnProperty(l)||(r[l]=i[l]);return r});const Bn=Nr;var Fr=pi(function(n,i){for(var r=[],t=0,a=Math.min(n.length,i.length);t<a;)r[t]=[n[t],i[t]],t+=1;return r});const Mr=Fr,jr=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function gi(e){return typeof e>"u"||e===null}function Pr(e){return typeof e=="object"&&e!==null}function qr(e){return Array.isArray(e)?e:gi(e)?[]:[e]}function Br(e,n){var i,r,t,a;if(n)for(a=Object.keys(n),i=0,r=a.length;i<r;i+=1)t=a[i],e[t]=n[t];return e}function $r(e,n){var i="",r;for(r=0;r<n;r+=1)i+=e;return i}function Hr(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var zr=gi,Vr=Pr,Rr=qr,Yr=$r,Wr=Hr,Ur=Br,me={isNothing:zr,isObject:Vr,toArray:Rr,repeat:Yr,isNegativeZero:Wr,extend:Ur};function vi(e,n){var i="",r=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(i+=`

`+e.mark.snippet),r+" "+i):r}function en(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=vi(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}en.prototype=Object.create(Error.prototype);en.prototype.constructor=en;en.prototype.toString=function(n){return this.name+": "+vi(this,n)};var Te=en;function gn(e,n,i,r,t){var a="",o="",l=Math.floor(t/2)-1;return r-n>l&&(a=" ... ",n=r-l+a.length),i-r>l&&(o=" ...",i=r+l-o.length),{str:a+e.slice(n,i).replace(/\t/g,"→")+o,pos:r-n+a.length}}function vn(e,n){return me.repeat(" ",n-e.length)+e}function Gr(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var i=/\r?\n|\r|\0/g,r=[0],t=[],a,o=-1;a=i.exec(e.buffer);)t.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&o<0&&(o=r.length-2);o<0&&(o=r.length-1);var l="",c,s,f=Math.min(e.line+n.linesAfter,t.length).toString().length,h=n.maxLength-(n.indent+f+3);for(c=1;c<=n.linesBefore&&!(o-c<0);c++)s=gn(e.buffer,r[o-c],t[o-c],e.position-(r[o]-r[o-c]),h),l=me.repeat(" ",n.indent)+vn((e.line-c+1).toString(),f)+" | "+s.str+`
`+l;for(s=gn(e.buffer,r[o],t[o],e.position,h),l+=me.repeat(" ",n.indent)+vn((e.line+1).toString(),f)+" | "+s.str+`
`,l+=me.repeat("-",n.indent+f+3+s.pos)+`^
`,c=1;c<=n.linesAfter&&!(o+c>=t.length);c++)s=gn(e.buffer,r[o+c],t[o+c],e.position-(r[o]-r[o+c]),h),l+=me.repeat(" ",n.indent)+vn((e.line+c+1).toString(),f)+" | "+s.str+`
`;return l.replace(/\n$/,"")}var Kr=Gr,Qr=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Zr=["scalar","sequence","mapping"];function Xr(e){var n={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(r){n[String(r)]=i})}),n}function Jr(e,n){if(n=n||{},Object.keys(n).forEach(function(i){if(Qr.indexOf(i)===-1)throw new Te('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(i){return i},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Xr(n.styleAliases||null),Zr.indexOf(this.kind)===-1)throw new Te('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var le=Jr;function $n(e,n){var i=[];return e[n].forEach(function(r){var t=i.length;i.forEach(function(a,o){a.tag===r.tag&&a.kind===r.kind&&a.multi===r.multi&&(t=o)}),i[t]=r}),i}function et(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,i;function r(t){t.multi?(e.multi[t.kind].push(t),e.multi.fallback.push(t)):e[t.kind][t.tag]=e.fallback[t.tag]=t}for(n=0,i=arguments.length;n<i;n+=1)arguments[n].forEach(r);return e}function wn(e){return this.extend(e)}wn.prototype.extend=function(n){var i=[],r=[];if(n instanceof le)r.push(n);else if(Array.isArray(n))r=r.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(i=i.concat(n.implicit)),n.explicit&&(r=r.concat(n.explicit));else throw new Te("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(a){if(!(a instanceof le))throw new Te("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Te("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Te("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(a){if(!(a instanceof le))throw new Te("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var t=Object.create(wn.prototype);return t.implicit=(this.implicit||[]).concat(i),t.explicit=(this.explicit||[]).concat(r),t.compiledImplicit=$n(t,"implicit"),t.compiledExplicit=$n(t,"explicit"),t.compiledTypeMap=et(t.compiledImplicit,t.compiledExplicit),t};var nt=wn,it=new le("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),rt=new le("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),tt=new le("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),ot=new nt({explicit:[it,rt,tt]});function at(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function lt(){return null}function st(e){return e===null}var ct=new le("tag:yaml.org,2002:null",{kind:"scalar",resolve:at,construct:lt,predicate:st,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function ut(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function dt(e){return e==="true"||e==="True"||e==="TRUE"}function ft(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ht=new le("tag:yaml.org,2002:bool",{kind:"scalar",resolve:ut,construct:dt,predicate:ft,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function pt(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function gt(e){return 48<=e&&e<=55}function vt(e){return 48<=e&&e<=57}function mt(e){if(e===null)return!1;var n=e.length,i=0,r=!1,t;if(!n)return!1;if(t=e[i],(t==="-"||t==="+")&&(t=e[++i]),t==="0"){if(i+1===n)return!0;if(t=e[++i],t==="b"){for(i++;i<n;i++)if(t=e[i],t!=="_"){if(t!=="0"&&t!=="1")return!1;r=!0}return r&&t!=="_"}if(t==="x"){for(i++;i<n;i++)if(t=e[i],t!=="_"){if(!pt(e.charCodeAt(i)))return!1;r=!0}return r&&t!=="_"}if(t==="o"){for(i++;i<n;i++)if(t=e[i],t!=="_"){if(!gt(e.charCodeAt(i)))return!1;r=!0}return r&&t!=="_"}}if(t==="_")return!1;for(;i<n;i++)if(t=e[i],t!=="_"){if(!vt(e.charCodeAt(i)))return!1;r=!0}return!(!r||t==="_")}function _t(e){var n=e,i=1,r;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),r=n[0],(r==="-"||r==="+")&&(r==="-"&&(i=-1),n=n.slice(1),r=n[0]),n==="0")return 0;if(r==="0"){if(n[1]==="b")return i*parseInt(n.slice(2),2);if(n[1]==="x")return i*parseInt(n.slice(2),16);if(n[1]==="o")return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)}function yt(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!me.isNegativeZero(e)}var bt=new le("tag:yaml.org,2002:int",{kind:"scalar",resolve:mt,construct:_t,predicate:yt,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),wt=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function xt(e){return!(e===null||!wt.test(e)||e[e.length-1]==="_")}function kt(e){var n,i;return n=e.replace(/_/g,"").toLowerCase(),i=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:i*parseFloat(n,10)}var Et=/^[-+]?[0-9]+e/;function At(e,n){var i;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(me.isNegativeZero(e))return"-0.0";return i=e.toString(10),Et.test(i)?i.replace("e",".e"):i}function St(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||me.isNegativeZero(e))}var Ct=new le("tag:yaml.org,2002:float",{kind:"scalar",resolve:xt,construct:kt,predicate:St,represent:At,defaultStyle:"lowercase"}),It=ot.extend({implicit:[ct,ht,bt,Ct]}),Dt=It,mi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),_i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Tt(e){return e===null?!1:mi.exec(e)!==null||_i.exec(e)!==null}function Ot(e){var n,i,r,t,a,o,l,c=0,s=null,f,h,k;if(n=mi.exec(e),n===null&&(n=_i.exec(e)),n===null)throw new Error("Date resolve error");if(i=+n[1],r=+n[2]-1,t=+n[3],!n[4])return new Date(Date.UTC(i,r,t));if(a=+n[4],o=+n[5],l=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(f=+n[10],h=+(n[11]||0),s=(f*60+h)*6e4,n[9]==="-"&&(s=-s)),k=new Date(Date.UTC(i,r,t,a,o,l,c)),s&&k.setTime(k.getTime()-s),k}function Lt(e){return e.toISOString()}var Nt=new le("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Tt,construct:Ot,instanceOf:Date,represent:Lt});function Ft(e){return e==="<<"||e===null}var Mt=new le("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Ft}),xn=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function jt(e){if(e===null)return!1;var n,i,r=0,t=e.length,a=xn;for(i=0;i<t;i++)if(n=a.indexOf(e.charAt(i)),!(n>64)){if(n<0)return!1;r+=6}return r%8===0}function Pt(e){var n,i,r=e.replace(/[\r\n=]/g,""),t=r.length,a=xn,o=0,l=[];for(n=0;n<t;n++)n%4===0&&n&&(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)),o=o<<6|a.indexOf(r.charAt(n));return i=t%4*6,i===0?(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)):i===18?(l.push(o>>10&255),l.push(o>>2&255)):i===12&&l.push(o>>4&255),new Uint8Array(l)}function qt(e){var n="",i=0,r,t,a=e.length,o=xn;for(r=0;r<a;r++)r%3===0&&r&&(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]),i=(i<<8)+e[r];return t=a%3,t===0?(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]):t===2?(n+=o[i>>10&63],n+=o[i>>4&63],n+=o[i<<2&63],n+=o[64]):t===1&&(n+=o[i>>2&63],n+=o[i<<4&63],n+=o[64],n+=o[64]),n}function Bt(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var $t=new le("tag:yaml.org,2002:binary",{kind:"scalar",resolve:jt,construct:Pt,predicate:Bt,represent:qt}),Ht=Object.prototype.hasOwnProperty,zt=Object.prototype.toString;function Vt(e){if(e===null)return!0;var n=[],i,r,t,a,o,l=e;for(i=0,r=l.length;i<r;i+=1){if(t=l[i],o=!1,zt.call(t)!=="[object Object]")return!1;for(a in t)if(Ht.call(t,a))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function Rt(e){return e!==null?e:[]}var Yt=new le("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Vt,construct:Rt}),Wt=Object.prototype.toString;function Ut(e){if(e===null)return!0;var n,i,r,t,a,o=e;for(a=new Array(o.length),n=0,i=o.length;n<i;n+=1){if(r=o[n],Wt.call(r)!=="[object Object]"||(t=Object.keys(r),t.length!==1))return!1;a[n]=[t[0],r[t[0]]]}return!0}function Gt(e){if(e===null)return[];var n,i,r,t,a,o=e;for(a=new Array(o.length),n=0,i=o.length;n<i;n+=1)r=o[n],t=Object.keys(r),a[n]=[t[0],r[t[0]]];return a}var Kt=new le("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Ut,construct:Gt}),Qt=Object.prototype.hasOwnProperty;function Zt(e){if(e===null)return!0;var n,i=e;for(n in i)if(Qt.call(i,n)&&i[n]!==null)return!1;return!0}function Xt(e){return e!==null?e:{}}var Jt=new le("tag:yaml.org,2002:set",{kind:"mapping",resolve:Zt,construct:Xt}),eo=Dt.extend({implicit:[Nt,Mt],explicit:[$t,Yt,Kt,Jt]}),Pe=Object.prototype.hasOwnProperty,un=1,yi=2,bi=3,dn=4,mn=1,no=2,Hn=3,io=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ro=/[\x85\u2028\u2029]/,to=/[,\[\]\{\}]/,wi=/^(?:!|!!|![a-z\-]+!)$/i,xi=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function zn(e){return Object.prototype.toString.call(e)}function Ie(e){return e===10||e===13}function Be(e){return e===9||e===32}function ye(e){return e===9||e===32||e===10||e===13}function Ye(e){return e===44||e===91||e===93||e===123||e===125}function oo(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function ao(e){return e===120?2:e===117?4:e===85?8:0}function lo(e){return 48<=e&&e<=57?e-48:-1}function Vn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function so(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var ki=new Array(256),Ei=new Array(256);for(var Ve=0;Ve<256;Ve++)ki[Ve]=Vn(Ve)?1:0,Ei[Ve]=Vn(Ve);function co(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||eo,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ai(e,n){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=Kr(i),new Te(n,i)}function x(e,n){throw Ai(e,n)}function fn(e,n){e.onWarning&&e.onWarning.call(null,Ai(e,n))}var Rn={YAML:function(n,i,r){var t,a,o;n.version!==null&&x(n,"duplication of %YAML directive"),r.length!==1&&x(n,"YAML directive accepts exactly one argument"),t=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),t===null&&x(n,"ill-formed argument of the YAML directive"),a=parseInt(t[1],10),o=parseInt(t[2],10),a!==1&&x(n,"unacceptable YAML version of the document"),n.version=r[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&fn(n,"unsupported YAML version of the document")},TAG:function(n,i,r){var t,a;r.length!==2&&x(n,"TAG directive accepts exactly two arguments"),t=r[0],a=r[1],wi.test(t)||x(n,"ill-formed tag handle (first argument) of the TAG directive"),Pe.call(n.tagMap,t)&&x(n,'there is a previously declared suffix for "'+t+'" tag handle'),xi.test(a)||x(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{x(n,"tag prefix is malformed: "+a)}n.tagMap[t]=a}};function je(e,n,i,r){var t,a,o,l;if(n<i){if(l=e.input.slice(n,i),r)for(t=0,a=l.length;t<a;t+=1)o=l.charCodeAt(t),o===9||32<=o&&o<=1114111||x(e,"expected valid JSON character");else io.test(l)&&x(e,"the stream contains non-printable characters");e.result+=l}}function Yn(e,n,i,r){var t,a,o,l;for(me.isObject(i)||x(e,"cannot merge mappings; the provided source object is unacceptable"),t=Object.keys(i),o=0,l=t.length;o<l;o+=1)a=t[o],Pe.call(n,a)||(n[a]=i[a],r[a]=!0)}function We(e,n,i,r,t,a,o,l,c){var s,f;if(Array.isArray(t))for(t=Array.prototype.slice.call(t),s=0,f=t.length;s<f;s+=1)Array.isArray(t[s])&&x(e,"nested arrays are not supported inside keys"),typeof t=="object"&&zn(t[s])==="[object Object]"&&(t[s]="[object Object]");if(typeof t=="object"&&zn(t)==="[object Object]"&&(t="[object Object]"),t=String(t),n===null&&(n={}),r==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(s=0,f=a.length;s<f;s+=1)Yn(e,n,a[s],i);else Yn(e,n,a,i);else!e.json&&!Pe.call(i,t)&&Pe.call(n,t)&&(e.line=o||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,x(e,"duplicated mapping key")),t==="__proto__"?Object.defineProperty(n,t,{configurable:!0,enumerable:!0,writable:!0,value:a}):n[t]=a,delete i[t];return n}function kn(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):x(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function J(e,n,i){for(var r=0,t=e.input.charCodeAt(e.position);t!==0;){for(;Be(t);)t===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),t=e.input.charCodeAt(++e.position);if(n&&t===35)do t=e.input.charCodeAt(++e.position);while(t!==10&&t!==13&&t!==0);if(Ie(t))for(kn(e),t=e.input.charCodeAt(e.position),r++,e.lineIndent=0;t===32;)e.lineIndent++,t=e.input.charCodeAt(++e.position);else break}return i!==-1&&r!==0&&e.lineIndent<i&&fn(e,"deficient indentation"),r}function hn(e){var n=e.position,i;return i=e.input.charCodeAt(n),!!((i===45||i===46)&&i===e.input.charCodeAt(n+1)&&i===e.input.charCodeAt(n+2)&&(n+=3,i=e.input.charCodeAt(n),i===0||ye(i)))}function En(e,n){n===1?e.result+=" ":n>1&&(e.result+=me.repeat(`
`,n-1))}function uo(e,n,i){var r,t,a,o,l,c,s,f,h=e.kind,k=e.result,p;if(p=e.input.charCodeAt(e.position),ye(p)||Ye(p)||p===35||p===38||p===42||p===33||p===124||p===62||p===39||p===34||p===37||p===64||p===96||(p===63||p===45)&&(t=e.input.charCodeAt(e.position+1),ye(t)||i&&Ye(t)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,l=!1;p!==0;){if(p===58){if(t=e.input.charCodeAt(e.position+1),ye(t)||i&&Ye(t))break}else if(p===35){if(r=e.input.charCodeAt(e.position-1),ye(r))break}else{if(e.position===e.lineStart&&hn(e)||i&&Ye(p))break;if(Ie(p))if(c=e.line,s=e.lineStart,f=e.lineIndent,J(e,!1,-1),e.lineIndent>=n){l=!0,p=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=c,e.lineStart=s,e.lineIndent=f;break}}l&&(je(e,a,o,!1),En(e,e.line-c),a=o=e.position,l=!1),Be(p)||(o=e.position+1),p=e.input.charCodeAt(++e.position)}return je(e,a,o,!1),e.result?!0:(e.kind=h,e.result=k,!1)}function fo(e,n){var i,r,t;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,r=t=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(je(e,r,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)r=e.position,e.position++,t=e.position;else return!0;else Ie(i)?(je(e,r,t,!0),En(e,J(e,!1,n)),r=t=e.position):e.position===e.lineStart&&hn(e)?x(e,"unexpected end of the document within a single quoted scalar"):(e.position++,t=e.position);x(e,"unexpected end of the stream within a single quoted scalar")}function ho(e,n){var i,r,t,a,o,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=r=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return je(e,i,e.position,!0),e.position++,!0;if(l===92){if(je(e,i,e.position,!0),l=e.input.charCodeAt(++e.position),Ie(l))J(e,!1,n);else if(l<256&&ki[l])e.result+=Ei[l],e.position++;else if((o=ao(l))>0){for(t=o,a=0;t>0;t--)l=e.input.charCodeAt(++e.position),(o=oo(l))>=0?a=(a<<4)+o:x(e,"expected hexadecimal character");e.result+=so(a),e.position++}else x(e,"unknown escape sequence");i=r=e.position}else Ie(l)?(je(e,i,r,!0),En(e,J(e,!1,n)),i=r=e.position):e.position===e.lineStart&&hn(e)?x(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}x(e,"unexpected end of the stream within a double quoted scalar")}function po(e,n){var i=!0,r,t,a,o=e.tag,l,c=e.anchor,s,f,h,k,p,_=Object.create(null),w,S,H,y;if(y=e.input.charCodeAt(e.position),y===91)f=93,p=!1,l=[];else if(y===123)f=125,p=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),y=e.input.charCodeAt(++e.position);y!==0;){if(J(e,!0,n),y=e.input.charCodeAt(e.position),y===f)return e.position++,e.tag=o,e.anchor=c,e.kind=p?"mapping":"sequence",e.result=l,!0;i?y===44&&x(e,"expected the node content, but found ','"):x(e,"missed comma between flow collection entries"),S=w=H=null,h=k=!1,y===63&&(s=e.input.charCodeAt(e.position+1),ye(s)&&(h=k=!0,e.position++,J(e,!0,n))),r=e.line,t=e.lineStart,a=e.position,Ge(e,n,un,!1,!0),S=e.tag,w=e.result,J(e,!0,n),y=e.input.charCodeAt(e.position),(k||e.line===r)&&y===58&&(h=!0,y=e.input.charCodeAt(++e.position),J(e,!0,n),Ge(e,n,un,!1,!0),H=e.result),p?We(e,l,_,S,w,H,r,t,a):h?l.push(We(e,null,_,S,w,H,r,t,a)):l.push(w),J(e,!0,n),y=e.input.charCodeAt(e.position),y===44?(i=!0,y=e.input.charCodeAt(++e.position)):i=!1}x(e,"unexpected end of the stream within a flow collection")}function go(e,n){var i,r,t=mn,a=!1,o=!1,l=n,c=0,s=!1,f,h;if(h=e.input.charCodeAt(e.position),h===124)r=!1;else if(h===62)r=!0;else return!1;for(e.kind="scalar",e.result="";h!==0;)if(h=e.input.charCodeAt(++e.position),h===43||h===45)mn===t?t=h===43?Hn:no:x(e,"repeat of a chomping mode identifier");else if((f=lo(h))>=0)f===0?x(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?x(e,"repeat of an indentation width identifier"):(l=n+f-1,o=!0);else break;if(Be(h)){do h=e.input.charCodeAt(++e.position);while(Be(h));if(h===35)do h=e.input.charCodeAt(++e.position);while(!Ie(h)&&h!==0)}for(;h!==0;){for(kn(e),e.lineIndent=0,h=e.input.charCodeAt(e.position);(!o||e.lineIndent<l)&&h===32;)e.lineIndent++,h=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>l&&(l=e.lineIndent),Ie(h)){c++;continue}if(e.lineIndent<l){t===Hn?e.result+=me.repeat(`
`,a?1+c:c):t===mn&&a&&(e.result+=`
`);break}for(r?Be(h)?(s=!0,e.result+=me.repeat(`
`,a?1+c:c)):s?(s=!1,e.result+=me.repeat(`
`,c+1)):c===0?a&&(e.result+=" "):e.result+=me.repeat(`
`,c):e.result+=me.repeat(`
`,a?1+c:c),a=!0,o=!0,c=0,i=e.position;!Ie(h)&&h!==0;)h=e.input.charCodeAt(++e.position);je(e,i,e.position,!1)}return!0}function Wn(e,n){var i,r=e.tag,t=e.anchor,a=[],o,l=!1,c;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),c=e.input.charCodeAt(e.position);c!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,x(e,"tab characters must not be used in indentation")),!(c!==45||(o=e.input.charCodeAt(e.position+1),!ye(o))));){if(l=!0,e.position++,J(e,!0,-1)&&e.lineIndent<=n){a.push(null),c=e.input.charCodeAt(e.position);continue}if(i=e.line,Ge(e,n,bi,!1,!0),a.push(e.result),J(e,!0,-1),c=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>n)&&c!==0)x(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=r,e.anchor=t,e.kind="sequence",e.result=a,!0):!1}function vo(e,n,i){var r,t,a,o,l,c,s=e.tag,f=e.anchor,h={},k=Object.create(null),p=null,_=null,w=null,S=!1,H=!1,y;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=h),y=e.input.charCodeAt(e.position);y!==0;){if(!S&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,x(e,"tab characters must not be used in indentation")),r=e.input.charCodeAt(e.position+1),a=e.line,(y===63||y===58)&&ye(r))y===63?(S&&(We(e,h,k,p,_,null,o,l,c),p=_=w=null),H=!0,S=!0,t=!0):S?(S=!1,t=!0):x(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,y=r;else{if(o=e.line,l=e.lineStart,c=e.position,!Ge(e,i,yi,!1,!0))break;if(e.line===a){for(y=e.input.charCodeAt(e.position);Be(y);)y=e.input.charCodeAt(++e.position);if(y===58)y=e.input.charCodeAt(++e.position),ye(y)||x(e,"a whitespace character is expected after the key-value separator within a block mapping"),S&&(We(e,h,k,p,_,null,o,l,c),p=_=w=null),H=!0,S=!1,t=!1,p=e.tag,_=e.result;else if(H)x(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=s,e.anchor=f,!0}else if(H)x(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=s,e.anchor=f,!0}if((e.line===a||e.lineIndent>n)&&(S&&(o=e.line,l=e.lineStart,c=e.position),Ge(e,n,dn,!0,t)&&(S?_=e.result:w=e.result),S||(We(e,h,k,p,_,w,o,l,c),p=_=w=null),J(e,!0,-1),y=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&y!==0)x(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return S&&We(e,h,k,p,_,null,o,l,c),H&&(e.tag=s,e.anchor=f,e.kind="mapping",e.result=h),H}function mo(e){var n,i=!1,r=!1,t,a,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&x(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(i=!0,o=e.input.charCodeAt(++e.position)):o===33?(r=!0,t="!!",o=e.input.charCodeAt(++e.position)):t="!",n=e.position,i){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(a=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):x(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!ye(o);)o===33&&(r?x(e,"tag suffix cannot contain exclamation marks"):(t=e.input.slice(n-1,e.position+1),wi.test(t)||x(e,"named tag handle cannot contain such characters"),r=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),to.test(a)&&x(e,"tag suffix cannot contain flow indicator characters")}a&&!xi.test(a)&&x(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{x(e,"tag name is malformed: "+a)}return i?e.tag=a:Pe.call(e.tagMap,t)?e.tag=e.tagMap[t]+a:t==="!"?e.tag="!"+a:t==="!!"?e.tag="tag:yaml.org,2002:"+a:x(e,'undeclared tag handle "'+t+'"'),!0}function _o(e){var n,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&x(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),n=e.position;i!==0&&!ye(i)&&!Ye(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&x(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function yo(e){var n,i,r;if(r=e.input.charCodeAt(e.position),r!==42)return!1;for(r=e.input.charCodeAt(++e.position),n=e.position;r!==0&&!ye(r)&&!Ye(r);)r=e.input.charCodeAt(++e.position);return e.position===n&&x(e,"name of an alias node must contain at least one character"),i=e.input.slice(n,e.position),Pe.call(e.anchorMap,i)||x(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],J(e,!0,-1),!0}function Ge(e,n,i,r,t){var a,o,l,c=1,s=!1,f=!1,h,k,p,_,w,S;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=o=l=dn===i||bi===i,r&&J(e,!0,-1)&&(s=!0,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)),c===1)for(;mo(e)||_o(e);)J(e,!0,-1)?(s=!0,l=a,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)):l=!1;if(l&&(l=s||t),(c===1||dn===i)&&(un===i||yi===i?w=n:w=n+1,S=e.position-e.lineStart,c===1?l&&(Wn(e,S)||vo(e,S,w))||po(e,w)?f=!0:(o&&go(e,w)||fo(e,w)||ho(e,w)?f=!0:yo(e)?(f=!0,(e.tag!==null||e.anchor!==null)&&x(e,"alias node should not have any properties")):uo(e,w,un===i)&&(f=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):c===0&&(f=l&&Wn(e,S))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&x(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),h=0,k=e.implicitTypes.length;h<k;h+=1)if(_=e.implicitTypes[h],_.resolve(e.result)){e.result=_.construct(e.result),e.tag=_.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(Pe.call(e.typeMap[e.kind||"fallback"],e.tag))_=e.typeMap[e.kind||"fallback"][e.tag];else for(_=null,p=e.typeMap.multi[e.kind||"fallback"],h=0,k=p.length;h<k;h+=1)if(e.tag.slice(0,p[h].tag.length)===p[h].tag){_=p[h];break}_||x(e,"unknown tag !<"+e.tag+">"),e.result!==null&&_.kind!==e.kind&&x(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+_.kind+'", not "'+e.kind+'"'),_.resolve(e.result,e.tag)?(e.result=_.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):x(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||f}function bo(e){var n=e.position,i,r,t,a=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(J(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(a=!0,o=e.input.charCodeAt(++e.position),i=e.position;o!==0&&!ye(o);)o=e.input.charCodeAt(++e.position);for(r=e.input.slice(i,e.position),t=[],r.length<1&&x(e,"directive name must not be less than one character in length");o!==0;){for(;Be(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!Ie(o));break}if(Ie(o))break;for(i=e.position;o!==0&&!ye(o);)o=e.input.charCodeAt(++e.position);t.push(e.input.slice(i,e.position))}o!==0&&kn(e),Pe.call(Rn,r)?Rn[r](e,r,t):fn(e,'unknown document directive "'+r+'"')}if(J(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,J(e,!0,-1)):a&&x(e,"directives end mark is expected"),Ge(e,e.lineIndent-1,dn,!1,!0),J(e,!0,-1),e.checkLineBreaks&&ro.test(e.input.slice(n,e.position))&&fn(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&hn(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,J(e,!0,-1));return}if(e.position<e.length-1)x(e,"end of the stream or a document separator is expected");else return}function Si(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new co(e,n),r=e.indexOf("\0");for(r!==-1&&(i.position=r,x(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)bo(i);return i.documents}function wo(e,n,i){n!==null&&typeof n=="object"&&typeof i>"u"&&(i=n,n=null);var r=Si(e,i);if(typeof n!="function")return r;for(var t=0,a=r.length;t<a;t+=1)n(r[t])}function xo(e,n){var i=Si(e,n);if(i.length!==0){if(i.length===1)return i[0];throw new Te("expected a single document in the stream, but found more")}}var ko=wo,Eo=xo,Ao={loadAll:ko,load:Eo},So=Ao.load;const Co={ariaLabel:"geo",fill:"none",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1};class Io extends Xi{constructor(n,i={}){const[r,t]=Ji(i.r,3);super(n,{geometry:{value:i.geometry,scale:"projection"},r:{value:r,scale:"r",filter:er,optional:!0}},nr(i),Co),this.r=t}render(n,i,r,t,a){const{geometry:o,r:l}=r,c=ir(a.projection??Do(i)),{r:s}=this;return rr(s)?n=[]:s!==void 0&&c.pointRadius(s),tr("svg:g",a).call(or,this,t,a).call(ar,this,i).call(f=>{f.selectAll().data(n).enter().append("path").call(lr,this).attr("d",l?h=>c.pointRadius(l[h])(o[h]):h=>c(o[h])).call(sr,this,r)}).node()}}function Do({x:e,y:n}){if(e||n)return e??(e=i=>i),n??(n=i=>i),cr({point(i,r){this.stream.point(e(i),n(r))}})}function To(e,{geometry:n=Zi,...i}={}){switch(e==null?void 0:e.type){case"FeatureCollection":e=e.features;break;case"GeometryCollection":e=e.geometries;break;case"Feature":case"LineString":case"MultiLineString":case"MultiPoint":case"MultiPolygon":case"Point":case"Polygon":case"Sphere":e=[e];break}return new Io(e,{geometry:n,...i})}function Oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const Lo=e=>({}),Un=e=>({}),No=e=>({}),Gn=e=>({}),Fo=e=>({}),Kn=e=>({}),Mo=e=>({}),Qn=e=>({}),jo=e=>({}),Zn=e=>({}),Po=e=>({}),Xn=e=>({}),qo=e=>({}),Jn=e=>({}),Bo=e=>({}),ei=e=>({}),$o=e=>({}),ni=e=>({}),Ho=e=>({}),ii=e=>({}),zo=e=>({}),ri=e=>({}),Vo=e=>({}),ti=e=>({}),Ro=e=>({}),oi=e=>({}),Yo=e=>({}),ai=e=>({}),Wo=e=>({}),li=e=>({});function Uo(e){let n,i,r,t,a,o,l,c,s,f,h,k,p,_,w,S,H,y,z,g,d,F,m,B,Y,C,$,I,D,V,A;const ke=e[1].header,ee=de(ke,e,e[0],li),Le=e[1].alert,ne=de(Le,e,e[0],ai),Ke=e[1].dropdown1,se=de(Ke,e,e[0],oi),$e=e[1].chart1,re=de($e,e,e[0],ti),Qe=e[1].dropdown2,ce=de(Qe,e,e[0],ri),Ze=e[1].chart2,ue=de(Ze,e,e[0],ii),He=e[1].dropdown3,v=de(He,e,e[0],ni),M=e[1].chart3,N=de(M,e,e[0],ei),_e=e[1].dropdown4,K=de(_e,e,e[0],Jn),Ee=e[1].chart4,X=de(Ee,e,e[0],Xn),ie=e[1].obplot,T=de(ie,e,e[0],Zn),te=e[1].slider1,Q=de(te,e,e[0],Qn),be=e[1].slider2,G=de(be,e,e[0],Kn),Ae=e[1].slider3,oe=de(Ae,e,e[0],Gn),Ne=e[1].slider4,ae=de(Ne,e,e[0],Un);return{c(){n=j("div"),i=j("div"),ee&&ee.c(),r=W(),t=j("div"),ne&&ne.c(),a=W(),o=j("div"),se&&se.c(),l=W(),c=j("div"),re&&re.c(),s=W(),f=j("div"),ce&&ce.c(),h=W(),k=j("div"),ue&&ue.c(),p=W(),_=j("div"),v&&v.c(),w=W(),S=j("div"),N&&N.c(),H=W(),y=j("div"),K&&K.c(),z=W(),g=j("div"),X&&X.c(),d=W(),F=j("div"),T&&T.c(),m=W(),B=j("div"),Q&&Q.c(),Y=W(),C=j("div"),G&&G.c(),$=W(),I=j("div"),oe&&oe.c(),D=W(),V=j("div"),ae&&ae.c(),this.h()},l(u){n=P(u,"DIV",{class:!0});var b=q(n);i=P(b,"DIV",{class:!0});var Z=q(i);ee&&ee.l(Z),Z.forEach(O),r=U(b),t=P(b,"DIV",{class:!0});var xe=q(t);ne&&ne.l(xe),xe.forEach(O),a=U(b),o=P(b,"DIV",{class:!0});var De=q(o);se&&se.l(De),De.forEach(O),l=U(b),c=P(b,"DIV",{class:!0});var Se=q(c);re&&re.l(Se),Se.forEach(O),s=U(b),f=P(b,"DIV",{class:!0});var on=q(f);ce&&ce.l(on),on.forEach(O),h=U(b),k=P(b,"DIV",{class:!0});var qe=q(k);ue&&ue.l(qe),qe.forEach(O),p=U(b),_=P(b,"DIV",{class:!0});var an=q(_);v&&v.l(an),an.forEach(O),w=U(b),S=P(b,"DIV",{class:!0});var ze=q(S);N&&N.l(ze),ze.forEach(O),H=U(b),y=P(b,"DIV",{class:!0});var ln=q(y);K&&K.l(ln),ln.forEach(O),z=U(b),g=P(b,"DIV",{class:!0});var Sn=q(g);X&&X.l(Sn),Sn.forEach(O),d=U(b),F=P(b,"DIV",{class:!0});var Cn=q(F);T&&T.l(Cn),Cn.forEach(O),m=U(b),B=P(b,"DIV",{class:!0});var In=q(B);Q&&Q.l(In),In.forEach(O),Y=U(b),C=P(b,"DIV",{class:!0});var Dn=q(C);G&&G.l(Dn),Dn.forEach(O),$=U(b),I=P(b,"DIV",{class:!0});var Tn=q(I);oe&&oe.l(Tn),Tn.forEach(O),D=U(b),V=P(b,"DIV",{class:!0});var On=q(V);ae&&ae.l(On),On.forEach(O),b.forEach(O),this.h()},h(){L(i,"class","mx-auto"),L(t,"class",""),L(o,"class","mx-auto"),L(c,"class",""),L(f,"class","mx-auto"),L(k,"class",""),L(_,"class","mx-auto"),L(S,"class",""),L(y,"class","mx-auto"),L(g,"class",""),L(F,"class",""),L(B,"class",""),L(C,"class",""),L(I,"class",""),L(V,"class",""),L(n,"class","px-5 py-2 bg-white")},m(u,b){Ue(u,n,b),E(n,i),ee&&ee.m(i,null),E(n,r),E(n,t),ne&&ne.m(t,null),E(n,a),E(n,o),se&&se.m(o,null),E(n,l),E(n,c),re&&re.m(c,null),E(n,s),E(n,f),ce&&ce.m(f,null),E(n,h),E(n,k),ue&&ue.m(k,null),E(n,p),E(n,_),v&&v.m(_,null),E(n,w),E(n,S),N&&N.m(S,null),E(n,H),E(n,y),K&&K.m(y,null),E(n,z),E(n,g),X&&X.m(g,null),E(n,d),E(n,F),T&&T.m(F,null),E(n,m),E(n,B),Q&&Q.m(B,null),E(n,Y),E(n,C),G&&G.m(C,null),E(n,$),E(n,I),oe&&oe.m(I,null),E(n,D),E(n,V),ae&&ae.m(V,null),A=!0},p(u,[b]){ee&&ee.p&&(!A||b&1)&&fe(ee,ke,u,u[0],A?pe(ke,u[0],b,Wo):he(u[0]),li),ne&&ne.p&&(!A||b&1)&&fe(ne,Le,u,u[0],A?pe(Le,u[0],b,Yo):he(u[0]),ai),se&&se.p&&(!A||b&1)&&fe(se,Ke,u,u[0],A?pe(Ke,u[0],b,Ro):he(u[0]),oi),re&&re.p&&(!A||b&1)&&fe(re,$e,u,u[0],A?pe($e,u[0],b,Vo):he(u[0]),ti),ce&&ce.p&&(!A||b&1)&&fe(ce,Qe,u,u[0],A?pe(Qe,u[0],b,zo):he(u[0]),ri),ue&&ue.p&&(!A||b&1)&&fe(ue,Ze,u,u[0],A?pe(Ze,u[0],b,Ho):he(u[0]),ii),v&&v.p&&(!A||b&1)&&fe(v,He,u,u[0],A?pe(He,u[0],b,$o):he(u[0]),ni),N&&N.p&&(!A||b&1)&&fe(N,M,u,u[0],A?pe(M,u[0],b,Bo):he(u[0]),ei),K&&K.p&&(!A||b&1)&&fe(K,_e,u,u[0],A?pe(_e,u[0],b,qo):he(u[0]),Jn),X&&X.p&&(!A||b&1)&&fe(X,Ee,u,u[0],A?pe(Ee,u[0],b,Po):he(u[0]),Xn),T&&T.p&&(!A||b&1)&&fe(T,ie,u,u[0],A?pe(ie,u[0],b,jo):he(u[0]),Zn),Q&&Q.p&&(!A||b&1)&&fe(Q,te,u,u[0],A?pe(te,u[0],b,Mo):he(u[0]),Qn),G&&G.p&&(!A||b&1)&&fe(G,be,u,u[0],A?pe(be,u[0],b,Fo):he(u[0]),Kn),oe&&oe.p&&(!A||b&1)&&fe(oe,Ae,u,u[0],A?pe(Ae,u[0],b,No):he(u[0]),Gn),ae&&ae.p&&(!A||b&1)&&fe(ae,Ne,u,u[0],A?pe(Ne,u[0],b,Lo):he(u[0]),Un)},i(u){A||(ge(ee,u),ge(ne,u),ge(se,u),ge(re,u),ge(ce,u),ge(ue,u),ge(v,u),ge(N,u),ge(K,u),ge(X,u),ge(T,u),ge(Q,u),ge(G,u),ge(oe,u),ge(ae,u),A=!0)},o(u){ve(ee,u),ve(ne,u),ve(se,u),ve(re,u),ve(ce,u),ve(ue,u),ve(v,u),ve(N,u),ve(K,u),ve(X,u),ve(T,u),ve(Q,u),ve(G,u),ve(oe,u),ve(ae,u),A=!1},d(u){u&&O(n),ee&&ee.d(u),ne&&ne.d(u),se&&se.d(u),re&&re.d(u),ce&&ce.d(u),ue&&ue.d(u),v&&v.d(u),N&&N.d(u),K&&K.d(u),X&&X.d(u),T&&T.d(u),Q&&Q.d(u),G&&G.d(u),oe&&oe.d(u),ae&&ae.d(u)}}}function Go(e,n,i){let{$$slots:r={},$$scope:t}=n;return e.$$set=a=>{"$$scope"in a&&i(0,t=a.$$scope)},[t,r]}class Ko extends nn{constructor(n){super(),rn(this,n,Go,Uo,tn,{})}}function Qo(e){let n,i,r,t;return{c(){n=j("form"),i=j("input"),this.h()},l(a){n=P(a,"FORM",{class:!0});var o=q(n);i=P(o,"INPUT",{type:!0,class:!0,placeholder:!0}),o.forEach(O),this.h()},h(){L(i,"type","text"),L(i,"class","block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),L(i,"placeholder",e[0]),L(n,"class","px-[1%] py-[1%] ml-[5.9%]")},m(a,o){Ue(a,n,o),E(n,i),Ln(i,e[2]),r||(t=[Nn(i,"input",e[8]),Nn(i,"change",e[3])],r=!0)},p(a,[o]){o&1&&L(i,"placeholder",a[0]),o&4&&i.value!==a[2]&&Ln(i,a[2])},i:Oe,o:Oe,d(a){a&&O(n),r=!1,Mi(t)}}}function Zo(e,n,i){let r,t=Oe,a=()=>(t(),t=ji(c,w=>i(9,r=w)),c);e.$$.on_destroy.push(()=>t());let o=null,{placeholder:l="textbox"}=n,{change:c=Tr({})}=n;a();let{id:s}=n,{interactions:f={change:c}}=n;function h(){c.isActive&&cn(c,r={text:o},r)}function k(w){w&&R.is(Array,w)&&w.length&&i(0,l=String(w[0]))}function p(w,S){i(2,o=w),h()}function _(){o=this.value,i(2,o)}return e.$$set=w=>{"placeholder"in w&&i(0,l=w.placeholder),"change"in w&&a(i(1,c=w.change)),"id"in w&&i(4,s=w.id),"interactions"in w&&i(5,f=w.interactions)},[l,c,o,h,s,f,k,p,_]}class Xo extends nn{constructor(n){super(),rn(this,n,Zo,Qo,tn,{placeholder:0,change:1,id:4,interactions:5,render:6,load:7})}get placeholder(){return this.$$.ctx[0]}set placeholder(n){this.$$set({placeholder:n}),Re()}get change(){return this.$$.ctx[1]}set change(n){this.$$set({change:n}),Re()}get id(){return this.$$.ctx[4]}set id(n){this.$$set({id:n}),Re()}get interactions(){return this.$$.ctx[5]}set interactions(n){this.$$set({interactions:n}),Re()}get render(){return this.$$.ctx[6]}get load(){return this.$$.ctx[7]}}var Ci={exports:{}},Jo=Ci.exports={};Jo.forEach=function(e,n){for(var i=0;i<e.length;i++){var r=n(e[i]);if(r)return r}};var Ii=Ci.exports,ea=function(e){var n=e.stateHandler.getState;function i(o){var l=n(o);return l&&!!l.isDetectable}function r(o){n(o).isDetectable=!0}function t(o){return!!n(o).busy}function a(o,l){n(o).busy=!!l}return{isDetectable:i,markAsDetectable:r,isBusy:t,markBusy:a}},na=function(e){var n={};function i(o){var l=e.get(o);return l===void 0?[]:n[l]||[]}function r(o,l){var c=e.get(o);n[c]||(n[c]=[]),n[c].push(l)}function t(o,l){for(var c=i(o),s=0,f=c.length;s<f;++s)if(c[s]===l){c.splice(s,1);break}}function a(o){var l=i(o);l&&(l.length=0)}return{get:i,add:r,removeListener:t,removeAllListeners:a}},ia=function(){var e=1;function n(){return e++}return{generate:n}},ra=function(e){var n=e.idGenerator,i=e.stateHandler.getState;function r(a){var o=i(a);return o&&o.id!==void 0?o.id:null}function t(a){var o=i(a);if(!o)throw new Error("setId required the element to have a resize detection state.");var l=n.generate();return o.id=l,l}return{get:r,set:t}},ta=function(e){function n(){}var i={log:n,warn:n,error:n};if(!e&&window.console){var r=function(t,a){t[a]=function(){var l=console[a];if(l.apply)l.apply(console,arguments);else for(var c=0;c<arguments.length;c++)l(arguments[c])}};r(i,"log"),r(i,"warn"),r(i,"error")}return i},Di={exports:{}},Ti=Di.exports={};Ti.isIE=function(e){function n(){var r=navigator.userAgent.toLowerCase();return r.indexOf("msie")!==-1||r.indexOf("trident")!==-1||r.indexOf(" edge/")!==-1}if(!n())return!1;if(!e)return!0;var i=function(){var r,t=3,a=document.createElement("div"),o=a.getElementsByTagName("i");do a.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->";while(o[0]);return t>4?t:r}();return e===i};Ti.isLegacyOpera=function(){return!!window.opera};var Oi=Di.exports,Li={exports:{}},oa=Li.exports={};oa.getOption=aa;function aa(e,n,i){var r=e[n];return r==null&&i!==void 0?i:r}var la=Li.exports,si=la,sa=function(n){n=n||{};var i=n.reporter,r=si.getOption(n,"async",!0),t=si.getOption(n,"auto",!0);t&&!r&&(i&&i.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),r=!0);var a=ci(),o,l=!1;function c(_,w){!l&&t&&r&&a.size()===0&&h(),a.add(_,w)}function s(){for(l=!0;a.size();){var _=a;a=ci(),_.process()}l=!1}function f(_){l||(_===void 0&&(_=r),o&&(k(o),o=null),_?h():s())}function h(){o=p(s)}function k(_){var w=clearTimeout;return w(_)}function p(_){var w=function(S){return setTimeout(S,0)};return w(_)}return{add:c,force:f}};function ci(){var e={},n=0,i=0,r=0;function t(l,c){c||(c=l,l=0),l>i?i=l:l<r&&(r=l),e[l]||(e[l]=[]),e[l].push(c),n++}function a(){for(var l=r;l<=i;l++)for(var c=e[l],s=0;s<c.length;s++){var f=c[s];f()}}function o(){return n}return{add:t,process:a,size:o}}var An="_erd";function ca(e){return e[An]={},Ni(e)}function Ni(e){return e[An]}function ua(e){delete e[An]}var da={initState:ca,getState:Ni,cleanState:ua},Xe=Oi,fa=function(e){e=e||{};var n=e.reporter,i=e.batchProcessor,r=e.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");function t(s,f){function h(){f(s)}if(Xe.isIE(8))r(s).object={proxy:h},s.attachEvent("onresize",h);else{var k=l(s);if(!k)throw new Error("Element is not detectable by this strategy.");k.contentDocument.defaultView.addEventListener("resize",h)}}function a(s){var f=e.important?" !important; ":"; ";return(s.join(f)+f).trim()}function o(s,f,h){h||(h=f,f=s,s=null),s=s||{},s.debug;function k(p,_){var w=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),S=!1,H=window.getComputedStyle(p),y=p.offsetWidth,z=p.offsetHeight;r(p).startSize={width:y,height:z};function g(){function d(){if(H.position==="static"){p.style.setProperty("position","relative",s.important?"important":"");var B=function(Y,C,$,I){function D(A){return A.replace(/[^-\d\.]/g,"")}var V=$[I];V!=="auto"&&D(V)!=="0"&&(Y.warn("An element that is positioned static has style."+I+"="+V+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+I+" will be set to 0. Element: ",C),C.style.setProperty(I,"0",s.important?"important":""))};B(n,p,H,"top"),B(n,p,H,"right"),B(n,p,H,"bottom"),B(n,p,H,"left")}}function F(){S||d();function B(C,$){if(!C.contentDocument){var I=r(C);I.checkForObjectDocumentTimeoutId&&window.clearTimeout(I.checkForObjectDocumentTimeoutId),I.checkForObjectDocumentTimeoutId=setTimeout(function(){I.checkForObjectDocumentTimeoutId=0,B(C,$)},100);return}$(C.contentDocument)}var Y=this;B(Y,function($){_(p)})}H.position!==""&&(d(),S=!0);var m=document.createElement("object");m.style.cssText=w,m.tabIndex=-1,m.type="text/html",m.setAttribute("aria-hidden","true"),m.onload=F,Xe.isIE()||(m.data="about:blank"),r(p)&&(p.appendChild(m),r(p).object=m,Xe.isIE()&&(m.data="about:blank"))}i?i.add(g):g()}Xe.isIE(8)?h(f):k(f,h)}function l(s){return r(s).object}function c(s){if(r(s)){var f=l(s);f&&(Xe.isIE(8)?s.detachEvent("onresize",f.proxy):s.removeChild(f),r(s).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(s).checkForObjectDocumentTimeoutId),delete r(s).object)}}return{makeDetectable:o,addListener:t,uninstall:c}},ha=Ii.forEach,pa=function(e){e=e||{};var n=e.reporter,i=e.batchProcessor,r=e.stateHandler.getState;e.stateHandler.hasState;var t=e.idHandler;if(!i)throw new Error("Missing required dependency: batchProcessor");if(!n)throw new Error("Missing required dependency: reporter.");var a=f(),o="erd_scroll_detection_scrollbar_style",l="erd_scroll_detection_container";function c(g){h(g,o,l)}c(window.document);function s(g){var d=e.important?" !important; ":"; ";return(g.join(d)+d).trim()}function f(){var g=500,d=500,F=document.createElement("div");F.style.cssText=s(["position: absolute","width: "+g*2+"px","height: "+d*2+"px","visibility: hidden","margin: 0","padding: 0"]);var m=document.createElement("div");m.style.cssText=s(["position: absolute","width: "+g+"px","height: "+d+"px","overflow: scroll","visibility: none","top: "+-g*3+"px","left: "+-d*3+"px","visibility: hidden","margin: 0","padding: 0"]),m.appendChild(F),document.body.insertBefore(m,document.body.firstChild);var B=g-m.clientWidth,Y=d-m.clientHeight;return document.body.removeChild(m),{width:B,height:Y}}function h(g,d,F){function m($,I){I=I||function(V){g.head.appendChild(V)};var D=g.createElement("style");return D.innerHTML=$,D.id=d,I(D),D}if(!g.getElementById(d)){var B=F+"_animation",Y=F+"_animation_active",C=`/* Created by the element-resize-detector library. */
`;C+="."+F+" > div::-webkit-scrollbar { "+s(["display: none"])+` }

`,C+="."+Y+" { "+s(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+B,"animation-name: "+B])+` }
`,C+="@-webkit-keyframes "+B+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,C+="@keyframes "+B+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",m(C)}}function k(g){g.className+=" "+l+"_animation_active"}function p(g,d,F){if(g.addEventListener)g.addEventListener(d,F);else if(g.attachEvent)g.attachEvent("on"+d,F);else return n.error("[scroll] Don't know how to add event listeners.")}function _(g,d,F){if(g.removeEventListener)g.removeEventListener(d,F);else if(g.detachEvent)g.detachEvent("on"+d,F);else return n.error("[scroll] Don't know how to remove event listeners.")}function w(g){return r(g).container.childNodes[0].childNodes[0].childNodes[0]}function S(g){return r(g).container.childNodes[0].childNodes[0].childNodes[1]}function H(g,d){var F=r(g).listeners;if(!F.push)throw new Error("Cannot add listener to an element that is not detectable.");r(g).listeners.push(d)}function y(g,d,F){F||(F=d,d=g,g=null),g=g||{};function m(){if(g.debug){var v=Array.prototype.slice.call(arguments);if(v.unshift(t.get(d),"Scroll: "),n.log.apply)n.log.apply(null,v);else for(var M=0;M<v.length;M++)n.log(v[M])}}function B(v){function M(N){var _e=N.getRootNode&&N.getRootNode().contains(N);return N===N.ownerDocument.body||N.ownerDocument.body.contains(N)||_e}return!M(v)||window.getComputedStyle(v)===null}function Y(v){var M=r(v).container.childNodes[0],N=window.getComputedStyle(M);return!N.width||N.width.indexOf("px")===-1}function C(){var v=window.getComputedStyle(d),M={};return M.position=v.position,M.width=d.offsetWidth,M.height=d.offsetHeight,M.top=v.top,M.right=v.right,M.bottom=v.bottom,M.left=v.left,M.widthCSS=v.width,M.heightCSS=v.height,M}function $(){var v=C();r(d).startSize={width:v.width,height:v.height},m("Element start size",r(d).startSize)}function I(){r(d).listeners=[]}function D(){if(m("storeStyle invoked."),!r(d)){m("Aborting because element has been uninstalled");return}var v=C();r(d).style=v}function V(v,M,N){r(v).lastWidth=M,r(v).lastHeight=N}function A(v){return w(v).childNodes[0]}function ke(){return 2*a.width+1}function ee(){return 2*a.height+1}function Le(v){return v+10+ke()}function ne(v){return v+10+ee()}function Ke(v){return v*2+ke()}function se(v){return v*2+ee()}function $e(v,M,N){var _e=w(v),K=S(v),Ee=Le(M),X=ne(N),ie=Ke(M),T=se(N);_e.scrollLeft=Ee,_e.scrollTop=X,K.scrollLeft=ie,K.scrollTop=T}function re(){var v=r(d).container;if(!v){v=document.createElement("div"),v.className=l,v.style.cssText=s(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(d).container=v,k(v),d.appendChild(v);var M=function(){r(d).onRendered&&r(d).onRendered()};p(v,"animationstart",M),r(d).onAnimationStart=M}return v}function Qe(){function v(){var Z=r(d).style;if(Z.position==="static"){d.style.setProperty("position","relative",g.important?"important":"");var xe=function(De,Se,on,qe){function an(ln){return ln.replace(/[^-\d\.]/g,"")}var ze=on[qe];ze!=="auto"&&an(ze)!=="0"&&(De.warn("An element that is positioned static has style."+qe+"="+ze+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+qe+" will be set to 0. Element: ",Se),Se.style[qe]=0)};xe(n,d,Z,"top"),xe(n,d,Z,"right"),xe(n,d,Z,"bottom"),xe(n,d,Z,"left")}}function M(Z,xe,De,Se){return Z=Z?Z+"px":"0",xe=xe?xe+"px":"0",De=De?De+"px":"0",Se=Se?Se+"px":"0",["left: "+Z,"top: "+xe,"right: "+Se,"bottom: "+De]}if(m("Injecting elements"),!r(d)){m("Aborting because element has been uninstalled");return}v();var N=r(d).container;N||(N=re());var _e=a.width,K=a.height,Ee=s(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),X=s(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(M(-(1+_e),-(1+K),-K,-_e))),ie=s(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),T=s(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),te=s(["position: absolute","left: 0","top: 0"]),Q=s(["position: absolute","width: 200%","height: 200%"]),be=document.createElement("div"),G=document.createElement("div"),Ae=document.createElement("div"),oe=document.createElement("div"),Ne=document.createElement("div"),ae=document.createElement("div");be.dir="ltr",be.style.cssText=Ee,be.className=l,G.className=l,G.style.cssText=X,Ae.style.cssText=ie,oe.style.cssText=te,Ne.style.cssText=T,ae.style.cssText=Q,Ae.appendChild(oe),Ne.appendChild(ae),G.appendChild(Ae),G.appendChild(Ne),be.appendChild(G),N.appendChild(be);function u(){var Z=r(d);Z&&Z.onExpand?Z.onExpand():m("Aborting expand scroll handler: element has been uninstalled")}function b(){var Z=r(d);Z&&Z.onShrink?Z.onShrink():m("Aborting shrink scroll handler: element has been uninstalled")}p(Ae,"scroll",u),p(Ne,"scroll",b),r(d).onExpandScroll=u,r(d).onShrinkScroll=b}function ce(){function v(ie,T,te){var Q=A(ie),be=Le(T),G=ne(te);Q.style.setProperty("width",be+"px",g.important?"important":""),Q.style.setProperty("height",G+"px",g.important?"important":"")}function M(ie){var T=d.offsetWidth,te=d.offsetHeight,Q=T!==r(d).lastWidth||te!==r(d).lastHeight;m("Storing current size",T,te),V(d,T,te),i.add(0,function(){if(Q){if(!r(d)){m("Aborting because element has been uninstalled");return}if(!N()){m("Aborting because element container has not been initialized");return}if(g.debug){var G=d.offsetWidth,Ae=d.offsetHeight;(G!==T||Ae!==te)&&n.warn(t.get(d),"Scroll: Size changed before updating detector elements.")}v(d,T,te)}}),i.add(1,function(){if(!r(d)){m("Aborting because element has been uninstalled");return}if(!N()){m("Aborting because element container has not been initialized");return}$e(d,T,te)}),Q&&ie&&i.add(2,function(){if(!r(d)){m("Aborting because element has been uninstalled");return}if(!N()){m("Aborting because element container has not been initialized");return}ie()})}function N(){return!!r(d).container}function _e(){function ie(){return r(d).lastNotifiedWidth===void 0}m("notifyListenersIfNeeded invoked");var T=r(d);if(ie()&&T.lastWidth===T.startSize.width&&T.lastHeight===T.startSize.height)return m("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(T.lastWidth===T.lastNotifiedWidth&&T.lastHeight===T.lastNotifiedHeight)return m("Not notifying: Size already notified");m("Current size not notified, notifying..."),T.lastNotifiedWidth=T.lastWidth,T.lastNotifiedHeight=T.lastHeight,ha(r(d).listeners,function(te){te(d)})}function K(){if(m("startanimation triggered."),Y(d)){m("Ignoring since element is still unrendered...");return}m("Element rendered.");var ie=w(d),T=S(d);(ie.scrollLeft===0||ie.scrollTop===0||T.scrollLeft===0||T.scrollTop===0)&&(m("Scrollbars out of sync. Updating detector elements..."),M(_e))}function Ee(){if(m("Scroll detected."),Y(d)){m("Scroll event fired while unrendered. Ignoring...");return}M(_e)}if(m("registerListenersAndPositionElements invoked."),!r(d)){m("Aborting because element has been uninstalled");return}r(d).onRendered=K,r(d).onExpand=Ee,r(d).onShrink=Ee;var X=r(d).style;v(d,X.width,X.height)}function Ze(){if(m("finalizeDomMutation invoked."),!r(d)){m("Aborting because element has been uninstalled");return}var v=r(d).style;V(d,v.width,v.height),$e(d,v.width,v.height)}function ue(){F(d)}function He(){m("Installing..."),I(),$(),i.add(0,D),i.add(1,Qe),i.add(2,ce),i.add(3,Ze),i.add(4,ue)}m("Making detectable..."),B(d)?(m("Element is detached"),re(),m("Waiting until element is attached..."),r(d).onRendered=function(){m("Element is now attached"),He()}):He()}function z(g){var d=r(g);d&&(d.onExpandScroll&&_(w(g),"scroll",d.onExpandScroll),d.onShrinkScroll&&_(S(g),"scroll",d.onShrinkScroll),d.onAnimationStart&&_(d.container,"animationstart",d.onAnimationStart),d.container&&g.removeChild(d.container))}return{makeDetectable:y,addListener:H,uninstall:z,initDocument:c}},Je=Ii.forEach,ga=ea,va=na,ma=ia,_a=ra,ya=ta,ui=Oi,ba=sa,Fe=da,wa=fa,xa=pa;function di(e){return Array.isArray(e)||e.length!==void 0}function fi(e){if(Array.isArray(e))return e;var n=[];return Je(e,function(i){n.push(i)}),n}function hi(e){return e&&e.nodeType===1}var ka=function(e){e=e||{};var n;if(e.idHandler)n={get:function(y){return e.idHandler.get(y,!0)},set:e.idHandler.set};else{var i=ma(),r=_a({idGenerator:i,stateHandler:Fe});n=r}var t=e.reporter;if(!t){var a=t===!1;t=ya(a)}var o=Me(e,"batchProcessor",ba({reporter:t})),l={};l.callOnAdd=!!Me(e,"callOnAdd",!0),l.debug=!!Me(e,"debug",!1);var c=va(n),s=ga({stateHandler:Fe}),f,h=Me(e,"strategy","object"),k=Me(e,"important",!1),p={reporter:t,batchProcessor:o,stateHandler:Fe,idHandler:n,important:k};if(h==="scroll"&&(ui.isLegacyOpera()?(t.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),h="object"):ui.isIE(9)&&(t.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),h="object")),h==="scroll")f=xa(p);else if(h==="object")f=wa(p);else throw new Error("Invalid strategy name: "+h);var _={};function w(y,z,g){function d($){var I=c.get($);Je(I,function(V){V($)})}function F($,I,D){c.add(I,D),$&&D(I)}if(g||(g=z,z=y,y={}),!z)throw new Error("At least one element required.");if(!g)throw new Error("Listener required.");if(hi(z))z=[z];else if(di(z))z=fi(z);else return t.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var m=0,B=Me(y,"callOnAdd",l.callOnAdd),Y=Me(y,"onReady",function(){}),C=Me(y,"debug",l.debug);Je(z,function(I){Fe.getState(I)||(Fe.initState(I),n.set(I));var D=n.get(I);if(C&&t.log("Attaching listener to element",D,I),!s.isDetectable(I)){if(C&&t.log(D,"Not detectable."),s.isBusy(I)){C&&t.log(D,"System busy making it detectable"),F(B,I,g),_[D]=_[D]||[],_[D].push(function(){m++,m===z.length&&Y()});return}return C&&t.log(D,"Making detectable..."),s.markBusy(I,!0),f.makeDetectable({debug:C,important:k},I,function(A){if(C&&t.log(D,"onElementDetectable"),Fe.getState(A)){s.markAsDetectable(A),s.markBusy(A,!1),f.addListener(A,d),F(B,A,g);var ke=Fe.getState(A);if(ke&&ke.startSize){var ee=A.offsetWidth,Le=A.offsetHeight;(ke.startSize.width!==ee||ke.startSize.height!==Le)&&d(A)}_[D]&&Je(_[D],function(ne){ne()})}else C&&t.log(D,"Element uninstalled before being detectable.");delete _[D],m++,m===z.length&&Y()})}C&&t.log(D,"Already detecable, adding listener."),F(B,I,g),m++}),m===z.length&&Y()}function S(y){if(!y)return t.error("At least one element is required.");if(hi(y))y=[y];else if(di(y))y=fi(y);else return t.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");Je(y,function(z){c.removeAllListeners(z),f.uninstall(z),Fe.cleanState(z)})}function H(y){f.initDocument&&f.initDocument(y)}return{listenTo:w,removeListener:c.removeListener,removeAllListeners:c.removeAllListeners,uninstall:S,initDocument:H}};function Me(e,n,i){var r=e[n];return r==null&&i!==void 0?i:r}const Ea=Oo(ka);Ea({strategy:"scroll"});function Aa(e,n,i){let r,t;yn(e,jn,l=>i(2,r=l)),yn(e,Mn,l=>i(3,t=l));let a=[];function o(l,c){a=l??a,console.log("in query update.... ",l,c),cn(Mn,t[c]=a,t);let s={Sep:{start:24,end:27},Oct:{start:27,end:30},Nov:{start:30,end:33}};c=="defaults_q"&&cn(jn,r=a.map(f=>({chirps_early:{start:f.chirps_early_first,end:f.chirps_early_last},chirps_late:{start:f.chirps_late_first,end:f.chirps_late_last},vegetation:s[f.evi_month]})),r)}return[o]}class Sa extends nn{constructor(n){super(),rn(this,n,Aa,null,tn,{render:0})}get render(){return this.$$.ctx[0]}}function Ca(e){let n,i;return{c(){n=j("div"),i=Pi("svg"),this.h()},l(r){n=P(r,"DIV",{class:!0});var t=q(n);i=qi(t,"svg",{id:!0,viewBox:!0,width:!0,height:!0});var a=q(i);a.forEach(O),t.forEach(O),this.h()},h(){L(i,"id","svgcontainer"),L(i,"viewBox","372 130 30 30"),L(i,"width","100%"),L(i,"height","100%"),L(n,"class","w-5/5 h-5/5")},m(r,t){Ue(r,n,t),E(n,i),e[4](n)},p:Oe,i:Oe,o:Oe,d(r){r&&O(n),e[4](null)}}}function Ia(e,n,i){let{spec:r}=n,{theplot:t=null}=n,a,o=[],l;function c(f,h){if(!f||f.length==0)return;h=="overlay"||(o=f??o),console.log("map data to plot: ",o);let k={projection:"equirectangular",color:{type:"quantile",n:9,scheme:"blues"},marks:[To(o,{strokeOpacity:.5,strokeWidth:.01,precision:.01,fill:_=>_.properties.OBJECTID})]};i(1,t=ur(k)),l=t.children[1];let p=document.getElementById("svgcontainer");p.innerHTML="",p.append(l)}function s(f){Bi[f?"unshift":"push"](()=>{a=f,i(0,a)})}return e.$$set=f=>{"spec"in f&&i(2,r=f.spec),"theplot"in f&&i(1,t=f.theplot)},[a,t,r,c,s]}class Da extends nn{constructor(n){super(),rn(this,n,Ia,Ca,tn,{spec:2,theplot:1,render:3})}get spec(){return this.$$.ctx[2]}set spec(n){this.$$set({spec:n}),Re()}get theplot(){return this.$$.ctx[1]}set theplot(n){this.$$set({theplot:n}),Re()}get render(){return this.$$.ctx[3]}}const Ta=Object.freeze(Object.defineProperty({__proto__:null,Alert:dr,BarGrouped:fr,Container:Ko,CropCal:hr,DropDown:pr,Header:Ir,Line:gr,Login:vr,Map:Da,MatchingTable:mr,MatchingTableBackend:zi,OverlayBackend:Vi,QueryBackend:Ri,QueryUpdate:Sa,Slider:_r,Spinner:Dr,Textbox:Xo},Symbol.toStringTag,{value:"Module"}));let Oa=Yi(Ta,jr);function sn(e,n){if(!e)throw new Error(n)}function La(e){let n=e.replaceAll(/\$\w+/g,i=>`o['${i.substring(1)}']`);return new Function("o",`return ${n}`)}const Fi=yr(br(Ce(Array),Ce(Object)),wr(e=>Fi(e)),La);let _n={};class Na{constructor(n,i){this.magic=n,this.config=i,this.backends={},this.interactions={},this.views={},this.viewIdToViews,this.deferred=[],this._deferredMode=!1;const r=a=>o=>{let l=this.magic.backend[a](o);return l.type=a,l};["overlay","duckdb","array","identity"].forEach(a=>this[a]=r(a)),this.root=document.createElement("div"),document.body.appendChild(this.root),this.loadBackends(i.backends??[]),this.loadViews(i.views??[]),this._deferredMode=!0,this.deferred.forEach(a=>a())}defer(n,i){if(this._deferredMode)throw new Error(i);this.deferred.push(n.bind(this))}async init(){for(let n of pn(this.backends))n.type=="duckdb"&&await n.init();await this.loadDependencies(this.config.dependencies??[]);for(let n of pn(this.backends))switch(n.type){case"array":n.execute();break;case"query":await n.execute();break;case"matching":await n.execute();break}Wi((n,i)=>{var r;(r=this.views[i])==null||r.load(n())},this.magic.dependencies.defaults);for(let n of pn(this.backends))n.save&&this.magic.saveBackends(n)}newName(n="name"){return _n[n]=_n[n]??0,`${n}${_n[n]++}`}loadBackends(n){let i=qn(this.createBackend.bind(this));return Ui(r=>r.type=="duckdb",n).forEach(i),xr(r=>r.type=="duckdb",n).forEach(i),this}createBackend(n){let i=n.name??(n.type?this.newName(n.type):this.newName("backend"));if(this.backends[i])throw new Error(`Backend ${i} already exists`);let r=null;if(n.type)r=this[n.type](n);else if(n.query)r=this.query(n);else if(n.matching)r=this.matching(n);else{if(n.backend)return this.backends[n.backend];if(n.interaction){r=this.identity();let t=this.interactions[n.interaction];we(t)&&this.defer(()=>this.createBackend(n),`Interaction ${n.interaction} not found`),r&&t&&this.magic.connect(r,t)}else if(n.array)r=this.array({...n,data:n.array});else throw new Error("Can't initialize backend config:",n)}return sn(!we(r),`Backend is null ${r.type}`),sn(!we(r.type),`New Backend must have type attr ${JSON.stringify(n)}`),r.save=n.save,this.backends[i]=r,r}matching({name:n,ignore_cols:i,default_func:r,backend:t,matching:a,defaults:o={}}){t=Ce(String,t)?this.backends[t]:t,n=n??this.newName("matching");let l=this.magic.backend.matching({id:n,backend:t,default_func:r,matching:a,ignore_cols:i,defaults:o});return l.type="matching",l}query({name:n,query:i,defaults:r={},db:t="duckdb"}){t=Ce(String,t)?this.backends[t]:t,n=n??this.newName("query");let a=this.magic.backend.query({id:n,backend:t,query:i,name:n,defaults:r});return a.type="query",a}loadViews(n){n=n??[];let i=n.map(r=>{let t=this.canonicalizeData(r.data),a=this.makeView(r);return this.views[r.name]=a,this.magic.view(a),a.backends=kr(a.backends??[],t??[]),a.backends.forEach(o=>{this.magic.render(o,a)}),a});Mr(n,i).forEach(([r,t])=>{(r.interactions??[]).forEach(o=>{this.connectInteractions(t,o)})})}connectInteractions(n,{to:i,name:r,type:t,defaults:a}){let o=n.interactions[t];if(we(o))throw new Error(`Interaction ${t} not found in View ${n.id}`);if(this.interactions[r]=o,we(a)||this.magic.dependencies.setDefault(n,()=>a),we(i)||Gi(i)){this.magic.connect(null,o,null);return}(Ce(Array,i)?i:[i]).forEach(c=>{c=Ce(String,c)?{backend:c}:c;let s=this.backends[c.backend],f=Fi(Bn(["opts","backend","view"],c));if(we(s)){let h=c.view;if(/\w+\.\d+/.test(h)){let[k,p]=h.split(".");s=this.views[k].backends[parseInt(p)],sn(!we(s),`Backend not found ${h}`)}else{let k=this.views[h];we(k)&&this.defer(()=>this.connectInteractions(n,{to:c,name:r,type:t,defaults:a}),`Interaction references nonexistent backend ${c.backend} and view ${h}`),s=this.identity(),this.magic.render(s,k)}}this.magic.connect(s,o,f)})}makeView(n){let i=n.type,r=Bn(["data","interactions"],n);r.id=r.id??r.name??this.newName(i);let t=null;n.selector?t=document.querySelector(n.selector):(t=document.createElement("div"),this.root.appendChild(t)),console.log("new View",i,r);let a=new Oa[i]({target:t,props:r});return a.el=t,a}canonicalizeData(n){if(Ce(String,n)){let i=this.backends[n];return sn(!we(i),`Backend named ${n} not found`),[i]}return n=Ce(Array,n)?n:[n],Er(bn(Or,n[0]),["query","matching","backend","interaction"])||(n=[{array:n}]),n.map(qn(this.createBackend.bind(this)))}async loadDependencies(n){(n??[]).forEach(({source:i,attr:r,target:t})=>{let a=null;if(a=this.interactions[i],we(a)&&/\w+\.\w+/.test(i)){let[l,c]=i.split(".");a=this.views[l].interactions[c]}if(we(a))throw new Error(`Interaction not found ${i}`);(Ce(Array,t)?t:[t]).forEach(async l=>{l=Ce(String,l)?{view:l}:l;let c=l.view,s=this.views[c];if(we(s))throw new Error("View not found: ",c);let f;if(bn("function")(l.defaults)){let h=await this.backends[l.defaults.backend].execute();f=new Function("e","a",l.defaults.function).bind(h)}else f=l.defaults?()=>l.defaults:null;this.magic.dependencies.add(a.get(r),s,null,f)})})}}const Fa=`backends:
- type: duckdb
  name: duckdb
  sources:
  - parquet: "admin_raw.parquet"
    name: "admin_raw"
  - parquet: "chirps_raw.parquet"
    name: "chirps_raw"
  - parquet: "evi_raw.parquet"
    name: "evi_raw"
  - parquet: "crop_cal_raw.parquet"
    name: crop_cal_raw
  - parquet: "badyear_raw.parquet"
    name: badyear_raw
- type: query
  name: climatology
  # query doesn't have source/sources -- assumes all data is loaded already
  db: duckdb
  query: "" # if query name is in model out, will pull query from there, replacing this text 
  defaults:
    region: 1128
    dekcap: 24
    freq: 0.23
    year_start: 1981
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: query
  name: crop_cal
  db: duckdb
  query: ""
  defaults:
    region: 1128
    dekcap: 24
    freq: 0.23
    year_start: 1981
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true
- type: query
  name: payout_combined 
  db: duckdb
  query: ""
  defaults:
    region: 1128
    dekcap: 24
    freq: 0.23
    year_start: 1981
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: query
  name: badyear 
  db: duckdb
  query: "" 
  defaults:
    region: 1128
    dekcap: 24
    freq: 0.23
    year_start: 1981
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: query
  name: matching 
  db: duckdb
  query: "" 
  defaults:
    region: 1128
    dekcap: 24
    freq: 0.23
    year_start: 1981
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: matching
  name: mtb 
  ignore_cols:
    - year
    - gid
    - value
  default_func: "true positive" 
  backend: matching
  #TODO: how to integrate functions into yaml 
  matching: ""
  defaults:
    region: 1128
    dekcap: 24
    freq: 0.23
    year_start: 1981
    year_end: 2020
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8 
  save: true
- type: query
  name: default_q 
  db: duckdb
  query: "SELECT gid, chirps_early_first, chirps_early_last, chirps_late_first, chirps_late_last, evi_month FROM admin_raw ORDER BY gid"
- type: overlay
  name: overlay
views:
- type: Login
  name: Login
  selector: "#login"
  dataTable: Ethiopia_Data
  stateTable: Ethiopia_State
- type: Line
  name: climatology_chart
  selector: "#chart-1"
  xAttr: dekad 
  yAttr: average_value
  data:
  - backend: climatology
  - backend: overlay
    target: overlay
- type: CropCal 
  name: crop_calendar 
  selector: "#chart-2"
  xDomainMin: 1
  xDomainMax: 36
  data:
  - backend: crop_cal 
  - backend: overlay
    target: overlay
- type: BarGrouped   
  name: payout_combined
  selector: "#chart-3"
  xAttr: year
  yAttr: value
  yMax: 1
  xDomainMin: 1981 
  xDomainMax: 2021
  groupNames:
    - sum_early
    - sum_late
    - vegetation
    - combined_payout
  data:
  - backend: payout_combined
  - backend: badyear
  - backend: overlay
    target: overlay
- type: MatchingTable    
  name: matching_table  
  selector: "#chart-4"
  data:
  - backend: mtb  
- type: DropDown
  name: Village_Dropdown
  selector: "#dropdown-1"
  interactions:
    - type: change
      name: ddc
      defaults:
        region: 1128
      to:
        - backend: climatology
          region: $gid
        - backend: mtb
          region: $gid
        - backend: crop_cal
          region: $gid
        - backend: payout_combined 
          region: $gid
        - backend: badyear
          region: $gid

  index: 0
  dropdown_key: village
  data: 
  - query: "SELECT gid, village FROM admin_raw ORDER BY gid"
- type: DropDown
  name: Matching_Dropdown
  selector: "#dropdown-2"
  interactions:
    - type: change
      name: ddc-matching
      to:
        - backend: mtb
          func_elected: $value
  index: 0
  dropdown_key: value
  data: 
  - query: "SELECT * FROM (VALUES (0,'true positive'),(1,'true negative'),(2,'average matching')) MATCHING_OPTIONS(idx, value);"
- type: Slider
  name: PlantEarly
  selector: "#slider-1"
  min: 1
  max: 36
  description: "CHIRPS sum early"
  interactions:
  - type: change
    to: 
    - backend: payout_combined 
      sum_early_first: $left
      sum_early_last: $right
    - backend: mtb 
      sum_early_first: $left
      sum_early_last: $right
    - backend: overlay
      sum_early:
        left: $left
        right: $right
- type: Slider
  name: PlantLate
  selector: "#slider-2"
  min: 1
  max: 36
  description: "CHIRPS sum late"
  interactions:
  - type: change
    to: 
    - backend: payout_combined
      sum_late_first: $left
      sum_late_last: $right
    - backend: mtb 
      sum_late_first: $left
      sum_late_last: $right
    - backend: overlay
      sum_late:
        left: $left
        right: $right
- type: Slider
  name: Vegetation
  selector: "#slider-3"
  min: 1
  max: 36
  description: "Vegetation"
  interactions:
  - type: change
    to:
    - backend: payout_combined 
      vegetation_first: $left
      vegetation_last: $right
    - backend: mtb 
      vegetation_first: $left
      vegetation_last: $right
    - backend: overlay
      vegetation:
        left: $left
        right: $right
- type: Alert
  name: Alert
  selector: "#alert"
  threshold_string: "1.0"
  key: "combined_payout"
  data:
    - backend: payout_combined
  interactions:
  - type: valid
dependencies: 
- source: ddc
  attr: "gid"
  target:
    - view: Vegetation
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        const month_to_dekad = {
          Sep: { start: 24, end: 27 },
          Oct: { start: 27, end: 30 },
          Nov: { start: 30, end: 33 },
          };
        return {left: month_to_dekad[row.evi_month].start,  right: month_to_dekad[row.evi_month].end}
        ;"
    - view: PlantEarly 
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: row.chirps_early_first,  right: row.chirps_early_last}
        ;"
    - view: PlantLate 
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: row.chirps_late_first,  right: row.chirps_late_last}
        ;"
`;function Ma(e){let n,i,r,t,a,o,l,c,s,f,h,k,p,_,w,S,H,y,z,g,d,F,m,B,Y;return{c(){n=j("div"),i=W(),r=j("div"),t=j("div"),a=j("div"),o=W(),l=j("div"),c=W(),s=j("div"),f=j("div"),h=W(),k=j("div"),p=W(),_=j("div"),w=W(),S=j("div"),H=W(),y=j("div"),z=W(),g=j("div"),d=j("div"),F=W(),m=j("div"),B=W(),Y=j("div"),this.h()},l(C){n=P(C,"DIV",{id:!0}),q(n).forEach(O),i=U(C),r=P(C,"DIV",{class:!0});var $=q(r);t=P($,"DIV",{class:!0});var I=q(t);a=P(I,"DIV",{id:!0}),q(a).forEach(O),o=U(I),l=P(I,"DIV",{id:!0}),q(l).forEach(O),I.forEach(O),c=U($),s=P($,"DIV",{});var D=q(s);f=P(D,"DIV",{id:!0}),q(f).forEach(O),h=U(D),k=P(D,"DIV",{id:!0}),q(k).forEach(O),p=U(D),_=P(D,"DIV",{id:!0}),q(_).forEach(O),w=U(D),S=P(D,"DIV",{id:!0}),q(S).forEach(O),H=U(D),y=P(D,"DIV",{id:!0}),q(y).forEach(O),D.forEach(O),z=U($),g=P($,"DIV",{});var V=q(g);d=P(V,"DIV",{id:!0}),q(d).forEach(O),F=U(V),m=P(V,"DIV",{id:!0}),q(m).forEach(O),B=U(V),Y=P(V,"DIV",{id:!0}),q(Y).forEach(O),V.forEach(O),$.forEach(O),this.h()},h(){L(n,"id","alert"),L(a,"id","login"),L(l,"id","dropdown-1"),L(t,"class","col-span-2"),L(f,"id","chart-1"),L(k,"id","chart-2"),L(_,"id","slider-1"),L(S,"id","slider-2"),L(y,"id","slider-3"),L(d,"id","chart-3"),L(m,"id","dropdown-2"),L(Y,"id","chart-4"),L(r,"class","grid grid-cols-2")},m(C,$){Ue(C,n,$),Ue(C,i,$),Ue(C,r,$),E(r,t),E(t,a),E(t,o),E(t,l),E(r,c),E(r,s),E(s,f),E(s,h),E(s,k),E(s,p),E(s,_),E(s,w),E(s,S),E(s,H),E(s,y),E(r,z),E(r,g),E(g,d),E(g,F),E(g,m),E(g,B),E(g,Y)},p:Oe,i:Oe,o:Oe,d(C){C&&O(n),C&&O(i),C&&O(r)}}}function ja(e,n,i){let r;yn(e,Fn,s=>i(1,r=s));let t=Cr;const a=new t("https://rightful-anteater-150.convex.cloud");a.mutation("saveParams"),a.query("getParams");let o=So(Fa,"utf8");console.log(o),cn(Fn,r=new Ki,r);let l=new Ar(r),c;return $i(async()=>{(o.backends??[]).forEach(s=>{s.type==="matching"?s.matching=Sr:bn(s.name)(Pn)&&(s.query=Pn[s.name].query)}),(o.views??[]).forEach(s=>{s.type==="Login"&&(s.magic=l,s.exportFunc="saveToConvex",s.importFunc="getFromConvex",s.client=a)}),c=new Na(l,o),await c.init()}),[]}class Va extends nn{constructor(n){super(),rn(this,n,ja,Ma,tn,{})}}export{Va as default};
