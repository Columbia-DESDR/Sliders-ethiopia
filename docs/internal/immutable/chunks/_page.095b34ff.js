import{S as Ne,i as Le,s as Me,J as N,g as C,k as S,l as E,m as I,d as k,q as T,r as A,a as an,v as g,K as L,L as M,M as q,t as $,b as B,T as Ie,O as En,P as In,n as Ae,Q as gi,U as vi,R as Te,c as tn,o as yi}from"./index.9400ea7e.js";import{_ as bi,c as ri,M as wi,O as xi,Q as ki,d as Ai,e as fe,g as Sn,h as Ci,j as Ei,k as le,l as Ii,B as Si,b as Tn}from"./index.b0fde9f5.js";import{d as Ti,q as On,w as Fn,B as Oi,b as Fi,D as Di,a as Ni,L as Li,c as Mi,S as qi,i as $i,e as Bi,m as ji,r as Pi,g as Vi,h as Yi,j as ln,M as Ri,f as Ui,C as Hi}from"./http_client.970de600.js";import{H as Gi,S as Ki}from"./Header.349bdd45.js";import{w as zi}from"./paths.860aebba.js";import{M as Wi}from"./Map.a94fb7bd.js";import{m as Dn}from"./model_out.448f9c31.js";const Qi={"@@functional/placeholder":!0};var Zi=bi(function(n){return Ti(n.length,n)});const Nn=Zi;var Xi=ri(function(n,i){for(var t={},r={},l=0,o=n.length;l<o;)r[n[l]]=1,l+=1;for(var a in i)r.hasOwnProperty(a)||(t[a]=i[a]);return t});const Ln=Xi;var Ji=ri(function(n,i){for(var t=[],r=0,l=Math.min(n.length,i.length);r<l;)t[r]=[n[r],i[r]],r+=1;return t});const er=Ji,nr=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function ti(e){return typeof e>"u"||e===null}function ir(e){return typeof e=="object"&&e!==null}function rr(e){return Array.isArray(e)?e:ti(e)?[]:[e]}function tr(e,n){var i,t,r,l;if(n)for(l=Object.keys(n),i=0,t=l.length;i<t;i+=1)r=l[i],e[r]=n[r];return e}function lr(e,n){var i="",t;for(t=0;t<n;t+=1)i+=e;return i}function or(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var ar=ti,cr=ir,ur=rr,sr=lr,fr=or,dr=tr,j={isNothing:ar,isObject:cr,toArray:ur,repeat:sr,isNegativeZero:fr,extend:dr};function li(e,n){var i="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(i+=`

`+e.mark.snippet),t+" "+i):t}function Ee(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=li(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ee.prototype=Object.create(Error.prototype);Ee.prototype.constructor=Ee;Ee.prototype.toString=function(n){return this.name+": "+li(this,n)};var me=Ee;function Je(e,n,i,t,r){var l="",o="",a=Math.floor(r/2)-1;return t-n>a&&(l=" ... ",n=t-a+l.length),i-t>a&&(o=" ...",i=t+a-o.length),{str:l+e.slice(n,i).replace(/\t/g,"→")+o,pos:t-n+l.length}}function en(e,n){return j.repeat(" ",n-e.length)+e}function pr(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var i=/\r?\n|\r|\0/g,t=[0],r=[],l,o=-1;l=i.exec(e.buffer);)r.push(l.index),t.push(l.index+l[0].length),e.position<=l.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var a="",u,f,d=Math.min(e.line+n.linesAfter,r.length).toString().length,s=n.maxLength-(n.indent+d+3);for(u=1;u<=n.linesBefore&&!(o-u<0);u++)f=Je(e.buffer,t[o-u],r[o-u],e.position-(t[o]-t[o-u]),s),a=j.repeat(" ",n.indent)+en((e.line-u+1).toString(),d)+" | "+f.str+`
`+a;for(f=Je(e.buffer,t[o],r[o],e.position,s),a+=j.repeat(" ",n.indent)+en((e.line+1).toString(),d)+" | "+f.str+`
`,a+=j.repeat("-",n.indent+d+3+f.pos)+`^
`,u=1;u<=n.linesAfter&&!(o+u>=r.length);u++)f=Je(e.buffer,t[o+u],r[o+u],e.position-(t[o]-t[o+u]),s),a+=j.repeat(" ",n.indent)+en((e.line+u+1).toString(),d)+" | "+f.str+`
`;return a.replace(/\n$/,"")}var hr=pr,_r=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],mr=["scalar","sequence","mapping"];function gr(e){var n={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(t){n[String(t)]=i})}),n}function vr(e,n){if(n=n||{},Object.keys(n).forEach(function(i){if(_r.indexOf(i)===-1)throw new me('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(i){return i},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=gr(n.styleAliases||null),mr.indexOf(this.kind)===-1)throw new me('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var D=vr;function Mn(e,n){var i=[];return e[n].forEach(function(t){var r=i.length;i.forEach(function(l,o){l.tag===t.tag&&l.kind===t.kind&&l.multi===t.multi&&(r=o)}),i[r]=t}),i}function yr(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,i;function t(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,i=arguments.length;n<i;n+=1)arguments[n].forEach(t);return e}function on(e){return this.extend(e)}on.prototype.extend=function(n){var i=[],t=[];if(n instanceof D)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(i=i.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new me("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(l){if(!(l instanceof D))throw new me("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new me("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new me("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(l){if(!(l instanceof D))throw new me("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(on.prototype);return r.implicit=(this.implicit||[]).concat(i),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=Mn(r,"implicit"),r.compiledExplicit=Mn(r,"explicit"),r.compiledTypeMap=yr(r.compiledImplicit,r.compiledExplicit),r};var br=on,wr=new D("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),xr=new D("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),kr=new D("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Ar=new br({explicit:[wr,xr,kr]});function Cr(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Er(){return null}function Ir(e){return e===null}var Sr=new D("tag:yaml.org,2002:null",{kind:"scalar",resolve:Cr,construct:Er,predicate:Ir,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Tr(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Or(e){return e==="true"||e==="True"||e==="TRUE"}function Fr(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Dr=new D("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Tr,construct:Or,predicate:Fr,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Nr(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Lr(e){return 48<=e&&e<=55}function Mr(e){return 48<=e&&e<=57}function qr(e){if(e===null)return!1;var n=e.length,i=0,t=!1,r;if(!n)return!1;if(r=e[i],(r==="-"||r==="+")&&(r=e[++i]),r==="0"){if(i+1===n)return!0;if(r=e[++i],r==="b"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!Nr(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!Lr(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;i<n;i++)if(r=e[i],r!=="_"){if(!Mr(e.charCodeAt(i)))return!1;t=!0}return!(!t||r==="_")}function $r(e){var n=e,i=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(i=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return i*parseInt(n.slice(2),2);if(n[1]==="x")return i*parseInt(n.slice(2),16);if(n[1]==="o")return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)}function Br(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!j.isNegativeZero(e)}var jr=new D("tag:yaml.org,2002:int",{kind:"scalar",resolve:qr,construct:$r,predicate:Br,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Pr=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Vr(e){return!(e===null||!Pr.test(e)||e[e.length-1]==="_")}function Yr(e){var n,i;return n=e.replace(/_/g,"").toLowerCase(),i=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:i*parseFloat(n,10)}var Rr=/^[-+]?[0-9]+e/;function Ur(e,n){var i;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(j.isNegativeZero(e))return"-0.0";return i=e.toString(10),Rr.test(i)?i.replace("e",".e"):i}function Hr(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||j.isNegativeZero(e))}var Gr=new D("tag:yaml.org,2002:float",{kind:"scalar",resolve:Vr,construct:Yr,predicate:Hr,represent:Ur,defaultStyle:"lowercase"}),Kr=Ar.extend({implicit:[Sr,Dr,jr,Gr]}),zr=Kr,oi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),ai=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Wr(e){return e===null?!1:oi.exec(e)!==null||ai.exec(e)!==null}function Qr(e){var n,i,t,r,l,o,a,u=0,f=null,d,s,m;if(n=oi.exec(e),n===null&&(n=ai.exec(e)),n===null)throw new Error("Date resolve error");if(i=+n[1],t=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(i,t,r));if(l=+n[4],o=+n[5],a=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],s=+(n[11]||0),f=(d*60+s)*6e4,n[9]==="-"&&(f=-f)),m=new Date(Date.UTC(i,t,r,l,o,a,u)),f&&m.setTime(m.getTime()-f),m}function Zr(e){return e.toISOString()}var Xr=new D("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Wr,construct:Qr,instanceOf:Date,represent:Zr});function Jr(e){return e==="<<"||e===null}var et=new D("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Jr}),cn=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function nt(e){if(e===null)return!1;var n,i,t=0,r=e.length,l=cn;for(i=0;i<r;i++)if(n=l.indexOf(e.charAt(i)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function it(e){var n,i,t=e.replace(/[\r\n=]/g,""),r=t.length,l=cn,o=0,a=[];for(n=0;n<r;n++)n%4===0&&n&&(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)),o=o<<6|l.indexOf(t.charAt(n));return i=r%4*6,i===0?(a.push(o>>16&255),a.push(o>>8&255),a.push(o&255)):i===18?(a.push(o>>10&255),a.push(o>>2&255)):i===12&&a.push(o>>4&255),new Uint8Array(a)}function rt(e){var n="",i=0,t,r,l=e.length,o=cn;for(t=0;t<l;t++)t%3===0&&t&&(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]),i=(i<<8)+e[t];return r=l%3,r===0?(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]):r===2?(n+=o[i>>10&63],n+=o[i>>4&63],n+=o[i<<2&63],n+=o[64]):r===1&&(n+=o[i>>2&63],n+=o[i<<4&63],n+=o[64],n+=o[64]),n}function tt(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var lt=new D("tag:yaml.org,2002:binary",{kind:"scalar",resolve:nt,construct:it,predicate:tt,represent:rt}),ot=Object.prototype.hasOwnProperty,at=Object.prototype.toString;function ct(e){if(e===null)return!0;var n=[],i,t,r,l,o,a=e;for(i=0,t=a.length;i<t;i+=1){if(r=a[i],o=!1,at.call(r)!=="[object Object]")return!1;for(l in r)if(ot.call(r,l))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function ut(e){return e!==null?e:[]}var st=new D("tag:yaml.org,2002:omap",{kind:"sequence",resolve:ct,construct:ut}),ft=Object.prototype.toString;function dt(e){if(e===null)return!0;var n,i,t,r,l,o=e;for(l=new Array(o.length),n=0,i=o.length;n<i;n+=1){if(t=o[n],ft.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;l[n]=[r[0],t[r[0]]]}return!0}function pt(e){if(e===null)return[];var n,i,t,r,l,o=e;for(l=new Array(o.length),n=0,i=o.length;n<i;n+=1)t=o[n],r=Object.keys(t),l[n]=[r[0],t[r[0]]];return l}var ht=new D("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:dt,construct:pt}),_t=Object.prototype.hasOwnProperty;function mt(e){if(e===null)return!0;var n,i=e;for(n in i)if(_t.call(i,n)&&i[n]!==null)return!1;return!0}function gt(e){return e!==null?e:{}}var vt=new D("tag:yaml.org,2002:set",{kind:"mapping",resolve:mt,construct:gt}),yt=zr.extend({implicit:[Xr,et],explicit:[lt,st,ht,vt]}),ve=Object.prototype.hasOwnProperty,Oe=1,ci=2,ui=3,Fe=4,nn=1,bt=2,qn=3,wt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,xt=/[\x85\u2028\u2029]/,kt=/[,\[\]\{\}]/,si=/^(?:!|!!|![a-z\-]+!)$/i,fi=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function $n(e){return Object.prototype.toString.call(e)}function de(e){return e===10||e===13}function ye(e){return e===9||e===32}function V(e){return e===9||e===32||e===10||e===13}function xe(e){return e===44||e===91||e===93||e===123||e===125}function At(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Ct(e){return e===120?2:e===117?4:e===85?8:0}function Et(e){return 48<=e&&e<=57?e-48:-1}function Bn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function It(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var di=new Array(256),pi=new Array(256);for(var we=0;we<256;we++)di[we]=Bn(we)?1:0,pi[we]=Bn(we);function St(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||yt,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function hi(e,n){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=hr(i),new me(n,i)}function _(e,n){throw hi(e,n)}function De(e,n){e.onWarning&&e.onWarning.call(null,hi(e,n))}var jn={YAML:function(n,i,t){var r,l,o;n.version!==null&&_(n,"duplication of %YAML directive"),t.length!==1&&_(n,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),r===null&&_(n,"ill-formed argument of the YAML directive"),l=parseInt(r[1],10),o=parseInt(r[2],10),l!==1&&_(n,"unacceptable YAML version of the document"),n.version=t[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&De(n,"unsupported YAML version of the document")},TAG:function(n,i,t){var r,l;t.length!==2&&_(n,"TAG directive accepts exactly two arguments"),r=t[0],l=t[1],si.test(r)||_(n,"ill-formed tag handle (first argument) of the TAG directive"),ve.call(n.tagMap,r)&&_(n,'there is a previously declared suffix for "'+r+'" tag handle'),fi.test(l)||_(n,"ill-formed tag prefix (second argument) of the TAG directive");try{l=decodeURIComponent(l)}catch{_(n,"tag prefix is malformed: "+l)}n.tagMap[r]=l}};function ge(e,n,i,t){var r,l,o,a;if(n<i){if(a=e.input.slice(n,i),t)for(r=0,l=a.length;r<l;r+=1)o=a.charCodeAt(r),o===9||32<=o&&o<=1114111||_(e,"expected valid JSON character");else wt.test(a)&&_(e,"the stream contains non-printable characters");e.result+=a}}function Pn(e,n,i,t){var r,l,o,a;for(j.isObject(i)||_(e,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(i),o=0,a=r.length;o<a;o+=1)l=r[o],ve.call(n,l)||(n[l]=i[l],t[l]=!0)}function ke(e,n,i,t,r,l,o,a,u){var f,d;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),f=0,d=r.length;f<d;f+=1)Array.isArray(r[f])&&_(e,"nested arrays are not supported inside keys"),typeof r=="object"&&$n(r[f])==="[object Object]"&&(r[f]="[object Object]");if(typeof r=="object"&&$n(r)==="[object Object]"&&(r="[object Object]"),r=String(r),n===null&&(n={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(l))for(f=0,d=l.length;f<d;f+=1)Pn(e,n,l[f],i);else Pn(e,n,l,i);else!e.json&&!ve.call(i,r)&&ve.call(n,r)&&(e.line=o||e.line,e.lineStart=a||e.lineStart,e.position=u||e.position,_(e,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(n,r,{configurable:!0,enumerable:!0,writable:!0,value:l}):n[r]=l,delete i[r];return n}function un(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):_(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function O(e,n,i){for(var t=0,r=e.input.charCodeAt(e.position);r!==0;){for(;ye(r);)r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(n&&r===35)do r=e.input.charCodeAt(++e.position);while(r!==10&&r!==13&&r!==0);if(de(r))for(un(e),r=e.input.charCodeAt(e.position),t++,e.lineIndent=0;r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return i!==-1&&t!==0&&e.lineIndent<i&&De(e,"deficient indentation"),t}function qe(e){var n=e.position,i;return i=e.input.charCodeAt(n),!!((i===45||i===46)&&i===e.input.charCodeAt(n+1)&&i===e.input.charCodeAt(n+2)&&(n+=3,i=e.input.charCodeAt(n),i===0||V(i)))}function sn(e,n){n===1?e.result+=" ":n>1&&(e.result+=j.repeat(`
`,n-1))}function Tt(e,n,i){var t,r,l,o,a,u,f,d,s=e.kind,m=e.result,h;if(h=e.input.charCodeAt(e.position),V(h)||xe(h)||h===35||h===38||h===42||h===33||h===124||h===62||h===39||h===34||h===37||h===64||h===96||(h===63||h===45)&&(r=e.input.charCodeAt(e.position+1),V(r)||i&&xe(r)))return!1;for(e.kind="scalar",e.result="",l=o=e.position,a=!1;h!==0;){if(h===58){if(r=e.input.charCodeAt(e.position+1),V(r)||i&&xe(r))break}else if(h===35){if(t=e.input.charCodeAt(e.position-1),V(t))break}else{if(e.position===e.lineStart&&qe(e)||i&&xe(h))break;if(de(h))if(u=e.line,f=e.lineStart,d=e.lineIndent,O(e,!1,-1),e.lineIndent>=n){a=!0,h=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=u,e.lineStart=f,e.lineIndent=d;break}}a&&(ge(e,l,o,!1),sn(e,e.line-u),l=o=e.position,a=!1),ye(h)||(o=e.position+1),h=e.input.charCodeAt(++e.position)}return ge(e,l,o,!1),e.result?!0:(e.kind=s,e.result=m,!1)}function Ot(e,n){var i,t,r;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(ge(e,t,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)t=e.position,e.position++,r=e.position;else return!0;else de(i)?(ge(e,t,r,!0),sn(e,O(e,!1,n)),t=r=e.position):e.position===e.lineStart&&qe(e)?_(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);_(e,"unexpected end of the stream within a single quoted scalar")}function Ft(e,n){var i,t,r,l,o,a;if(a=e.input.charCodeAt(e.position),a!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=t=e.position;(a=e.input.charCodeAt(e.position))!==0;){if(a===34)return ge(e,i,e.position,!0),e.position++,!0;if(a===92){if(ge(e,i,e.position,!0),a=e.input.charCodeAt(++e.position),de(a))O(e,!1,n);else if(a<256&&di[a])e.result+=pi[a],e.position++;else if((o=Ct(a))>0){for(r=o,l=0;r>0;r--)a=e.input.charCodeAt(++e.position),(o=At(a))>=0?l=(l<<4)+o:_(e,"expected hexadecimal character");e.result+=It(l),e.position++}else _(e,"unknown escape sequence");i=t=e.position}else de(a)?(ge(e,i,t,!0),sn(e,O(e,!1,n)),i=t=e.position):e.position===e.lineStart&&qe(e)?_(e,"unexpected end of the document within a double quoted scalar"):(e.position++,t=e.position)}_(e,"unexpected end of the stream within a double quoted scalar")}function Dt(e,n){var i=!0,t,r,l,o=e.tag,a,u=e.anchor,f,d,s,m,h,b=Object.create(null),y,w,F,v;if(v=e.input.charCodeAt(e.position),v===91)d=93,h=!1,a=[];else if(v===123)d=125,h=!0,a={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),v=e.input.charCodeAt(++e.position);v!==0;){if(O(e,!0,n),v=e.input.charCodeAt(e.position),v===d)return e.position++,e.tag=o,e.anchor=u,e.kind=h?"mapping":"sequence",e.result=a,!0;i?v===44&&_(e,"expected the node content, but found ','"):_(e,"missed comma between flow collection entries"),w=y=F=null,s=m=!1,v===63&&(f=e.input.charCodeAt(e.position+1),V(f)&&(s=m=!0,e.position++,O(e,!0,n))),t=e.line,r=e.lineStart,l=e.position,Ce(e,n,Oe,!1,!0),w=e.tag,y=e.result,O(e,!0,n),v=e.input.charCodeAt(e.position),(m||e.line===t)&&v===58&&(s=!0,v=e.input.charCodeAt(++e.position),O(e,!0,n),Ce(e,n,Oe,!1,!0),F=e.result),h?ke(e,a,b,w,y,F,t,r,l):s?a.push(ke(e,null,b,w,y,F,t,r,l)):a.push(y),O(e,!0,n),v=e.input.charCodeAt(e.position),v===44?(i=!0,v=e.input.charCodeAt(++e.position)):i=!1}_(e,"unexpected end of the stream within a flow collection")}function Nt(e,n){var i,t,r=nn,l=!1,o=!1,a=n,u=0,f=!1,d,s;if(s=e.input.charCodeAt(e.position),s===124)t=!1;else if(s===62)t=!0;else return!1;for(e.kind="scalar",e.result="";s!==0;)if(s=e.input.charCodeAt(++e.position),s===43||s===45)nn===r?r=s===43?qn:bt:_(e,"repeat of a chomping mode identifier");else if((d=Et(s))>=0)d===0?_(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?_(e,"repeat of an indentation width identifier"):(a=n+d-1,o=!0);else break;if(ye(s)){do s=e.input.charCodeAt(++e.position);while(ye(s));if(s===35)do s=e.input.charCodeAt(++e.position);while(!de(s)&&s!==0)}for(;s!==0;){for(un(e),e.lineIndent=0,s=e.input.charCodeAt(e.position);(!o||e.lineIndent<a)&&s===32;)e.lineIndent++,s=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>a&&(a=e.lineIndent),de(s)){u++;continue}if(e.lineIndent<a){r===qn?e.result+=j.repeat(`
`,l?1+u:u):r===nn&&l&&(e.result+=`
`);break}for(t?ye(s)?(f=!0,e.result+=j.repeat(`
`,l?1+u:u)):f?(f=!1,e.result+=j.repeat(`
`,u+1)):u===0?l&&(e.result+=" "):e.result+=j.repeat(`
`,u):e.result+=j.repeat(`
`,l?1+u:u),l=!0,o=!0,u=0,i=e.position;!de(s)&&s!==0;)s=e.input.charCodeAt(++e.position);ge(e,i,e.position,!1)}return!0}function Vn(e,n){var i,t=e.tag,r=e.anchor,l=[],o,a=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_(e,"tab characters must not be used in indentation")),!(u!==45||(o=e.input.charCodeAt(e.position+1),!V(o))));){if(a=!0,e.position++,O(e,!0,-1)&&e.lineIndent<=n){l.push(null),u=e.input.charCodeAt(e.position);continue}if(i=e.line,Ce(e,n,ui,!1,!0),l.push(e.result),O(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>n)&&u!==0)_(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return a?(e.tag=t,e.anchor=r,e.kind="sequence",e.result=l,!0):!1}function Lt(e,n,i){var t,r,l,o,a,u,f=e.tag,d=e.anchor,s={},m=Object.create(null),h=null,b=null,y=null,w=!1,F=!1,v;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=s),v=e.input.charCodeAt(e.position);v!==0;){if(!w&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,_(e,"tab characters must not be used in indentation")),t=e.input.charCodeAt(e.position+1),l=e.line,(v===63||v===58)&&V(t))v===63?(w&&(ke(e,s,m,h,b,null,o,a,u),h=b=y=null),F=!0,w=!0,r=!0):w?(w=!1,r=!0):_(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,v=t;else{if(o=e.line,a=e.lineStart,u=e.position,!Ce(e,i,ci,!1,!0))break;if(e.line===l){for(v=e.input.charCodeAt(e.position);ye(v);)v=e.input.charCodeAt(++e.position);if(v===58)v=e.input.charCodeAt(++e.position),V(v)||_(e,"a whitespace character is expected after the key-value separator within a block mapping"),w&&(ke(e,s,m,h,b,null,o,a,u),h=b=y=null),F=!0,w=!1,r=!1,h=e.tag,b=e.result;else if(F)_(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=f,e.anchor=d,!0}else if(F)_(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=f,e.anchor=d,!0}if((e.line===l||e.lineIndent>n)&&(w&&(o=e.line,a=e.lineStart,u=e.position),Ce(e,n,Fe,!0,r)&&(w?b=e.result:y=e.result),w||(ke(e,s,m,h,b,y,o,a,u),h=b=y=null),O(e,!0,-1),v=e.input.charCodeAt(e.position)),(e.line===l||e.lineIndent>n)&&v!==0)_(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return w&&ke(e,s,m,h,b,null,o,a,u),F&&(e.tag=f,e.anchor=d,e.kind="mapping",e.result=s),F}function Mt(e){var n,i=!1,t=!1,r,l,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&_(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(i=!0,o=e.input.charCodeAt(++e.position)):o===33?(t=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",n=e.position,i){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(l=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):_(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!V(o);)o===33&&(t?_(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(n-1,e.position+1),si.test(r)||_(e,"named tag handle cannot contain such characters"),t=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);l=e.input.slice(n,e.position),kt.test(l)&&_(e,"tag suffix cannot contain flow indicator characters")}l&&!fi.test(l)&&_(e,"tag name cannot contain such characters: "+l);try{l=decodeURIComponent(l)}catch{_(e,"tag name is malformed: "+l)}return i?e.tag=l:ve.call(e.tagMap,r)?e.tag=e.tagMap[r]+l:r==="!"?e.tag="!"+l:r==="!!"?e.tag="tag:yaml.org,2002:"+l:_(e,'undeclared tag handle "'+r+'"'),!0}function qt(e){var n,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&_(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),n=e.position;i!==0&&!V(i)&&!xe(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&_(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function $t(e){var n,i,t;if(t=e.input.charCodeAt(e.position),t!==42)return!1;for(t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!V(t)&&!xe(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&_(e,"name of an alias node must contain at least one character"),i=e.input.slice(n,e.position),ve.call(e.anchorMap,i)||_(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],O(e,!0,-1),!0}function Ce(e,n,i,t,r){var l,o,a,u=1,f=!1,d=!1,s,m,h,b,y,w;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,l=o=a=Fe===i||ui===i,t&&O(e,!0,-1)&&(f=!0,e.lineIndent>n?u=1:e.lineIndent===n?u=0:e.lineIndent<n&&(u=-1)),u===1)for(;Mt(e)||qt(e);)O(e,!0,-1)?(f=!0,a=l,e.lineIndent>n?u=1:e.lineIndent===n?u=0:e.lineIndent<n&&(u=-1)):a=!1;if(a&&(a=f||r),(u===1||Fe===i)&&(Oe===i||ci===i?y=n:y=n+1,w=e.position-e.lineStart,u===1?a&&(Vn(e,w)||Lt(e,w,y))||Dt(e,y)?d=!0:(o&&Nt(e,y)||Ot(e,y)||Ft(e,y)?d=!0:$t(e)?(d=!0,(e.tag!==null||e.anchor!==null)&&_(e,"alias node should not have any properties")):Tt(e,y,Oe===i)&&(d=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(d=a&&Vn(e,w))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&_(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),s=0,m=e.implicitTypes.length;s<m;s+=1)if(b=e.implicitTypes[s],b.resolve(e.result)){e.result=b.construct(e.result),e.tag=b.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(ve.call(e.typeMap[e.kind||"fallback"],e.tag))b=e.typeMap[e.kind||"fallback"][e.tag];else for(b=null,h=e.typeMap.multi[e.kind||"fallback"],s=0,m=h.length;s<m;s+=1)if(e.tag.slice(0,h[s].tag.length)===h[s].tag){b=h[s];break}b||_(e,"unknown tag !<"+e.tag+">"),e.result!==null&&b.kind!==e.kind&&_(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+b.kind+'", not "'+e.kind+'"'),b.resolve(e.result,e.tag)?(e.result=b.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):_(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||d}function Bt(e){var n=e.position,i,t,r,l=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(O(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(l=!0,o=e.input.charCodeAt(++e.position),i=e.position;o!==0&&!V(o);)o=e.input.charCodeAt(++e.position);for(t=e.input.slice(i,e.position),r=[],t.length<1&&_(e,"directive name must not be less than one character in length");o!==0;){for(;ye(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!de(o));break}if(de(o))break;for(i=e.position;o!==0&&!V(o);)o=e.input.charCodeAt(++e.position);r.push(e.input.slice(i,e.position))}o!==0&&un(e),ve.call(jn,t)?jn[t](e,t,r):De(e,'unknown document directive "'+t+'"')}if(O(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,O(e,!0,-1)):l&&_(e,"directives end mark is expected"),Ce(e,e.lineIndent-1,Fe,!1,!0),O(e,!0,-1),e.checkLineBreaks&&xt.test(e.input.slice(n,e.position))&&De(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&qe(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,O(e,!0,-1));return}if(e.position<e.length-1)_(e,"end of the stream or a document separator is expected");else return}function _i(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new St(e,n),t=e.indexOf("\0");for(t!==-1&&(i.position=t,_(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Bt(i);return i.documents}function jt(e,n,i){n!==null&&typeof n=="object"&&typeof i>"u"&&(i=n,n=null);var t=_i(e,i);if(typeof n!="function")return t;for(var r=0,l=t.length;r<l;r+=1)n(t[r])}function Pt(e,n){var i=_i(e,n);if(i.length!==0){if(i.length===1)return i[0];throw new me("expected a single document in the stream, but found more")}}var Vt=jt,Yt=Pt,Rt={loadAll:Vt,load:Yt},Ut=Rt.load;const Ht=e=>({}),Yn=e=>({}),Gt=e=>({}),Rn=e=>({}),Kt=e=>({}),Un=e=>({}),zt=e=>({}),Hn=e=>({}),Wt=e=>({}),Gn=e=>({}),Qt=e=>({}),Kn=e=>({}),Zt=e=>({}),zn=e=>({}),Xt=e=>({}),Wn=e=>({}),Jt=e=>({}),Qn=e=>({}),el=e=>({}),Zn=e=>({}),nl=e=>({}),Xn=e=>({}),il=e=>({}),Jn=e=>({}),rl=e=>({}),ei=e=>({}),tl=e=>({}),ni=e=>({}),ll=e=>({}),ii=e=>({});function ol(e){let n,i,t,r,l,o,a,u,f,d,s,m,h,b,y,w,F,v,pe,ue,he,se,_e,oe,ae,ce,P,Y,$e,be,x;const Be=e[1].header,U=N(Be,e,e[0],ii),je=e[1].alert,H=N(je,e,e[0],ni),Pe=e[1].dropdown1,G=N(Pe,e,e[0],ei),Ve=e[1].chart1,K=N(Ve,e,e[0],Jn),Ye=e[1].dropdown2,z=N(Ye,e,e[0],Xn),Re=e[1].chart2,W=N(Re,e,e[0],Zn),Ue=e[1].dropdown3,Q=N(Ue,e,e[0],Qn),He=e[1].chart3,Z=N(He,e,e[0],Wn),Ge=e[1].dropdown4,X=N(Ge,e,e[0],zn),Ke=e[1].chart4,J=N(Ke,e,e[0],Kn),ze=e[1].obplot,ee=N(ze,e,e[0],Gn),We=e[1].slider1,ne=N(We,e,e[0],Hn),Qe=e[1].slider2,ie=N(Qe,e,e[0],Un),Ze=e[1].slider3,re=N(Ze,e,e[0],Rn),Xe=e[1].slider4,te=N(Xe,e,e[0],Yn);return{c(){n=C("div"),i=C("div"),U&&U.c(),t=S(),r=C("div"),H&&H.c(),l=S(),o=C("div"),G&&G.c(),a=S(),u=C("div"),K&&K.c(),f=S(),d=C("div"),z&&z.c(),s=S(),m=C("div"),W&&W.c(),h=S(),b=C("div"),Q&&Q.c(),y=S(),w=C("div"),Z&&Z.c(),F=S(),v=C("div"),X&&X.c(),pe=S(),ue=C("div"),J&&J.c(),he=S(),se=C("div"),ee&&ee.c(),_e=S(),oe=C("div"),ne&&ne.c(),ae=S(),ce=C("div"),ie&&ie.c(),P=S(),Y=C("div"),re&&re.c(),$e=S(),be=C("div"),te&&te.c(),this.h()},l(c){n=E(c,"DIV",{class:!0});var p=I(n);i=E(p,"DIV",{class:!0});var fn=I(i);U&&U.l(fn),fn.forEach(k),t=T(p),r=E(p,"DIV",{class:!0});var dn=I(r);H&&H.l(dn),dn.forEach(k),l=T(p),o=E(p,"DIV",{class:!0});var pn=I(o);G&&G.l(pn),pn.forEach(k),a=T(p),u=E(p,"DIV",{class:!0});var hn=I(u);K&&K.l(hn),hn.forEach(k),f=T(p),d=E(p,"DIV",{class:!0});var _n=I(d);z&&z.l(_n),_n.forEach(k),s=T(p),m=E(p,"DIV",{class:!0});var mn=I(m);W&&W.l(mn),mn.forEach(k),h=T(p),b=E(p,"DIV",{class:!0});var gn=I(b);Q&&Q.l(gn),gn.forEach(k),y=T(p),w=E(p,"DIV",{class:!0});var vn=I(w);Z&&Z.l(vn),vn.forEach(k),F=T(p),v=E(p,"DIV",{class:!0});var yn=I(v);X&&X.l(yn),yn.forEach(k),pe=T(p),ue=E(p,"DIV",{class:!0});var bn=I(ue);J&&J.l(bn),bn.forEach(k),he=T(p),se=E(p,"DIV",{class:!0});var wn=I(se);ee&&ee.l(wn),wn.forEach(k),_e=T(p),oe=E(p,"DIV",{class:!0});var xn=I(oe);ne&&ne.l(xn),xn.forEach(k),ae=T(p),ce=E(p,"DIV",{class:!0});var kn=I(ce);ie&&ie.l(kn),kn.forEach(k),P=T(p),Y=E(p,"DIV",{class:!0});var An=I(Y);re&&re.l(An),An.forEach(k),$e=T(p),be=E(p,"DIV",{class:!0});var Cn=I(be);te&&te.l(Cn),Cn.forEach(k),p.forEach(k),this.h()},h(){A(i,"class","mx-auto"),A(r,"class",""),A(o,"class","mx-auto"),A(u,"class",""),A(d,"class","mx-auto"),A(m,"class",""),A(b,"class","mx-auto"),A(w,"class",""),A(v,"class","mx-auto"),A(ue,"class",""),A(se,"class",""),A(oe,"class",""),A(ce,"class",""),A(Y,"class",""),A(be,"class",""),A(n,"class","px-5 py-2 bg-white")},m(c,p){an(c,n,p),g(n,i),U&&U.m(i,null),g(n,t),g(n,r),H&&H.m(r,null),g(n,l),g(n,o),G&&G.m(o,null),g(n,a),g(n,u),K&&K.m(u,null),g(n,f),g(n,d),z&&z.m(d,null),g(n,s),g(n,m),W&&W.m(m,null),g(n,h),g(n,b),Q&&Q.m(b,null),g(n,y),g(n,w),Z&&Z.m(w,null),g(n,F),g(n,v),X&&X.m(v,null),g(n,pe),g(n,ue),J&&J.m(ue,null),g(n,he),g(n,se),ee&&ee.m(se,null),g(n,_e),g(n,oe),ne&&ne.m(oe,null),g(n,ae),g(n,ce),ie&&ie.m(ce,null),g(n,P),g(n,Y),re&&re.m(Y,null),g(n,$e),g(n,be),te&&te.m(be,null),x=!0},p(c,[p]){U&&U.p&&(!x||p&1)&&L(U,Be,c,c[0],x?q(Be,c[0],p,ll):M(c[0]),ii),H&&H.p&&(!x||p&1)&&L(H,je,c,c[0],x?q(je,c[0],p,tl):M(c[0]),ni),G&&G.p&&(!x||p&1)&&L(G,Pe,c,c[0],x?q(Pe,c[0],p,rl):M(c[0]),ei),K&&K.p&&(!x||p&1)&&L(K,Ve,c,c[0],x?q(Ve,c[0],p,il):M(c[0]),Jn),z&&z.p&&(!x||p&1)&&L(z,Ye,c,c[0],x?q(Ye,c[0],p,nl):M(c[0]),Xn),W&&W.p&&(!x||p&1)&&L(W,Re,c,c[0],x?q(Re,c[0],p,el):M(c[0]),Zn),Q&&Q.p&&(!x||p&1)&&L(Q,Ue,c,c[0],x?q(Ue,c[0],p,Jt):M(c[0]),Qn),Z&&Z.p&&(!x||p&1)&&L(Z,He,c,c[0],x?q(He,c[0],p,Xt):M(c[0]),Wn),X&&X.p&&(!x||p&1)&&L(X,Ge,c,c[0],x?q(Ge,c[0],p,Zt):M(c[0]),zn),J&&J.p&&(!x||p&1)&&L(J,Ke,c,c[0],x?q(Ke,c[0],p,Qt):M(c[0]),Kn),ee&&ee.p&&(!x||p&1)&&L(ee,ze,c,c[0],x?q(ze,c[0],p,Wt):M(c[0]),Gn),ne&&ne.p&&(!x||p&1)&&L(ne,We,c,c[0],x?q(We,c[0],p,zt):M(c[0]),Hn),ie&&ie.p&&(!x||p&1)&&L(ie,Qe,c,c[0],x?q(Qe,c[0],p,Kt):M(c[0]),Un),re&&re.p&&(!x||p&1)&&L(re,Ze,c,c[0],x?q(Ze,c[0],p,Gt):M(c[0]),Rn),te&&te.p&&(!x||p&1)&&L(te,Xe,c,c[0],x?q(Xe,c[0],p,Ht):M(c[0]),Yn)},i(c){x||($(U,c),$(H,c),$(G,c),$(K,c),$(z,c),$(W,c),$(Q,c),$(Z,c),$(X,c),$(J,c),$(ee,c),$(ne,c),$(ie,c),$(re,c),$(te,c),x=!0)},o(c){B(U,c),B(H,c),B(G,c),B(K,c),B(z,c),B(W,c),B(Q,c),B(Z,c),B(X,c),B(J,c),B(ee,c),B(ne,c),B(ie,c),B(re,c),B(te,c),x=!1},d(c){c&&k(n),U&&U.d(c),H&&H.d(c),G&&G.d(c),K&&K.d(c),z&&z.d(c),W&&W.d(c),Q&&Q.d(c),Z&&Z.d(c),X&&X.d(c),J&&J.d(c),ee&&ee.d(c),ne&&ne.d(c),ie&&ie.d(c),re&&re.d(c),te&&te.d(c)}}}function al(e,n,i){let{$$slots:t={},$$scope:r}=n;return e.$$set=l=>{"$$scope"in l&&i(0,r=l.$$scope)},[r,t]}class cl extends Ne{constructor(n){super(),Le(this,n,al,ol,Me,{})}}function ul(e){let n,i,t,r;return{c(){n=C("form"),i=C("input"),this.h()},l(l){n=E(l,"FORM",{class:!0});var o=I(n);i=E(o,"INPUT",{type:!0,class:!0,placeholder:!0}),o.forEach(k),this.h()},h(){A(i,"type","text"),A(i,"class","block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),A(i,"placeholder",e[0]),A(n,"class","px-[1%] py-[1%] ml-[5.9%]")},m(l,o){an(l,n,o),g(n,i),En(i,e[2]),t||(r=[In(i,"input",e[8]),In(i,"change",e[3])],t=!0)},p(l,[o]){o&1&&A(i,"placeholder",l[0]),o&4&&i.value!==l[2]&&En(i,l[2])},i:Ae,o:Ae,d(l){l&&k(n),t=!1,gi(r)}}}function sl(e,n,i){let t,r=Ae,l=()=>(r(),r=vi(u,y=>i(9,t=y)),u);e.$$.on_destroy.push(()=>r());let o=null,{placeholder:a="textbox"}=n,{change:u=zi({})}=n;l();let{id:f}=n,{interactions:d={change:u}}=n;function s(){u.isActive&&Te(u,t={text:o},t)}function m(y){y&&R.is(Array,y)&&y.length&&i(0,a=String(y[0]))}function h(y,w){i(2,o=y),s()}function b(){o=this.value,i(2,o)}return e.$$set=y=>{"placeholder"in y&&i(0,a=y.placeholder),"change"in y&&l(i(1,u=y.change)),"id"in y&&i(4,f=y.id),"interactions"in y&&i(5,d=y.interactions)},[a,u,o,s,f,d,m,h,b]}class fl extends Ne{constructor(n){super(),Le(this,n,sl,ul,Me,{placeholder:0,change:1,id:4,interactions:5,render:6,load:7})}get placeholder(){return this.$$.ctx[0]}set placeholder(n){this.$$set({placeholder:n}),Ie()}get change(){return this.$$.ctx[1]}set change(n){this.$$set({change:n}),Ie()}get id(){return this.$$.ctx[4]}set id(n){this.$$set({id:n}),Ie()}get interactions(){return this.$$.ctx[5]}set interactions(n){this.$$set({interactions:n}),Ie()}get render(){return this.$$.ctx[6]}get load(){return this.$$.ctx[7]}}function dl(e,n,i){let t,r;tn(e,Fn,a=>i(2,t=a)),tn(e,On,a=>i(3,r=a));let l=[];function o(a,u){l=a??l,console.log("in query update.... ",a,u),Te(On,r[u]=l,r);let f={Sep:{start:24,end:27},Oct:{start:27,end:30},Nov:{start:30,end:33}};u=="defaults_q"&&Te(Fn,t=l.map(d=>({chirps_early:{start:d.chirps_early_first,end:d.chirps_early_last},chirps_late:{start:d.chirps_late_first,end:d.chirps_late_last},vegetation:f[d.evi_month]})),t)}return[o]}class pl extends Ne{constructor(n){super(),Le(this,n,dl,null,Me,{render:0})}get render(){return this.$$.ctx[0]}}const hl=Object.freeze(Object.defineProperty({__proto__:null,BarGrouped:Oi,Container:cl,CropCal:Fi,DropDown:Di,Header:Gi,Line:Ni,Login:Li,Map:Wi,MatchingTable:Mi,MatchingTableBackend:wi,OverlayBackend:xi,QueryBackend:ki,QueryUpdate:pl,Slider:qi,Spinner:Ki,Textbox:fl},Symbol.toStringTag,{value:"Module"}));let _l=Ai(hl,nr);function Se(e,n){if(!e)throw new Error(n)}function ml(e){let n=e.replaceAll(/\$\w+/g,i=>`o['${i.substring(1)}']`);return new Function("o",`return ${n}`)}const mi=$i(Bi(fe(Array),fe(Object)),ji(e=>mi(e)),ml);let rn={};class gl{constructor(n,i){this.magic=n,this.config=i,this.backends={},this.interactions={},this.views={},this.viewIdToViews,this.deferred=[],this._deferredMode=!1;const t=l=>o=>{let a=this.magic.backend[l](o);return a.type=l,a};["overlay","duckdb","array","identity"].forEach(l=>this[l]=t(l)),this.root=document.createElement("div"),document.body.appendChild(this.root),this.loadBackends(i.backends??[]),this.loadViews(i.views??[]),this._deferredMode=!0,this.deferred.forEach(l=>l())}defer(n,i){if(this._deferredMode)throw new Error(i);this.deferred.push(n.bind(this))}async init(){for(let n of Sn(this.backends))n.type=="duckdb"&&await n.init();await this.loadDependencies(this.config.dependencies??[]);for(let n of Sn(this.backends))switch(n.type){case"array":n.execute();break;case"query":await n.execute();break;case"matching":await n.execute();break}Ci((n,i)=>{var t;(t=this.views[i])==null||t.load(n())},this.magic.dependencies.defaults)}newName(n="name"){return rn[n]=rn[n]??0,`${n}${rn[n]++}`}loadBackends(n){let i=Nn(this.createBackend.bind(this));return Ei(t=>t.type=="duckdb",n).forEach(i),Pi(t=>t.type=="duckdb",n).forEach(i),this}createBackend(n){let i=n.name??(n.type?this.newName(n.type):this.newName("backend"));if(this.backends[i])throw new Error(`Backend ${i} already exists`);let t=null;if(n.type)t=this[n.type](n);else if(n.query)t=this.query(n);else if(n.matching)t=this.matching(n);else{if(n.backend)return this.backends[n.backend];if(n.interaction){t=this.identity();let r=this.interactions[n.interaction];le(r)&&this.defer(()=>this.createBackend(n),`Interaction ${n.interaction} not found`),t&&r&&this.magic.connect(t,r)}else if(n.array)t=this.array({...n,data:n.array});else throw new Error("Can't initialize backend config:",n)}return Se(!le(t),`Backend is null ${t.type}`),Se(!le(t.type),`New Backend must have type attr ${JSON.stringify(n)}`),this.backends[i]=t,t}matching({name:n,ignore_cols:i,default_func:t,backend:r,matching:l,defaults:o={}}){r=fe(String,r)?this.backends[r]:r,n=n??this.newName("matching");let a=this.magic.backend.matching({id:n,backend:r,default_func:t,matching:l,ignore_cols:i,defaults:o});return a.type="matching",a}query({name:n,query:i,defaults:t={},db:r="duckdb"}){r=fe(String,r)?this.backends[r]:r,n=n??this.newName("query");let l=this.magic.backend.query({id:n,backend:r,query:i,name:n,defaults:t});return l.type="query",l}loadViews(n){n=n??[];let i=n.map(t=>{let r=this.canonicalizeData(t.data),l=this.makeView(t);return this.views[t.name]=l,this.magic.view(l),l.backends=Vi(l.backends??[],r??[]),l.backends.forEach(o=>{this.magic.render(o,l)}),l});er(n,i).forEach(([t,r])=>{(t.interactions??[]).forEach(o=>{this.connectInteractions(r,o)})})}connectInteractions(n,{to:i,name:t,type:r,defaults:l}){let o=n.interactions[r];if(le(o))throw new Error(`Interaction ${r} not found in View ${n.id}`);if(this.interactions[t]=o,le(l)||this.magic.dependencies.setDefault(n,()=>l),le(i)||Ii(i)){this.magic.connect(null,o,null);return}(fe(Array,i)?i:[i]).forEach(u=>{u=fe(String,u)?{backend:u}:u;let f=this.backends[u.backend],d=mi(Ln(["opts","backend","view"],u));if(le(f)){let s=u.backend;if(/\w+\.\d+/.test(s)){let[m,h]=s.split(".");f=this.views[m].backends[parseInt(h)],Se(!le(f),`Backend not found ${s}`)}else{let m=this.views[s];le(m)&&this.defer(()=>this.connectInteractions(n,{to:u,name:t,type:r,defaults:l}),`Interaction references nonexistent backend ${u.backend} and view ${s}`),f=this.identity(),this.magic.render(f,m)}}this.magic.connect(f,o,d)})}makeView(n){let i=n.type,t=Ln(["data","interactions"],n);t.id=t.id??t.name??this.newName(i);let r=null;n.selector?r=document.querySelector(n.selector):(r=document.createElement("div"),this.root.appendChild(r)),console.log("new View",i,t);let l=new _l[i]({target:r,props:t});return l.el=r,l}canonicalizeData(n){if(fe(String,n)){let i=this.backends[n];return Se(!le(i),`Backend named ${n} not found`),[i]}return n=fe(Array,n)?n:[n],Yi(ln(Qi,n[0]),["query","matching","backend","interaction"])||(n=[{array:n}]),n.map(Nn(this.createBackend.bind(this)))}async loadDependencies(n){(n??[]).forEach(({source:i,attr:t,target:r})=>{let l=null;if(l=this.interactions[i],le(l)&&/\w+\.\w+/.test(i)){let[a,u]=i.split(".");l=this.views[a].interactions[u]}if(le(l))throw new Error(`Interaction not found ${i}`);(fe(Array,r)?r:[r]).forEach(async a=>{a=fe(String,a)?{view:a}:a;let u=a.view,f=this.views[u];if(le(f))throw new Error("View not found: ",u);let d;if(ln("function")(a.defaults)){let s=await this.backends[a.defaults.backend].execute();d=new Function("e","a",a.defaults.function).bind(s)}else d=a.defaults?()=>a.defaults:null;this.magic.dependencies.add(l.get(t),f,null,d)})})}}const vl=`backends:
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
`;function yl(e){let n,i,t,r,l,o,a,u,f,d,s,m,h,b,y,w,F,v,pe,ue,he,se,_e;return{c(){n=C("div"),i=C("div"),t=C("div"),r=S(),l=C("div"),o=S(),a=C("div"),u=C("div"),f=S(),d=C("div"),s=S(),m=C("div"),h=S(),b=C("div"),y=S(),w=C("div"),F=S(),v=C("div"),pe=C("div"),ue=S(),he=C("div"),se=S(),_e=C("div"),this.h()},l(oe){n=E(oe,"DIV",{class:!0});var ae=I(n);i=E(ae,"DIV",{class:!0});var ce=I(i);t=E(ce,"DIV",{id:!0}),I(t).forEach(k),r=T(ce),l=E(ce,"DIV",{id:!0}),I(l).forEach(k),ce.forEach(k),o=T(ae),a=E(ae,"DIV",{});var P=I(a);u=E(P,"DIV",{id:!0}),I(u).forEach(k),f=T(P),d=E(P,"DIV",{id:!0}),I(d).forEach(k),s=T(P),m=E(P,"DIV",{id:!0}),I(m).forEach(k),h=T(P),b=E(P,"DIV",{id:!0}),I(b).forEach(k),y=T(P),w=E(P,"DIV",{id:!0}),I(w).forEach(k),P.forEach(k),F=T(ae),v=E(ae,"DIV",{});var Y=I(v);pe=E(Y,"DIV",{id:!0}),I(pe).forEach(k),ue=T(Y),he=E(Y,"DIV",{id:!0}),I(he).forEach(k),se=T(Y),_e=E(Y,"DIV",{id:!0}),I(_e).forEach(k),Y.forEach(k),ae.forEach(k),this.h()},h(){A(t,"id","login"),A(l,"id","dropdown-1"),A(i,"class","col-span-2"),A(u,"id","chart-1"),A(d,"id","chart-2"),A(m,"id","slider-1"),A(b,"id","slider-2"),A(w,"id","slider-3"),A(pe,"id","chart-3"),A(he,"id","dropdown-2"),A(_e,"id","chart-4"),A(n,"class","grid grid-cols-2")},m(oe,ae){an(oe,n,ae),g(n,i),g(i,t),g(i,r),g(i,l),g(n,o),g(n,a),g(a,u),g(a,f),g(a,d),g(a,s),g(a,m),g(a,h),g(a,b),g(a,y),g(a,w),g(n,F),g(n,v),g(v,pe),g(v,ue),g(v,he),g(v,se),g(v,_e)},p:Ae,i:Ae,o:Ae,d(oe){oe&&k(n)}}}function bl(e,n,i){let t;tn(e,Tn,m=>i(1,t=m));const r={address:"https://rightful-anteater-150.convex.cloud"};let l=Hi;const o=new l(r),a=o.mutation("saveParams"),u=o.query("getParams");let f=Ut(vl,"utf8");console.log(f),Te(Tn,t=new Si,t);let d=new Ri(t),s;return yi(async()=>{(f.backends??[]).forEach(m=>{m.type==="matching"?m.matching=Ui:ln(m.name)(Dn)&&(m.query=Dn[m.name].query)}),(f.views??[]).forEach(m=>{m.type==="Login"&&(m.magic=d,m.exportToConvex=a,m.importFromConvex=u)}),s=new gl(d,f),await s.init()}),[]}class Sl extends Ne{constructor(n){super(),Le(this,n,bl,yl,Me,{})}}export{Sl as default};
