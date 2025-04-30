import{f as pi}from"./index-BZkcKs8Z.js";import{R as ln,r as Eo}from"./index-D4H_InIO.js";import{j as gn}from"./jsx-runtime-BO8uF4Og.js";import"./Button-ujDREqIy.js";var F=function(){return F=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},F.apply(this,arguments)};function kn(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,s;r<a;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))}var v="-ms-",sn="-moz-",g="-webkit-",Ao="comm",Sn="rule",Jn="decl",di="@import",Bo="@keyframes",fi="@layer",To=Math.abs,Qn=String.fromCharCode,qn=Object.assign;function ui(n,e){return S(n,0)^45?(((e<<2^S(n,0))<<2^S(n,1))<<2^S(n,2))<<2^S(n,3):0}function Io(n){return n.trim()}function R(n,e){return(n=e.exec(n))?n[0]:n}function d(n,e,t){return n.replace(e,t)}function vn(n,e,t){return n.indexOf(e,t)}function S(n,e){return n.charCodeAt(e)|0}function K(n,e,t){return n.slice(e,t)}function I(n){return n.length}function Po(n){return n.length}function an(n,e){return e.push(n),n}function xi(n,e){return n.map(e).join("")}function se(n,e){return n.filter(function(t){return!R(t,e)})}var Fn=1,Z=1,Ro=0,B=0,O=0,en="";function En(n,e,t,r,a,s,l,p){return{value:n,root:e,parent:t,type:r,props:a,children:s,line:Fn,column:Z,length:l,return:"",siblings:p}}function L(n,e){return qn(En("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function V(n){for(;n.root;)n=L(n.root,{children:[n]});an(n,n.siblings)}function hi(){return O}function gi(){return O=B>0?S(en,--B):0,Z--,O===10&&(Z=1,Fn--),O}function T(){return O=B<Ro?S(en,B++):0,Z++,O===10&&(Z=1,Fn++),O}function H(){return S(en,B)}function wn(){return B}function An(n,e){return K(en,n,e)}function Yn(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mi(n){return Fn=Z=1,Ro=I(en=n),B=0,[]}function bi(n){return en="",n}function Ln(n){return Io(An(B-1,Vn(n===91?n+2:n===40?n+1:n)))}function yi(n){for(;(O=H())&&O<33;)T();return Yn(n)>2||Yn(O)>3?"":" "}function vi(n,e){for(;--e&&T()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return An(n,wn()+(e<6&&H()==32&&T()==32))}function Vn(n){for(;T();)switch(O){case n:return B;case 34:case 39:n!==34&&n!==39&&Vn(O);break;case 40:n===41&&Vn(n);break;case 92:T();break}return B}function wi(n,e){for(;T()&&n+O!==57;)if(n+O===84&&H()===47)break;return"/*"+An(e,B-1)+"*"+Qn(n===47?n:T())}function ji(n){for(;!Yn(H());)T();return An(n,B)}function _i(n){return bi(jn("",null,null,null,[""],n=mi(n),0,[0],n))}function jn(n,e,t,r,a,s,l,p,c){for(var u=0,x=0,m=l,b=0,h=0,j=0,k=1,E=1,z=1,_=0,w="",$=a,C=s,y=r,f=w;E;)switch(j=_,_=T()){case 40:if(j!=108&&S(f,m-1)==58){vn(f+=d(Ln(_),"&","&\f"),"&\f",To(u?p[u-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:f+=Ln(_);break;case 9:case 10:case 13:case 32:f+=yi(j);break;case 92:f+=vi(wn()-1,7);continue;case 47:switch(H()){case 42:case 47:an($i(wi(T(),wn()),e,t,c),c);break;default:f+="/"}break;case 123*k:p[u++]=I(f)*z;case 125*k:case 59:case 0:switch(_){case 0:case 125:E=0;case 59+x:z==-1&&(f=d(f,/\f/g,"")),h>0&&I(f)-m&&an(h>32?ce(f+";",r,t,m-1,c):ce(d(f," ","")+";",r,t,m-2,c),c);break;case 59:f+=";";default:if(an(y=le(f,e,t,u,x,a,p,w,$=[],C=[],m,s),s),_===123)if(x===0)jn(f,e,y,y,$,s,m,p,C);else switch(b===99&&S(f,3)===110?100:b){case 100:case 108:case 109:case 115:jn(n,y,y,r&&an(le(n,y,y,0,0,a,p,w,a,$=[],m,C),C),a,C,m,p,r?$:C);break;default:jn(f,y,y,y,[""],C,0,p,C)}}u=x=h=0,k=z=1,w=f="",m=l;break;case 58:m=1+I(f),h=j;default:if(k<1){if(_==123)--k;else if(_==125&&k++==0&&gi()==125)continue}switch(f+=Qn(_),_*k){case 38:z=x>0?1:(f+="\f",-1);break;case 44:p[u++]=(I(f)-1)*z,z=1;break;case 64:H()===45&&(f+=Ln(T())),b=H(),x=m=I(w=f+=ji(wn())),_++;break;case 45:j===45&&I(f)==2&&(k=0)}}return s}function le(n,e,t,r,a,s,l,p,c,u,x,m){for(var b=a-1,h=a===0?s:[""],j=Po(h),k=0,E=0,z=0;k<r;++k)for(var _=0,w=K(n,b+1,b=To(E=l[k])),$=n;_<j;++_)($=Io(E>0?h[_]+" "+w:d(w,/&\f/g,h[_])))&&(c[z++]=$);return En(n,e,t,a===0?Sn:p,c,u,x,m)}function $i(n,e,t,r){return En(n,e,t,Ao,Qn(hi()),K(n,2,-2),0,r)}function ce(n,e,t,r,a){return En(n,e,t,Jn,K(n,0,r),K(n,r+1,-1),r,a)}function No(n,e,t){switch(ui(n,e)){case 5103:return g+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+n+n;case 4789:return sn+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return g+n+sn+n+v+n+n;case 5936:switch(S(n,e+11)){case 114:return g+n+v+d(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return g+n+v+d(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return g+n+v+d(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return g+n+v+n+n;case 6165:return g+n+v+"flex-"+n+n;case 5187:return g+n+d(n,/(\w+).+(:[^]+)/,g+"box-$1$2"+v+"flex-$1$2")+n;case 5443:return g+n+v+"flex-item-"+d(n,/flex-|-self/g,"")+(R(n,/flex-|baseline/)?"":v+"grid-row-"+d(n,/flex-|-self/g,""))+n;case 4675:return g+n+v+"flex-line-pack"+d(n,/align-content|flex-|-self/g,"")+n;case 5548:return g+n+v+d(n,"shrink","negative")+n;case 5292:return g+n+v+d(n,"basis","preferred-size")+n;case 6060:return g+"box-"+d(n,"-grow","")+g+n+v+d(n,"grow","positive")+n;case 4554:return g+d(n,/([^-])(transform)/g,"$1"+g+"$2")+n;case 6187:return d(d(d(n,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),n,"")+n;case 5495:case 3959:return d(n,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return d(d(n,/(.+:)(flex-)?(.*)/,g+"box-pack:$3"+v+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+n+n;case 4200:if(!R(n,/flex-|baseline/))return v+"grid-column-align"+K(n,e)+n;break;case 2592:case 3360:return v+d(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,R(r.props,/grid-\w+-end/)})?~vn(n+(t=t[e].value),"span",0)?n:v+d(n,"-start","")+n+v+"grid-row-span:"+(~vn(t,"span",0)?R(t,/\d+/):+R(t,/\d+/)-+R(n,/\d+/))+";":v+d(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return R(r.props,/grid-\w+-start/)})?n:v+d(d(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return d(n,/(.+)-inline(.+)/,g+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(I(n)-1-e>6)switch(S(n,e+1)){case 109:if(S(n,e+4)!==45)break;case 102:return d(n,/(.+:)(.+)-([^]+)/,"$1"+g+"$2-$3$1"+sn+(S(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~vn(n,"stretch",0)?No(d(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return d(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,s,l,p,c,u){return v+a+":"+s+u+(l?v+a+"-span:"+(p?c:+c-+s)+u:"")+n});case 4949:if(S(n,e+6)===121)return d(n,":",":"+g)+n;break;case 6444:switch(S(n,S(n,14)===45?18:11)){case 120:return d(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+g+(S(n,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+v+"$2box$3")+n;case 100:return d(n,":",":"+v)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return d(n,"scroll-","scroll-snap-")+n}return n}function zn(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function ki(n,e,t,r){switch(n.type){case fi:if(n.children.length)break;case di:case Jn:return n.return=n.return||n.value;case Ao:return"";case Bo:return n.return=n.value+"{"+zn(n.children,r)+"}";case Sn:if(!I(n.value=n.props.join(",")))return""}return I(t=zn(n.children,r))?n.return=n.value+"{"+t+"}":""}function zi(n){var e=Po(n);return function(t,r,a,s){for(var l="",p=0;p<e;p++)l+=n[p](t,r,a,s)||"";return l}}function Oi(n){return function(e){e.root||(e=e.return)&&n(e)}}function Ci(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case Jn:n.return=No(n.value,n.length,t);return;case Bo:return zn([L(n,{value:d(n.value,"@","@"+g)})],r);case Sn:if(n.length)return xi(t=n.props,function(a){switch(R(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V(L(n,{props:[d(a,/:(read-\w+)/,":"+sn+"$1")]})),V(L(n,{props:[a]})),qn(n,{props:se(t,r)});break;case"::placeholder":V(L(n,{props:[d(a,/:(plac\w+)/,":"+g+"input-$1")]})),V(L(n,{props:[d(a,/:(plac\w+)/,":"+sn+"$1")]})),V(L(n,{props:[d(a,/:(plac\w+)/,v+"input-$1")]})),V(L(n,{props:[a]})),qn(n,{props:se(t,r)});break}return""})}}var Si={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A={},J=typeof process<"u"&&A!==void 0&&(A.REACT_APP_SC_ATTR||A.SC_ATTR)||"data-styled",Do="active",Lo="data-styled-version",Bn="6.1.17",ne=`/*!sc*/
`,On=typeof window<"u"&&"HTMLElement"in window,Fi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&A.REACT_APP_SC_DISABLE_SPEEDY!==""?A.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&A.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&A!==void 0&&A.SC_DISABLE_SPEEDY!==void 0&&A.SC_DISABLE_SPEEDY!==""&&A.SC_DISABLE_SPEEDY!=="false"&&A.SC_DISABLE_SPEEDY),Tn=Object.freeze([]),Q=Object.freeze({});function Ei(n,e,t){return t===void 0&&(t=Q),n.theme!==t.theme&&n.theme||e||t.theme}var Go=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ai=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bi=/(^-|-$)/g;function pe(n){return n.replace(Ai,"-").replace(Bi,"")}var Ti=/(a)(d)/gi,mn=52,de=function(n){return String.fromCharCode(n+(n>25?39:97))};function Wn(n){var e,t="";for(e=Math.abs(n);e>mn;e=e/mn|0)t=de(e%mn)+t;return(de(e%mn)+t).replace(Ti,"$1-$2")}var Gn,Mo=5381,U=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Ho=function(n){return U(Mo,n)};function Ii(n){return Wn(Ho(n)>>>0)}function Pi(n){return n.displayName||n.name||"Component"}function Mn(n){return typeof n=="string"&&!0}var qo=typeof Symbol=="function"&&Symbol.for,Yo=qo?Symbol.for("react.memo"):60115,Ri=qo?Symbol.for("react.forward_ref"):60112,Ni={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Di={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Li=((Gn={})[Ri]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gn[Yo]=Vo,Gn);function fe(n){return("type"in(e=n)&&e.type.$$typeof)===Yo?Vo:"$$typeof"in n?Li[n.$$typeof]:Ni;var e}var Gi=Object.defineProperty,Mi=Object.getOwnPropertyNames,ue=Object.getOwnPropertySymbols,Hi=Object.getOwnPropertyDescriptor,qi=Object.getPrototypeOf,xe=Object.prototype;function Wo(n,e,t){if(typeof e!="string"){if(xe){var r=qi(e);r&&r!==xe&&Wo(n,r,t)}var a=Mi(e);ue&&(a=a.concat(ue(e)));for(var s=fe(n),l=fe(e),p=0;p<a.length;++p){var c=a[p];if(!(c in Di||t&&t[c]||l&&c in l||s&&c in s)){var u=Hi(e,c);try{Gi(n,c,u)}catch{}}}}return n}function nn(n){return typeof n=="function"}function ee(n){return typeof n=="object"&&"styledComponentId"in n}function M(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function he(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function cn(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Un(n,e,t){if(t===void 0&&(t=!1),!t&&!cn(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=Un(n[r],e[r]);else if(cn(e))for(var r in e)n[r]=Un(n[r],e[r]);return n}function te(n,e){Object.defineProperty(n,"toString",{value:e})}function pn(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Yi=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,s=a;e>=s;)if((s<<=1)<0)throw pn(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var l=a;l<s;l++)this.groupSizes[l]=0}for(var p=this.indexOfGroup(e+1),c=(l=0,t.length);l<c;l++)this.tag.insertRule(p,t[l])&&(this.groupSizes[e]++,p++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var s=r;s<a;s++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),s=a+r,l=a;l<s;l++)t+="".concat(this.tag.getRule(l)).concat(ne);return t},n}(),_n=new Map,Cn=new Map,$n=1,bn=function(n){if(_n.has(n))return _n.get(n);for(;Cn.has($n);)$n++;var e=$n++;return _n.set(n,e),Cn.set(e,n),e},Vi=function(n,e){$n=e+1,_n.set(n,e),Cn.set(e,n)},Wi="style[".concat(J,"][").concat(Lo,'="').concat(Bn,'"]'),Ui=new RegExp("^".concat(J,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xi=function(n,e,t){for(var r,a=t.split(","),s=0,l=a.length;s<l;s++)(r=a[s])&&n.registerName(e,r)},Ki=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(ne),a=[],s=0,l=r.length;s<l;s++){var p=r[s].trim();if(p){var c=p.match(Ui);if(c){var u=0|parseInt(c[1],10),x=c[2];u!==0&&(Vi(x,u),Xi(n,x,c[3]),n.getTag().insertRules(u,a)),a.length=0}else a.push(p)}}},ge=function(n){for(var e=document.querySelectorAll(Wi),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(J)!==Do&&(Ki(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function Zi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Uo=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(p){var c=Array.from(p.querySelectorAll("style[".concat(J,"]")));return c[c.length-1]}(t),s=a!==void 0?a.nextSibling:null;r.setAttribute(J,Do),r.setAttribute(Lo,Bn);var l=Zi();return l&&r.setAttribute("nonce",l),t.insertBefore(r,s),r},Ji=function(){function n(e){this.element=Uo(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,s=r.length;a<s;a++){var l=r[a];if(l.ownerNode===t)return l}throw pn(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),Qi=function(){function n(e){this.element=Uo(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),na=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),me=On,ea={isServer:!On,useCSSOMInjection:!Fi},Xo=function(){function n(e,t,r){e===void 0&&(e=Q),t===void 0&&(t={});var a=this;this.options=F(F({},ea),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&On&&me&&(me=!1,ge(this)),te(this,function(){return function(s){for(var l=s.getTag(),p=l.length,c="",u=function(m){var b=function(z){return Cn.get(z)}(m);if(b===void 0)return"continue";var h=s.names.get(b),j=l.getGroup(m);if(h===void 0||!h.size||j.length===0)return"continue";var k="".concat(J,".g").concat(m,'[id="').concat(b,'"]'),E="";h!==void 0&&h.forEach(function(z){z.length>0&&(E+="".concat(z,","))}),c+="".concat(j).concat(k,'{content:"').concat(E,'"}').concat(ne)},x=0;x<p;x++)u(x);return c}(a)})}return n.registerId=function(e){return bn(e)},n.prototype.rehydrate=function(){!this.server&&On&&ge(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(F(F({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new na(a):r?new Ji(a):new Qi(a)}(this.options),new Yi(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(bn(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(bn(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(bn(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ta=/&/g,ra=/^\s*\/\/.*$/gm;function Ko(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Ko(t.children,e)),t})}function oa(n){var e,t,r,a=Q,s=a.options,l=s===void 0?Q:s,p=a.plugins,c=p===void 0?Tn:p,u=function(b,h,j){return j.startsWith(t)&&j.endsWith(t)&&j.replaceAll(t,"").length>0?".".concat(e):b},x=c.slice();x.push(function(b){b.type===Sn&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(ta,t).replace(r,u))}),l.prefix&&x.push(Ci),x.push(ki);var m=function(b,h,j,k){h===void 0&&(h=""),j===void 0&&(j=""),k===void 0&&(k="&"),e=k,t=h,r=new RegExp("\\".concat(t,"\\b"),"g");var E=b.replace(ra,""),z=_i(j||h?"".concat(j," ").concat(h," { ").concat(E," }"):E);l.namespace&&(z=Ko(z,l.namespace));var _=[];return zn(z,zi(x.concat(Oi(function(w){return _.push(w)})))),_};return m.hash=c.length?c.reduce(function(b,h){return h.name||pn(15),U(b,h.name)},Mo).toString():"",m}var ia=new Xo,Xn=oa(),Zo=ln.createContext({shouldForwardProp:void 0,styleSheet:ia,stylis:Xn});Zo.Consumer;ln.createContext(void 0);function be(){return Eo.useContext(Zo)}var aa=function(){function n(e,t){var r=this;this.inject=function(a,s){s===void 0&&(s=Xn);var l=r.name+s.hash;a.hasNameForId(r.id,l)||a.insertRules(r.id,l,s(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,te(this,function(){throw pn(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Xn),this.name+e.hash},n}(),sa=function(n){return n>="A"&&n<="Z"};function ye(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;sa(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Jo=function(n){return n==null||n===!1||n===""},Qo=function(n){var e,t,r=[];for(var a in n){var s=n[a];n.hasOwnProperty(a)&&!Jo(s)&&(Array.isArray(s)&&s.isCss||nn(s)?r.push("".concat(ye(a),":"),s,";"):cn(s)?r.push.apply(r,kn(kn(["".concat(a," {")],Qo(s),!1),["}"],!1)):r.push("".concat(ye(a),": ").concat((e=a,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Si||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function q(n,e,t,r){if(Jo(n))return[];if(ee(n))return[".".concat(n.styledComponentId)];if(nn(n)){if(!nn(s=n)||s.prototype&&s.prototype.isReactComponent||!e)return[n];var a=n(e);return q(a,e,t,r)}var s;return n instanceof aa?t?(n.inject(t,r),[n.getName(r)]):[n]:cn(n)?Qo(n):Array.isArray(n)?Array.prototype.concat.apply(Tn,n.map(function(l){return q(l,e,t,r)})):[n.toString()]}function la(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(nn(t)&&!ee(t))return!1}return!0}var ca=Ho(Bn),pa=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&la(e),this.componentId=t,this.baseHash=U(ca,t),this.baseStyle=r,Xo.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=M(a,this.staticRulesId);else{var s=he(q(this.rules,e,t,r)),l=Wn(U(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,l)){var p=r(s,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,p)}a=M(a,l),this.staticRulesId=l}else{for(var c=U(this.baseHash,r.hash),u="",x=0;x<this.rules.length;x++){var m=this.rules[x];if(typeof m=="string")u+=m;else if(m){var b=he(q(m,e,t,r));c=U(c,b+x),u+=b}}if(u){var h=Wn(c>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),a=M(a,h)}}return a},n}(),ni=ln.createContext(void 0);ni.Consumer;var Hn={};function da(n,e,t){var r=ee(n),a=n,s=!Mn(n),l=e.attrs,p=l===void 0?Tn:l,c=e.componentId,u=c===void 0?function($,C){var y=typeof $!="string"?"sc":pe($);Hn[y]=(Hn[y]||0)+1;var f="".concat(y,"-").concat(Ii(Bn+y+Hn[y]));return C?"".concat(C,"-").concat(f):f}(e.displayName,e.parentComponentId):c,x=e.displayName,m=x===void 0?function($){return Mn($)?"styled.".concat($):"Styled(".concat(Pi($),")")}(n):x,b=e.displayName&&e.componentId?"".concat(pe(e.displayName),"-").concat(e.componentId):e.componentId||u,h=r&&a.attrs?a.attrs.concat(p).filter(Boolean):p,j=e.shouldForwardProp;if(r&&a.shouldForwardProp){var k=a.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;j=function($,C){return k($,C)&&E($,C)}}else j=k}var z=new pa(t,b,r?a.componentStyle:void 0);function _($,C){return function(y,f,Y){var dn=y.attrs,ri=y.componentStyle,oi=y.defaultProps,ii=y.foldedComponentIds,ai=y.styledComponentId,si=y.target,li=ln.useContext(ni),ci=be(),Rn=y.shouldForwardProp||ci.shouldForwardProp,ie=Ei(f,li,oi)||Q,P=function(un,rn,xn){for(var on,G=F(F({},rn),{className:void 0,theme:xn}),Dn=0;Dn<un.length;Dn+=1){var hn=nn(on=un[Dn])?on(G):on;for(var D in hn)G[D]=D==="className"?M(G[D],hn[D]):D==="style"?F(F({},G[D]),hn[D]):hn[D]}return rn.className&&(G.className=M(G.className,rn.className)),G}(dn,f,ie),fn=P.as||si,tn={};for(var N in P)P[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&P.theme===ie||(N==="forwardedAs"?tn.as=P.forwardedAs:Rn&&!Rn(N,fn)||(tn[N]=P[N]));var ae=function(un,rn){var xn=be(),on=un.generateAndInjectStyles(rn,xn.styleSheet,xn.stylis);return on}(ri,P),Nn=M(ii,ai);return ae&&(Nn+=" "+ae),P.className&&(Nn+=" "+P.className),tn[Mn(fn)&&!Go.has(fn)?"class":"className"]=Nn,Y&&(tn.ref=Y),Eo.createElement(fn,tn)}(w,$,C)}_.displayName=m;var w=ln.forwardRef(_);return w.attrs=h,w.componentStyle=z,w.displayName=m,w.shouldForwardProp=j,w.foldedComponentIds=r?M(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=b,w.target=r?a.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(C){for(var y=[],f=1;f<arguments.length;f++)y[f-1]=arguments[f];for(var Y=0,dn=y;Y<dn.length;Y++)Un(C,dn[Y],!0);return C}({},a.defaultProps,$):$}}),te(w,function(){return".".concat(w.styledComponentId)}),s&&Wo(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function ve(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var we=function(n){return Object.assign(n,{isCss:!0})};function W(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(nn(n)||cn(n))return we(q(ve(Tn,kn([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?q(r):we(q(ve(r,e)))}function Kn(n,e,t){if(t===void 0&&(t=Q),!e)throw pn(1,e);var r=function(a){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return n(e,t,W.apply(void 0,kn([a],s,!1)))};return r.attrs=function(a){return Kn(n,e,F(F({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return Kn(n,e,F(F({},t),a))},r}var ei=function(n){return Kn(da,n)},o=ei;Go.forEach(function(n){o[n]=ei(n)});var Zn=function(e,t){return Zn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},Zn(e,t)};function re(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Zn(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function i(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var oe=o.button(je||(je=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size});o(oe)(_e||(_e=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.secondary.light},function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.secondary.light});o(oe)($e||($e=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.secondary.tint.tint20});o(oe)(ke||(ke=i([`
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
`])),function(n){var e=n.theme;return e.colors.accent.light},function(n){var e=n.theme;return e.colors.accent.tint.tint80});var je,_e,$e,ke;function fa(n){return function(e){re(t,e);function t(r){var a=e.call(this,r)||this;return a.name=n,a}return t}(Error)}fa("InvalidButtonTypeError");o.table(ze||(ze=i([`
  border-collapse: collapse;
  width: 100%;
`],[`
  border-collapse: collapse;
  width: 100%;
`])));o.td(Oe||(Oe=i([`
  text-align: left;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`],[`
  text-align: left;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`])),function(n){return 100/(Number(n.$numberofflights)+1)});o.td(Ce||(Ce=i([`
  text-align: center;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`],[`
  text-align: center;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`])),function(n){return 100/(Number(n.$numberofflights)+1)});var ze,Oe,Ce,X="#cccccc99";o.table(Se||(Se=i([`
  width: `,`;
  position: relative;

  border-collapse: separate;
  border-spacing: 0;
`],[`
  width: `,`;
  position: relative;

  border-collapse: separate;
  border-spacing: 0;
`])),function(n){var e=n.$width;return e!==void 0&&e});o.tr(Fe||(Fe=i([`
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
`])),function(n){var e=n.$borderTop;return e===!0?"1px solid ".concat(X):""},function(n){var e=n.$borderBottom;return e===!0?"1px solid ".concat(X):""},function(n){var e=n.$backgroundColor;return e!==void 0&&e},function(n){var e=n.$stickyPos,t=n.$stickyVal,r=n.$backgroundColor;return e!==void 0&&t!==void 0&&W({position:"sticky",zIndex:1,width:"100%",backgroundColor:r!==void 0?r:"white"})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="top"&&t!==void 0&&W({top:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="bottom"&&t!==void 0&&W({bottom:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="left"&&t!==void 0&&W({left:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="right"&&t!==void 0&&W({right:t})});o.td(Ee||(Ee=i([`
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
`])),function(n){var e=n.$backgroundColor;return e!==void 0&&e},function(n){var e=n.$borderLeft;return e===!0?"1px solid ".concat(X):""},function(n){var e=n.$borderRight;return e===!0?"1px solid ".concat(X):""},function(n){var e=n.$borderTop;return e===!0?"1px solid ".concat(X):""},function(n){var e=n.$borderBottom;return e===!0?"1px solid ".concat(X):""});o.div(Ae||(Ae=i([`
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
`])),function(n){var e=n.$alignment;return e!==void 0&&"grid"},function(n){var e=n.$alignment;return e!==void 0&&(e==="left"?"start":e==="right"?"end":"center")},function(n){var e=n.$width;return e!==void 0&&e},function(n){var e=n.$paddingInline;return e!==void 0&&e},function(n){var e=n.$paddingBlock;return e!==void 0&&e},function(n){var e=n.$alignment;return e!==void 0&&e},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size});var Se,Fe,Ee,Ae;o.input(Be||(Be=i([`
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
`])),function(n){var e;return(e=n.theme.colors.controlsBorder)!==null&&e!==void 0?e:"#CBCBCB"},function(n){var e;return(e=n.theme.paddings.medium)!==null&&e!==void 0?e:"5px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"});var Be;o.div(Te||(Te=i([`
    height: 100%;
    position: default;
    align-items: center;
`],[`
    height: 100%;
    position: default;
    align-items: center;
`])));o.button(Ie||(Ie=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.olive},function(n){var e=n.theme;return e.colors.secondary.light});o.div(Pe||(Pe=i([`
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
`])));o.button(Re||(Re=i([`
    border: none;
    background-color: transparent;
    padding: 5px;
    text-align: left;    
`],[`
    border: none;
    background-color: transparent;
    padding: 5px;
    text-align: left;    
`])));o.div(Ne||(Ne=i([`
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
`])),function(n){var e=n.top;return e},function(n){var e=n.left;return e});var Te,Ie,Pe,Re,Ne;function In(n){return function(e){re(t,e);function t(r){var a=e.call(this,r)||this;return a.name=n,a}return t}(Error)}In("NoChildrenContentError");In("NoColumnsGivenError");In("CellsDontMatchColumnsError");In("NoCellsGivenError");o.input(De||(De=i([`
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
`])),function(n){var e;return(e=n.theme.colors.controlsBorder)!==null&&e!==void 0?e:"#CBCBCB"},function(n){var e;return(e=n.theme.paddings.medium)!==null&&e!==void 0?e:"5px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"});var De,ua=o.div(Le||(Le=i([`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 1rem;
`],[`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 1rem;
`]))),xa=o.span(Ge||(Ge=i([`
  display: block;
`],[`
  display: block;
`]))),Le,Ge;function ha(n){var e=n.carrierCode,t=n.carrierShortName,r=t===void 0?"":t,a=n.showTitle,s=a===void 0?!1:a,l=n.width,p=l===void 0?200:l,c=n.testId,u=c===void 0?"airline-logo":c,x=function(b,h){return gn.jsx("img",{"data-testid":u,src:"https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/".concat(b.toUpperCase(),".svg"),alt:h,width:p})};return e===void 0||r===""||r===void 0?gn.jsx(xa,{"data-testid":"".concat(u," unavailable"),children:"Image not available"}):s?gn.jsxs(ua,{children:[x(e,r),gn.jsx("h4",{"data-testid":"".concat(u," airline-name"),children:r})]}):x(e,r)}o.div(Me||(Me=i([`
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

`])));o.div(He||(He=i([`
  display: flex;  
  flex-wrap: wrap;
  width: 100%;  
  justify-content: space-between;  
`],[`
  display: flex;  
  flex-wrap: wrap;
  width: 100%;  
  justify-content: space-between;  
`])));o.div(qe||(qe=i([`
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
`])));o.div(Ye||(Ye=i([`
  display: flex;
  justify-content: space-between;  
  background-color: `,`;
  color: #000000;
  border: 1px solid `,`;
  // border: 1.5px solid rgb(51, 102, 187);
  border-radius: 12px;
  padding: 6px 3px 0px 3px;
  gap: 1px;
  font-size: 12px;
  box-sizing: border-box;
  width: 50px;
  height: 25px;
  margin: 3px;
`],[`
  display: flex;
  justify-content: space-between;  
  background-color: `,`;
  color: #000000;
  border: 1px solid `,`;
  // border: 1.5px solid rgb(51, 102, 187);
  border-radius: 12px;
  padding: 6px 3px 0px 3px;
  gap: 1px;
  font-size: 12px;
  box-sizing: border-box;
  width: 50px;
  height: 25px;
  margin: 3px;
`])),function(n){var e,t=n.theme;return(e=t.colors.primary.light)!==null&&e!==void 0?e:"#969332"},function(n){var e,t=n.theme;return(e=t.colors.primary.light)!==null&&e!==void 0?e:"#969332"});o.button(Ve||(Ve=i([`
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
`])));o.div(We||(We=i([`
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
`])));o.input(Ue||(Ue=i([`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  font-size: 12px;
  height: 30px;
`],[`
  width: 100%;
  outline: none;
  box-sizing: border-box;
  font-size: 12px;
  height: 30px;
`])));o.div(Xe||(Xe=i([`
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
  width: 100%; /* Ancho consistente */
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
  width: 100%; /* Ancho consistente */
`])));o.div(Ke||(Ke=i([`
  padding:0px; /* Consistencia en el espaciado */
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`],[`
  padding:0px; /* Consistencia en el espaciado */
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`])));o.div(Ze||(Ze=i([`
  display: flex;
  width: 40%;
  font-size: 12px;
  justify-content: space-between;  
`],[`
  display: flex;
  width: 40%;
  font-size: 12px;
  justify-content: space-between;  
`])));o.div(Je||(Je=i([`
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
`])));o.button(Qe||(Qe=i([`
  width: 100%;
  font-size: 12px;
  border: 1px solid #cdcdcd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 35px;

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

  &:hover {
    background-color: #e6e6e6;
  }
`])));o.span(nt||(nt=i([`
  transition: transform 0.2s ease;
  transform: `,`;
`],[`
  transition: transform 0.2s ease;
  transform: `,`;
`])),function(n){var e=n.isOpen;return e?"rotate(180deg)":"rotate(0deg)"});o.ul(et||(et=i([`
  position: absolute;
  top: 68.4%;
  left: 15.3%;
  min-width: 150px;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`],[`
  position: absolute;
  top: 68.4%;
  left: 15.3%;
  min-width: 150px;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`])));o.li(tt||(tt=i([`
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  `,`
`],[`
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  `,`
`])),function(n){var e=n.isSelected;return e&&`
    background-color: #e6f7ff;
    font-weight: bold;
  `});o.p(rt||(rt=i([`
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
`])));o.select(ot||(ot=i([`
    font-size: 12px;
    height: 30px;
    border: 1px solid #cbcbcb;
`],[`
    font-size: 12px;
    height: 30px;
    border: 1px solid #cbcbcb;
`])));o.div(it||(it=i([`
  width: 15px;
`],[`
  width: 15px;
`])));o.img(at||(at=i([`
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`])));o.div(st||(st=i([`
  display: flex;
  width: 100%;
  justifyContent: space-between;
`],[`
  display: flex;
  width: 100%;
  justifyContent: space-between;
`])));o.div(lt||(lt=i([`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
`])));var Me,He,qe,Ye,Ve,We,Ue,Xe,Ke,Ze,Je,Qe,nt,et,tt,rt,ot,it,at,st,lt;o.button(ct||(ct=i([`
  background-color: `,`;
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
    background-color: `,`;
  }
`],[`
  background-color: `,`;
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
    background-color: `,`;
  }
`])),function(n){var e=n.theme;return e.colors.accent.normal},function(n){var e=n.theme;return e.colors.accent.normal});o.div(pt||(pt=i([`
  background-color: `,`;
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
  background-color: `,`;
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal});var ct,pt;o.div(dt||(dt=i([`
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
  }

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
  }

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
`])),function(n){var e=n.theme;return e.fonts.sizes.bodyText.size},function(n){var e=n.theme;return e.fonts.bodyText},function(n){var e=n.theme;return e.colors.secondary.tint.tint60},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size},function(n){var e=n.theme;return e.borders.width},function(n){var e=n.theme;return e.colors.primary.normal},function(n){var e=n.theme;return e.fonts.sizes.smallText.size});o.span.withConfig({shouldForwardProp:function(e){return e!=="highlightColor"}})(ft||(ft=i([`
    color: `,`;
`],[`
    color: `,`;
`])),function(n){return n.highlightColor?"#409e4f":"#000000"});var dt,ft;o.div(ut||(ut=i([`
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
`])));o.div(xt||(xt=i([`
  display: flex;
  align-items: center;
  gap: 8px;
`],[`
  display: flex;
  align-items: center;
  gap: 8px;
`])));o.img(ht||(ht=i([`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`],[`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`])));o.span(gt||(gt=i([`
  font-weight: 1000;
  font-size: 0.9em;
`],[`
  font-weight: 1000;
  font-size: 0.9em;
`])));o.div(mt||(mt=i([`
  display: flex;
  flex-direction: column;
`],[`
  display: flex;
  flex-direction: column;
`])));o.div(bt||(bt=i([`
  display: flex;
  align-items: center;
  width: 100%;
`],[`
  display: flex;
  align-items: center;
  width: 100%;
`])));o.div(yt||(yt=i([`
  display: flex;
  flex-direction: column;
  align-items: left;
`],[`
  display: flex;
  flex-direction: column;
  align-items: left;
`])));o.span(vt||(vt=i([`
  font-size: 0.8em;
  text-align: center;
`],[`
  font-size: 0.8em;
  text-align: center;
`])));o.span(wt||(wt=i([`
  font-size: 0.8em;
  color: gray;
  width: 100%;
  text-align: center;
`],[`
  font-size: 0.8em;
  color: gray;
  width: 100%;
  text-align: center;
`])));o.div(jt||(jt=i([`
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
`])));o.span(_t||(_t=i([`
  color: black;
  width: 100%;
  font-size: 0.8em;
  text-align: center;
`],[`
  color: black;
  width: 100%;
  font-size: 0.8em;
  text-align: center;
`])));o.div($t||($t=i([`
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
`])),function(n){var e=n.top;return e},function(n){var e=n.left;return e});o.div(kt||(kt=i([`
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
`])));o.span(zt||(zt=i([`
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
`])));o.span(Ot||(Ot=i([`
  font-size: 0.8em;
  color: gray;
`],[`
  font-size: 0.8em;
  color: gray;
`])));o.div(Ct||(Ct=i([`
  display: flex;
  align-items: left;
  gap: 6px;
`],[`
  display: flex;
  align-items: left;
  gap: 6px;
`])));o.span(St||(St=i([`
  font-size: 0.8em;
`],[`
  font-size: 0.8em;
`])));o.div(Ft||(Ft=i([`
  font-size: 0.8em;
  color: blue;
  opacity: 0.6;
`],[`
  font-size: 0.8em;
  color: blue;
  opacity: 0.6;
`])));o.div(Et||(Et=i([`
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
`])),function(n){var e=n.theme;return e.colors.accent.normal});o.div(At||(At=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.primary.light},function(n){var e=n.theme;return e.colors.primary.normal});o.div(Bt||(Bt=i([`
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
`])),function(n){var e=n.theme;return e.colors.accent.normal},function(n){var e=n.theme;return e.colors.accent.light},function(n){var e=n.theme;return e.colors.accent.light});var ut,xt,ht,gt,mt,bt,yt,vt,wt,jt,_t,$t,kt,zt,Ot,Ct,St,Ft,Et,At,Bt;o.div(Tt||(Tt=i([`
  display: flex;
  flex-direction: column;
`],[`
  display: flex;
  flex-direction: column;
`])));o.div(It||(It=i([`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`],[`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`])));o.div(Pt||(Pt=i([`
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
`])));o.div(Rt||(Rt=i([`
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
`])));o.span(Nt||(Nt=i([`
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
`])));o.div(Dt||(Dt=i([`
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
`])));o.label(Lt||(Lt=i([`
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
`])));o.input(Gt||(Gt=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.secondary.light},function(n){var e=n.theme;return e.colors.accent.normal},function(n){var e=n.theme;return e.colors.accent.normal});o.div(Mt||(Mt=i([`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`],[`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`])));o.span(Ht||(Ht=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.secondary.light},function(n){var e=n.theme;return e.colors.secondary.normal});o.span(qt||(qt=i([`
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
`])),function(n){var e=n.theme;return e.colors.secondary.normal},function(n){var e=n.theme;return e.colors.secondary.light},function(n){var e=n.theme;return e.colors.secondary.normal});o.span(Yt||(Yt=i([`
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
`])));o.svg(Vt||(Vt=i([`
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
`])),function(n){var e=n.theme;return e.colors.accent.normal});var Tt,It,Pt,Rt,Nt,Dt,Lt,Gt,Mt,Ht,qt,Yt,Vt;o.div(Wt||(Wt=i([`
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
`])),function(n){var e=n.theme,t=n.selected;return t?e.colors.accent.light:e.colors.primary.white},function(n){var e=n.theme,t=n.selected;return t?e.colors.accent.light:e.colors.accent.yellowLight},function(n){var e=n.theme,t=n.selected;return t?e.colors.accent.normal:e.colors.accent.yellow},function(n){var e=n.selected,t=n.theme;return e&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 4px;
      background-color: `.concat(t.colors.accent.normal,`;
      pointer-events: none;
    }
  `)});var Wt;o.div(Ut||(Ut=i([`
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
`])),function(n){var e=n.theme;return e.fonts.bodyText},function(n){var e=n.theme;return e.borders.width},function(n){var e=n.theme;return e.colors.primary.softBlackTint.tint20});var Ut;o.p(Xt||(Xt=i([`
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

`])),function(n){var e,t=n.theme;return(e=t.fonts)===null||e===void 0?void 0:e.bodyText},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size});var Xt;o.div(Kt||(Kt=i([`
    display: flex;
    width: 100%;
    flex-direction: row;
    content-align: center;
    align-items: center;
    margin: 0px;
    color: `,`;
`],[`
    display: flex;
    width: 100%;
    flex-direction: row;
    content-align: center;
    align-items: center;
    margin: 0px;
    color: `,`;
`])),function(n){var e=n.theme;return e.colors.primary.light});o.p(Zt||(Zt=i([`
  margin: 0;
  font-size: 0.8em;
`],[`
  margin: 0;
  font-size: 0.8em;
`])));o.button(Jt||(Jt=i([`
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
`])),function(n){var e=n.theme;return e.colors.controlsBorder},function(n){var e=n.theme;return e.colors.primary.light});o.div(Qt||(Qt=i([`
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
`])));o.div(nr||(nr=i([`
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
`])));o.div(er||(er=i([`
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
`])));var Kt,Zt,Jt,Qt,nr,er;o.div(tr||(tr=i([`
.journey-airline-detail {
  padding: 10px 0;
}
  .airline-info {
    font-family: `,`;
    font-size:  `,`;
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
    font-size:  `,`;
    color: `,`;
  }
`],[`
.journey-airline-detail {
  padding: 10px 0;
}
  .airline-info {
    font-family: `,`;
    font-size:  `,`;
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
    font-size:  `,`;
    color: `,`;
  }
`])),function(n){var e=n.theme;return e.fonts.bodyText},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size},function(n){var e=n.theme;return e.colors.primary.light},function(n){var e=n.theme;return e.fonts.bodyText},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size},function(n){var e=n.theme;return e.colors.primary.tint.tint80});var tr;o.section(rr||(rr=i([`
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
`])));o.section(or||(or=i([`
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
`])),function(n){return n.$datefontcolor});var rr,or;o.div(ir||(ir=i([`
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
`])));o.p(ar||(ar=i([`
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
`])));var ir,ar;o.div(sr||(sr=i([`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`],[`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`])));var sr;o.div(lr||(lr=i([`
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
`])),function(n){var e;return(e=n.theme.colors.controlsBorder)!==null&&e!==void 0?e:"#CBCBCB"},function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"});o.input(cr||(cr=i([`
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
`])),function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"});o.img(pr||(pr=i([`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`])));o.div(dr||(dr=i([`
  position: absolute;
  z-index: 10;
  background-color: white;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  font-size: `,`;
  font-family: `,`;
  border-color: `,`;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  p {
    align-self: center;
  }
`],[`
  position: absolute;
  z-index: 10;
  background-color: white;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  font-size: `,`;
  font-family: `,`;
  border-color: `,`;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  p {
    align-self: center;
  }
`])),function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e;return(e=n.theme.colors.controlsBorder)!==null&&e!==void 0?e:"#CBCBCB"});o.li(fr||(fr=i([`
  color: `,`;
  font-size: `,`;
  font-family: `,`;
  display: flex;
  align-items: center;
  list-style-type: none;
  font-weight: 1000;
  width: 100%;
  padding: `,`;
  &:hover {
    background-color:`,`;
  }
`],[`
  color: `,`;
  font-size: `,`;
  font-family: `,`;
  display: flex;
  align-items: center;
  list-style-type: none;
  font-weight: 1000;
  width: 100%;
  padding: `,`;
  &:hover {
    background-color:`,`;
  }
`])),function(n){var e;return(e=n.theme.colors.primary.normal)!==null&&e!==void 0?e:"#969332"},function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e;return(e=n.theme.paddings.regular)!==null&&e!==void 0?e:"5px"},function(n){var e;return(e=n.theme.colors.primary.tint.tint20)!==null&&e!==void 0?e:"rgba(150 147 50 / 0.2)"});o.ul(ur||(ur=i([`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
`],[`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
`])));o.div(xr||(xr=i([`
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
`])));o.div(hr||(hr=i([`
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center;    /* Centra verticalmente */ 
   box-sizing: border-box; /* Asegurándonos de que el padding no afecte las dimensiones */
  width: 100%;
  height: 100%;
  font-size: `,`;
  font-family: `,`;
  color:`,`;
  font-color: `,`;
`],[`
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center;    /* Centra verticalmente */ 
   box-sizing: border-box; /* Asegurándonos de que el padding no afecte las dimensiones */
  width: 100%;
  height: 100%;
  font-size: `,`;
  font-family: `,`;
  color:`,`;
  font-color: `,`;
`])),function(n){var e;return(e=n.theme.fonts.sizes.bodyText.size)!==null&&e!==void 0?e:"12px"},function(n){var e;return(e=n.theme.fonts.bodyText)!==null&&e!==void 0?e:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e;return(e=n.theme.colors.primary.normal)!==null&&e!==void 0?e:"#969332"},function(n){var e;return(e=n.theme.colors.primary.normal)!==null&&e!==void 0?e:"#969332"});var lr,cr,pr,dr,fr,ur,xr,hr;o.div(gr||(gr=i([`
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
`])),function(n){var e=n.theme;return e.fonts.sizes.smallHeadings.size},function(n){var e=n.theme;return e.colors.secondary.normal});o.div(mr||(mr=i([`
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
`])),function(n){var e=n.$highlighted;return e===!0?"#409e4f":""},function(n){var e=n.theme;return e.fonts.sizes.bodyText.size});o.div(br||(br=i([`
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
`])));o.button(yr||(yr=i([`
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
`])),function(n){var e=n.theme;return e.fonts.sizes.bodyText.size},function(n){var e=n.$isBold;return e===!0?"bold":"normal"},function(n){var e=n.theme;return e.colors.accent.normal});var gr,mr,br,yr;function ti(n){return function(e){re(t,e);function t(r){var a=e.call(this,r)||this;return a.name=n,a}return t}(Error)}ti("MissingFaresDataError");ti("EmptyFaresDataError");o.svg(vr||(vr=i([`
  width: 60px;
  height: 100px;
  color: #000;
`],[`
  width: 60px;
  height: 100px;
  color: #000;
`])));o.div(wr||(wr=i([`
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
`])));o.div(jr||(jr=i([`
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
`])));o.div(_r||(_r=i([`
  width: fitContent;
  height: 'fitContent';
  margin: 0 0 10px 0;
`],[`
  width: fitContent;
  height: 'fitContent';
  margin: 0 0 10px 0;
`])));var vr,wr,jr,_r;o.button($r||($r=i([`
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
`])));o.div(kr||(kr=i([`
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
`])));o.div(zr||(zr=i([`
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
`])));o.svg(Or||(Or=i([`
  width: 60px;
  height: 100px;
  color: #000;
`],[`
  width: 60px;
  height: 100px;
  color: #000;
`])));var $r,kr,zr,Or;o.p(Cr||(Cr=i([`
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
`])));o.input(Sr||(Sr=i([`
  width: 100%;  
  margin: 0px;
  padding: 0px;
`],[`
  width: 100%;  
  margin: 0px;
  padding: 0px;
`])));o.img(Fr||(Fr=i([`
  height: 15px;  
  padding: 0;
`],[`
  height: 15px;  
  padding: 0;
`])));o.button(Er||(Er=i([`  
  font-size: 18px;
`],[`  
  font-size: 18px;
`])));o.input.attrs({type:"number"})(Ar||(Ar=i([`
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
`])));o.select(Br||(Br=i([`
  width: 100%;  
  border: 1px solid #cbcbcb;
`],[`
  width: 100%;  
  border: 1px solid #cbcbcb;
`])));o.div(Tr||(Tr=i([`
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
`])));o.div(Ir||(Ir=i([`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  // border: 2px solid #cbcbcb;
  padding: 0px;
`],[`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  // border: 2px solid #cbcbcb;
  padding: 0px;
`])));o.div(Pr||(Pr=i([`
  width: 15px;
`],[`
  width: 15px;
`])));o.img(Rr||(Rr=i([`
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`])));o.div(Nr||(Nr=i([`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`],[`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`])));var Cr,Sr,Fr,Er,Ar,Br,Tr,Ir,Pr,Rr,Nr,Pn=o.p(Dr||(Dr=i([`
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
`])),function(n){return n.size},function(n){return n.color},function(n){return n.bold?"bold":"normal"});Pn.defaultProps={size:"16px",color:"black",bold:!1};var ga=o(Pn)(Lr||(Lr=i([`
  size: '40px';
  color: `,`; 
  bold: true;
`],[`
  size: '40px';
  color: `,`; 
  bold: true;
`])),function(n){return n.color||"black"});ga.defaultProps={size:"40px",color:"black",bold:!0};var ma=o(Pn)(Gr||(Gr=i([`
  size: '40px';
  color: `,`; 
  bold: true;
`],[`
  size: '40px';
  color: `,`; 
  bold: true;
`])),function(n){return n.color||"black"});ma.defaultProps={size:"17.5px",color:"black",bold:!0};var ba=o(Pn)(Mr||(Mr=i([`
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
`])),function(n){return n.color||"black"});ba.defaultProps={size:"14px",color:"black",bold:!0};var Dr,Lr,Gr,Mr;o.div(Hr||(Hr=i([`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  margin: 0px;
  padding: 0px;
  border: 1px solid #CBCBCB;
  font-size: 10px;
  font-family: sans-serif;
`],[`
  display: flex;
  align-items: center;
  width: 100px;
  height: 25px;
  margin: 0px;
  padding: 0px;
  border: 1px solid #CBCBCB;
  font-size: 10px;
  font-family: sans-serif;
`])));o.input(qr||(qr=i([`
  width: 100%;
  border: none;
  outline: none;
  font-size: 10px;
  font-family: sans-serif;
`],[`
  width: 100%;
  border: none;
  outline: none;
  font-size: 10px;
  font-family: sans-serif;
`])));o.div(Yr||(Yr=i([`
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  margin-right: 0px;
  padding: 0px;
  border: 1px solid #CBCBCB;
  font-size: 10px;
  font-family: sans-serif;
`],[`
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  margin-right: 0px;
  padding: 0px;
  border: 1px solid #CBCBCB;
  font-size: 10px;
  font-family: sans-serif;
`])));o.input(Vr||(Vr=i([`
  width: 100%;
  border: none;
  outline: none;
  font-size: 10px;
  font-family: sans-serif;
`],[`
  width: 100%;
  border: none;
  outline: none;
  font-size: 10px;
  font-family: sans-serif;
`])));o.img(Wr||(Wr=i([`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`])));o.div(Ur||(Ur=i([`
  position: absolute;
  z-index: 10;
  background-color: white;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  font-size: 10px;
  font-family: sans-serif;
  border-color: #CBCBCB;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  p {
    align-self: center;
  }
