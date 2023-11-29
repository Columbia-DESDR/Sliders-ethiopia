import{S as Me,i as qe,s as $e,J as M,g as C,k as S,l as E,m as I,d as w,q as T,r as A,a as Ie,v as m,K as q,L as $,M as B,t as j,b as P,T as Te,O as In,P as Sn,n as Ce,Q as gi,U as vi,R as Fe,c as on,o as yi}from"./index.9400ea7e.js";import{_ as bi,c as ri,M as wi,O as xi,Q as ki,d as Ai,e as de,g as en,f as Ci,h as Ei,j as ce,l as Ii,B as Si,b as Tn}from"./index.42def3d2.js";import{d as Ti,q as On,w as Fn,A as Oi,B as Fi,b as Di,D as Ni,a as Li,L as Mi,c as qi,S as $i,i as Bi,e as ji,m as Pi,r as Vi,g as Yi,h as Ri,j as an,M as Ui,f as Hi,C as Gi}from"./http_client.6965abf0.js";import{H as Ki,S as zi}from"./Header.349bdd45.js";import{w as Wi}from"./paths.63f0d854.js";import{M as Qi}from"./Map.b298f219.js";import{m as Dn}from"./model_out.448f9c31.js";const Zi={"@@functional/placeholder":!0};var Xi=bi(function(n){return Ti(n.length,n)});const Nn=Xi;var Ji=ri(function(n,i){for(var t={},r={},l=0,o=n.length;l<o;)r[n[l]]=1,l+=1;for(var a in i)r.hasOwnProperty(a)||(t[a]=i[a]);return t});const Ln=Ji;var er=ri(function(n,i){for(var t=[],r=0,l=Math.min(n.length,i.length);r<l;)t[r]=[n[r],i[r]],r+=1;return t});const nr=er,ir=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ti(e){return typeof e>"u"||e===null}function rr(e){return typeof e=="object"&&e!==null}function tr(e){return Array.isArray(e)?e:ti(e)?[]:[e]}function lr(e,n){var i,t,r,l;if(n)for(l=Object.keys(n),i=0,t=l.length;i<t;i+=1)r=l[i],e[r]=n[r];return e}function or(e,n){var i="",t;for(t=0;t<n;t+=1)i+=e;return i}function ar(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var cr=ti,ur=rr,sr=tr,fr=or,dr=ar,pr=lr,V={isNothing:cr,isObject:ur,toArray:sr,repeat:fr,isNegativeZero:dr,extend:pr};function li(e,n){var i="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(i+=`

`+e.mark.snippet),t+" "+i):t}function Se(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=li(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Se.prototype=Object.create(Error.prototype);Se.prototype.constructor=Se;Se.prototype.toString=function(n){return this.name+": "+li(this,n)};var ge=Se;function nn(e,n,i,t,r){var l="",o="",a=Math.floor(r/2)-1;return t-n>a&&(l=" ... ",n=t-a+l.length),i-t>a&&(o=" ...",i=t+a-o.length),{str:l+e.slice(n,i).replace(/\t/g,"→")+o,pos:t-n+l.length}}function rn(e,n){return V.repeat(" ",n-e.length)+e}function hr(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var i=/\r?\n|\r|\0/g,t=[0],r=[],l,o=-1;l=i.exec(e.buffer);)r.push(l.index),t.push(l.index+l[0].length),e.position<=l.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var a="",u,s,d=Math.min(e.line+n.linesAfter,r.length).toString().length,f=n.maxLength-(n.indent+d+3);for(u=1;u<=n.linesBefore&&!(o-u<0);u++)s=nn(e.buffer,t[o-u],r[o-u],e.position-(t[o]-t[o-u]),f),a=V.repeat(" ",n.indent)+rn((e.line-u+1).toString(),d)+" | "+s.str+`
`+a;for(s=nn(e.buffer,t[o],r[o],e.position,f),a+=V.repeat(" ",n.indent)+rn((e.line+1).toString(),d)+" | "+s.str+`
`,a+=V.repeat("-",n.indent+d+3+s.pos)+`^
`,u=1;u<=n.linesAfter&&!(o+u>=r.length);u++)s=nn(e.buffer,t[o+u],r[o+u],e.position-(t[o]-t[o+u]),f),a+=V.repeat(" ",n.indent)+rn((e.line+u+1).toString(),d)+" | "+s.str+`
`;return a.replace(/\n$/,"")}var _r=hr,mr=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],gr=["scalar","sequence","mapping"];function vr(e){var n={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(t){n[String(t)]=i})}),n}function yr(e,n){if(n=n||{},Object.keys(n).forEach(function(i){if(mr.indexOf(i)===-1)throw new ge('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(i){return i},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=vr(n.styleAliases||null),gr.indexOf(this.kind)===-1)throw new ge('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var L=yr;function Mn(e,n){var i=[];return e[n].forEach(function(t){var r=i.length;i.forEach(function(l,o){l.tag===t.tag&&l.kind===t.kind&&l.multi===t.multi&&(r=o)}),i[r]=t}),i}function br(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,i;function t(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,i=arguments.length;n<i;n+=1)arguments[n].forEach(t);return e}function cn(e){return this.extend(e)}cn.prototype.extend=function(n){var i=[],t=[];if(n instanceof L)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(i=i.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new ge("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(l){if(!(l instanceof L))throw new ge("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new ge("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new ge("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(l){if(!(l instanceof L))throw new ge("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(cn.prototype);return r.implicit=(this.implicit||[]).concat(i),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=Mn(r,"implicit"),r.compiledExplicit=Mn(r,"explicit"),r.compiledTypeMap=br(r.compiledImplicit,r.compiledExplicit),r};var wr=cn,xr=new L("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),kr=new L("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Ar=new L("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Cr=new wr({explicit:[xr,kr,Ar]});function Er(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Ir(){return null}function Sr(e){return e===null}var Tr=new L("tag:yaml.org,2002:null",{kind:"scalar",resolve:Er,construct:Ir,predicate:Sr,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Or(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Fr(e){return e==="true"||e==="True"||e==="TRUE"}function Dr(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Nr=new L("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Or,construct:Fr,predicate:Dr,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Lr(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Mr(e){return 48<=e&&e<=55}function qr(e){return 48<=e&&e<=57}function $r(e){if(e===null)return!1;var n=e.length,i=0,t=!1,r;if(!n)return!1;if(r=e[i],(r==="-"||r==="+")&&(r=e[++i]),r==="0"){if(i+1===n)return!0;if(r=e[++i],r==="b"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!Lr(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!Mr(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;i<n;i++)if(r=e[i],r!=="_"){if(!qr(e.charCodeAt(i)))return!1;t=!0}return!(!t||r==="_")}function Br(e){var n=e,i=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(i=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return i*parseInt(n.slice(2),2);if(n[1]==="x")return i*parseInt(n.slice(2),16);if(n[1]==="o")return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)}function jr(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!V.isNegativeZero(e)}var Pr=new L("tag:yaml.org,2002:int",{kind:"scalar",resolve:$r,construct:Br,predicate:jr,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Vr=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Yr(e){return!(e===null||!Vr.test(e)||e[e.length-1]==="_")}function Rr(e){var n,i;return n=e.replace(/_/g,"").toLowerCase(),i=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:i*parseFloat(n,10)}var Ur=/^[-+]?[0-9]+e/;function Hr(e,n){var i;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(V.isNegativeZero(e))return"-0.0";return i=e.toString(10),Ur.test(i)?i.replace("e",".e"):i}function Gr(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||V.isNegativeZero(e))}var Kr=new L("tag:yaml.org,2002:float",{kind:"scalar",resolve:Yr,construct:Rr,predicate:Gr,represent:Hr,defaultStyle:"lowercase"}),zr=Cr.extend({implicit:[Tr,Nr,Pr,Kr]}),Wr=zr,oi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ai=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Qr(e){return e===null?!1:oi.exec(e)!==null||ai.exec(e)!==null}function Zr(e){var n,i,t,r,l,o,a,u=0,s=null,d,f,y;if(n=oi.exec(e),n===null&&(n=ai.exec(e)),n===null)throw new Error("Date resolve error");if(i=+n[1],t=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(i,t,r));if(l=+n[4],o=+n[5],a=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],f=+(n[11]||0),s=(d*60+f)*6e4,n[9]==="-"&&(s=-s)),y=new Date(Date.UTC(i,t,r,l,o,a,u)),s&&y.setTime(y.getTime()-s),y}function Xr(e){return e.toISOString()}var Jr=new L("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Qr,construct:Zr,instanceOf:Date,represent:Xr});function et(e){return e==="<<"||e===null}var nt=new L("tag:yaml.org,2002:merge",{kind:"scalar",resolve:et}),un=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function it(e){if(e===null)return!1;var n,i,t=0,r=e.length,l=un;for(i=0;i<r;i++)if(n=l.indexOf(e.charAt(i)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function rt(e){var n,i,t=e.replace(/[\r\n=]/g,""),r=t.length,l=un,o=0,a=[];for(n=0;n<r;n++)n%4===0&&n&&(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)),o=o<<6|l.indexOf(t.charAt(n));return i=r%4*6,i===0?(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)):i===18?(a.push(o>>10&255),a.push(o>>2&255)):i===12&&a.push(o>>4&255),new Uint8Array(a)}function tt(e){var n="",i=0,t,r,l=e.length,o=un;for(t=0;t<l;t++)t%3===0&&t&&(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]),i=(i<<8)+e[t];return r=l%3,r===0?(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]):r===2?(n+=o[i>>10&63],n+=o[i>>4&63],n+=o[i<<2&63],n+=o[64]):r===1&&(n+=o[i>>2&63],n+=o[i<<4&63],n+=o[64],n+=o[64]),n}function lt(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var ot=new L("tag:yaml.org,2002:binary",{kind:"scalar",resolve:it,construct:rt,predicate:lt,represent:tt}),at=Object.prototype.hasOwnProperty,ct=Object.prototype.toString;function ut(e){if(e===null)return!0;var n=[],i,t,r,l,o,a=e;for(i=0,t=a.length;i<t;i+=1){if(r=a[i],o=!1,ct.call(r)!=="[object Object]")return!1;for(l in r)if(at.call(r,l))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function st(e){return e!==null?e:[]}var ft=new L("tag:yaml.org,2002:omap",{kind:"sequence",resolve:ut,construct:st}),dt=Object.prototype.toString;function pt(e){if(e===null)return!0;var n,i,t,r,l,o=e;for(l=new Array(o.length),n=0,i=o.length;n<i;n+=1){if(t=o[n],dt.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;l[n]=[r[0],t[r[0]]]}return!0}function ht(e){if(e===null)return[];var n,i,t,r,l,o=e;for(l=new Array(o.length),n=0,i=o.length;n<i;n+=1)t=o[n],r=Object.keys(t),l[n]=[r[0],t[r[0]]];return l}var _t=new L("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:pt,construct:ht}),mt=Object.prototype.hasOwnProperty;function gt(e){if(e===null)return!0;var n,i=e;for(n in i)if(mt.call(i,n)&&i[n]!==null)return!1;return!0}function vt(e){return e!==null?e:{}}var yt=new L("tag:yaml.org,2002:set",{kind:"mapping",resolve:gt,construct:vt}),bt=Wr.extend({implicit:[Jr,nt],explicit:[ot,ft,_t,yt]}),ye=Object.prototype.hasOwnProperty,De=1,ci=2,ui=3,Ne=4,tn=1,wt=2,qn=3,xt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,kt=/[\x85\u2028\u2029]/,At=/[,\[\]\{\}]/,si=/^(?:!|!!|![a-z\-]+!)$/i,fi=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function $n(e){return Object.prototype.toString.call(e)}function pe(e){return e===10||e===13}function we(e){return e===9||e===32}function H(e){return e===9||e===32||e===10||e===13}function ke(e){return e===44||e===91||e===93||e===123||e===125}function Ct(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Et(e){return e===120?2:e===117?4:e===85?8:0}function It(e){return 48<=e&&e<=57?e-48:-1}function Bn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function St(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var di=new Array(256),pi=new Array(256);for(var xe=0;xe<256;xe++)di[xe]=Bn(xe)?1:0,pi[xe]=Bn(xe);function Tt(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||bt,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function hi(e,n){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=_r(i),new ge(n,i)}function _(e,n){throw hi(e,n)}function Le(e,n){e.onWarning&&e.onWarning.call(null,hi(e,n))}var jn={YAML:function(n,i,t){var r,l,o;n.version!==null&&_(n,"duplication of %YAML directive"),t.length!==1&&_(n,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),r===null&&_(n,"ill-formed argument of the YAML directive"),l=parseInt(r[1],10),o=parseInt(r[2],10),l!==1&&_(n,"unacceptable YAML version of the document"),n.version=t[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&Le(n,"unsupported YAML version of the document")},TAG:function(n,i,t){var r,l;t.length!==2&&_(n,"TAG directive accepts exactly two arguments"),r=t[0],l=t[1],si.test(r)||_(n,"ill-formed tag handle (first argument) of the TAG directive"),ye.call(n.tagMap,r)&&_(n,'there is a previously declared suffix for "'+r+'" tag handle'),fi.test(l)||_(n,"ill-formed tag prefix (second argument) of the TAG directive");try{l=decodeURIComponent(l)}catch{_(n,"tag prefix is malformed: "+l)}n.tagMap[r]=l}};function ve(e,n,i,t){var r,l,o,a;if(n<i){if(a=e.input.slice(n,i),t)for(r=0,l=a.length;r<l;r+=1)o=a.charCodeAt(r),o===9||32<=o&&o<=1114111||_(e,"expected valid JSON character");else xt.test(a)&&_(e,"the stream contains non-printable characters");e.result+=a}}function Pn(e,n,i,t){var r,l,o,a;for(V.isObject(i)||_(e,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(i),o=0,a=r.length;o<a;o+=1)l=r[o],ye.call(n,l)||(n[l]=i[l],t[l]=!0)}function Ae(e,n,i,t,r,l,o,a,u){var s,d;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),s=0,d=r.length;s<d;s+=1)Array.isArray(r[s])&&_(e,"nested arrays are not supported inside keys"),typeof r=="object"&&$n(r[s])==="[object Object]"&&(r[s]="[object Object]");if(typeof r=="object"&&$n(r)==="[object Object]"&&(r="[object Object]"),r=String(r),n===null&&(n={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(l))for(s=0,d=l.length;s<d;s+=1)Pn(e,n,l[s],i);else Pn(e,n,l,i);else!e.json&&!ye.call(i,r)&&ye.call(n,r)&&(e.line=o||e.line,e.lineStart=a||e.lineStart,e.position=u||e.position,_(e,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(n,r,{configurable:!0,enumerable:!0,writable:!0,value:l}):n[r]=l,delete i[r];return n}function sn(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):_(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function O(e,n,i){for(var t=0,r=e.input.charCodeAt(e.position);r!==0;){for(;we(r);)r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(n&&r===35)do r=e.input.charCodeAt(++e.position);while(r!==10&&r!==13&&r!==0);if(pe(r))for(sn(e),r=e.input.charCodeAt(e.position),t++,e.lineIndent=0;r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return i!==-1&&t!==0&&e.lineIndent<i&&Le(e,"deficient indentation"),t}function Be(e){var n=e.position,i;return i=e.input.charCodeAt(n),!!((i===45||i===46)&&i===e.input.charCodeAt(n+1)&&i===e.input.charCodeAt(n+2)&&(n+=3,i=e.input.charCodeAt(n),i===0||H(i)))}function fn(e,n){n===1?e.result+=" ":n>1&&(e.result+=V.repeat(`
`,n-1))}function Ot(e,n,i){var t,r,l,o,a,u,s,d,f=e.kind,y=e.result,h;if(h=e.input.charCodeAt(e.position),H(h)||ke(h)||h===35||h===38||h===42||h===33||h===124||h===62||h===39||h===34||h===37||h===64||h===96||(h===63||h===45)&&(r=e.input.charCodeAt(e.position+1),H(r)||i&&ke(r)))return!1;for(e.kind="scalar",e.result="",l=o=e.position,a=!1;h!==0;){if(h===58){if(r=e.input.charCodeAt(e.position+1),H(r)||i&&ke(r))break}else if(h===35){if(t=e.input.charCodeAt(e.position-1),H(t))break}else{if(e.position===e.lineStart&&Be(e)||i&&ke(h))break;if(pe(h))if(u=e.line,s=e.lineStart,d=e.lineIndent,O(e,!1,-1),e.lineIndent>=n){a=!0,h=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=u,e.lineStart=s,e.lineIndent=d;break}}a&&(ve(e,l,o,!1),fn(e,e.line-u),l=o=e.position,a=!1),we(h)||(o=e.position+1),h=e.input.charCodeAt(++e.position)}return ve(e,l,o,!1),e.result?!0:(e.kind=f,e.result=y,!1)}function Ft(e,n){var i,t,r;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(ve(e,t,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)t=e.position,e.position++,r=e.position;else return!0;else pe(i)?(ve(e,t,r,!0),fn(e,O(e,!1,n)),t=r=e.position):e.position===e.lineStart&&Be(e)?_(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);_(e,"unexpected end of the stream within a single quoted scalar")}function Dt(e,n){var i,t,r,l,o,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=t=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return ve(e,i,e.position,!0),e.position++,!0;if(a===92){if(ve(e,i,e.position,!0),a=e.input.charCodeAt(++e.position),pe(a))O(e,!1,n);else if(a<256&&di[a])e.result+=pi[a],e.position++;else if((o=Et(a))>0){for(r=o,l=0;r>0;r--)a=e.input.charCodeAt(++e.position),(o=Ct(a))>=0?l=(l<<4)+o:_(e,"expected hexadecimal character");e.result+=St(l),e.position++}else _(e,"unknown escape sequence");i=t=e.position}else pe(a)?(ve(e,i,t,!0),fn(e,O(e,!1,n)),i=t=e.position):e.position===e.lineStart&&Be(e)?_(e,"unexpected end of the document within a double quoted scalar"):(e.position++,t=e.position)}_(e,"unexpected end of the stream within a double quoted scalar")}function Nt(e,n){var i=!0,t,r,l,o=e.tag,a,u=e.anchor,s,d,f,y,h,b=Object.create(null),g,x,F,v;if(v=e.input.charCodeAt(e.position),v===91)d=93,h=!1,a=[];else if(v===123)d=125,h=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),v=e.input.charCodeAt(++e.position);v!==0;){if(O(e,!0,n),v=e.input.charCodeAt(e.position),v===d)return e.position++,e.tag=o,e.anchor=u,e.kind=h?"mapping":"sequence",e.result=a,!0;i?v===44&&_(e,"expected the node content, but found ','"):_(e,"missed comma between flow collection entries"),x=g=F=null,f=y=!1,v===63&&(s=e.input.charCodeAt(e.position+1),H(s)&&(f=y=!0,e.position++,O(e,!0,n))),t=e.line,r=e.lineStart,l=e.position,Ee(e,n,De,!1,!0),x=e.tag,g=e.result,O(e,!0,n),v=e.input.charCodeAt(e.position),(y||e.line===t)&&v===58&&(f=!0,v=e.input.charCodeAt(++e.position),O(e,!0,n),Ee(e,n,De,!1,!0),F=e.result),h?Ae(e,a,b,x,g,F,t,r,l):f?a.push(Ae(e,null,b,x,g,F,t,r,l)):a.push(g),O(e,!0,n),v=e.input.charCodeAt(e.position),v===44?(i=!0,v=e.input.charCodeAt(++e.position)):i=!1}_(e,"unexpected end of the stream within a flow collection")}function Lt(e,n){var i,t,r=tn,l=!1,o=!1,a=n,u=0,s=!1,d,f;if(f=e.input.charCodeAt(e.position),f===124)t=!1;else if(f===62)t=!0;else return!1;for(e.kind="scalar",e.result="";f!==0;)if(f=e.input.charCodeAt(++e.position),f===43||f===45)tn===r?r=f===43?qn:wt:_(e,"repeat of a chomping mode identifier");else if((d=It(f))>=0)d===0?_(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?_(e,"repeat of an indentation width identifier"):(a=n+d-1,o=!0);else break;if(we(f)){do f=e.input.charCodeAt(++e.position);while(we(f));if(f===35)do f=e.input.charCodeAt(++e.position);while(!pe(f)&&f!==0)}for(;f!==0;){for(sn(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!o||e.lineIndent<a)&&f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>a&&(a=e.lineIndent),pe(f)){u++;continue}if(e.lineIndent<a){r===qn?e.result+=V.repeat(`
`,l?1+u:u):r===tn&&l&&(e.result+=`
`);break}for(t?we(f)?(s=!0,e.result+=V.repeat(`
`,l?1+u:u)):s?(s=!1,e.result+=V.repeat(`
`,u+1)):u===0?l&&(e.result+=" "):e.result+=V.repeat(`
`,u):e.result+=V.repeat(`
`,l?1+u:u),l=!0,o=!0,u=0,i=e.position;!pe(f)&&f!==0;)f=e.input.charCodeAt(++e.position);ve(e,i,e.position,!1)}return!0}function Vn(e,n){var i,t=e.tag,r=e.anchor,l=[],o,a=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_(e,"tab characters must not be used in indentation")),!(u!==45||(o=e.input.charCodeAt(e.position+1),!H(o))));){if(a=!0,e.position++,O(e,!0,-1)&&e.lineIndent<=n){l.push(null),u=e.input.charCodeAt(e.position);continue}if(i=e.line,Ee(e,n,ui,!1,!0),l.push(e.result),O(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>n)&&u!==0)_(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=t,e.anchor=r,e.kind="sequence",e.result=l,!0):!1}function Mt(e,n,i){var t,r,l,o,a,u,s=e.tag,d=e.anchor,f={},y=Object.create(null),h=null,b=null,g=null,x=!1,F=!1,v;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=f),v=e.input.charCodeAt(e.position);v!==0;){if(!x&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_(e,"tab characters must not be used in indentation")),t=e.input.charCodeAt(e.position+1),l=e.line,(v===63||v===58)&&H(t))v===63?(x&&(Ae(e,f,y,h,b,null,o,a,u),h=b=g=null),F=!0,x=!0,r=!0):x?(x=!1,r=!0):_(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,v=t;else{if(o=e.line,a=e.lineStart,u=e.position,!Ee(e,i,ci,!1,!0))break;if(e.line===l){for(v=e.input.charCodeAt(e.position);we(v);)v=e.input.charCodeAt(++e.position);if(v===58)v=e.input.charCodeAt(++e.position),H(v)||_(e,"a whitespace character is expected after the key-value separator within a block mapping"),x&&(Ae(e,f,y,h,b,null,o,a,u),h=b=g=null),F=!0,x=!1,r=!1,h=e.tag,b=e.result;else if(F)_(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=s,e.anchor=d,!0}else if(F)_(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=s,e.anchor=d,!0}if((e.line===l||e.lineIndent>n)&&(x&&(o=e.line,a=e.lineStart,u=e.position),Ee(e,n,Ne,!0,r)&&(x?b=e.result:g=e.result),x||(Ae(e,f,y,h,b,g,o,a,u),h=b=g=null),O(e,!0,-1),v=e.input.charCodeAt(e.position)),(e.line===l||e.lineIndent>n)&&v!==0)_(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return x&&Ae(e,f,y,h,b,null,o,a,u),F&&(e.tag=s,e.anchor=d,e.kind="mapping",e.result=f),F}function qt(e){var n,i=!1,t=!1,r,l,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&_(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(i=!0,o=e.input.charCodeAt(++e.position)):o===33?(t=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",n=e.position,i){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(l=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):_(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!H(o);)o===33&&(t?_(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(n-1,e.position+1),si.test(r)||_(e,"named tag handle cannot contain such characters"),t=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);l=e.input.slice(n,e.position),At.test(l)&&_(e,"tag suffix cannot contain flow indicator characters")}l&&!fi.test(l)&&_(e,"tag name cannot contain such characters: "+l);try{l=decodeURIComponent(l)}catch{_(e,"tag name is malformed: "+l)}return i?e.tag=l:ye.call(e.tagMap,r)?e.tag=e.tagMap[r]+l:r==="!"?e.tag="!"+l:r==="!!"?e.tag="tag:yaml.org,2002:"+l:_(e,'undeclared tag handle "'+r+'"'),!0}function $t(e){var n,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&_(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),n=e.position;i!==0&&!H(i)&&!ke(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&_(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Bt(e){var n,i,t;if(t=e.input.charCodeAt(e.position),t!==42)return!1;for(t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!H(t)&&!ke(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&_(e,"name of an alias node must contain at least one character"),i=e.input.slice(n,e.position),ye.call(e.anchorMap,i)||_(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],O(e,!0,-1),!0}function Ee(e,n,i,t,r){var l,o,a,u=1,s=!1,d=!1,f,y,h,b,g,x;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,l=o=a=Ne===i||ui===i,t&&O(e,!0,-1)&&(s=!0,e.lineIndent>n?u=1:e.lineIndent===n?u=0:e.lineIndent<n&&(u=-1)),u===1)for(;qt(e)||$t(e);)O(e,!0,-1)?(s=!0,a=l,e.lineIndent>n?u=1:e.lineIndent===n?u=0:e.lineIndent<n&&(u=-1)):a=!1;if(a&&(a=s||r),(u===1||Ne===i)&&(De===i||ci===i?g=n:g=n+1,x=e.position-e.lineStart,u===1?a&&(Vn(e,x)||Mt(e,x,g))||Nt(e,g)?d=!0:(o&&Lt(e,g)||Ft(e,g)||Dt(e,g)?d=!0:Bt(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&_(e,"alias node should not have any properties")):Ot(e,g,De===i)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(d=a&&Vn(e,x))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&_(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),f=0,y=e.implicitTypes.length;f<y;f+=1)if(b=e.implicitTypes[f],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(ye.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,h=e.typeMap.multi[e.kind||"fallback"],f=0,y=h.length;f<y;f+=1)if(e.tag.slice(0,h[f].tag.length)===h[f].tag){b=h[f];break}b||_(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&_(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):_(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function jt(e){var n=e.position,i,t,r,l=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(O(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(l=!0,o=e.input.charCodeAt(++e.position),i=e.position;o!==0&&!H(o);)o=e.input.charCodeAt(++e.position);for(t=e.input.slice(i,e.position),r=[],t.length<1&&_(e,"directive name must not be less than one character in length");o!==0;){for(;we(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!pe(o));break}if(pe(o))break;for(i=e.position;o!==0&&!H(o);)o=e.input.charCodeAt(++e.position);r.push(e.input.slice(i,e.position))}o!==0&&sn(e),ye.call(jn,t)?jn[t](e,t,r):Le(e,'unknown document directive "'+t+'"')}if(O(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,O(e,!0,-1)):l&&_(e,"directives end mark is expected"),Ee(e,e.lineIndent-1,Ne,!1,!0),O(e,!0,-1),e.checkLineBreaks&&kt.test(e.input.slice(n,e.position))&&Le(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Be(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,O(e,!0,-1));return}if(e.position<e.length-1)_(e,"end of the stream or a document separator is expected");else return}function _i(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new Tt(e,n),t=e.indexOf("\0");for(t!==-1&&(i.position=t,_(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)jt(i);return i.documents}function Pt(e,n,i){n!==null&&typeof n=="object"&&typeof i>"u"&&(i=n,n=null);var t=_i(e,i);if(typeof n!="function")return t;for(var r=0,l=t.length;r<l;r+=1)n(t[r])}function Vt(e,n){var i=_i(e,n);if(i.length!==0){if(i.length===1)return i[0];throw new ge("expected a single document in the stream, but found more")}}var Yt=Pt,Rt=Vt,Ut={loadAll:Yt,load:Rt},Ht=Ut.load;const Gt=e=>({}),Yn=e=>({}),Kt=e=>({}),Rn=e=>({}),zt=e=>({}),Un=e=>({}),Wt=e=>({}),Hn=e=>({}),Qt=e=>({}),Gn=e=>({}),Zt=e=>({}),Kn=e=>({}),Xt=e=>({}),zn=e=>({}),Jt=e=>({}),Wn=e=>({}),el=e=>({}),Qn=e=>({}),nl=e=>({}),Zn=e=>({}),il=e=>({}),Xn=e=>({}),rl=e=>({}),Jn=e=>({}),tl=e=>({}),ei=e=>({}),ll=e=>({}),ni=e=>({}),ol=e=>({}),ii=e=>({});function al(e){let n,i,t,r,l,o,a,u,s,d,f,y,h,b,g,x,F,v,be,N,he,se,_e,fe,me,D,Y,ue,U,G,k;const je=e[1].header,K=M(je,e,e[0],ii),Pe=e[1].alert,z=M(Pe,e,e[0],ni),Ve=e[1].dropdown1,W=M(Ve,e,e[0],ei),Ye=e[1].chart1,Q=M(Ye,e,e[0],Jn),Re=e[1].dropdown2,Z=M(Re,e,e[0],Xn),Ue=e[1].chart2,X=M(Ue,e,e[0],Zn),He=e[1].dropdown3,J=M(He,e,e[0],Qn),Ge=e[1].chart3,ee=M(Ge,e,e[0],Wn),Ke=e[1].dropdown4,ne=M(Ke,e,e[0],zn),ze=e[1].chart4,ie=M(ze,e,e[0],Kn),We=e[1].obplot,re=M(We,e,e[0],Gn),Qe=e[1].slider1,te=M(Qe,e,e[0],Hn),Ze=e[1].slider2,le=M(Ze,e,e[0],Un),Xe=e[1].slider3,oe=M(Xe,e,e[0],Rn),Je=e[1].slider4,ae=M(Je,e,e[0],Yn);return{c(){n=C("div"),i=C("div"),K&&K.c(),t=S(),r=C("div"),z&&z.c(),l=S(),o=C("div"),W&&W.c(),a=S(),u=C("div"),Q&&Q.c(),s=S(),d=C("div"),Z&&Z.c(),f=S(),y=C("div"),X&&X.c(),h=S(),b=C("div"),J&&J.c(),g=S(),x=C("div"),ee&&ee.c(),F=S(),v=C("div"),ne&&ne.c(),be=S(),N=C("div"),ie&&ie.c(),he=S(),se=C("div"),re&&re.c(),_e=S(),fe=C("div"),te&&te.c(),me=S(),D=C("div"),le&&le.c(),Y=S(),ue=C("div"),oe&&oe.c(),U=S(),G=C("div"),ae&&ae.c(),this.h()},l(c){n=E(c,"DIV",{class:!0});var p=I(n);i=E(p,"DIV",{class:!0});var dn=I(i);K&&K.l(dn),dn.forEach(w),t=T(p),r=E(p,"DIV",{class:!0});var pn=I(r);z&&z.l(pn),pn.forEach(w),l=T(p),o=E(p,"DIV",{class:!0});var hn=I(o);W&&W.l(hn),hn.forEach(w),a=T(p),u=E(p,"DIV",{class:!0});var _n=I(u);Q&&Q.l(_n),_n.forEach(w),s=T(p),d=E(p,"DIV",{class:!0});var mn=I(d);Z&&Z.l(mn),mn.forEach(w),f=T(p),y=E(p,"DIV",{class:!0});var gn=I(y);X&&X.l(gn),gn.forEach(w),h=T(p),b=E(p,"DIV",{class:!0});var vn=I(b);J&&J.l(vn),vn.forEach(w),g=T(p),x=E(p,"DIV",{class:!0});var yn=I(x);ee&&ee.l(yn),yn.forEach(w),F=T(p),v=E(p,"DIV",{class:!0});var bn=I(v);ne&&ne.l(bn),bn.forEach(w),be=T(p),N=E(p,"DIV",{class:!0});var wn=I(N);ie&&ie.l(wn),wn.forEach(w),he=T(p),se=E(p,"DIV",{class:!0});var xn=I(se);re&&re.l(xn),xn.forEach(w),_e=T(p),fe=E(p,"DIV",{class:!0});var kn=I(fe);te&&te.l(kn),kn.forEach(w),me=T(p),D=E(p,"DIV",{class:!0});var An=I(D);le&&le.l(An),An.forEach(w),Y=T(p),ue=E(p,"DIV",{class:!0});var Cn=I(ue);oe&&oe.l(Cn),Cn.forEach(w),U=T(p),G=E(p,"DIV",{class:!0});var En=I(G);ae&&ae.l(En),En.forEach(w),p.forEach(w),this.h()},h(){A(i,"class","mx-auto"),A(r,"class",""),A(o,"class","mx-auto"),A(u,"class",""),A(d,"class","mx-auto"),A(y,"class",""),A(b,"class","mx-auto"),A(x,"class",""),A(v,"class","mx-auto"),A(N,"class",""),A(se,"class",""),A(fe,"class",""),A(D,"class",""),A(ue,"class",""),A(G,"class",""),A(n,"class","px-5 py-2 bg-white")},m(c,p){Ie(c,n,p),m(n,i),K&&K.m(i,null),m(n,t),m(n,r),z&&z.m(r,null),m(n,l),m(n,o),W&&W.m(o,null),m(n,a),m(n,u),Q&&Q.m(u,null),m(n,s),m(n,d),Z&&Z.m(d,null),m(n,f),m(n,y),X&&X.m(y,null),m(n,h),m(n,b),J&&J.m(b,null),m(n,g),m(n,x),ee&&ee.m(x,null),m(n,F),m(n,v),ne&&ne.m(v,null),m(n,be),m(n,N),ie&&ie.m(N,null),m(n,he),m(n,se),re&&re.m(se,null),m(n,_e),m(n,fe),te&&te.m(fe,null),m(n,me),m(n,D),le&&le.m(D,null),m(n,Y),m(n,ue),oe&&oe.m(ue,null),m(n,U),m(n,G),ae&&ae.m(G,null),k=!0},p(c,[p]){K&&K.p&&(!k||p&1)&&q(K,je,c,c[0],k?B(je,c[0],p,ol):$(c[0]),ii),z&&z.p&&(!k||p&1)&&q(z,Pe,c,c[0],k?B(Pe,c[0],p,ll):$(c[0]),ni),W&&W.p&&(!k||p&1)&&q(W,Ve,c,c[0],k?B(Ve,c[0],p,tl):$(c[0]),ei),Q&&Q.p&&(!k||p&1)&&q(Q,Ye,c,c[0],k?B(Ye,c[0],p,rl):$(c[0]),Jn),Z&&Z.p&&(!k||p&1)&&q(Z,Re,c,c[0],k?B(Re,c[0],p,il):$(c[0]),Xn),X&&X.p&&(!k||p&1)&&q(X,Ue,c,c[0],k?B(Ue,c[0],p,nl):$(c[0]),Zn),J&&J.p&&(!k||p&1)&&q(J,He,c,c[0],k?B(He,c[0],p,el):$(c[0]),Qn),ee&&ee.p&&(!k||p&1)&&q(ee,Ge,c,c[0],k?B(Ge,c[0],p,Jt):$(c[0]),Wn),ne&&ne.p&&(!k||p&1)&&q(ne,Ke,c,c[0],k?B(Ke,c[0],p,Xt):$(c[0]),zn),ie&&ie.p&&(!k||p&1)&&q(ie,ze,c,c[0],k?B(ze,c[0],p,Zt):$(c[0]),Kn),re&&re.p&&(!k||p&1)&&q(re,We,c,c[0],k?B(We,c[0],p,Qt):$(c[0]),Gn),te&&te.p&&(!k||p&1)&&q(te,Qe,c,c[0],k?B(Qe,c[0],p,Wt):$(c[0]),Hn),le&&le.p&&(!k||p&1)&&q(le,Ze,c,c[0],k?B(Ze,c[0],p,zt):$(c[0]),Un),oe&&oe.p&&(!k||p&1)&&q(oe,Xe,c,c[0],k?B(Xe,c[0],p,Kt):$(c[0]),Rn),ae&&ae.p&&(!k||p&1)&&q(ae,Je,c,c[0],k?B(Je,c[0],p,Gt):$(c[0]),Yn)},i(c){k||(j(K,c),j(z,c),j(W,c),j(Q,c),j(Z,c),j(X,c),j(J,c),j(ee,c),j(ne,c),j(ie,c),j(re,c),j(te,c),j(le,c),j(oe,c),j(ae,c),k=!0)},o(c){P(K,c),P(z,c),P(W,c),P(Q,c),P(Z,c),P(X,c),P(J,c),P(ee,c),P(ne,c),P(ie,c),P(re,c),P(te,c),P(le,c),P(oe,c),P(ae,c),k=!1},d(c){c&&w(n),K&&K.d(c),z&&z.d(c),W&&W.d(c),Q&&Q.d(c),Z&&Z.d(c),X&&X.d(c),J&&J.d(c),ee&&ee.d(c),ne&&ne.d(c),ie&&ie.d(c),re&&re.d(c),te&&te.d(c),le&&le.d(c),oe&&oe.d(c),ae&&ae.d(c)}}}function cl(e,n,i){let{$$slots:t={},$$scope:r}=n;return e.$$set=l=>{"$$scope"in l&&i(0,r=l.$$scope)},[r,t]}class ul extends Me{constructor(n){super(),qe(this,n,cl,al,$e,{})}}function sl(e){let n,i,t,r;return{c(){n=C("form"),i=C("input"),this.h()},l(l){n=E(l,"FORM",{class:!0});var o=I(n);i=E(o,"INPUT",{type:!0,class:!0,placeholder:!0}),o.forEach(w),this.h()},h(){A(i,"type","text"),A(i,"class","block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),A(i,"placeholder",e[0]),A(n,"class","px-[1%] py-[1%] ml-[5.9%]")},m(l,o){Ie(l,n,o),m(n,i),In(i,e[2]),t||(r=[Sn(i,"input",e[8]),Sn(i,"change",e[3])],t=!0)},p(l,[o]){o&1&&A(i,"placeholder",l[0]),o&4&&i.value!==l[2]&&In(i,l[2])},i:Ce,o:Ce,d(l){l&&w(n),t=!1,gi(r)}}}function fl(e,n,i){let t,r=Ce,l=()=>(r(),r=vi(u,g=>i(9,t=g)),u);e.$$.on_destroy.push(()=>r());let o=null,{placeholder:a="textbox"}=n,{change:u=Wi({})}=n;l();let{id:s}=n,{interactions:d={change:u}}=n;function f(){u.isActive&&Fe(u,t={text:o},t)}function y(g){g&&R.is(Array,g)&&g.length&&i(0,a=String(g[0]))}function h(g,x){i(2,o=g),f()}function b(){o=this.value,i(2,o)}return e.$$set=g=>{"placeholder"in g&&i(0,a=g.placeholder),"change"in g&&l(i(1,u=g.change)),"id"in g&&i(4,s=g.id),"interactions"in g&&i(5,d=g.interactions)},[a,u,o,f,s,d,y,h,b]}class dl extends Me{constructor(n){super(),qe(this,n,fl,sl,$e,{placeholder:0,change:1,id:4,interactions:5,render:6,load:7})}get placeholder(){return this.$$.ctx[0]}set placeholder(n){this.$$set({placeholder:n}),Te()}get change(){return this.$$.ctx[1]}set change(n){this.$$set({change:n}),Te()}get id(){return this.$$.ctx[4]}set id(n){this.$$set({id:n}),Te()}get interactions(){return this.$$.ctx[5]}set interactions(n){this.$$set({interactions:n}),Te()}get render(){return this.$$.ctx[6]}get load(){return this.$$.ctx[7]}}function pl(e,n,i){let t,r;on(e,Fn,a=>i(2,t=a)),on(e,On,a=>i(3,r=a));let l=[];function o(a,u){l=a??l,console.log("in query update.... ",a,u),Fe(On,r[u]=l,r);let s={Sep:{start:24,end:27},Oct:{start:27,end:30},Nov:{start:30,end:33}};u=="defaults_q"&&Fe(Fn,t=l.map(d=>({chirps_early:{start:d.chirps_early_first,end:d.chirps_early_last},chirps_late:{start:d.chirps_late_first,end:d.chirps_late_last},vegetation:s[d.evi_month]})),t)}return[o]}class hl extends Me{constructor(n){super(),qe(this,n,pl,null,$e,{render:0})}get render(){return this.$$.ctx[0]}}const _l=Object.freeze(Object.defineProperty({__proto__:null,Alert:Oi,BarGrouped:Fi,Container:ul,CropCal:Di,DropDown:Ni,Header:Ki,Line:Li,Login:Mi,Map:Qi,MatchingTable:qi,MatchingTableBackend:wi,OverlayBackend:xi,QueryBackend:ki,QueryUpdate:hl,Slider:$i,Spinner:zi,Textbox:dl},Symbol.toStringTag,{value:"Module"}));let ml=Ai(_l,ir);function Oe(e,n){if(!e)throw new Error(n)}function gl(e){let n=e.replaceAll(/\$\w+/g,i=>`o['${i.substring(1)}']`);return new Function("o",`return ${n}`)}const mi=Bi(ji(de(Array),de(Object)),Pi(e=>mi(e)),gl);let ln={};class vl{constructor(n,i){this.magic=n,this.config=i,this.backends={},this.interactions={},this.views={},this.viewIdToViews,this.deferred=[],this._deferredMode=!1;const t=l=>o=>{let a=this.magic.backend[l](o);return a.type=l,a};["overlay","duckdb","array","identity"].forEach(l=>this[l]=t(l)),this.root=document.createElement("div"),document.body.appendChild(this.root),this.loadBackends(i.backends??[]),this.loadViews(i.views??[]),this._deferredMode=!0,this.deferred.forEach(l=>l())}defer(n,i){if(this._deferredMode)throw new Error(i);this.deferred.push(n.bind(this))}async init(){for(let n of en(this.backends))n.type=="duckdb"&&await n.init();await this.loadDependencies(this.config.dependencies??[]);for(let n of en(this.backends))switch(n.type){case"array":n.execute();break;case"query":await n.execute();break;case"matching":await n.execute();break}Ci((n,i)=>{var t;(t=this.views[i])==null||t.load(n())},this.magic.dependencies.defaults);for(let n of en(this.backends))n.save&&this.magic.saveBackends(n)}newName(n="name"){return ln[n]=ln[n]??0,`${n}${ln[n]++}`}loadBackends(n){let i=Nn(this.createBackend.bind(this));return Ei(t=>t.type=="duckdb",n).forEach(i),Vi(t=>t.type=="duckdb",n).forEach(i),this}createBackend(n){let i=n.name??(n.type?this.newName(n.type):this.newName("backend"));if(this.backends[i])throw new Error(`Backend ${i} already exists`);let t=null;if(n.type)t=this[n.type](n);else if(n.query)t=this.query(n);else if(n.matching)t=this.matching(n);else{if(n.backend)return this.backends[n.backend];if(n.interaction){t=this.identity();let r=this.interactions[n.interaction];ce(r)&&this.defer(()=>this.createBackend(n),`Interaction ${n.interaction} not found`),t&&r&&this.magic.connect(t,r)}else if(n.array)t=this.array({...n,data:n.array});else throw new Error("Can't initialize backend config:",n)}return Oe(!ce(t),`Backend is null ${t.type}`),Oe(!ce(t.type),`New Backend must have type attr ${JSON.stringify(n)}`),t.save=n.save,this.backends[i]=t,t}matching({name:n,ignore_cols:i,default_func:t,backend:r,matching:l,defaults:o={}}){r=de(String,r)?this.backends[r]:r,n=n??this.newName("matching");let a=this.magic.backend.matching({id:n,backend:r,default_func:t,matching:l,ignore_cols:i,defaults:o});return a.type="matching",a}query({name:n,query:i,defaults:t={},db:r="duckdb"}){r=de(String,r)?this.backends[r]:r,n=n??this.newName("query");let l=this.magic.backend.query({id:n,backend:r,query:i,name:n,defaults:t});return l.type="query",l}loadViews(n){n=n??[];let i=n.map(t=>{let r=this.canonicalizeData(t.data),l=this.makeView(t);return this.views[t.name]=l,this.magic.view(l),l.backends=Yi(l.backends??[],r??[]),l.backends.forEach(o=>{this.magic.render(o,l)}),l});nr(n,i).forEach(([t,r])=>{(t.interactions??[]).forEach(o=>{this.connectInteractions(r,o)})})}connectInteractions(n,{to:i,name:t,type:r,defaults:l}){let o=n.interactions[r];if(ce(o))throw new Error(`Interaction ${r} not found in View ${n.id}`);if(this.interactions[t]=o,ce(l)||this.magic.dependencies.setDefault(n,()=>l),ce(i)||Ii(i)){this.magic.connect(null,o,null);return}(de(Array,i)?i:[i]).forEach(u=>{u=de(String,u)?{backend:u}:u;let s=this.backends[u.backend],d=mi(Ln(["opts","backend","view"],u));if(ce(s)){let f=u.view;if(/\w+\.\d+/.test(f)){let[y,h]=f.split(".");s=this.views[y].backends[parseInt(h)],Oe(!ce(s),`Backend not found ${f}`)}else{let y=this.views[f];ce(y)&&this.defer(()=>this.connectInteractions(n,{to:u,name:t,type:r,defaults:l}),`Interaction references nonexistent backend ${u.backend} and view ${f}`),s=this.identity(),this.magic.render(s,y)}}this.magic.connect(s,o,d)})}makeView(n){let i=n.type,t=Ln(["data","interactions"],n);t.id=t.id??t.name??this.newName(i);let r=null;n.selector?r=document.querySelector(n.selector):(r=document.createElement("div"),this.root.appendChild(r)),console.log("new View",i,t);let l=new ml[i]({target:r,props:t});return l.el=r,l}canonicalizeData(n){if(de(String,n)){let i=this.backends[n];return Oe(!ce(i),`Backend named ${n} not found`),[i]}return n=de(Array,n)?n:[n],Ri(an(Zi,n[0]),["query","matching","backend","interaction"])||(n=[{array:n}]),n.map(Nn(this.createBackend.bind(this)))}async loadDependencies(n){(n??[]).forEach(({source:i,attr:t,target:r})=>{let l=null;if(l=this.interactions[i],ce(l)&&/\w+\.\w+/.test(i)){let[a,u]=i.split(".");l=this.views[a].interactions[u]}if(ce(l))throw new Error(`Interaction not found ${i}`);(de(Array,r)?r:[r]).forEach(async a=>{a=de(String,a)?{view:a}:a;let u=a.view,s=this.views[u];if(ce(s))throw new Error("View not found: ",u);let d;if(an("function")(a.defaults)){let f=await this.backends[a.defaults.backend].execute();d=new Function("e","a",a.defaults.function).bind(f)}else d=a.defaults?()=>a.defaults:null;this.magic.dependencies.add(l.get(t),s,null,d)})})}}const yl=`backends:
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
`;function bl(e){let n,i,t,r,l,o,a,u,s,d,f,y,h,b,g,x,F,v,be,N,he,se,_e,fe,me;return{c(){n=C("div"),i=S(),t=C("div"),r=C("div"),l=C("div"),o=S(),a=C("div"),u=S(),s=C("div"),d=C("div"),f=S(),y=C("div"),h=S(),b=C("div"),g=S(),x=C("div"),F=S(),v=C("div"),be=S(),N=C("div"),he=C("div"),se=S(),_e=C("div"),fe=S(),me=C("div"),this.h()},l(D){n=E(D,"DIV",{id:!0}),I(n).forEach(w),i=T(D),t=E(D,"DIV",{class:!0});var Y=I(t);r=E(Y,"DIV",{class:!0});var ue=I(r);l=E(ue,"DIV",{id:!0}),I(l).forEach(w),o=T(ue),a=E(ue,"DIV",{id:!0}),I(a).forEach(w),ue.forEach(w),u=T(Y),s=E(Y,"DIV",{});var U=I(s);d=E(U,"DIV",{id:!0}),I(d).forEach(w),f=T(U),y=E(U,"DIV",{id:!0}),I(y).forEach(w),h=T(U),b=E(U,"DIV",{id:!0}),I(b).forEach(w),g=T(U),x=E(U,"DIV",{id:!0}),I(x).forEach(w),F=T(U),v=E(U,"DIV",{id:!0}),I(v).forEach(w),U.forEach(w),be=T(Y),N=E(Y,"DIV",{});var G=I(N);he=E(G,"DIV",{id:!0}),I(he).forEach(w),se=T(G),_e=E(G,"DIV",{id:!0}),I(_e).forEach(w),fe=T(G),me=E(G,"DIV",{id:!0}),I(me).forEach(w),G.forEach(w),Y.forEach(w),this.h()},h(){A(n,"id","alert"),A(l,"id","login"),A(a,"id","dropdown-1"),A(r,"class","col-span-2"),A(d,"id","chart-1"),A(y,"id","chart-2"),A(b,"id","slider-1"),A(x,"id","slider-2"),A(v,"id","slider-3"),A(he,"id","chart-3"),A(_e,"id","dropdown-2"),A(me,"id","chart-4"),A(t,"class","grid grid-cols-2")},m(D,Y){Ie(D,n,Y),Ie(D,i,Y),Ie(D,t,Y),m(t,r),m(r,l),m(r,o),m(r,a),m(t,u),m(t,s),m(s,d),m(s,f),m(s,y),m(s,h),m(s,b),m(s,g),m(s,x),m(s,F),m(s,v),m(t,be),m(t,N),m(N,he),m(N,se),m(N,_e),m(N,fe),m(N,me)},p:Ce,i:Ce,o:Ce,d(D){D&&w(n),D&&w(i),D&&w(t)}}}function wl(e,n,i){let t;on(e,Tn,s=>i(1,t=s));let r=Gi;const l=new r("https://rightful-anteater-150.convex.cloud");l.mutation("saveParams"),l.query("getParams");let o=Ht(yl,"utf8");console.log(o),Fe(Tn,t=new Si,t);let a=new Ui(t),u;return yi(async()=>{(o.backends??[]).forEach(s=>{s.type==="matching"?s.matching=Hi:an(s.name)(Dn)&&(s.query=Dn[s.name].query)}),(o.views??[]).forEach(s=>{s.type==="Login"&&(s.magic=a,s.exportFunc="saveToConvex",s.importFunc="getFromConvex",s.client=l)}),u=new vl(a,o),await u.init()}),[]}class Tl extends Me{constructor(n){super(),qe(this,n,wl,bl,$e,{})}}export{Tl as default};
