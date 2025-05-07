import{R as Cn,r as $}from"./index-D4H_InIO.js";import{j as i}from"./jsx-runtime-BO8uF4Og.js";var G=function(){return G=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},G.apply(this,arguments)};function Nn(n,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return n.concat(l||Array.prototype.slice.call(e))}var A="-ms-",Sn="-moz-",O="-webkit-",ai="comm",Gn="rule",ue="decl",Ai="@import",si="@keyframes",Di="@layer",li=Math.abs,fe=String.fromCharCode,oe=Object.assign;function Ei(n,e){return L(n,0)^45?(((e<<2^L(n,0))<<2^L(n,1))<<2^L(n,2))<<2^L(n,3):0}function ci(n){return n.trim()}function J(n,e){return(n=e.exec(n))?n[0]:n}function z(n,e,t){return n.replace(e,t)}function En(n,e,t){return n.indexOf(e,t)}function L(n,e){return n.charCodeAt(e)|0}function un(n,e,t){return n.slice(e,t)}function K(n){return n.length}function di(n){return n.length}function jn(n,e){return e.push(n),n}function Ii(n,e){return n.map(e).join("")}function Se(n,e){return n.filter(function(t){return!J(t,e)})}var Vn=1,fn=1,pi=0,W=0,P=0,gn="";function Un(n,e,t,r,o,l,c,u){return{value:n,root:e,parent:t,type:r,props:o,children:l,line:Vn,column:fn,length:c,return:"",siblings:u}}function tn(n,e){return oe(Un("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function ln(n){for(;n.root;)n=tn(n.root,{children:[n]});jn(n,n.siblings)}function Bi(){return P}function Pi(){return P=W>0?L(gn,--W):0,fn--,P===10&&(fn=1,Vn--),P}function q(){return P=W<pi?L(gn,W++):0,fn++,P===10&&(fn=1,Vn++),P}function an(){return L(gn,W)}function In(){return W}function Wn(n,e){return un(gn,n,e)}function ie(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Li(n){return Vn=fn=1,pi=K(gn=n),W=0,[]}function Ni(n){return gn="",n}function Qn(n){return ci(Wn(W-1,ae(n===91?n+2:n===40?n+1:n)))}function Mi(n){for(;(P=an())&&P<33;)q();return ie(n)>2||ie(P)>3?"":" "}function Ri(n,e){for(;--e&&q()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return Wn(n,In()+(e<6&&an()==32&&q()==32))}function ae(n){for(;q();)switch(P){case n:return W;case 34:case 39:n!==34&&n!==39&&ae(P);break;case 40:n===41&&ae(n);break;case 92:q();break}return W}function Hi(n,e){for(;q()&&n+P!==57;)if(n+P===84&&an()===47)break;return"/*"+Wn(e,W-1)+"*"+fe(n===47?n:q())}function Gi(n){for(;!ie(an());)q();return Wn(n,W)}function Vi(n){return Ni(Bn("",null,null,null,[""],n=Li(n),0,[0],n))}function Bn(n,e,t,r,o,l,c,u,m){for(var p=0,d=0,x=c,w=0,j=0,b=0,S=1,_=1,k=1,C=0,y="",v=o,g=l,h=r,f=y;_;)switch(b=C,C=q()){case 40:if(b!=108&&L(f,x-1)==58){En(f+=z(Qn(C),"&","&\f"),"&\f",li(p?u[p-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:f+=Qn(C);break;case 9:case 10:case 13:case 32:f+=Mi(b);break;case 92:f+=Ri(In()-1,7);continue;case 47:switch(an()){case 42:case 47:jn(Ui(Hi(q(),In()),e,t,m),m);break;default:f+="/"}break;case 123*S:u[p++]=K(f)*k;case 125*S:case 59:case 0:switch(C){case 0:case 125:_=0;case 59+d:k==-1&&(f=z(f,/\f/g,"")),j>0&&K(f)-x&&jn(j>32?ke(f+";",r,t,x-1,m):ke(z(f," ","")+";",r,t,x-2,m),m);break;case 59:f+=";";default:if(jn(h=Ce(f,e,t,p,d,o,u,y,v=[],g=[],x,l),l),C===123)if(d===0)Bn(f,e,h,h,v,l,x,u,g);else switch(w===99&&L(f,3)===110?100:w){case 100:case 108:case 109:case 115:Bn(n,h,h,r&&jn(Ce(n,h,h,0,0,o,u,y,o,v=[],x,g),g),o,g,x,u,r?v:g);break;default:Bn(f,h,h,h,[""],g,0,u,g)}}p=d=j=0,S=k=1,y=f="",x=c;break;case 58:x=1+K(f),j=b;default:if(S<1){if(C==123)--S;else if(C==125&&S++==0&&Pi()==125)continue}switch(f+=fe(C),C*S){case 38:k=d>0?1:(f+="\f",-1);break;case 44:u[p++]=(K(f)-1)*k,k=1;break;case 64:an()===45&&(f+=Qn(q())),w=an(),d=x=K(y=f+=Gi(In())),C++;break;case 45:b===45&&K(f)==2&&(S=0)}}return l}function Ce(n,e,t,r,o,l,c,u,m,p,d,x){for(var w=o-1,j=o===0?l:[""],b=di(j),S=0,_=0,k=0;S<r;++S)for(var C=0,y=un(n,w+1,w=li(_=c[S])),v=n;C<b;++C)(v=ci(_>0?j[C]+" "+y:z(y,/&\f/g,j[C])))&&(m[k++]=v);return Un(n,e,t,o===0?Gn:u,m,p,d,x)}function Ui(n,e,t,r){return Un(n,e,t,ai,fe(Bi()),un(n,2,-2),0,r)}function ke(n,e,t,r,o){return Un(n,e,t,ue,un(n,0,r),un(n,r+1,-1),r,o)}function ui(n,e,t){switch(Ei(n,e)){case 5103:return O+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+n+n;case 4789:return Sn+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return O+n+Sn+n+A+n+n;case 5936:switch(L(n,e+11)){case 114:return O+n+A+z(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return O+n+A+z(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return O+n+A+z(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return O+n+A+n+n;case 6165:return O+n+A+"flex-"+n+n;case 5187:return O+n+z(n,/(\w+).+(:[^]+)/,O+"box-$1$2"+A+"flex-$1$2")+n;case 5443:return O+n+A+"flex-item-"+z(n,/flex-|-self/g,"")+(J(n,/flex-|baseline/)?"":A+"grid-row-"+z(n,/flex-|-self/g,""))+n;case 4675:return O+n+A+"flex-line-pack"+z(n,/align-content|flex-|-self/g,"")+n;case 5548:return O+n+A+z(n,"shrink","negative")+n;case 5292:return O+n+A+z(n,"basis","preferred-size")+n;case 6060:return O+"box-"+z(n,"-grow","")+O+n+A+z(n,"grow","positive")+n;case 4554:return O+z(n,/([^-])(transform)/g,"$1"+O+"$2")+n;case 6187:return z(z(z(n,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),n,"")+n;case 5495:case 3959:return z(n,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(n,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+n+n;case 4200:if(!J(n,/flex-|baseline/))return A+"grid-column-align"+un(n,e)+n;break;case 2592:case 3360:return A+z(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,o){return e=o,J(r.props,/grid-\w+-end/)})?~En(n+(t=t[e].value),"span",0)?n:A+z(n,"-start","")+n+A+"grid-row-span:"+(~En(t,"span",0)?J(t,/\d+/):+J(t,/\d+/)-+J(n,/\d+/))+";":A+z(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return J(r.props,/grid-\w+-start/)})?n:A+z(z(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return z(n,/(.+)-inline(.+)/,O+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(K(n)-1-e>6)switch(L(n,e+1)){case 109:if(L(n,e+4)!==45)break;case 102:return z(n,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Sn+(L(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~En(n,"stretch",0)?ui(z(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return z(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,c,u,m,p){return A+o+":"+l+p+(c?A+o+"-span:"+(u?m:+m-+l)+p:"")+n});case 4949:if(L(n,e+6)===121)return z(n,":",":"+O)+n;break;case 6444:switch(L(n,L(n,14)===45?18:11)){case 120:return z(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(L(n,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+A+"$2box$3")+n;case 100:return z(n,":",":"+A)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(n,"scroll-","scroll-snap-")+n}return n}function Mn(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function Wi(n,e,t,r){switch(n.type){case Di:if(n.children.length)break;case Ai:case ue:return n.return=n.return||n.value;case ai:return"";case si:return n.return=n.value+"{"+Mn(n.children,r)+"}";case Gn:if(!K(n.value=n.props.join(",")))return""}return K(t=Mn(n.children,r))?n.return=n.value+"{"+t+"}":""}function Yi(n){var e=di(n);return function(t,r,o,l){for(var c="",u=0;u<e;u++)c+=n[u](t,r,o,l)||"";return c}}function Zi(n){return function(e){e.root||(e=e.return)&&n(e)}}function qi(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case ue:n.return=ui(n.value,n.length,t);return;case si:return Mn([tn(n,{value:z(n.value,"@","@"+O)})],r);case Gn:if(n.length)return Ii(t=n.props,function(o){switch(J(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ln(tn(n,{props:[z(o,/:(read-\w+)/,":"+Sn+"$1")]})),ln(tn(n,{props:[o]})),oe(n,{props:Se(t,r)});break;case"::placeholder":ln(tn(n,{props:[z(o,/:(plac\w+)/,":"+O+"input-$1")]})),ln(tn(n,{props:[z(o,/:(plac\w+)/,":"+Sn+"$1")]})),ln(tn(n,{props:[z(o,/:(plac\w+)/,A+"input-$1")]})),ln(tn(n,{props:[o]})),oe(n,{props:Se(t,r)});break}return""})}}var Ki={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},V={},hn=typeof process<"u"&&V!==void 0&&(V.REACT_APP_SC_ATTR||V.SC_ATTR)||"data-styled",fi="active",hi="data-styled-version",Yn="6.1.17",he=`/*!sc*/
`,Rn=typeof window<"u"&&"HTMLElement"in window,Xi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&V!==void 0&&V.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&V.REACT_APP_SC_DISABLE_SPEEDY!==""?V.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&V.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&V!==void 0&&V.SC_DISABLE_SPEEDY!==void 0&&V.SC_DISABLE_SPEEDY!==""&&V.SC_DISABLE_SPEEDY!=="false"&&V.SC_DISABLE_SPEEDY),Zn=Object.freeze([]),mn=Object.freeze({});function Ji(n,e,t){return t===void 0&&(t=mn),n.theme!==t.theme&&n.theme||e||t.theme}var mi=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Qi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,na=/(^-|-$)/g;function _e(n){return n.replace(Qi,"-").replace(na,"")}var ea=/(a)(d)/gi,On=52,ze=function(n){return String.fromCharCode(n+(n>25?39:97))};function se(n){var e,t="";for(e=Math.abs(n);e>On;e=e/On|0)t=ze(e%On)+t;return(ze(e%On)+t).replace(ea,"$1-$2")}var ne,xi=5381,dn=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},gi=function(n){return dn(xi,n)};function ta(n){return se(gi(n)>>>0)}function ra(n){return n.displayName||n.name||"Component"}function ee(n){return typeof n=="string"&&!0}var bi=typeof Symbol=="function"&&Symbol.for,yi=bi?Symbol.for("react.memo"):60115,oa=bi?Symbol.for("react.forward_ref"):60112,ia={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sa=((ne={})[oa]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ne[yi]=vi,ne);function Fe(n){return("type"in(e=n)&&e.type.$$typeof)===yi?vi:"$$typeof"in n?sa[n.$$typeof]:ia;var e}var la=Object.defineProperty,ca=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,da=Object.getOwnPropertyDescriptor,pa=Object.getPrototypeOf,Oe=Object.prototype;function wi(n,e,t){if(typeof e!="string"){if(Oe){var r=pa(e);r&&r!==Oe&&wi(n,r,t)}var o=ca(e);$e&&(o=o.concat($e(e)));for(var l=Fe(n),c=Fe(e),u=0;u<o.length;++u){var m=o[u];if(!(m in aa||t&&t[m]||c&&m in c||l&&m in l)){var p=da(e,m);try{la(n,m,p)}catch{}}}}return n}function xn(n){return typeof n=="function"}function me(n){return typeof n=="object"&&"styledComponentId"in n}function on(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Te(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function kn(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function le(n,e,t){if(t===void 0&&(t=!1),!t&&!kn(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=le(n[r],e[r]);else if(kn(e))for(var r in e)n[r]=le(n[r],e[r]);return n}function xe(n,e){Object.defineProperty(n,"toString",{value:e})}function _n(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ua=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;e>=l;)if((l<<=1)<0)throw _n(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(e+1),m=(c=0,t.length);c<m;c++)this.tag.insertRule(u,t[c])&&(this.groupSizes[e]++,u++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),o=r+t;this.groupSizes[e]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),l=o+r,c=o;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(he);return t},n}(),Pn=new Map,Hn=new Map,Ln=1,Tn=function(n){if(Pn.has(n))return Pn.get(n);for(;Hn.has(Ln);)Ln++;var e=Ln++;return Pn.set(n,e),Hn.set(e,n),e},fa=function(n,e){Ln=e+1,Pn.set(n,e),Hn.set(e,n)},ha="style[".concat(hn,"][").concat(hi,'="').concat(Yn,'"]'),ma=new RegExp("^".concat(hn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xa=function(n,e,t){for(var r,o=t.split(","),l=0,c=o.length;l<c;l++)(r=o[l])&&n.registerName(e,r)},ga=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(he),o=[],l=0,c=r.length;l<c;l++){var u=r[l].trim();if(u){var m=u.match(ma);if(m){var p=0|parseInt(m[1],10),d=m[2];p!==0&&(fa(d,p),xa(n,d,m[3]),n.getTag().insertRules(p,o)),o.length=0}else o.push(u)}}},Ae=function(n){for(var e=document.querySelectorAll(ha),t=0,r=e.length;t<r;t++){var o=e[t];o&&o.getAttribute(hn)!==fi&&(ga(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function ba(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ji=function(n){var e=document.head,t=n||e,r=document.createElement("style"),o=function(u){var m=Array.from(u.querySelectorAll("style[".concat(hn,"]")));return m[m.length-1]}(t),l=o!==void 0?o.nextSibling:null;r.setAttribute(hn,fi),r.setAttribute(hi,Yn);var c=ba();return c&&r.setAttribute("nonce",c),t.insertBefore(r,l),r},ya=function(){function n(e){this.element=ji(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var c=r[o];if(c.ownerNode===t)return c}throw _n(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),va=function(){function n(e){this.element=ji(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),wa=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),De=Rn,ja={isServer:!Rn,useCSSOMInjection:!Xi},Si=function(){function n(e,t,r){e===void 0&&(e=mn),t===void 0&&(t={});var o=this;this.options=G(G({},ja),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Rn&&De&&(De=!1,Ae(this)),xe(this,function(){return function(l){for(var c=l.getTag(),u=c.length,m="",p=function(x){var w=function(k){return Hn.get(k)}(x);if(w===void 0)return"continue";var j=l.names.get(w),b=c.getGroup(x);if(j===void 0||!j.size||b.length===0)return"continue";var S="".concat(hn,".g").concat(x,'[id="').concat(w,'"]'),_="";j!==void 0&&j.forEach(function(k){k.length>0&&(_+="".concat(k,","))}),m+="".concat(b).concat(S,'{content:"').concat(_,'"}').concat(he)},d=0;d<u;d++)p(d);return m}(o)})}return n.registerId=function(e){return Tn(e)},n.prototype.rehydrate=function(){!this.server&&Rn&&Ae(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(G(G({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,o=t.target;return t.isServer?new wa(o):r?new ya(o):new va(o)}(this.options),new ua(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Tn(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Tn(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Tn(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Sa=/&/g,Ca=/^\s*\/\/.*$/gm;function Ci(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Ci(t.children,e)),t})}function ka(n){var e,t,r,o=mn,l=o.options,c=l===void 0?mn:l,u=o.plugins,m=u===void 0?Zn:u,p=function(w,j,b){return b.startsWith(t)&&b.endsWith(t)&&b.replaceAll(t,"").length>0?".".concat(e):w},d=m.slice();d.push(function(w){w.type===Gn&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Sa,t).replace(r,p))}),c.prefix&&d.push(qi),d.push(Wi);var x=function(w,j,b,S){j===void 0&&(j=""),b===void 0&&(b=""),S===void 0&&(S="&"),e=S,t=j,r=new RegExp("\\".concat(t,"\\b"),"g");var _=w.replace(Ca,""),k=Vi(b||j?"".concat(b," ").concat(j," { ").concat(_," }"):_);c.namespace&&(k=Ci(k,c.namespace));var C=[];return Mn(k,Yi(d.concat(Zi(function(y){return C.push(y)})))),C};return x.hash=m.length?m.reduce(function(w,j){return j.name||_n(15),dn(w,j.name)},xi).toString():"",x}var _a=new Si,ce=ka(),ki=Cn.createContext({shouldForwardProp:void 0,styleSheet:_a,stylis:ce});ki.Consumer;Cn.createContext(void 0);function Ee(){return $.useContext(ki)}var za=function(){function n(e,t){var r=this;this.inject=function(o,l){l===void 0&&(l=ce);var c=r.name+l.hash;o.hasNameForId(r.id,c)||o.insertRules(r.id,c,l(r.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,xe(this,function(){throw _n(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ce),this.name+e.hash},n}(),Fa=function(n){return n>="A"&&n<="Z"};function Ie(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;Fa(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var _i=function(n){return n==null||n===!1||n===""},zi=function(n){var e,t,r=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!_i(l)&&(Array.isArray(l)&&l.isCss||xn(l)?r.push("".concat(Ie(o),":"),l,";"):kn(l)?r.push.apply(r,Nn(Nn(["".concat(o," {")],zi(l),!1),["}"],!1)):r.push("".concat(Ie(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Ki||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function sn(n,e,t,r){if(_i(n))return[];if(me(n))return[".".concat(n.styledComponentId)];if(xn(n)){if(!xn(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return sn(o,e,t,r)}var l;return n instanceof za?t?(n.inject(t,r),[n.getName(r)]):[n]:kn(n)?zi(n):Array.isArray(n)?Array.prototype.concat.apply(Zn,n.map(function(c){return sn(c,e,t,r)})):[n.toString()]}function $a(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(xn(t)&&!me(t))return!1}return!0}var Oa=gi(Yn),Ta=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$a(e),this.componentId=t,this.baseHash=dn(Oa,t),this.baseStyle=r,Si.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=on(o,this.staticRulesId);else{var l=Te(sn(this.rules,e,t,r)),c=se(dn(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var u=r(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,u)}o=on(o,c),this.staticRulesId=c}else{for(var m=dn(this.baseHash,r.hash),p="",d=0;d<this.rules.length;d++){var x=this.rules[d];if(typeof x=="string")p+=x;else if(x){var w=Te(sn(x,e,t,r));m=dn(m,w+d),p+=w}}if(p){var j=se(m>>>0);t.hasNameForId(this.componentId,j)||t.insertRules(this.componentId,j,r(p,".".concat(j),void 0,this.componentId)),o=on(o,j)}}return o},n}(),Fi=Cn.createContext(void 0);Fi.Consumer;var te={};function Aa(n,e,t){var r=me(n),o=n,l=!ee(n),c=e.attrs,u=c===void 0?Zn:c,m=e.componentId,p=m===void 0?function(v,g){var h=typeof v!="string"?"sc":_e(v);te[h]=(te[h]||0)+1;var f="".concat(h,"-").concat(ta(Yn+h+te[h]));return g?"".concat(g,"-").concat(f):f}(e.displayName,e.parentComponentId):m,d=e.displayName,x=d===void 0?function(v){return ee(v)?"styled.".concat(v):"Styled(".concat(ra(v),")")}(n):d,w=e.displayName&&e.componentId?"".concat(_e(e.displayName),"-").concat(e.componentId):e.componentId||p,j=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,b=e.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;b=function(v,g){return S(v,g)&&_(v,g)}}else b=S}var k=new Ta(t,w,r?o.componentStyle:void 0);function C(v,g){return function(h,f,F){var E=h.attrs,N=h.componentStyle,M=h.defaultProps,D=h.foldedComponentIds,T=h.styledComponentId,H=h.target,I=Cn.useContext(Fi),R=Ee(),B=h.shouldForwardProp||R.shouldForwardProp,Q=Ji(f,I,M)||mn,U=function(zn,yn,Fn){for(var vn,rn=G(G({},yn),{className:void 0,theme:Fn}),Jn=0;Jn<zn.length;Jn+=1){var $n=xn(vn=zn[Jn])?vn(rn):vn;for(var en in $n)rn[en]=en==="className"?on(rn[en],$n[en]):en==="style"?G(G({},rn[en]),$n[en]):$n[en]}return yn.className&&(rn.className=on(rn.className,yn.className)),rn}(E,f,Q),Y=U.as||H,bn={};for(var nn in U)U[nn]===void 0||nn[0]==="$"||nn==="as"||nn==="theme"&&U.theme===Q||(nn==="forwardedAs"?bn.as=U.forwardedAs:B&&!B(nn,Y)||(bn[nn]=U[nn]));var je=function(zn,yn){var Fn=Ee(),vn=zn.generateAndInjectStyles(yn,Fn.styleSheet,Fn.stylis);return vn}(N,U),Xn=on(D,T);return je&&(Xn+=" "+je),U.className&&(Xn+=" "+U.className),bn[ee(Y)&&!mi.has(Y)?"class":"className"]=Xn,F&&(bn.ref=F),$.createElement(Y,bn)}(y,v,g)}C.displayName=x;var y=Cn.forwardRef(C);return y.attrs=j,y.componentStyle=k,y.displayName=x,y.shouldForwardProp=b,y.foldedComponentIds=r?on(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=w,y.target=r?o.target:n,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(g){for(var h=[],f=1;f<arguments.length;f++)h[f-1]=arguments[f];for(var F=0,E=h;F<E.length;F++)le(g,E[F],!0);return g}({},o.defaultProps,v):v}}),xe(y,function(){return".".concat(y.styledComponentId)}),l&&wi(y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Be(n,e){for(var t=[n[0]],r=0,o=e.length;r<o;r+=1)t.push(e[r],n[r+1]);return t}var Pe=function(n){return Object.assign(n,{isCss:!0})};function cn(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(xn(n)||kn(n))return Pe(sn(Be(Zn,Nn([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?sn(r):Pe(sn(Be(r,e)))}function de(n,e,t){if(t===void 0&&(t=mn),!e)throw _n(1,e);var r=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return n(e,t,cn.apply(void 0,Nn([o],l,!1)))};return r.attrs=function(o){return de(n,e,G(G({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return de(n,e,G(G({},t),o))},r}var $i=function(n){return de(Aa,n)},a=$i;mi.forEach(function(n){a[n]=$i(n)});var pe=function(e,t){return pe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])},pe(e,t)};function ge(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");pe(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var X=function(){return X=Object.assign||function(t){for(var r,o=1,l=arguments.length;o<l;o++){r=arguments[o];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},X.apply(this,arguments)};function Z(n,e,t){if(t||arguments.length===2)for(var r=0,o=e.length,l;r<o;r++)(l||!(r in e))&&(l||(l=Array.prototype.slice.call(e,0,r)),l[r]=e[r]);return n.concat(l||Array.prototype.slice.call(e))}function s(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var be=a.button(Le||(Le=s([`
  box-sizing: border-box;
  padding: .5rem 1.125rem;
  border: 2px solid `,`;
  font-size:  `,`;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(230 230 230);
    border-color: rgb(230 230 230);
    color: rgb(120 120 120);
  }

  &:focus {
    outline: 1.5px solid rgba(0 0 0 / .25);
  }
`],[`
  box-sizing: border-box;
  padding: .5rem 1.125rem;
  border: 2px solid `,`;
  font-size:  `,`;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(230 230 230);
    border-color: rgb(230 230 230);
    color: rgb(120 120 120);
  }

  &:focus {
    outline: 1.5px solid rgba(0 0 0 / .25);
  }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});a(be)(Ne||(Ne=s([`
  background-color: `,`;
  color: `,`;

  &:hover:not(:disabled) {
    background-color: `,`;
    border-color: `,`;
  }
`],[`
  background-color: `,`;
  color: `,`;

  &:hover:not(:disabled) {
    background-color: `,`;
    border-color: `,`;
  }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"},function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"});a(be)(Me||(Me=s([`
  background-color: transparent;
  color: `,`;

  &:hover:not(:disabled) {
    background-color: `,`;
  }
`],[`
  background-color: transparent;
  color: `,`;

  &:hover:not(:disabled) {
    background-color: `,`;
  }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.tint.tint20:"rgba(86 180 227 / 0.2)"});a(be)(Re||(Re=s([`
  background-color: transparent;
  color: `,`;

  border: none;

  &:focus{
    outline: none;
  }

  &:active{
    color: `,`;
  }

  &:disabled{
    color:rgb(150 150 150);
    background-color: transparent;  
  }
`],[`
  background-color: transparent;
  color: `,`;

  border: none;

  &:focus{
    outline: none;
  }

  &:active{
    color: `,`;
  }

  &:disabled{
    color:rgb(150 150 150);
    background-color: transparent;  
  }
`])),function(n){return n.theme.colors?n.theme.colors.accent.light:"#FF9AA5"},function(n){return n.theme.colors?n.theme.colors.accent.tint.tint80:"rgba(255 94 111 / 0.8)"});var Le,Ne,Me,Re;function Da(n){return function(e){ge(t,e);function t(r){var o=e.call(this,r)||this;return o.name=n,o}return t}(Error)}Da("InvalidButtonTypeError");a.table(He||(He=s([`
  border-collapse: collapse;
  width: 100%;
`],[`
  border-collapse: collapse;
  width: 100%;
`])));a.td(Ge||(Ge=s([`
  text-align: left;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`],[`
  text-align: left;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`])),function(n){return 100/(Number(n.$numberofflights)+1)});a.td(Ve||(Ve=s([`
  text-align: center;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`],[`
  text-align: center;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`])),function(n){return 100/(Number(n.$numberofflights)+1)});var He,Ge,Ve,pn="#cccccc99";a.table(Ue||(Ue=s([`
  width: `,`;
  position: relative;

  border-collapse: separate;
  border-spacing: 0;
`],[`
  width: `,`;
  position: relative;

  border-collapse: separate;
  border-spacing: 0;
`])),function(n){var e=n.$width;return e!==void 0&&e});a.tr(We||(We=s([`
  border-top: `,`;
  border-bottom: `,`;
  background-color: `,`;

  `,`

  `,`
  `,`
  `,`
  `,`
`],[`
  border-top: `,`;
  border-bottom: `,`;
  background-color: `,`;

  `,`

  `,`
  `,`
  `,`
  `,`
`])),function(n){var e=n.$borderTop;return e===!0?"1px solid ".concat(pn):""},function(n){var e=n.$borderBottom;return e===!0?"1px solid ".concat(pn):""},function(n){var e=n.$backgroundColor;return e!==void 0&&e},function(n){var e=n.$stickyPos,t=n.$stickyVal,r=n.$backgroundColor;return e!==void 0&&t!==void 0&&cn({position:"sticky",zIndex:1,width:"100%",backgroundColor:r!==void 0?r:"white"})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="top"&&t!==void 0&&cn({top:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="bottom"&&t!==void 0&&cn({bottom:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="left"&&t!==void 0&&cn({left:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="right"&&t!==void 0&&cn({right:t})});a.td(Ye||(Ye=s([`
  background-color: `,`;
  border-left: `,`;
  border-right: `,`;
  border-top: `,`;
  border-bottom: `,`;
`],[`
  background-color: `,`;
  border-left: `,`;
  border-right: `,`;
  border-top: `,`;
  border-bottom: `,`;
`])),function(n){var e=n.$backgroundColor;return e!==void 0&&e},function(n){var e=n.$borderLeft;return e===!0?"1px solid ".concat(pn):""},function(n){var e=n.$borderRight;return e===!0?"1px solid ".concat(pn):""},function(n){var e=n.$borderTop;return e===!0?"1px solid ".concat(pn):""},function(n){var e=n.$borderBottom;return e===!0?"1px solid ".concat(pn):""});a.div(Ze||(Ze=s([`
  display: `,`;

  place-items: `,`;

  width: `,`;
  margin-inline: auto;
  padding-inline: `,`;
  padding-block: `,`;
  text-align: `,`;
  color: rgba(10 10 10 / .85);

  &, & * {
    font-size:  `,`;
  }
`],[`
  display: `,`;

  place-items: `,`;

  width: `,`;
  margin-inline: auto;
  padding-inline: `,`;
  padding-block: `,`;
  text-align: `,`;
  color: rgba(10 10 10 / .85);

  &, & * {
    font-size:  `,`;
  }
`])),function(n){var e=n.$alignment;return e!==void 0&&"grid"},function(n){var e=n.$alignment;return e!==void 0&&(e==="left"?"start":e==="right"?"end":"center")},function(n){var e=n.$width;return e!==void 0&&e},function(n){var e=n.$paddingInline;return e!==void 0&&e},function(n){var e=n.$paddingBlock;return e!==void 0&&e},function(n){var e=n.$alignment;return e!==void 0&&e},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var Ue,We,Ye,Ze,Ea=a.input(qe||(qe=s([`
  border: 1px solid `,`;
  padding: `,`;
  width: 100%;
  height: 35px;
  margin-top: 10px;  
  font: `,`;
  font-size: `,`;
`],[`
  border: 1px solid `,`;
  padding: `,`;
  width: 100%;
  height: 35px;
  margin-top: 10px;  
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.paddings?n.theme.paddings.medium:"10px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),qe,Ia=function(e){if(!e)return"  -  -    ";var t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return"".concat(o,"-").concat(r,"-").concat(t)},Ba=function(e){var t=e.split("-").map(Number),r=t[0],o=t[1],l=t[2],c=new Date(r,o-1,l);return c.setHours(0,0,0,0),c};function Pa(n){var e=n.dateDefault,t=e===void 0?new Date:e,r=n.dataTestId,o=r===void 0?"date-picker":r,l=n.onDateSelected,c=l===void 0?void 0:l,u=$.useRef(null),m=$.useState(t),p=m[0],d=m[1],x=function(j){var b=j.target.value,S=Ba(b);d(S),c&&c(S)};return i.jsx(Ea,{type:"date","data-testid":o,value:Ia(p),onChange:x,ref:u})}a.div(Ke||(Ke=s([`
    height: 100%;
    position: default;
    align-items: center;
`],[`
    height: 100%;
    position: default;
    align-items: center;
`])));a.button(Xe||(Xe=s([`
    border: none;
    background-color: transparent;
    font-weight: 1000;
    color: `,`;
    width: 150px;
    align-items: center;
    height: 100%;
    &:hover {
        background-color: `,`;
    }
`],[`
    border: none;
    background-color: transparent;
    font-weight: 1000;
    color: `,`;
    width: 150px;
    align-items: center;
    height: 100%;
    &:hover {
        background-color: `,`;
    }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"});a.div(Je||(Je=s([`
    position: absolute;
    top: 5px;
    height: 160px;
    display: flex;
    flex-direction: column;
    width: 150px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px lightgrey;
`],[`
    position: absolute;
    top: 5px;
    height: 160px;
    display: flex;
    flex-direction: column;
    width: 150px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px lightgrey;
`])));a.button(Qe||(Qe=s([`
    border: none;
    background-color: transparent;
    padding: 5px;
    text-align: left;    
`],[`
    border: none;
    background-color: transparent;
    padding: 5px;
    text-align: left;    
`])));a.div(nt||(nt=s([`
  position: fixed;
  top: `,`px;
  left: `,`px;
  background-color: black;
  color: white;
  font-size: 12px;
  max-width:220px;
  padding: 15px;
  z-index: 1000; 
  transform: translate(-50%, 30%);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%; 
    left: 50%; 
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`],[`
  position: fixed;
  top: `,`px;
  left: `,`px;
  background-color: black;
  color: white;
  font-size: 12px;
  max-width:220px;
  padding: 15px;
  z-index: 1000; 
  transform: translate(-50%, 30%);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%; 
    left: 50%; 
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`])),function(n){var e=n.top;return e},function(n){var e=n.left;return e});var Ke,Xe,Je,Qe,nt;function qn(n){return function(e){ge(t,e);function t(r){var o=e.call(this,r)||this;return o.name=n,o}return t}(Error)}qn("NoChildrenContentError");qn("NoColumnsGivenError");qn("CellsDontMatchColumnsError");qn("NoCellsGivenError");var La=a.input(et||(et=s([`
  border: 1px solid;
  border-color: `,`;
  padding: `,`;
  width: 100%;
  height: 35px;
  margin-top: 10px;  
  font: `,`;
  font-size: `,`;
`],[`
  border: 1px solid;
  border-color: `,`;
  padding: `,`;
  width: 100%;
  height: 35px;
  margin-top: 10px;  
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.paddings?n.theme.paddings.medium:"10px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),et,Na=function(e){if(!e)return"  :  ";var t=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return"".concat(t,":").concat(r)},Ma=function(e){var t=e.split(":").map(Number),r=t[0],o=t[1],l=new Date(0);return l.setUTCHours(r),l.setUTCMinutes(o),l.setUTCSeconds(0),l.setUTCMilliseconds(0),l};function Ra(n){var e=n.timeDefault,t=e===void 0?new Date:e,r=n.dataTestId,o=r===void 0?"time-picker":r,l=n.onTimeSelected,c=$.useRef(null),u=$.useState(t),m=u[0],p=u[1],d=function(w){var j=w.target.value,b=Ma(j);p(b),l==null||l(b)};return i.jsx(La,{type:"time","data-testid":o,value:Na(m),onChange:d,ref:c})}var Ha=a.div(tt||(tt=s([`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 1rem;
`],[`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 1rem;
`]))),Ga=a.span(rt||(rt=s([`
  display: block;
`],[`
  display: block;
`]))),tt,rt;function Al(n){var e=n.carrierCode,t=n.carrierShortName,r=t===void 0?"":t,o=n.showTitle,l=o===void 0?!1:o,c=n.width,u=c===void 0?200:c,m=n.testId,p=m===void 0?"airline-logo":m,d=function(w,j){return i.jsx("img",{"data-testid":p,src:"https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/".concat(w.toUpperCase(),".svg"),alt:j,width:u})};return e===void 0||r===""||r===void 0?i.jsx(Ga,{"data-testid":"".concat(p," unavailable"),children:"Image not available"}):l?i.jsxs(Ha,{children:[d(e,r),i.jsx("h4",{"data-testid":"".concat(p," airline-name"),children:r})]}):d(e,r)}var Va=a.div(at||(at=s([`
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  color: #333;
  margin-left: 0px;
  margin-top: 15px;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;

`],[`
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  color: #333;
  margin-left: 0px;
  margin-top: 15px;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;

`]))),Ua=a.div(st||(st=s([`
  display: flex;  
  flex-wrap: wrap;
  width: 100%;  
  justify-content: space-between;  
`],[`
  display: flex;  
  flex-wrap: wrap;
  width: 100%;  
  justify-content: space-between;  
`]))),Wa=a.div(lt||(lt=s([`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1; /* Permite que el contenedor crezca */
  justify-content: flex-start; /* Alinea a la izquierda */
  flex-direction: row;  
  width: 100%;
`],[`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1; /* Permite que el contenedor crezca */
  justify-content: flex-start; /* Alinea a la izquierda */
  flex-direction: row;  
  width: 100%;
`]))),Ya=a.div(ct||(ct=s([`
  font: `,`;
  font-size: `,`; 
  display: flex;
  justify-content: space-between;  
  background-color: `,`;
  color: #000000;
  border: 1px solid `,`;
  border-radius: 12px;
  padding: 6px 3px 0px 9px;
  gap: 1px;
  font-size: 12px;
  box-sizing: border-box;
  width: 50px;
  height: 25px;
  margin: 3px;
`],[`
  font: `,`;
  font-size: `,`; 
  display: flex;
  justify-content: space-between;  
  background-color: `,`;
  color: #000000;
  border: 1px solid `,`;
  border-radius: 12px;
  padding: 6px 3px 0px 9px;
  gap: 1px;
  font-size: 12px;
  box-sizing: border-box;
  width: 50px;
  height: 25px;
  margin: 3px;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"}),Za=a.button(dt||(dt=s([`
  margin-top: -3px;
  border: none;
  background: none;
  cursor: pointer;
  color: #808080;
  padding: 0px;
`],[`
  margin-top: -3px;
  border: none;
  background: none;
  cursor: pointer;
  color: #808080;
  padding: 0px;
`]))),qa=a.div(pt||(pt=s([`
  display: flex;
  position: relative;
  margin-top: 3px;
  padding: 0px;
  height: 30px;
  width: 100%;  
`],[`
  display: flex;
  position: relative;
  margin-top: 3px;
  padding: 0px;
  height: 30px;
  width: 100%;  
`]))),Ka=a.input(ut||(ut=s([`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  font-size: 12px;
  height: 30px;
  font: `,`;
  font-size: `,`;
`],[`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  font-size: 12px;
  height: 30px;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),Xa=a.div(ft||(ft=s([`
  position: absolute;
  top: 100%; 
  left: 0;
  right: 0;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  scrollbar-width: thin;
  font: `,`;
  font-size: `,`;
`],[`
  position: absolute;
  top: 100%; 
  left: 0;
  right: 0;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  scrollbar-width: thin;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ot=a.div(ht||(ht=s([`  
  padding: 5px 5px 5px 10px;  
  height: 35px;
  display: flex;
  align-items: start;
  justifyContent: center;
  padding-top: 10px;
  cursor: pointer;  
  color: `,`;  
  background-color: `,`;  

  &:hover {
    background-color: `,`;    
  }
`],[`  
  padding: 5px 5px 5px 10px;  
  height: 35px;
  display: flex;
  align-items: start;
  justifyContent: center;
  padding-top: 10px;
  cursor: pointer;  
  color: `,`;  
  background-color: `,`;  

  &:hover {
    background-color: `,`;    
  }
`])),function(n){var e,t,r;return n.isSelected?"#FFFFFF":(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#969332"},function(n){var e,t,r;return n.isSelected?(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#FF5E6F":"#FFFFFF"},function(n){var e,t,r,o;return(o=(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||r===void 0?void 0:r.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"});a.div(mt||(mt=s([`
  display: flex;
  width: 40%;
  font-size: 12px;
  justify-content: space-between;  
`],[`
  display: flex;
  width: 40%;
  font-size: 12px;
  justify-content: space-between;  
`])));var Ja=a.div(xt||(xt=s([`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #cbcbcb;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  min-height: 30px;
  height: auto;  
`],[`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #cbcbcb;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  min-height: 30px;
  height: auto;  
`])));a.button(gt||(gt=s([`
  width: 100%;
  font-size: 12px;
  border: 1px solid #cdcdcd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 35px;
  font: `,`;
  font-size: `,`;

  &:hover {
    background-color: #e6e6e6;
  }
`],[`
  width: 100%;
  font-size: 12px;
  border: 1px solid #cdcdcd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 35px;
  font: `,`;
  font-size: `,`;

  &:hover {
    background-color: #e6e6e6;
  }
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var Qa=a.span(bt||(bt=s([`
  transition: transform 0.2s ease;
  transform: `,`;
`],[`
  transition: transform 0.2s ease;
  transform: `,`;
`])),function(n){var e=n.isOpen;return e?"rotate(180deg)":"rotate(0deg)"});a.ul(yt||(yt=s([`
  position: absolute;
  min-width: 150px;
  margin-top: 5px;
  margin-left: 15px;
  padding: 5px;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font: `,`;
  font-size: `,`;
`],[`
  position: absolute;
  min-width: 150px;
  margin-top: 5px;
  margin-left: 15px;
  padding: 5px;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var ns=a.p(vt||(vt=s([`
  margin-left: 0px;
  margin-top: 5px;
  font-size: 12px;
  font-family: sans-serif;
  display: flex;
  justify-content: flex-start;
  font: `,`;
  font-size: `,`;
`],[`
  margin-left: 0px;
  margin-top: 5px;
  font-size: 12px;
  font-family: sans-serif;
  display: flex;
  justify-content: flex-start;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),es=a.select(wt||(wt=s([`
  font-size: 12px;
  height: 30px;
  border: 1px solid #cbcbcb;
  font: `,`;
  font-size: `,`;  
`],[`
  font-size: 12px;
  height: 30px;
  border: 1px solid #cbcbcb;
  font: `,`;
  font-size: `,`;  
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ts=a.div(jt||(jt=s([`
  width: 15px;
`],[`
  width: 15px;
`]))),it=a.div(St||(St=s([`
  height: 15px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 15px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`]))),rs=a.div(Ct||(Ct=s([`
  display: flex;
  width: 100%;
  justifyContent: space-between;
`],[`
  display: flex;
  width: 100%;
  justifyContent: space-between;
`]))),os=a.div(kt||(kt=s([`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
`]))),An=a.option(_t||(_t=s([`  
  color: `,`;  
  background-color: `,`;  
  font: `,`;
  font-size: `,`;
  
  &:hover {
    color: `,`;
    background-color: `,`;
  }
`],[`  
  color: `,`;  
  background-color: `,`;  
  font: `,`;
  font-size: `,`;
  
  &:hover {
    color: `,`;
    background-color: `,`;
  }
`])),function(n){var e,t,r;return n.isSelected?"#FFFFFF":(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#969332"},function(n){var e,t,r;return n.isSelected?(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#FF5E6F":"#FFFFFF"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){var e,t,r;return(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#969332"},function(n){var e,t,r,o;return(o=(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||r===void 0?void 0:r.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"}),at,st,lt,ct,dt,pt,ut,ft,ht,mt,xt,gt,bt,yt,vt,wt,jt,St,Ct,kt,_t;function is(){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",children:i.jsx("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"})})}function as(){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:"16",height:"16",children:i.jsx("g",{fill:"currentColor",fillRule:"nonzero",children:i.jsx("g",{transform:"scale(9.84615,9.84615)",children:i.jsx("path",{d:"M13,0.1875c-7.07422,0 -12.8125,5.73828 -12.8125,12.8125c0,7.07422 5.73828,12.8125 12.8125,12.8125c7.07422,0 12.8125,-5.73828 12.8125,-12.8125c0,-7.07422 -5.73828,-12.8125 -12.8125,-12.8125zM18.78125,17.39453l-1.39062,1.38672c-0.25391,0.25391 -0.66797,0.25391 -0.92187,0l-3.46875,-3.46875l-3.46875,3.46875c-0.25391,0.25391 -0.66797,0.25391 -0.92187,-0.00391l-1.39062,-1.38281c-0.25,-0.25781 -0.25,-0.66797 0,-0.92578l3.46875,-3.46875l-3.46484,-3.46484c-0.25391,-0.25781 -0.25391,-0.67187 0,-0.92578l1.38672,-1.38672c0.25391,-0.25781 0.67188,-0.25781 0.92578,0l3.46484,3.46484l3.46875,-3.46484c0.25391,-0.25781 0.67188,-0.25781 0.92188,0l1.39063,1.38281c0.25391,0.25781 0.25391,0.67188 0,0.92969l-3.46875,3.46484l3.46875,3.46875c0.25,0.25781 0.25,0.66797 0,0.92578z"})})})})}function ye(){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:i.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 6L6 18M6 6l12 12"})})}function ve(){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:i.jsx("path",{fill:"none",stroke:"gray",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 6L6 18M6 6l12 12"})})}function ss(){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:i.jsx("path",{fill:"gray",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})})}function zt(){return i.jsx("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.93 566.93",width:"20px",height:"20px",fill:"black","stroke-width":"0px",children:i.jsx("path",{d:"m283.46,136.01l-144.88,121.3h35.63v173.61h218.51v-173.61h35.63l-144.88-121.3Zm38.35,218.33c-1.71,4.16-4.1,7.74-7.17,10.76-3.07,3.02-6.76,5.44-11.02,7.26-4.27,1.82-8.91,2.96-13.91,3.42v17.77h-11.44v-17.77c-5.13-.57-9.88-1.9-14.28-4.02-4.38-2.1-8.13-4.89-11.27-8.37-3.13-3.48-5.6-7.58-7.42-12.3-1.82-4.71-2.74-9.98-2.74-15.79h15.55c0,8.2,2.45,14.72,7.34,19.56,4.89,4.84,11.44,7.26,19.64,7.26,6.95,0,12.64-1.82,17.08-5.46,4.43-3.64,6.66-8.6,6.66-14.86,0-3.64-.68-6.67-2.04-9.06-1.38-2.39-3.17-4.41-5.38-6.06-2.22-1.64-4.67-2.96-7.35-3.92-2.67-.97-5.32-1.85-7.94-2.65-5.35-1.71-10.4-3.48-15.12-5.3-4.73-1.82-8.88-4.07-12.47-6.74-3.59-2.68-6.44-6-8.53-9.99-2.11-3.99-3.16-8.99-3.16-15.03,0-4.21.76-8.15,2.29-11.79,1.54-3.64,3.68-6.84,6.41-9.56,2.74-2.74,6.03-4.99,9.91-6.76,3.86-1.77,8.15-2.93,12.82-3.5v-17.77h11.44v17.95c4.78.57,9.1,1.82,12.98,3.75,3.86,1.93,7.2,4.48,9.99,7.6,2.78,3.13,4.98,6.77,6.57,10.93,1.58,4.16,2.39,8.74,2.39,13.75h-15.55c-.11-6.83-2.04-12.29-5.8-16.39-3.77-4.1-9.06-6.16-15.89-6.16s-11.93,1.6-15.97,4.78c-4.05,3.2-6.06,7.58-6.06,13.16,0,3.29.63,6.06,1.88,8.29,1.25,2.21,2.91,4.1,4.95,5.63,2.06,1.54,4.42,2.85,7.09,3.93,2.68,1.08,5.44,2.02,8.28,2.81,4.56,1.49,9.2,3.14,13.93,4.96,4.71,1.82,9.02,4.1,12.89,6.83,3.88,2.74,7.01,6.07,9.4,9.99,2.39,3.93,3.59,8.8,3.59,14.61,0,5.35-.85,10.11-2.56,14.26Z"})})}function ls(){return i.jsxs("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.93 566.93",width:"20px",height:"20px","stroke-width":"0px",fill:"black",children:[i.jsx("path",{d:"m332.45,326.71c-1.22,1.99-2.43,3.95-3.64,5.89-1.24,1.99-2.48,3.96-3.7,5.9,37.65,8.24,64.71,27.15,64.71,48.53,0,28.69-48.7,52.93-106.35,52.93s-106.35-24.24-106.35-52.93c0-21.38,27.06-40.29,64.71-48.53-1.23-1.94-2.46-3.9-3.7-5.9-1.21-1.94-2.43-3.91-3.64-5.89-41.83,10.14-70.37,33.05-70.37,60.32,0,36.97,52.42,65.93,119.35,65.93s119.35-28.96,119.35-65.93c0-27.27-28.53-50.18-70.37-60.32Z"}),i.jsx("path",{d:"m248.05,323.95c1.26,2.03,2.52,4.05,3.77,6.03,1.29,2.05,2.57,4.07,3.84,6.05,11.47,17.94,21.85,32.99,27.81,41.46,5.95-8.47,16.33-23.52,27.81-41.46,1.27-1.98,2.55-4,3.84-6.05,1.25-1.98,2.51-3.99,3.77-6.03,1.63-2.63,3.27-5.3,4.9-8,29.34-48.42,44.84-84.32,44.84-103.82,0-46.96-38.2-85.16-85.16-85.16s-85.16,38.2-85.16,85.16c0,19.5,15.51,55.4,44.84,103.82,1.64,2.7,3.27,5.37,4.9,8Zm35.41-145.41c18.55,0,33.59,15.04,33.59,33.59s-15.04,33.59-33.59,33.59-33.59-15.04-33.59-33.59,15.04-33.59,33.59-33.59Z"})]})}function Ft(){return i.jsxs("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.93 566.93",width:"20px",height:"20px",fill:"black","stroke-width":"0px",children:[i.jsx("polygon",{points:"360.14 271.52 358.79 262.24 306.28 313.89 365.72 426.67 380.55 411.84 364.57 302 360.14 271.52"}),i.jsx("polygon",{points:"308.52 211.72 298.95 210.33 268.47 205.9 158.62 189.92 143.8 204.74 256.55 264.17 308.52 211.72"}),i.jsx("path",{d:"m434.55,136.93l-1.01-1.01c-10.19-8.4-32.07.78-51.15,19.86l-23.73,24.02-19.33,19.02.14.14-70.78,71.6-24.19,24.79-47.43,47.94h-46.69l-14.04,14.04,57.95,18.85,18.85,57.95,14.04-14.04v-46.69l47.94-47.43,24.79-24.19,65.36-64.15,25.4-25.82,24.02-23.73c19.08-19.08,28.26-40.96,19.86-51.15Z"})]})}function Oi(){return i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:i.jsx("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})})}var cs=[{code:"IB",name:"Iberia"},{code:"LO",name:"Lot-Polish"},{code:"LH",name:"Lufthansa"},{code:"1I",name:"NetJets"},{code:"1T",name:"1Time-Airline"},{code:"2B",name:"Aerocondor"}];function Dl(n){var e=n.dataTestId,t=e===void 0?"carriers-filter-picker":e,r=n.onGetData,o=r===void 0?void 0:r,l=n.onCarriersFilterSelected,c=l===void 0?void 0:l,u=n.onCarriersFilterModifierSelected,m=u===void 0?void 0:u,p=$.useState([]),d=p[0],x=p[1],w=$.useState(""),j=w[0],b=w[1],S=$.useState(!1),_=S[0],k=S[1],C=$.useState("Preferred"),y=C[0],v=C[1];$.useEffect(function(){c&&c(d)},[d,c]),$.useEffect(function(){m&&m(y)},[y,m]);var g=function(T){if(o==null){var H=T.toLowerCase(),I=cs.filter(function(B){return B.code.toLowerCase().includes(H)||B.name.toLowerCase().includes(H)}),R=[];return I.forEach(function(B){R.push(B)}),R}else return o(T)},h=function(T){x(function(H){return H.includes(T)?H.filter(function(I){return I!==T}):H.length<5?Z(Z([],H,!0),[T],!1):H}),b(""),k(!1)},f=function(T){x(function(H){return H.filter(function(I){return I!==T})})},F=function(){x([])},E=function(T){b(T.target.value),k(!0)},N=g(j.toLowerCase()),M=function(){return N.length>0?N.map(function(T){return i.jsx(ot,{onClick:function(){return h("".concat(T.code))},"data-testid":"airlineOption-".concat(T.code,"-").concat(T.name),isSelected:d.includes("".concat(T.code)),children:"".concat(T.code," ").concat(T.name)},T.code)}):i.jsx(ot,{isSelected:!1,children:"No airlines available"})};return i.jsxs(Va,{"data-testid":t,children:[i.jsx(ns,{children:"Airlines (Add up to 5 airlines)"}),i.jsx(Ua,{children:i.jsxs(rs,{children:[i.jsxs(Ja,{style:{position:"relative"},children:[i.jsx(Wa,{children:d.map(function(D){return i.jsxs(Ya,{"data-testid":"selected-airline-".concat(D),children:[D,i.jsx(Za,{onClick:function(){return f(D)},"data-testid":"removeButton-".concat(D),children:i.jsx(as,{})})]},D)})}),i.jsxs(qa,{children:[i.jsx(Ka,{type:"text",value:j,onChange:E,onFocus:function(){return k(!0)},placeholder:d.length===0?"Select":"","data-testid":"selector"}),i.jsx(Qa,{isOpen:_,style:{position:"absolute",top:"50%",right:"25px",transform:"translateY(-50%) ".concat(_?"rotate(180deg)":"rotate(0deg)"),pointerEvents:"none"},children:i.jsx(is,{})}),d.length>0?i.jsx(it,{onClick:F,"data-testid":"removeAllButton",children:i.jsx(ye,{})}):i.jsx(it,{"data-testid":"delete-flight-button",children:i.jsx(ve,{})}),_&&i.jsx(Xa,{children:M()})]})]}),i.jsx(ts,{}),i.jsx(os,{children:i.jsxs(es,{id:"carrier-filter-type","data-testid":"carrier-filter-type-selector",onChange:function(T){v(T.target.value)},children:[i.jsx(An,{value:"Preferred","data-testid":"Non-refundable",isSelected:y==="Preferred",children:"Preferred"}),i.jsx(An,{value:"Exclude",isSelected:y==="Exclude",children:"Exclude"}),i.jsx(An,{value:"Only","data-testid":"Fully refundable",isSelected:y==="Only",children:"Only"}),i.jsx(An,{value:"All",isSelected:y==="All",children:"All"})]})})]})})]})}a.button($t||($t=s([`
  background-color:`,`;
  color: white;
  font-weight: 1000;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  outline: none;

  width: 110px;
  position: absolute;
  right: 45%;
  top: 85%;
  box-shadow: 0px 0px 10px lightgrey;

  /* Efecto hover */
  &:hover:enabled {
    background-color:`,`;
  }
`],[`
  background-color:`,`;
  color: white;
  font-weight: 1000;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  outline: none;

  width: 110px;
  position: absolute;
  right: 45%;
  top: 85%;
  box-shadow: 0px 0px 10px lightgrey;

  /* Efecto hover */
  &:hover:enabled {
    background-color:`,`;
  }
`])),function(n){return n.theme.colors.accent.normal},function(n){return n.theme.colors.accent.normal});a.div(Ot||(Ot=s([`
  background-color:`,`;
  color: white;
  font-weight: 1000;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: not-allowed;
  outline: none;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px lightgrey;


  width: 110px;
  position: absolute;
  right: 45%;
  top: 85%;
`],[`
  background-color:`,`;
  color: white;
  font-weight: 1000;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: not-allowed;
  outline: none;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px lightgrey;


  width: 110px;
  position: absolute;
  right: 45%;
  top: 85%;
`])),function(n){return n.theme.colors.secondary.normal});var $t,Ot,ds=a.div(At||(At=s([`
  width:450px;
  table {
    width: 100%;
    border-spacing: 0px;
  }

  tr, td, tbody span, p{
    font-size: `,`;
    font-family: `,`;
  }

  tr {
    padding: 40px 0px;
    border: none;
    margin: 10px;
  }

  td {
    padding: 4px 10px;
  }

  tr:nth-of-type(odd) {
    background-color:#f9f9f9;
  }

  td:nth-of-type(2) {
    text-align: right;
  }

  tr:last-child {
    font-weight: bold;
  }

  p {
    color: `,`;
    margin-top: 10px;
  }

  caption, caption span{
    font-size: `,`;

  caption {
    font-weight: bold;
    text-align: left;
    border-bottom: `," solid ",`;
    padding: 2.5px 0px;
    margin-bottom: 2.5px;
  }

  & .co2-text {
    display: flex;
    justify-content: end;
    align-items: end;
  }

  sub {
    font-size:`,`;
  }
`],[`
  width:450px;
  table {
    width: 100%;
    border-spacing: 0px;
  }

  tr, td, tbody span, p{
    font-size: `,`;
    font-family: `,`;
  }

  tr {
    padding: 40px 0px;
    border: none;
    margin: 10px;
  }

  td {
    padding: 4px 10px;
  }

  tr:nth-of-type(odd) {
    background-color:#f9f9f9;
  }

  td:nth-of-type(2) {
    text-align: right;
  }

  tr:last-child {
    font-weight: bold;
  }

  p {
    color: `,`;
    margin-top: 10px;
  }

  caption, caption span{
    font-size: `,`;

  caption {
    font-weight: bold;
    text-align: left;
    border-bottom: `," solid ",`;
    padding: 2.5px 0px;
    margin-bottom: 2.5px;
  }

  & .co2-text {
    display: flex;
    justify-content: end;
    align-items: end;
  }

  sub {
    font-size:`,`;
  }
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.colors?n.theme.colors.secondary.tint.tint60:"rgba(86 180 227 / 0.6)"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.borders?n.theme.borders.width:"0.3pt"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.fonts?n.theme.fonts.sizes.smallText.size:"10px"}),Tt=a.span.withConfig({shouldForwardProp:function(e){return e!=="highlightColor"}})(Dt||(Dt=s([`
    color: `,`;
`],[`
    color: `,`;
`])),function(n){return n.highlightColor?"#409e4f":"#000000"}),At,Dt;function El(n){var e=n.averageEmissions,t=n.currentEmissions,r=n.testId,o=r===void 0?"emissions-breakdown-table":r,l=t!==null&&t>0||e!==null&&e>0,c=!1,u=function(){var y={variable:"",fixed:"Emissions"};return!m||!p?(m&&(y.variable="Current"),p&&(y.variable="Average")):(e===t&&(y.variable="Typical"),e>t&&(y.variable="Lower"),e<t&&(y.variable="Higher")),y.variable==="Lower"&&(c=!0),y},m=t!==null&&t>0,p=e!==null&&e>0,d=function(){if(l){var y=t-e,v=parseFloat(y.toFixed(2));return v>0?"+".concat(v):"".concat(v)}return"0"},x=function(){if(l){var y=(t-e)/e*100,v=void 0;if(y>0)v="".concat(parseFloat(y.toFixed(2)),"% higher");else if(y<0)v="".concat(parseFloat(Math.abs(y).toFixed(2)),"% lower");else return"0% typical";return v}return""},w=function(y){var v=Number(y),g="".concat(v.toFixed(2));return g.endsWith(".00")?g.slice(0,-3):g},j=d(),b=x(),S=u(),_=function(){return i.jsx("p",{"data-testid":"emissions-alternative-text",children:"Emissions are not available for this flight"})},k=function(){return i.jsxs(ds,{"data-testid":o,children:[i.jsxs("table",{"data-testid":"emissions-table",children:[i.jsxs("caption",{"data-testid":"emissions-table-title",children:[i.jsx(Tt,{highlightColor:c,"data-testid":"emissions-table-variable-title",children:S.variable})," ",S.fixed]}),i.jsxs("tbody",{children:[m&&i.jsxs("tr",{"data-testid":"emissions-table-rows","data-row-name":"currentEmissionsRow",children:[i.jsx("td",{"data-testid":"emissions-table-row1-column1",children:"This journey"}),i.jsx("td",{"data-testid":"emissions-table-row1-column2",children:i.jsx(Tt,{highlightColor:c,"data-testid":"emissions-table-variable-emissions",children:i.jsxs("span",{className:"co2-text",children:[w(t)," kg CO",i.jsx("sub",{children:"2"})]})})})]}),p&&i.jsxs("tr",{"data-testid":"emissions-table-rows","data-row-name":"averageEmissionsRow",children:[i.jsx("td",{"data-testid":"emissions-table-row2-column1",children:"Typical for this route"}),i.jsx("td",{"data-testid":"emissions-table-row2-column2",children:i.jsxs("span",{className:"co2-text",children:[w(e)," kg CO",i.jsx("sub",{children:"2"})]})})]}),p&&m&&i.jsxs("tr",{"data-testid":"emissions-table-rows",children:[i.jsx("td",{"data-testid":"emissions-table-percentage-msg",children:b}),i.jsx("td",{"data-testid":"emissions-table-difference-msg",children:i.jsxs("span",{className:"co2-text",children:[j," kg CO",i.jsx("sub",{children:"2"})]})})]})]})]}),i.jsx("p",{"data-testid":"emissions-table-caption",children:"Emissions are calculated for 1 passanger in this class"})]})};return i.jsx("div",{children:l?k():_()})}var ps=a.div(Bt||(Bt=s([`
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`],[`
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`]))),us=a.div(Pt||(Pt=s([`
  display: flex;
  align-items: center;
  gap: 8px;
`],[`
  display: flex;
  align-items: center;
  gap: 8px;
`]))),fs=a.img(Lt||(Lt=s([`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`],[`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`]))),hs=a.span(Nt||(Nt=s([`
  font-weight: 1000;
  font-size: 0.9em;
`],[`
  font-weight: 1000;
  font-size: 0.9em;
`]))),ms=a.div(Mt||(Mt=s([`
  display: flex;
  flex-direction: column;
`],[`
  display: flex;
  flex-direction: column;
`]))),xs=a.div(Rt||(Rt=s([`
  display: flex;
  align-items: center;
  width: 100%;
`],[`
  display: flex;
  align-items: center;
  width: 100%;
`]))),Et=a.div(Ht||(Ht=s([`
  display: flex;
  flex-direction: column;
  align-items: left;
`],[`
  display: flex;
  flex-direction: column;
  align-items: left;
`]))),It=a.span(Gt||(Gt=s([`
  font-size: 0.8em;
  text-align: center;
`],[`
  font-size: 0.8em;
  text-align: center;
`]))),re=a.span(Vt||(Vt=s([`
  font-size: 0.8em;
  color: gray;
  width: 100%;
  text-align: center;
`],[`
  font-size: 0.8em;
  color: gray;
  width: 100%;
  text-align: center;
`]))),gs=a.div(Ut||(Ut=s([`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;
  width: 38px;
  height: 100%;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;
  width: 38px;
  height: 100%;
`]))),bs=a.span(Wt||(Wt=s([`
  color: black;
  width: 100%;
  font-size: 0.8em;
  text-align: center;
`],[`
  color: black;
  width: 100%;
  font-size: 0.8em;
  text-align: center;
`]))),wn=a.div(Yt||(Yt=s([`
  position: fixed;
  top: `,`px;
  left: `,`px;
  background-color: black;
  color: white;
  font-size: 12px;
  max-width:220px;
  padding: 15px;
  z-index: 1000; 
  transform: translate(-50%, 30%);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%; 
    left: 50%; 
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`],[`
  position: fixed;
  top: `,`px;
  left: `,`px;
  background-color: black;
  color: white;
  font-size: 12px;
  max-width:220px;
  padding: 15px;
  z-index: 1000; 
  transform: translate(-50%, 30%);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%; 
    left: 50%; 
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`])),function(n){var e=n.top;return e},function(n){var e=n.left;return e}),ys=a.div(Zt||(Zt=s([`
  text-align: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 6px;
  margin-left: 6px;
`],[`
  text-align: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 6px;
  margin-left: 6px;
`]))),vs=a.span(qt||(qt=s([`
  font-size: 0.7em;
  width: 16px;
  color: #FF4500;
  opacity: 0.72;
  text-align: center;
`],[`
  font-size: 0.7em;
  width: 16px;
  color: #FF4500;
  opacity: 0.72;
  text-align: center;
`]))),ws=a.span(Kt||(Kt=s([`
  font-size: 0.8em;
  color: gray;
`],[`
  font-size: 0.8em;
  color: gray;
`]))),js=a.div(Xt||(Xt=s([`
  display: flex;
  align-items: left;
  gap: 6px;
`],[`
  display: flex;
  align-items: left;
  gap: 6px;
`]))),Ss=a.span(Jt||(Jt=s([`
  font-size: 0.8em;
`],[`
  font-size: 0.8em;
`]))),Cs=a.div(Qt||(Qt=s([`
  font-size: 0.8em;
  color: blue;
  opacity: 0.6;
`],[`
  font-size: 0.8em;
  color: blue;
  opacity: 0.6;
`]))),ks=a.div(nr||(nr=s([`
  margin-left: -6px;
  font-size: 1em;
  width: fit-content;
  height: fit-content;
  color: `,`;
  opacity: 0.72;
  text-align: center;
`],[`
  margin-left: -6px;
  font-size: 1em;
  width: fit-content;
  height: fit-content;
  color: `,`;
  opacity: 0.72;
  text-align: center;
`])),function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"}),_s=a.div(er||(er=s([`
  border: 1px solid transparent;
  font-size: 0.75em;
  background-color: `,`;
  color: `,`;
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`;
  }
`],[`
  border: 1px solid transparent;
  font-size: 0.75em;
  background-color: `,`;
  color: `,`;
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`;
  }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"}),zs=a.div(tr||(tr=s([`
  border: 1px solid transparent;
  font-size: 0.75em;
  background-color: `,`;
  color: `,`; 
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`; 
  }
`],[`
  border: 1px solid transparent;
  font-size: 0.75em;
  background-color: `,`;
  color: `,`; 
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`; 
  }
`])),function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"},function(n){return n.theme.colors?n.theme.colors.accent.light:"#FF9AA5"},function(n){return n.theme.colors?n.theme.colors.accent.light:"#FF9AA5"}),Bt,Pt,Lt,Nt,Mt,Rt,Ht,Gt,Vt,Ut,Wt,Yt,Zt,qt,Kt,Xt,Jt,Qt,nr,er,tr;function Fs(n){var e=n.fares,t=n.airline,r=n.operatedBy,o=n.flights,l=n.index,c=$.useState(null),u=c[0],m=c[1],p=$.useState(null),d=p[0],x=p[1],w=S(),j=w.moreFlightEmissions,b=w.flightEmissions;function S(){var h=0,f=0;e.forEach(function(N){h+=N.currentEmissions,f+=N.typicalEmissions});var F=h/f*100-100,E=F>0;return F=Math.abs(F),{moreFlightEmissions:E,flightEmissions:"".concat(F.toFixed(0))}}var _=function(f,F){m(f);var E=F.currentTarget.getBoundingClientRect(),N=F.currentTarget.getBoundingClientRect().width||0;x({top:E.bottom,left:E.left+N/2})},k=function(){m(null),x(null)},C=o[0],y=o.slice(1,o.length-1),v=o[o.length-1],g=Os(C.departure.time,v.arrival.time);return i.jsxs(ps,{children:[i.jsxs(us,{children:[i.jsx(fs,{src:"https://gopreprodprivate.wspan.com/sharedservices/images/SPNGImages/Square-".concat(t.code,".svg"),alt:t.name,"data-testid":"airline-logo"}),i.jsx(hs,{"data-testid":"airline-name",onMouseEnter:function(f){return _(3,f)},onMouseLeave:k,children:t.name}),u===3&&d&&t.code!==r.code&&i.jsxs(wn,{top:d.top,left:d.left,"data-testid":"operated-by-dialog",children:["Operated By: ",r.name]}),t.code!=r.code?i.jsx(ks,{children:"*"}):null]}),i.jsx(ms,{children:i.jsxs(xs,{children:[i.jsxs(Et,{children:[i.jsx(It,{"data-testid":"departure-time",children:rr(C.departure.time)}),i.jsx(re,{"data-testid":"departure-airport-code",children:C.origin.code})]}),i.jsxs(gs,{children:[i.jsx(bs,{children:Es(o)}),i.jsx(re,{onMouseEnter:function(f){return _(0,f)},onMouseLeave:k,"data-testid":"middle-airport-codes",children:As(o)}),u===0&&d&&y.length>=1&&i.jsx(wn,{top:d.top,left:d.left,"data-testid":"airport-code-dialog",children:Is(y)})]}),i.jsxs(Et,{children:[i.jsx(It,{"data-testid":"arrival-time",children:rr(v.arrival.time)}),i.jsx(re,{"data-testid":"arrival-airport-code",children:v.destination.code})]}),i.jsxs(ys,{children:[i.jsx(vs,{"data-testid":"next-day-indicator",children:Ds(g)}),i.jsx(ws,{"data-testid":"flight-duration",children:$s(C.departure.time,v.arrival.time)})]})]})}),i.jsxs(js,{children:[i.jsx(Ss,{"data-testid":"flight-number-".concat(l+1),children:C.code}),i.jsx(Cs,{onMouseEnter:function(f){return _(1,f)},onMouseLeave:k,children:Ts(o)}),u===1&&d&&i.jsx(wn,{top:d.top,left:d.left,"data-testid":"flight-code-dialog",children:Bs(o)})]}),j?i.jsxs(_s,{"data-testid":"co2-indicator",onMouseEnter:function(f){return _(2,f)},onMouseLeave:k,children:["+",b,"% CO₂",u===2&&d&&i.jsxs(wn,{top:d.top,left:d.left,"data-testid":"co2-dialog",children:["This flight is ",b,"% higher on CO₂ than the typical for this route"]})]}):i.jsxs(zs,{"data-testid":"co2-indicator",onMouseEnter:function(f){return _(2,f)},onMouseLeave:k,children:["-",b,"% CO₂",u===2&&d&&i.jsxs(wn,{top:d.top,left:d.left,"data-testid":"co2-dialog",children:["This flight is ",b," lower on CO₂ than the typical for this route"]})]})]})}var rr=function(e){var t=new Date(e);return t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})};function $s(n,e){var t=new Date(n),r=new Date(e),o=r.getTime()-t.getTime(),l=Math.floor(o/(1e3*60*60)),c=Math.floor(o%(1e3*60*60)/(1e3*60));return"".concat(l,"h").concat(c,"m")}function Os(n,e){var t=new Date(n),r=new Date(e);return r.getDate()-t.getDate()}function Ts(n){return n.length>1?i.jsx(i.Fragment,{children:i.jsxs("span",{"data-testid":"flight-number-indicator",children:["+",n.length-1]})}):""}function As(n){if(n.length==2){var e=n[1].origin.code;return e}else if(n.length>2){var e="+".concat(n.length-1);return e}else return""}function Ds(n){return n>0?"+".concat(n):""}function Es(n){return n.length==1?Ps:n.length==2?Ls:Ns}function Is(n){for(var e=[],t=0;t<n.length-1;t++)e.push(n[t].origin.code);return e.push(n[n.length-1].origin),e.push(n[n.length-1].destination),e.join(", ")}function Bs(n){for(var e=[],t=1;t<n.length;t++)e.push(n[t].code);return e.join(", ")}var Ps=i.jsx("svg",{focusable:"false",role:"img",viewBox:"0 21 64 18",children:i.jsx("path",{"data-testid":"journey-arrow-default",d:"M58.99 27.47l-1.14 1.13 2.8 2.6h-60.65v1.6h60.93l-2.8 2.6 1.14 1.13 4.73-4.4-5.010-4.66z"})}),Ls=i.jsx("svg",{focusable:"false",role:"img",viewBox:"0 21 64 18",children:i.jsx("path",{"data-testid":"journey-arrow-x",d:"M59 27.495l-1.1 1.13 2.79 2.61-26.6-0.080 1.7-1.68c0.157-0.157 0.255-0.375 0.255-0.615s-0.097-0.458-0.255-0.615v0c-0.158-0.16-0.377-0.26-0.62-0.26s-0.462 0.099-0.62 0.26l-0 0-1.89 1.86c-0.158 0.16-0.377 0.26-0.62 0.26s-0.462-0.099-0.62-0.26l-0-0-1.86-1.89c-0.157-0.157-0.375-0.255-0.615-0.255s-0.458 0.097-0.615 0.255v0c-0.16 0.158-0.26 0.377-0.26 0.62s0.099 0.462 0.26 0.62l0 0 1.67 1.68-30-0.11v1.6l30 0.090-1.7 1.67c-0.157 0.157-0.255 0.375-0.255 0.615s0.097 0.458 0.255 0.615v0c0.158 0.16 0.377 0.26 0.62 0.26s0.462-0.099 0.62-0.26l0-0 1.89-1.86c0.158-0.16 0.377-0.26 0.62-0.26s0.462 0.099 0.62 0.26l0 0 1.86 1.89c0.158 0.16 0.378 0.258 0.62 0.258 0.482 0 0.873-0.391 0.873-0.873 0-0.24-0.097-0.457-0.253-0.615l0 0-1.69-1.72 26.9 0.080-2.8 2.59 1.13 1.14 4.69-4.34z"})}),Ns=i.jsx("svg",{focusable:"false",role:"img",viewBox:"0 21 64 18",children:i.jsx("path",{"data-testid":"journey-arrow-xx",d:"M59 27.465l-1.13 1.13 2.79 2.61-19.6-0.060 1.7-1.68c0.157-0.157 0.255-0.375 0.255-0.615s-0.097-0.458-0.255-0.615v0c-0.158-0.16-0.377-0.26-0.62-0.26s-0.462 0.099-0.62 0.26l-0 0-1.89 1.86c-0.158 0.16-0.377 0.26-0.62 0.26s-0.462-0.099-0.62-0.26l-0-0-1.86-1.89c-0.157-0.157-0.375-0.255-0.615-0.255s-0.458 0.097-0.615 0.255v0c-0.16 0.158-0.26 0.377-0.26 0.62s0.099 0.462 0.26 0.62l0 0 1.7 1.69h-9.93l1.7-1.68c0.157-0.157 0.255-0.375 0.255-0.615s-0.097-0.458-0.255-0.615v0c-0.158-0.16-0.377-0.26-0.62-0.26s-0.462 0.099-0.62 0.26l-0 0-1.89 1.86c-0.158 0.16-0.377 0.26-0.62 0.26s-0.462-0.099-0.62-0.26l-0-0-1.86-1.89c-0.157-0.157-0.375-0.255-0.615-0.255s-0.458 0.097-0.615 0.255v0c-0.16 0.158-0.26 0.377-0.26 0.62s0.099 0.462 0.26 0.62l0 0 1.69 1.65-23-0.090v1.6l22.95 0.070-1.7 1.67c-0.157 0.157-0.255 0.375-0.255 0.615s0.097 0.458 0.255 0.615v0c0.158 0.16 0.377 0.26 0.62 0.26s0.462-0.099 0.62-0.26l0-0 1.89-1.86c0.158-0.16 0.377-0.26 0.62-0.26s0.462 0.099 0.62 0.26l0 0 1.86 1.89c0.158 0.16 0.378 0.258 0.62 0.258 0.482 0 0.873-0.391 0.873-0.873 0-0.24-0.097-0.457-0.253-0.615l0 0-1.72-1.66h9.93l-1.7 1.67c-0.157 0.157-0.255 0.375-0.255 0.615s0.097 0.458 0.255 0.615v0c0.158 0.16 0.377 0.26 0.62 0.26s0.462-0.099 0.62-0.26l0-0 1.89-1.86c0.158-0.16 0.377-0.26 0.62-0.26s0.462 0.099 0.62 0.26l0 0 1.86 1.89c0.158 0.16 0.378 0.258 0.62 0.258 0.482 0 0.873-0.391 0.873-0.873 0-0.24-0.097-0.457-0.253-0.615l0 0-1.7-1.66 19.91 0.060-2.8 2.59 1.13 1.14 4.76-4.4z"})}),Ms=a.div(lr||(lr=s([`
  display: flex;
  flex-direction: column;
`],[`
  display: flex;
  flex-direction: column;
`]))),Rs=a.div(cr||(cr=s([`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`],[`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`]))),or=a.div(dr||(dr=s([`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 0px;
  width: 150px; 
`],[`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 0px;
  width: 150px; 
`]))),ir=a.div(pr||(pr=s([`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`],[`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`]))),ar=a.span(ur||(ur=s([`
  font-size: 0.8em;
  margin-top: 1px;
  margin-bottom: 5px;
  // center text
  text-align: center;
`],[`
  font-size: 0.8em;
  margin-top: 1px;
  margin-bottom: 5px;
  // center text
  text-align: center;
`]))),sr=a.div(fr||(fr=s([`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`],[`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`]))),Hs=a.label(hr||(hr=s([`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  justify-content: center;
`],[`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;
  justify-content: center;
`]))),Gs=a.input(mr||(mr=s([`
  width: 16px;
  height: 16px;
  cursor: pointer;
  appearance: none;
  background-color: `,`;
  border: 1px solid `,`;
 
  &:checked {
    border: 1px solid `,`;
  }

  &:checked::after {
    position: relative;
    top: -1px;
    left: 2px;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border: 3px solid `,`;
  }  
`],[`
  width: 16px;
  height: 16px;
  cursor: pointer;
  appearance: none;
  background-color: `,`;
  border: 1px solid `,`;
 
  &:checked {
    border: 1px solid `,`;
  }

  &:checked::after {
    position: relative;
    top: -1px;
    left: 2px;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border: 3px solid `,`;
  }  
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"},function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"},function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"}),Vs=a.div(xr||(xr=s([`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`],[`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`]))),Us=a.span(gr||(gr=s([`
  font-size: 14px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 28px;
  cursor: pointer;
  background-color: `,`;
  color: #FFFFFF;
  text-align: center;
  border: 1px solid `,`;
  &:hover {
    background-color: `,`;
  }
`],[`
  font-size: 14px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 28px;
  cursor: pointer;
  background-color: `,`;
  color: #FFFFFF;
  text-align: center;
  border: 1px solid `,`;
  &:hover {
    background-color: `,`;
  }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"},function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"}),Ws=a.span(br||(br=s([`
  font-size: 14px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  color: `,`;
  text-align: center;
  border: 1px solid `,`;

  &:hover {
    background-color: `,`;
  }
`],[`
  font-size: 14px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  color: `,`;
  text-align: center;
  border: 1px solid `,`;

  &:hover {
    background-color: `,`;
  }
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"},function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"}),Ys=a.span(yr||(yr=s([`
  font-size: 0.8em;
  // center text
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  font-size: 0.8em;
  // center text
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),Zs=a.svg(vr||(vr=s([`
  width: 20px;
  height: 20px;
  fill: `,`;
  cursor: pointer;
  transition: fill 0.3s ease;
  position: absolute;
`],[`
  width: 20px;
  height: 20px;
  fill: `,`;
  cursor: pointer;
  transition: fill 0.3s ease;
  position: absolute;
`])),function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"}),lr,cr,dr,pr,ur,fr,hr,mr,xr,gr,br,yr,vr;function qs(n){var e=n.route,t=n.index,r=$.useState([!1,!1]),o=r[0],l=r[1];function c(p,d){var x=Z([],o,!0);x[d]=!x[d],x[d]==!0,l(x)}function u(p){}var m=e.fares.length>=2?2:1;return i.jsx(Ms,{children:i.jsxs(Rs,{children:[e.fares.slice(0,m).map(function(p,d){return i.jsxs(or,{"data-testid":"fare-box-".concat(t+1,"-").concat(d),$highlighted:"".concat(d===0),children:[i.jsxs(ir,{children:[i.jsx(ar,{"data-testid":"fare-name-".concat(t+1,"-").concat(d+1),children:p.name}),d===0?i.jsx(Us,{"data-testid":"fare-price-".concat(t+1,"-").concat(p.name),onClick:function(){p.basis},children:wr(p.price)}):i.jsx(Ws,{"data-testid":"fare-price-".concat(t+1,"-").concat(p.name),onClick:function(){p.basis},children:wr(p.price)})]}),i.jsx(sr,{children:i.jsxs(Hs,{children:[i.jsxs(Vs,{children:[i.jsx(Gs,{type:"checkbox","data-testid":"fare-checkbox-".concat(t+1,"-").concat(d+1),onChange:function(){c(p,d)}}),o[d]&&i.jsx(Ks,{})]}),i.jsx(Ys,{children:"Compare"})]},d)})]},p.basis)}),m<2&&i.jsxs(or,{"data-testid":"fare-box-".concat(t+1,"-2"),$highlighted:"false",children:[i.jsxs(ir,{children:[i.jsx(ar,{"data-testid":"fare-name-".concat(t+1,"-2")}),i.jsx("p",{children:"-"})]}),i.jsx(sr,{})]},"missing-fare")]})})}function wr(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(n).trim()}var Ks=function(){return i.jsx(Zs,{viewBox:"-5 0 21 7",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:i.jsx("path",{d:"M1.70711 4.29289C1.31658 3.90237 0.683417 3.90237 0.292893 4.29289C-0.0976311 4.68342 -0.0976311 5.31658 0.292893 5.70711L1.70711 4.29289ZM3 7L2.29289 7.70711C2.68342 8.09763 3.31658 8.09763 3.70711 7.70711L3 7ZM9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L9.70711 1.70711ZM0.292893 5.70711L2.29289 7.70711L3.70711 6.29289L1.70711 4.29289L0.292893 5.70711ZM3.70711 7.70711L9.70711 1.70711L8.29289 0.292893L2.29289 6.29289L3.70711 7.70711Z"})})},Xs=a.div(jr||(jr=s([`
  width: 520px;
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #ddd;
  background-color: `,`;
  position: relative;

  &:hover {
    background-color: `,`;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background-color: `,`;
    pointer-events: none;
  }

  `,`
`],[`
  width: 520px;
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #ddd;
  background-color: `,`;
  position: relative;

  &:hover {
    background-color: `,`;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background-color: `,`;
    pointer-events: none;
  }

  `,`
`])),function(n){return n.selected?n.theme.colors?n.theme.colors.accent.light:"#FF9AA5":n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.selected?n.theme.colors?n.theme.colors.accent.light:"#FF9AA5":n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.selected?n.theme.colors?n.theme.colors.accent.light:"#FF9AA5":n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.selected&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 4px;
      background-color: props.selected ? ((props.theme as DefaultTheme).colors ? (props.theme as DefaultTheme).colors.accent.light : '#FF9AA5') : ((props.theme as DefaultTheme).colors ? (props.theme as DefaultTheme).colors.primary.normal : '#969332')};
      pointer-events: none;
    }
  `}),jr;function Js(n){var e=n.flightData,t=n.index,r=n.selected,o=n.selectCard,l=e.carrier,c=e.flights;function u(){o(t)}return i.jsx(i.Fragment,{children:i.jsxs(Xs,{onClick:u,"data-testid":"flight-card-".concat(t+1),selected:r,children:[i.jsx(Fs,{fares:e.fares,airline:l,operatedBy:c[0].operatedBy,flights:c,index:t}),i.jsx(qs,{route:e,index:t})]})})}a.div(Sr||(Sr=s([`
  font-family: `,`;
  border: `," solid ",`;
  border-radius: 2.5px;
  padding: 12px 10px;
  width:90%;
  p, span{
    font-family: Arial, sans-serif;
    margin: 2.5px;
  }
  p:first-of-type {
    font-weight: bold;
  }
  margin: 10px 10px 10px 14px;
`],[`
  font-family: `,`;
  border: `," solid ",`;
  border-radius: 2.5px;
  padding: 12px 10px;
  width:90%;
  p, span{
    font-family: Arial, sans-serif;
    margin: 2.5px;
  }
  p:first-of-type {
    font-weight: bold;
  }
  margin: 10px 10px 10px 14px;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.borders?n.theme.borders.width:"0.3pt"},function(n){return n.theme.colors?n.theme.colors.primary.softBlackTint.tint20:"rgba(136 136 136 / 0.2)"});var Sr;a.p(Cr||(Cr=s([`
  display: inline-flex;
  align-items: center;
  font-family: `,`;
  background-color: #EFF6FE;
  font-size:  `,`;
  font-weight: bold;
  border-radius: 1mm;
  height: 8mm;
  width: 90%;
  margin-left: 10px;

  svg {
    margin-left: 2mm;
    margin-right: 2mm;
    color: #153E71;
  }

`],[`
  display: inline-flex;
  align-items: center;
  font-family: `,`;
  background-color: #EFF6FE;
  font-size:  `,`;
  font-weight: bold;
  border-radius: 1mm;
  height: 8mm;
  width: 90%;
  margin-left: 10px;

  svg {
    margin-left: 2mm;
    margin-right: 2mm;
    color: #153E71;
  }

`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var Cr;a.div(kr||(kr=s([`
    display: flex;
    width: 100%;
    flex-direction: row;
    content-align: center;
    align-items: center;
    margin: 0px;
    color: #000000;    
`],[`
    display: flex;
    width: 100%;
    flex-direction: row;
    content-align: center;
    align-items: center;
    margin: 0px;
    color: #000000;    
`])));a.p(_r||(_r=s([`
  margin: 0;
  font-size: 0.8em;
`],[`
  margin: 0;
  font-size: 0.8em;
`])));a.button(zr||(zr=s([`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;    
    border: none;    
    background-color: transparent;    
    color: `,`;
    ;
    &:hover {
        background-color: `,`;
    }
`],[`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;    
    border: none;    
    background-color: transparent;    
    color: `,`;
    ;
    &:hover {
        background-color: `,`;
    }
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"});var Qs=a.div(Fr||(Fr=s([`
    margin: 0px;
    scrollbar-width: thin;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    overflow-y: auto;
`],[`
    margin: 0px;
    scrollbar-width: thin;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
    overflow-y: auto;
`])));a.div($r||($r=s([`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`],[`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`])));var nl=a.div(Or||(Or=s([`
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px; 
    background-color: #FFFFFF;
`],[`
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px; 
    background-color: #FFFFFF;
`]))),kr,_r,zr,Fr,$r,Or;function Tr(n){return n.reduce(function(e,t){return t.price<e?t.price:e},n[0].price)}function Il(n){var e=n.routes,t=$.useState([]),r=t[0],o=t[1],l=$.useState(0),c=l[0],u=l[1],m=$.useState(!1);m[0],m[1],$.useEffect(function(){var d=e.map(function(w){return{routeData:w,selected:!1}}),x=Z([],d,!0);x.sort(function(w,j){return Tr(w.routeData.fares)-Tr(j.routeData.fares)}),o(x),u(e.length)},[e]);function p(d){var x=Z([],r,!0);x.forEach(function(w){return w.selected=!1}),x[d].selected=!0,o(x)}return i.jsx(nl,{"data-testid":"flight-list-component",children:i.jsx(Qs,{"data-testid":"flight-list",style:{backgroundColor:"0000FF"},children:c>0&&r.map(function(d,x){return i.jsx(Js,{flightData:d.routeData,index:x,selected:d.selected,selectCard:function(){return p(x)}},"".concat(d.routeData.routeId,"-").concat(x))})})})}a.div(Ar||(Ar=s([`
.journey-airline-detail {
  padding: 10px 0;
}
  .airline-info {
    font-family: `,`;
    font-size: `,`;
    font-weight: bold;
    color: `,`;
  }

  .logo {
    width:100px;
    padding: 0px 10px 0px 14px;
    vertical-align: top;
  
  }

  .airline-info, .operated-info, .aircraft-info{
    padding: 0px 5px;
  }

  .operated-info, .aircraft-info {
    font-family: `,`;
    font-size: `,`;
    color: `,`;
  }
`],[`
.journey-airline-detail {
  padding: 10px 0;
}
  .airline-info {
    font-family: `,`;
    font-size: `,`;
    font-weight: bold;
    color: `,`;
  }

  .logo {
    width:100px;
    padding: 0px 10px 0px 14px;
    vertical-align: top;
  
  }

  .airline-info, .operated-info, .aircraft-info{
    padding: 0px 5px;
  }

  .operated-info, .aircraft-info {
    font-family: `,`;
    font-size: `,`;
    color: `,`;
  }
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.tint.tint80:"rgba(150 147 50 / 0.8)"});var Ar;a.section(Dr||(Dr=s([`
  display: flex;
  align-items: stretch;
  align-items: left;

  & .bold {
    font-weight: bold;
  }

  & .flyingTimeColor {
    padding-top: 10px;
    color: grey;
  }

  & .detailedInfo {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 10px;
  }
`],[`
  display: flex;
  align-items: stretch;
  align-items: left;

  & .bold {
    font-weight: bold;
  }

  & .flyingTimeColor {
    padding-top: 10px;
    color: grey;
  }

  & .detailedInfo {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 10px;
  }
`])));a.section(Er||(Er=s([`
  width: 100px;
  display: flex;
  justify-content: left;
  padding: 10px;
  padding-left: 14px;
  color: `,`;

  & div {
    display: flex;
    flex-direction: column;
  }
`],[`
  width: 100px;
  display: flex;
  justify-content: left;
  padding: 10px;
  padding-left: 14px;
  color: `,`;

  & div {
    display: flex;
    flex-direction: column;
  }
`])),function(n){return n.$datefontcolor});var Dr,Er;a.div(Ir||(Ir=s([`
  width: 500px;

  button {
    margin:0px 0px 10px 109px;
  }

  & .layover-banner {
    margin-bottom: 20px;
  }
`],[`
  width: 500px;

  button {
    margin:0px 0px 10px 109px;
  }

  & .layover-banner {
    margin-bottom: 20px;
  }
`])));a.p(Br||(Br=s([`
  width: fit-content;
  background-color: #3c374a;
  clip-path: polygon(0% 0, 100% 0, 85% 100%, 0 100%);
  color: white;
  padding: 5px 30px 5px 10px;
  font-weight: bold;
  margin: 15px 0px;
`],[`
  width: fit-content;
  background-color: #3c374a;
  clip-path: polygon(0% 0, 100% 0, 85% 100%, 0 100%);
  color: white;
  padding: 5px 30px 5px 10px;
  font-weight: bold;
  margin: 15px 0px;
`])));var Ir,Br;a.div(Pr||(Pr=s([`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`],[`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`])));var Pr,el=a.div(Rr||(Rr=s([`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  padding: 0px;
  border: 1px solid `,`;
  font-size: `,`;
  font-family: `,`;
  position:relative;
`],[`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  padding: 0px;
  border: 1px solid `,`;
  font-size: `,`;
  font-family: `,`;
  position:relative;
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"}),tl=a.input(Hr||(Hr=s([`
  width: 100%;
  border: none;
  outline: none;
  font-size: `,`;
  font-family: `,`;
`],[`
  width: 100%;
  border: none;
  outline: none;
  font-size: `,`;
  font-family: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"}),Dn=a.div(Gr||(Gr=s([`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`]))),rl=a.div(Vr||(Vr=s([`
  position: absolute;
  z-index: 10000;
  background-color: white;
  top: 100%;
  `,`;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  font-size: `,`;
  font-family: `,`;
  border-color: `,`;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`],[`
  position: absolute;
  z-index: 10000;
  background-color: white;
  top: 100%;
  `,`;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  font-size: `,`;
  font-family: `,`;
  border-color: `,`;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`])),function(n){return n.isAlignedToRight?"right : 0px":"left : 0px"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"}),Lr=a.li(Ur||(Ur=s([`
  color: `,`;
  font-size: `,`;
  font-family: `,`;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  list-style-type: none;
  font-weight: normal;
  width: 100%;
  overflow-x: hidden;
  padding: `,`;
  &:hover {
    background-color:`,`;
  }
`],[`
  color: `,`;
  font-size: `,`;
  font-family: `,`;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: left;
  list-style-type: none;
  font-weight: normal;
  width: 100%;
  overflow-x: hidden;
  padding: `,`;
  &:hover {
    background-color:`,`;
  }
`])),function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.paddings?n.theme.paddings.regular:"5px"},function(n){return n.theme.colors?n.theme.colors.primary.tint.tint20:"rgba(150 147 50 / 0.2)"}),Nr=a.ul(Wr||(Wr=s([`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  font: `,`;
  font-size: `,`;
`],[`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ol=a.div(Yr||(Yr=s([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-left: 10px;
  font: `,`;
  font-size: `,`;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-left: 10px;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),Mr=a.div(Zr||(Zr=s([`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;    
  box-sizing: border-box;
  font-size: `,`;
  font-family: `,`;
  color: `,`;
  font-color: `,`;
`],[`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;    
  box-sizing: border-box;
  font-size: `,`;
  font-family: `,`;
  color: `,`;
  font-color: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"}),Rr,Hr,Gr,Vr,Ur,Wr,Yr,Zr;function il(n){var e=n.deployableRef,t=n.inputRef,r=$.useState(!1),o=r[0],l=r[1],c=function(){return l(!0)};return $.useEffect(function(){var u=function(p){o&&e.current&&!e.current.contains(p.target)&&t.current&&!t.current.contains(p.target)&&l(!1)};return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}},[o]),{deployableIsVisible:o,handleDeployable:c,setDeployableIsVisible:l}}var al=[{code:"BCN",city:"Barcelona",country:"Spain",airportName:"All Airports",description:"Barcelona, Spain (All Airports)",type:"city",icon:"house"},{code:"BCN",city:"Barcelona",country:"Spain",airportName:"Barcelona Arpt",description:"Barcelona, Spain (Barcelona Airport)",type:"airport",icon:"airplane"},{code:"MAD",city:"Madrid",country:"Spain",airportName:"All Airports",description:"Madrid, Spain (All Airports)",type:"city",icon:"house"},{code:"MAD",city:"Madrid",country:"Spain",airportName:"Adolfo Suárez Madrid-Barajas Arpt",description:"Madrid, Spain (Adolfo Suárez Madrid-Barajas Airport)",type:"airport",icon:"airplane"},{code:"MAA",city:"Chennai",country:"India",airportName:"All Airports",description:"Chennai, India (All Airports)",type:"city",icon:"house"},{code:"MAA",city:"Chennai",country:"India",airportName:"Chennai International Arpt",description:"Chennai, India (Chennai International Airport)",type:"airport",icon:"airplane"},{code:"MAB",city:"Marabá",country:"Brazil",airportName:"All Airports",description:"Marabá, Brazil (All Airports)",type:"city",icon:"house"},{code:"MAB",city:"Marabá",country:"Brazil",airportName:"João Correa da Rocha Arpt",description:"Marabá, Brazil (João Correa da Rocha Airport)",type:"airport",icon:"airplane"},{code:"MAC",city:"Macon",country:"United States",airportName:"Macon Downtown Arpt",description:"Macon, United States (Macon Downtown Airport)",type:"airport",icon:"airplane"}];function qr(n){var e=n.previousSearches,t=n.selectedLocation,r=n.placeholderValue,o=n.dataTestId,l=o===void 0?"location-picker":o,c=n.onGetData,u=c===void 0?void 0:c,m=n.onLocationSelected,p=m===void 0?void 0:m,d=$.useState(t||null),x=d[0],w=d[1],j=$.useState(t?t.code:""),b=j[0],S=j[1],_=$.useState([]),k=_[0],C=_[1],y=$.useState(!1),v=y[0],g=y[1],h=$.useRef(null),f=$.useRef(null),F=il({deployableRef:f,inputRef:h}),E=F.deployableIsVisible,N=F.handleDeployable,M=F.setDeployableIsVisible;$.useEffect(function(){S(t?t.code:""),w(t||null)},[]);var D=function(R){if(u==null){var B=R.toLowerCase(),Q=al.filter(function(Y){return Y.code.toLowerCase().includes(B)||Y.city.toLowerCase().includes(B)||Y.country.toLowerCase().includes(B)||Y.airportName.toLowerCase().includes(B)}),U=[];return Q.forEach(function(Y){U.push(Y)}),U}else return u(R)},T=function(R){g(!1),S(R.code),w(R),M(!1),p&&p(R)},H=function(R){var B=R.target.value;S(B),g(B.length>0),B.length>0?C(D(B)):C([])};return i.jsx(i.Fragment,{children:i.jsxs(el,{"data-testid":"location-box",onClick:N,children:[x?i.jsx(Dn,{children:x.airportName=="All Airports"?i.jsx(zt,{}):i.jsx(Ft,{})}):i.jsx(Dn,{children:i.jsx(ls,{})}),i.jsx(tl,{ref:h,type:"text",placeholder:r,value:b,onChange:H,"data-testid":l}),E&&i.jsx(rl,{ref:f,"data-testid":"deployable",isAlignedToRight:r==="Destination",children:v?k.length>0?i.jsx(Nr,{children:k.map(function(I,R){return i.jsxs(Lr,{"data-testid":"listitem",onClick:function(Q){Q.stopPropagation(),T(I)},children:[i.jsx("div",{children:I.airportName=="All Airports"?i.jsx(Dn,{children:i.jsx(zt,{})}):i.jsx(Dn,{children:i.jsx(Ft,{})})}),i.jsx("div",{children:i.jsxs(ol,{children:[i.jsxs("div",{children:[I.code," ",I.city,", ",I.country]}),i.jsx("div",{children:I.airportName})]})})]},R)})}):i.jsx(Mr,{children:"No options"}):e&&e.length>0?i.jsx(Nr,{children:e.slice(0,10).map(function(I,R){return i.jsx(Lr,{"data-testid":"listitem",onClick:function(Q){Q.stopPropagation(),T(I)},children:I.description},R)})}):i.jsx(Mr,{children:"No options"})})]})})}a.div(Kr||(Kr=s([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding-block: 8px 6px;

  & h2 {
    font-size: `,`;
    font-weight: 700;
    line-height: 1.1;
    color: `,`;
  }
`],[`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding-block: 8px 6px;

  & h2 {
    font-size: `,`;
    font-weight: 700;
    line-height: 1.1;
    color: `,`;
  }
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.smallHeadings.size:"14px"},function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"});a.div(Xr||(Xr=s([`
  display: flex;
  align-items: center;
  gap: .3rem;

  color: `,`;

  & .emissions-percentage {
    display: flex;
    align-items: end;
  }
  
  & sub {
    font-size:  `,`;
  }
`],[`
  display: flex;
  align-items: center;
  gap: .3rem;

  color: `,`;

  & .emissions-percentage {
    display: flex;
    align-items: end;
  }
  
  & sub {
    font-size:  `,`;
  }
`])),function(n){var e=n.$highlighted;return e===!0?"#409e4f":""},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});a.div(Jr||(Jr=s([`
  display: flex;
  gap: 6px;
  padding-block: 6px 4px;
  position: relative;
  /* z-index: -1; */
`],[`
  display: flex;
  gap: 6px;
  padding-block: 6px 4px;
  position: relative;
  /* z-index: -1; */
`])));a.button(Qr||(Qr=s([`
  padding-block: 1px;
  background-color: transparent;
  border: none;
  font-family: Arial, Helvetica, system-ui, sans-serif;
  font-size:  `,`;
  font-weight: `,`;
  line-height: 1.1;
  color: `,`;
  cursor: pointer;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  .hide {
    display: none;
    color: white;
    background-color: black;
    position: absolute;
    width: 270px;
    text-align: justify;
    padding: 10px;
    margin-top: 10px;
    z-index: 1;
  }

  &:hover .hide {
    display: block;
  }

  .hide::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: black;
    top: -10px;
    left: 10px;
  }
`],[`
  padding-block: 1px;
  background-color: transparent;
  border: none;
  font-family: Arial, Helvetica, system-ui, sans-serif;
  font-size:  `,`;
  font-weight: `,`;
  line-height: 1.1;
  color: `,`;
  cursor: pointer;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  .hide {
    display: none;
    color: white;
    background-color: black;
    position: absolute;
    width: 270px;
    text-align: justify;
    padding: 10px;
    margin-top: 10px;
    z-index: 1;
  }

  &:hover .hide {
    display: block;
  }

  .hide::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: black;
    top: -10px;
    left: 10px;
  }
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){var e=n.$isBold;return e===!0?"bold":"normal"},function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"});var Kr,Xr,Jr,Qr;function Ti(n){return function(e){ge(t,e);function t(r){var o=e.call(this,r)||this;return o.name=n,o}return t}(Error)}Ti("MissingFaresDataError");Ti("EmptyFaresDataError");a.svg(no||(no=s([`
  width: 60px;
  height: 100px;
  color: #000;
`],[`
  width: 60px;
  height: 100px;
  color: #000;
`])));a.div(eo||(eo=s([`
  margin-top: 45%;
  width: 70px;
  height: 70px;
  background-color: #fcecd7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  position: relative;
`],[`
  margin-top: 45%;
  width: 70px;
  height: 70px;
  background-color: #fcecd7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  position: relative;
`])));a.div(to||(to=s([`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding 0px 9px
  display: flex;
`],[`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding 0px 9px
  display: flex;
`])));a.div(ro||(ro=s([`
  width: fitContent;
  height: 'fitContent';
  margin: 0 0 10px 0;
`],[`
  width: fitContent;
  height: 'fitContent';
  margin: 0 0 10px 0;
`])));var no,eo,to,ro;a.button(oo||(oo=s([`
  font-size: 12px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #2E4A3F;
  color: #fff;
  text-align: center;
  border: 1px solid #2E4A3F;
  &:hover {
    background-color: #214134;
  }
  cursor: pointer;
`],[`
  font-size: 12px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #2E4A3F;
  color: #fff;
  text-align: center;
  border: 1px solid #2E4A3F;
  &:hover {
    background-color: #214134;
  }
  cursor: pointer;
`])));a.div(io||(io=s([`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding 0px 9px
  display: flex;
`],[`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding 0px 9px
  display: flex;
`])));a.div(ao||(ao=s([`
  margin-top: 45%;
  width: 70px;
  height: 70px;
  background-color: #fcecd7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  position: relative;
`],[`
  margin-top: 45%;
  width: 70px;
  height: 70px;
  background-color: #fcecd7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px auto;
  position: relative;
`])));a.svg(so||(so=s([`
  width: 60px;
  height: 100px;
  color: #000;
`],[`
  width: 60px;
  height: 100px;
  color: #000;
`])));var oo,io,ao,so,sl=a.p(po||(po=s([`
  margin-left: 0px;
  margin-top: 5px;
  font-size: 12px;
  font-family: sans-serif;
  display: flex;
  justify-content: flex-start;
`],[`
  margin-left: 0px;
  margin-top: 5px;
  font-size: 12px;
  font-family: sans-serif;
  display: flex;
  justify-content: flex-start;
`]))),ll=a.input(uo||(uo=s([`
  width: 100%;  
  margin: 0px;  
  padding: 0px 0px 0px 5px;
`],[`
  width: 100%;  
  margin: 0px;  
  padding: 0px 0px 0px 5px;
`]))),cl=a.div(fo||(fo=s([`
  height: 20px;  
  padding: 0;
  border: 0px;
`],[`
  height: 20px;  
  padding: 0;
  border: 0px;
`]))),dl=a.input.attrs({type:"number"})(ho||(ho=s([`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  appearance: textfield;
  margin-left: 0px;
  width: 50px;
  height: 30px;
  border: 1px solid #cbcbcb;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
  }

  &::after {
    content: '▲';
    position: absolute;
    right: 5px;
    top: 2px;
    font-size: 4000px;
    pointer-events: none;
  }

  &::before {
    content: '▼';
    position: absolute;
    right: 5px;
    bottom: 2px;
    font-size: 10px;
    pointer-events: none;
  }
`],[`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  appearance: textfield;
  margin-left: 0px;
  width: 50px;
  height: 30px;
  border: 1px solid #cbcbcb;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
  }

  &::after {
    content: '▲';
    position: absolute;
    right: 5px;
    top: 2px;
    font-size: 4000px;
    pointer-events: none;
  }

  &::before {
    content: '▼';
    position: absolute;
    right: 5px;
    bottom: 2px;
    font-size: 10px;
    pointer-events: none;
  }
`]))),pl=a.select(mo||(mo=s([`
  width: 100%;  
  border: 1px solid #cbcbcb;  
  font: `,`;
  font-size: `,`;
`],[`
  width: 100%;  
  border: 1px solid #cbcbcb;  
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ul=a.option(xo||(xo=s([`  
  color: `,`;  
  background-color: `,`;  
  font: `,`;
  font-size: `,`;
  
  &:hover {
    color: `,`;
    background-color: `,`;
  }

  &:disabled {
    color: `,`;
    cursor: not-allowed;
  }
`],[`  
  color: `,`;  
  background-color: `,`;  
  font: `,`;
  font-size: `,`;
  
  &:hover {
    color: `,`;
    background-color: `,`;
  }

  &:disabled {
    color: `,`;
    cursor: not-allowed;
  }
`])),function(n){var e,t,r;return n.isSelected?"#FFFFFF":(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#969332"},function(n){var e,t,r;return n.isSelected?(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#FF5E6F":"#FFFFFF"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){var e,t,r;return(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&r!==void 0?r:"#969332"},function(n){var e,t,r,o;return(o=(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||r===void 0?void 0:r.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"},function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.controlsBorder)!==null&&t!==void 0?t:"#CBCBCB"}),fl=a.div(go||(go=s([`
  margin-top: 15px;
  width: 100%;    
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`],[`
  margin-top: 15px;
  width: 100%;    
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`]))),hl=a.div(bo||(bo=s([`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  // border: 2px solid #cbcbcb;
  padding: 0px;
  font: `,`;
  font-size: `,`;
`],[`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  // border: 2px solid #cbcbcb;
  padding: 0px;
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),lo=a.div(yo||(yo=s([`
  width: 15px;
`],[`
  width: 15px;
`]))),co=a.div(vo||(vo=s([`
  height: 15px;
  margin-top: 10px;
  margin-left: 0px;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 15px;
  margin-top: 10px;
  margin-left: 0px;
  padding: 0px;
  object-fit: contain;
`]))),ml=a.div(wo||(wo=s([`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`],[`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`]))),po,uo,fo,ho,mo,xo,go,bo,yo,vo,wo,Kn=a.p(jo||(jo=s([`
  /* Usamos una función dentro del template literal para acceder a las props */
  font-family: 'Inter', sans-serif; /* Cambia la fuente según tus necesidades */
  font-size: `,`; /* Accede a la prop 'tamaño' */
  color: `,`;     /* Accede a la prop 'color' */
  font-weight: `,`; /* Accede a la prop 'negrita' */

  /* Puedes añadir otros estilos fijos aquí si lo necesitas */
  margin: 5px 0;
`],[`
  /* Usamos una función dentro del template literal para acceder a las props */
  font-family: 'Inter', sans-serif; /* Cambia la fuente según tus necesidades */
  font-size: `,`; /* Accede a la prop 'tamaño' */
  color: `,`;     /* Accede a la prop 'color' */
  font-weight: `,`; /* Accede a la prop 'negrita' */

  /* Puedes añadir otros estilos fijos aquí si lo necesitas */
  margin: 5px 0;
`])),function(n){return n.size},function(n){return n.color},function(n){return n.bold?"bold":"normal"});Kn.defaultProps={size:"16px",color:"black",bold:!1};var xl=a(Kn)(So||(So=s([`
  size: '40px';
  color: '#000000';
  bold: true;
`],[`
  size: '40px';
  color: '#000000';
  bold: true;
`])));xl.defaultProps={size:"40px",color:"black",bold:!0};var gl=a(Kn)(Co||(Co=s([`
  size: '40px';
  color: `,`; 
  bold: true;
`],[`
  size: '40px';
  color: `,`; 
  bold: true;
`])),function(n){return n.color||"black"});gl.defaultProps={size:"17.5px",color:"black",bold:!0};var we=a(Kn)(ko||(ko=s([`
  size: '14px';
  color: `,`; 
  bold: true;
  display: flex;
  justify-content: flex-start;
`],[`
  size: '14px';
  color: `,`; 
  bold: true;
  display: flex;
  justify-content: flex-start;
`])),function(n){return n.color||"black"});we.defaultProps={size:"14px",color:"black",bold:!0};var jo,So,Co,ko;function bl(n){var e=document.createElement("div");e.style.position="fixed",e.style.top="20px",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.backgroundColor="#f8d7da",e.style.color="#721c24",e.style.padding="10px 20px",e.style.borderRadius="5px",e.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)",e.style.zIndex="1000",e.style.opacity="0",e.style.transition="opacity 0.3s ease-in-out",e.innerText=n;var t=document.createElement("button");t.innerText="x",t.style.background="none",t.style.border="none",t.style.color="#721c24",t.style.fontSize="16px",t.style.fontWeight="bold",t.style.cursor="pointer",t.style.marginLeft="10px",t.onclick=function(){e.style.opacity="0",setTimeout(function(){return e.remove()},300)},e.appendChild(t),document.body.appendChild(e),setTimeout(function(){e.style.opacity="1"},100),setTimeout(function(){e.style.opacity="0",setTimeout(function(){return e.remove()},500)},5e3)}function Bl(n){var e=n.dataTestId,t=e===void 0?"passengers-filter":e,r=n.onPassengersSelected,o=r===void 0?void 0:r,l=$.useState([1]),c=l[0],u=l[1],m=$.useState(["ADT"]),p=m[0],d=m[1],x=$.useState(0),w=x[0],j=x[1];$.useEffect(function(){var v=c.map(function(g,h){return{id:h,number:c[h],type:p[h]}});o&&o(v)},[c,p,o]);var b=c.reduce(function(v,g){return v+g},0),S=function(g,h){var f=p.map(function(F,E){return E===g?h:F});d(f)},_=function(g){b<9&&u(function(h){return h.map(function(f,F){return F===g&&f<9?f+1:f})})},k=function(g){u(function(h){return h.map(function(f,F){return F===g&&f>1?f-1:f})})},C=function(){if(b<9&&p.length<3){var g="";if(p.includes("ADT")?p.includes("CMP")?p.includes("CHD")||(g="CHD"):g="CMP":g="ADT",g){var h=Z(Z([],c,!0),[1],!1),f=Z(Z([],p,!0),[g],!1);u(h),d(f);var F=w+1;j(F)}}},y=function(g){var h=c.filter(function(M,D){return D!==g}),f=p.filter(function(M,D){return D!==g}),F=f.filter(function(M){return M==="ADT"}).length,E=f.filter(function(M){return M==="CMP"}).length,N=f.filter(function(M){return M==="CHD"}).length;if(N===1&&F===0&&E===0){bl("There must be at least one Adult to travel with a Child");return}u(h),d(f)};return i.jsxs(fl,{"data-testid":t,children:[i.jsx(we,{children:"Itinerary modifiers"}),i.jsx(sl,{children:"Travelers (Up to 9 total)"}),c.map(function(v,g){return i.jsxs(hl,{"data-testid":"selector-".concat(g),children:[i.jsx(ll,{type:"number",value:v,onChange:function(f){var F=parseInt(f.target.value,10);if(!isNaN(F)&&F>=1&&F<=9){var E=c.map(function(N,M){return M===g?F:N});E.reduce(function(N,M){return N+M},0)<=9&&u(E)}},onKeyDown:function(f){f.key==="ArrowUp"?_(g):f.key==="ArrowDown"&&k(g)},as:dl,"data-testid":"counter-".concat(g)}),i.jsx(lo,{}),i.jsx(pl,{value:p[g],onChange:function(f){return S(g,f.target.value)},"data-testid":"type-selector-".concat(g),children:["ADT","CHD","CMP"].map(function(h){return i.jsx(ul,{value:h,className:p[g]===h?"selected":"","data-testid":"option-".concat(h),isSelected:p[g]===h,disabled:p.includes(h)&&p[g]!==h||h==="CHD"&&!p.some(function(f,F){return F!==g&&(f==="ADT"||f==="CMP")}),children:h==="ADT"?"ADT Adult":h==="CHD"?"CHD Child":"CMP Companion"},h)})},"type-".concat(g)),i.jsx(lo,{}),c.length!==1?i.jsx(co,{"data-testid":"delete-".concat(g),onClick:function(){return y(g)},children:i.jsx(ye,{})}):i.jsx(co,{"data-testid":"delete-".concat(g),children:i.jsx(ve,{})})]},g)}),i.jsx(ml,{children:i.jsx(cl,{"data-testid":"add-selector",onClick:C,children:b<9&&p.length<3?i.jsx(Oi,{}):i.jsx(ss,{})})})]})}a.li(zo||(zo=s([`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-weight: 1000;
  width: 100%;
  &:hover {
    background-color: #F2F2F2;
  }
`],[`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-weight: 1000;
  width: 100%;
  &:hover {
    background-color: #F2F2F2;
  }
`])));a.div(Fo||(Fo=s([`
  display: flex;
  flex-direction: column;
  margin-left: 10px; /* Espacio entre el icono y el texto */
  span {
    font-weight: normal;
    margin-left: 0;
  }
`],[`
  display: flex;
  flex-direction: column;
  margin-left: 10px; /* Espacio entre el icono y el texto */
  span {
    font-weight: normal;
    margin-left: 0;
  }
`])));a.div($o||($o=s([`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  margin: 0px;
  padding: 0 0 0 5px;
  border: 1px solid black;
  font-size: 10px;
  font-family: sans-serif;
  border-color: #CBCBCB;
`],[`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  margin: 0px;
  padding: 0 0 0 5px;
  border: 1px solid black;
  font-size: 10px;
  font-family: sans-serif;
  border-color: #CBCBCB;
`])));a.input(Oo||(Oo=s([`
  height: 100%;
  width: 100%;
  outline: none;
`],[`
  height: 100%;
  width: 100%;
  outline: none;
`])));a.div(To||(To=s([`
`],[`
`])));a.div(Ao||(Ao=s([`
  display: inline-block;
  width: fit-content;
  max-width: 300px;
  padding: 8px;
  position: absolute;
  z-index: 10;
  top: 100%;
  transform: scale(0.75);
  transform-origin: top left;
`],[`
  display: inline-block;
  width: fit-content;
  max-width: 300px;
  padding: 8px;
  position: absolute;
  z-index: 10;
  top: 100%;
  transform: scale(0.75);
  transform-origin: top left;
`])));a.div(Do||(Do=s([`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  margin-right: 10px;
  padding: 0 0 0 5px;
  border: 1px solid black;
  font-size: 10px;
  line-height: 0px;
  font-family: sans-serif;
  border-color: #CBCBCB;
`],[`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  margin-right: 10px;
  padding: 0 0 0 5px;
  border: 1px solid black;
  font-size: 10px;
  line-height: 0px;
  font-family: sans-serif;
  border-color: #CBCBCB;
`])));var _o=a.div(Eo||(Eo=s([`
  width: 15px;
`],[`
  width: 15px;
`])));a.input(Io||(Io=s([`
  height: 100%;
  width: 100%;
  outline: none;
`],[`
  height: 100%;
  width: 100%;
  outline: none;
`])));var yl=a.div(Bo||(Bo=s([`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px;
  // border: 3px solid #FF0000;
`],[`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px;
  // border: 3px solid #FF0000;
`]))),vl=a.div(Po||(Po=s([`
  
  width: 100%;
  display: flex;
  
  // border: 1px solid #CBCBCB;
  justify-content: space-between;
`],[`
  
  width: 100%;
  display: flex;
  
  // border: 1px solid #CBCBCB;
  justify-content: space-between;
`]))),wl=a.div(Lo||(Lo=s([`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`],[`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`])));a.small(No||(No=s([`
  font-size: 10px;
`],[`
  font-size: 10px;
`])));a.div(Mo||(Mo=s([`
  margin-left: 5px;
  width: 210px;
`],[`
  margin-left: 5px;
  width: 210px;
`])));a.img(Ro||(Ro=s([`
  height: 15px;
  margin: 5px 0 auto auto;
  padding: 0;
`],[`
  height: 15px;
  margin: 5px 0 auto auto;
  padding: 0;
`])));var zo,Fo,$o,Oo,To,Ao,Do,Eo,Io,Bo,Po,Lo,No,Mo,Ro;function jl(n){var e=n.originDefault,t=e===void 0?null:e,r=n.destinationDefault,o=r===void 0?void 0:r,l=n.dateTimeDefault,c=l===void 0?void 0:l,u=n.dataTestId,m=u===void 0?"segment-data":u,p=n.onGetOriginData,d=p===void 0?void 0:p,x=n.onGetDestinationData,w=x===void 0?void 0:x,j=n.onOriginLocationSelected,b=j===void 0?void 0:j,S=n.onDestinationLocationSelected,_=S===void 0?void 0:S,k=n.onDateSelected,C=k===void 0?void 0:k,y=n.onTimeSelected,v=y===void 0?void 0:y,g={Origin:"Origin",Destination:"Destination"};return i.jsxs(yl,{"data-testid":m,children:[i.jsxs(vl,{children:[i.jsx(qr,{previousSearches:[],selectedLocation:t,placeholderValue:g.Origin,dataTestId:"segment-data-origin-location-picker",onGetData:d,onLocationSelected:b}),i.jsx(_o,{}),i.jsx(qr,{previousSearches:[],selectedLocation:o,placeholderValue:g.Destination,dataTestId:"segment-data-destination-location-picker",onGetData:w,onLocationSelected:_})]}),i.jsxs(wl,{children:[i.jsx(Pa,{dateDefault:c??void 0,onDateSelected:C,dataTestId:"date-component"}),i.jsx(_o,{}),i.jsx(Ra,{timeDefault:c??void 0,onTimeSelected:v,dataTestId:"time-component"})]})]})}var Sl=a.div(Go||(Go=s([`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 5px solid #0000FF;
`],[`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 5px solid #0000FF;
`])));a.p(Vo||(Vo=s([`
  font-size: 12px;
  font-weight: 1000;
  margin-left: 10px;
  margin-top: 5px;
`],[`
  font-size: 12px;
  font-weight: 1000;
  margin-left: 10px;
  margin-top: 5px;
`])));var Ho=a.div(Uo||(Uo=s([`
  height: 15px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 15px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`]))),Cl=a.div(Wo||(Wo=s([`
  width: 100%;  
  margin-top: 15px;
  // border: 3px solid #CBCFFF;
`],[`
  width: 100%;  
  margin-top: 15px;
  // border: 3px solid #CBCFFF;
`]))),kl=a.div(Yo||(Yo=s([`
  width: 100%;  
  // border: 3px solid #FFF555;
`],[`
  width: 100%;  
  // border: 3px solid #FFF555;
`]))),Go,Vo,Uo,Wo,Yo,_l=function(e){var t=e.index,r=t===void 0?0:t,o=e.segment,l=e.isDeleteButtonEnabled,c=l===void 0?!0:l,u=e.dataTestId,m=u===void 0?"segment-filter":u,p=e.onGetOriginData,d=p===void 0?void 0:p,x=e.onGetDestinationData,w=x===void 0?void 0:x,j=e.onSegmentSelected,b=j===void 0?void 0:j,S=e.onDeleteSegment,_=S===void 0?void 0:S,k=$.useState({originCode:o.origin?o.origin.code:"",originCity:o.origin?o.origin.city:"From",destinationCode:o.destination?o.destination.code:"",destinationCity:o.destination?o.destination.city:"To"}),C=k[0],y=k[1];$.useEffect(function(){y({originCode:o.origin?o.origin.code:"",originCity:o.origin?o.origin.city:"From",destinationCode:o.destination?o.destination.code:"",destinationCity:o.destination?o.destination.city:"To"})},[]);var v={id:o.id,origin:o.origin,destination:o.destination,date:o.date,time:o.time};return i.jsxs(Cl,{"data-testid":m,children:[i.jsxs(Sl,{children:[i.jsxs(we,{"data-testid":"from-to-title",children:[r+1,". ",C.originCode?C.originCity:"From"," - ",C.destinationCode?C.destinationCity:"To"]}),c?i.jsx(Ho,{"data-testid":"delete-flight-button",onClick:function(){return _&&_(o.id)},children:i.jsx(ye,{})}):i.jsx(Ho,{"data-testid":"delete-flight-button",children:i.jsx(ve,{})})]}),i.jsx(kl,{children:i.jsx(jl,{originDefault:o.origin,destinationDefault:o.destination,onGetOriginData:d,onGetDestinationData:w,onOriginLocationSelected:function(h){v.origin=h,b&&b(v),y(function(f){return X(X({},f),{originCode:h.code,originCity:h.city})})},onDestinationLocationSelected:function(h){v.destination=h,b&&b(v),y(function(f){return X(X({},f),{destinationCode:h.code,destinationCity:h.city})})},onDateSelected:function(h){v.date=h,b&&b(v)},onTimeSelected:function(h){v.time=h,b&&b(v)}})})]})},zl=a.div(Zo||(Zo=s([`
  height: 15px;  
  padding: 0;
  margin-top: 5px;
`],[`
  height: 15px;  
  padding: 0;
  margin-top: 5px;
`]))),Fl=a.div(qo||(qo=s([`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`],[`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`]))),$l=a.div(Ko||(Ko=s([`
  //margin-left: 5px;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  
  // border: 5px solid #0FFFD0;
`],[`
  //margin-left: 5px;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  
  // border: 5px solid #0FFFD0;
`]))),Zo,qo,Ko,Xo={id:1,origin:{code:"",city:"",country:"",airportName:"",description:"",type:"",icon:""},destination:{code:"",city:"",country:"",airportName:"",description:"",type:"",icon:""},date:null,time:null};function Pl(n){var e=n.dataTestId,t=e===void 0?"segments-filter":e,r=n.onSegmentsSelected,o=r===void 0?void 0:r,l=$.useState([Xo]),c=l[0],u=l[1],m=$.useState(2),p=m[0],d=m[1];$.useEffect(function(){o&&o(c)},[c]);var x=function(S,_){u(function(k){return k.map(function(C){return C.id===S?X(X({},C),_):C})})},w=function(){u(function(S){var _=S[S.length-1],k=X(X({},Xo),{id:p,origin:_.destination,date:null,time:null});return Z(Z([],S,!0),[k],!1)}),d(function(S){return S+1})},j=function(S){u(function(_){return _.filter(function(k){return k.id!==S})})};return i.jsxs($l,{"data-testid":t,children:[c.map(function(b,S){return i.jsx(_l,{index:S,isDeleteButtonEnabled:S>0,onDeleteSegment:j,onSegmentSelected:function(k){return x(k.id,k)},segment:{id:b.id,origin:b.origin,destination:b.destination,date:null,time:null},dataTestId:"segment-filter-".concat(b.id)},b.id)}),i.jsx(Fl,{children:i.jsx(zl,{"data-testid":"add-flight-button",onClick:w,children:i.jsx(Oi,{})})})]})}a.div(Jo||(Jo=s([`
  display: flex;
  width: 100%;
  text-align: left;
  padding-top: 2px;
  border-bottom: 1px solid #ddd;  
  padding-left: 10px;
  color: `,`;
  height: 45px;
  align-items: baseline;
`],[`
  display: flex;
  width: 100%;
  text-align: left;
  padding-top: 2px;
  border-bottom: 1px solid #ddd;  
  padding-left: 10px;
  color: `,`;
  height: 45px;
  align-items: baseline;
`])),function(n){var e,t,r;return(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.light)!==null&&r!==void 0?r:"#E3DD40"});a.p(Qo||(Qo=s([`
  display:flex;
  margin-left: 10px;  
  font-size: 12px;  
  color: `,`; 
`],[`
  display:flex;
  margin-left: 10px;  
  font-size: 12px;  
  color: `,`; 
`])),function(n){return n.color||"black"});a.div(ni||(ni=s([`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: row;  
`],[`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: row;  
`])));a.div(ei||(ei=s([`
  height: 90px;
  width: 100%;
  max-width: 340px;
  padding: 15px;  
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid `,`;
  background-color: `,`;
  color: `,`;
  align-items: center;
  flex-direction: column;  
`],[`
  height: 90px;
  width: 100%;
  max-width: 340px;
  padding: 15px;  
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid `,`;
  background-color: `,`;
  color: `,`;
  align-items: center;
  flex-direction: column;  
`])),function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.defaultContentBackground)!==null&&t!==void 0?t:"#FEFEFE"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"});a.p(ti||(ti=s([`
  font-weight: 1000;
  text-align: center;
  margin: 0;
`],[`
  font-weight: 1000;
  text-align: center;
  margin: 0;
`])));a.div(ri||(ri=s([`
  height: 90px;
  width: 100%;
  max-width: 340px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: `,`;
  color: `,`;
`],[`
  height: 90px;
  width: 100%;
  max-width: 340px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: `,`;
  color: `,`;
`])),function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.defaultContentBackground)!==null&&t!==void 0?t:"#FEFEFE"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"});a.div(oi||(oi=s([`
  height: 90px;
  width: 100%;
  max-width: 340px;
  padding: 15px;
  color: `,`;
  background-color: `,`;
  cursor: not-allowed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`],[`
  height: 90px;
  width: 100%;
  max-width: 340px;
  padding: 15px;
  color: `,`;
  background-color: `,`;
  cursor: not-allowed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`])),function(n){var e,t,r,o;return(o=(r=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.softBlackTint)===null||r===void 0?void 0:r.tint60)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.6)"},function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.defaultContentBackground)!==null&&t!==void 0?t:"#FEFEFE"});a.div(ii||(ii=s([`
  display: flex;
  flex-direction: column;
  width: 100%;  
  margin: 0;
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;  
  margin: 0;
`])));var Jo,Qo,ni,ei,ti,ri,oi,ii;export{Al as C,Pa as D,El as E,Il as F,qr as L,Bl as P,Pl as S,Ra as T,Dl as a};