`],[`
  position: absolute;
  z-index: 10;
  background-color: white;
  top: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  border: 1px solid black;
  font-size: 10px;
  font-family: sans-serif;
  border-color: #CBCBCB;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  p {
    align-self: center;
  }
`])));o.ul(Xr||(Xr=i([`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
`],[`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
`])));o.li(Kr||(Kr=i([`
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
`])));o.div(Zr||(Zr=i([`
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
`])));o.div(Jr||(Jr=i([`
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
`])));o.input(Qr||(Qr=i([`
  height: 100%;
  width: 100%;
  outline: none;
`],[`
  height: 100%;
  width: 100%;
  outline: none;
`])));o.div(no||(no=i([`
`],[`
`])));o.div(eo||(eo=i([`
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
`])));o.div(to||(to=i([`
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
`])));o.div(ro||(ro=i([`
  width: 15px;
`],[`
  width: 15px;
`])));o.input(oo||(oo=i([`
  height: 100%;
  width: 100%;
  outline: none;
`],[`
  height: 100%;
  width: 100%;
  outline: none;
`])));o.div(io||(io=i([`
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
`])));o.div(ao||(ao=i([`
  
  width: 100%;
  display: flex;
  
  // border: 1px solid #CBCBCB;
  justify-content: space-between;
`],[`
  
  width: 100%;
  display: flex;
  
  // border: 1px solid #CBCBCB;
  justify-content: space-between;
`])));o.div(so||(so=i([`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`],[`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`])));o.small(lo||(lo=i([`
  font-size: 10px;
`],[`
  font-size: 10px;
`])));o.div(co||(co=i([`
  margin-left: 5px;
  width: 210px;
`],[`
  margin-left: 5px;
  width: 210px;
`])));o.img(po||(po=i([`
  height: 15px;
  margin: 5px 0 auto auto;
  padding: 0;
`],[`
  height: 15px;
  margin: 5px 0 auto auto;
  padding: 0;
`])));var Hr,qr,Yr,Vr,Wr,Ur,Xr,Kr,Zr,Jr,Qr,no,eo,to,ro,oo,io,ao,so,lo,co,po;o.div(fo||(fo=i([`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 5px solid #0000FF;
`],[`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 5px solid #0000FF;
`])));o.p(uo||(uo=i([`
  font-size: 12px;
  font-weight: 1000;
  margin-left: 10px;
  margin-top: 5px;
`],[`
  font-size: 12px;
  font-weight: 1000;
  margin-left: 10px;
  margin-top: 5px;
`])));o.img(xo||(xo=i([`
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 15px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 0px;
  object-fit: contain;
`])));o.div(ho||(ho=i([`
  width: 100%;  
  margin-top: 15px;
  // border: 3px solid #CBCFFF;
`],[`
  width: 100%;  
  margin-top: 15px;
  // border: 3px solid #CBCFFF;
`])));o.div(go||(go=i([`
  width: 100%;  
  // border: 3px solid #FFF555;
`],[`
  width: 100%;  
  // border: 3px solid #FFF555;
`])));var fo,uo,xo,ho,go;o.img(mo||(mo=i([`
  height: 15px;  
  padding: 0;
`],[`
  height: 15px;  
  padding: 0;
`])));o.div(bo||(bo=i([`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`],[`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`])));o.div(yo||(yo=i([`
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
`])));var mo,bo,yo;o.div(vo||(vo=i([`
  display: flex;
  width: 100%;
  text-align: left;
  padding-top: 2px;
  border-bottom: 1px solid #ddd;  
  padding-left: 10px;
  color:`,`;
  height: 45px;
  align-items: baseline;
`],[`
  display: flex;
  width: 100%;
  text-align: left;
  padding-top: 2px;
  border-bottom: 1px solid #ddd;  
  padding-left: 10px;
  color:`,`;
  height: 45px;
  align-items: baseline;
`])),function(n){var e=n.theme;return e.colors.primary.light});o.p(wo||(wo=i([`
  display:flex;
  margin-left: 10px;  
  font-size: 12px;
  color: #000000;
`],[`
  display:flex;
  margin-left: 10px;  
  font-size: 12px;
  color: #000000;
`])));o.div(jo||(jo=i([`
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
`])));o.div(_o||(_o=i([`
  height: 90px;
  width: 100%;
  max-width: 340px;
  padding: 15px;  
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid `,`;
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
  color: `,`;
  align-items: center;
  flex-direction: column;  
`])),function(n){var e=n.theme;return e.colors.primary.normal},function(n){var e=n.theme;return e.colors.primary.normal});o.p($o||($o=i([`
  font-weight: 1000;
  text-align: center;
  margin: 0;
`],[`
  font-weight: 1000;
  text-align: center;
  margin: 0;
`])));o.div(ko||(ko=i([`
  height: 90px;
  width: 100%;
  max-width: 340px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  color: `,`;
`])),function(n){var e=n.theme;return e.colors.primary.normal});o.div(zo||(zo=i([`
  height: 90px;
  width: 100%;
  max-width: 340px;
  padding: 15px;
  color: `,`;
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
  cursor: not-allowed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`])),function(n){var e=n.theme;return e.colors.primary.normal});o.div(Oo||(Oo=i([`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  margin: 0;
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  margin: 0;
`])));var vo,wo,jo,_o,$o,ko,zo,Oo;const _a={title:"Example/CarrierLogo",component:ha,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:pi()}},yn={args:{carrierCode:"IB",carrierShortName:"Iberia",showTitle:!0,width:100,testId:"carrier-logo"}};var Co,So,Fo;yn.parameters={...yn.parameters,docs:{...(Co=yn.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  args: {
    carrierCode: "IB",
    carrierShortName: "Iberia",
    showTitle: true,
    width: 100,
    testId: "carrier-logo"
  }
}`,...(Fo=(So=yn.parameters)==null?void 0:So.docs)==null?void 0:Fo.source}}};const $a=["Primary"];export{yn as Primary,$a as __namedExportsOrder,_a as default};
