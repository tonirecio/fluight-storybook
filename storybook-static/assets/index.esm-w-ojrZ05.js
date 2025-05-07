import{R as Sn,r as $}from"./index-D4H_InIO.js";import{j as r}from"./jsx-runtime-BO8uF4Og.js";var G=function(){return G=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},G.apply(this,arguments)};function Nn(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,s;i<o;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}var A="-ms-",_n="-moz-",T="-webkit-",tr="comm",Gn="rule",pe="decl",Fr="@import",ir="@keyframes",$r="@layer",or=Math.abs,fe=String.fromCharCode,oe=Object.assign;function Tr(n,e){return L(n,0)^45?(((e<<2^L(n,0))<<2^L(n,1))<<2^L(n,2))<<2^L(n,3):0}function rr(n){return n.trim()}function J(n,e){return(n=e.exec(n))?n[0]:n}function z(n,e,t){return n.replace(e,t)}function En(n,e,t){return n.indexOf(e,t)}function L(n,e){return n.charCodeAt(e)|0}function pn(n,e,t){return n.slice(e,t)}function K(n){return n.length}function ar(n){return n.length}function jn(n,e){return e.push(n),n}function Or(n,e){return n.map(e).join("")}function _e(n,e){return n.filter(function(t){return!J(t,e)})}var Vn=1,fn=1,lr=0,W=0,P=0,gn="";function Un(n,e,t,i,o,s,d,u){return{value:n,root:e,parent:t,type:i,props:o,children:s,line:Vn,column:fn,length:d,return:"",siblings:u}}function tn(n,e){return oe(Un("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function sn(n){for(;n.root;)n=tn(n.root,{children:[n]});jn(n,n.siblings)}function Ar(){return P}function Dr(){return P=W>0?L(gn,--W):0,fn--,P===10&&(fn=1,Vn--),P}function q(){return P=W<lr?L(gn,W++):0,fn++,P===10&&(fn=1,Vn++),P}function an(){return L(gn,W)}function In(){return W}function Wn(n,e){return pn(gn,n,e)}function re(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Er(n){return Vn=fn=1,lr=K(gn=n),W=0,[]}function Ir(n){return gn="",n}function Qn(n){return rr(Wn(W-1,ae(n===91?n+2:n===40?n+1:n)))}function Br(n){for(;(P=an())&&P<33;)q();return re(n)>2||re(P)>3?"":" "}function Pr(n,e){for(;--e&&q()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return Wn(n,In()+(e<6&&an()==32&&q()==32))}function ae(n){for(;q();)switch(P){case n:return W;case 34:case 39:n!==34&&n!==39&&ae(P);break;case 40:n===41&&ae(n);break;case 92:q();break}return W}function Lr(n,e){for(;q()&&n+P!==57;)if(n+P===84&&an()===47)break;return"/*"+Wn(e,W-1)+"*"+fe(n===47?n:q())}function Nr(n){for(;!re(an());)q();return Wn(n,W)}function Rr(n){return Ir(Bn("",null,null,null,[""],n=Er(n),0,[0],n))}function Bn(n,e,t,i,o,s,d,u,x){for(var c=0,p=0,g=d,v=0,y=0,b=0,_=1,k=1,C=1,S=0,w="",j=o,m=s,h=i,f=w;k;)switch(b=S,S=q()){case 40:if(b!=108&&L(f,g-1)==58){En(f+=z(Qn(S),"&","&\f"),"&\f",or(c?u[c-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:f+=Qn(S);break;case 9:case 10:case 13:case 32:f+=Br(b);break;case 92:f+=Pr(In()-1,7);continue;case 47:switch(an()){case 42:case 47:jn(Mr(Lr(q(),In()),e,t,x),x);break;default:f+="/"}break;case 123*_:u[c++]=K(f)*C;case 125*_:case 59:case 0:switch(S){case 0:case 125:k=0;case 59+p:C==-1&&(f=z(f,/\f/g,"")),y>0&&K(f)-g&&jn(y>32?Ce(f+";",i,t,g-1,x):Ce(z(f," ","")+";",i,t,g-2,x),x);break;case 59:f+=";";default:if(jn(h=Se(f,e,t,c,p,o,u,w,j=[],m=[],g,s),s),S===123)if(p===0)Bn(f,e,h,h,j,s,g,u,m);else switch(v===99&&L(f,3)===110?100:v){case 100:case 108:case 109:case 115:Bn(n,h,h,i&&jn(Se(n,h,h,0,0,o,u,w,o,j=[],g,m),m),o,m,g,u,i?j:m);break;default:Bn(f,h,h,h,[""],m,0,u,m)}}c=p=y=0,_=C=1,w=f="",g=d;break;case 58:g=1+K(f),y=b;default:if(_<1){if(S==123)--_;else if(S==125&&_++==0&&Dr()==125)continue}switch(f+=fe(S),S*_){case 38:C=p>0?1:(f+="\f",-1);break;case 44:u[c++]=(K(f)-1)*C,C=1;break;case 64:an()===45&&(f+=Qn(q())),v=an(),p=g=K(w=f+=Nr(In())),S++;break;case 45:b===45&&K(f)==2&&(_=0)}}return s}function Se(n,e,t,i,o,s,d,u,x,c,p,g){for(var v=o-1,y=o===0?s:[""],b=ar(y),_=0,k=0,C=0;_<i;++_)for(var S=0,w=pn(n,v+1,v=or(k=d[_])),j=n;S<b;++S)(j=rr(k>0?y[S]+" "+w:z(w,/&\f/g,y[S])))&&(x[C++]=j);return Un(n,e,t,o===0?Gn:u,x,c,p,g)}function Mr(n,e,t,i){return Un(n,e,t,tr,fe(Ar()),pn(n,2,-2),0,i)}function Ce(n,e,t,i,o){return Un(n,e,t,pe,pn(n,0,i),pn(n,i+1,-1),i,o)}function sr(n,e,t){switch(Tr(n,e)){case 5103:return T+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return T+n+n;case 4789:return _n+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return T+n+_n+n+A+n+n;case 5936:switch(L(n,e+11)){case 114:return T+n+A+z(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return T+n+A+z(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return T+n+A+z(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return T+n+A+n+n;case 6165:return T+n+A+"flex-"+n+n;case 5187:return T+n+z(n,/(\w+).+(:[^]+)/,T+"box-$1$2"+A+"flex-$1$2")+n;case 5443:return T+n+A+"flex-item-"+z(n,/flex-|-self/g,"")+(J(n,/flex-|baseline/)?"":A+"grid-row-"+z(n,/flex-|-self/g,""))+n;case 4675:return T+n+A+"flex-line-pack"+z(n,/align-content|flex-|-self/g,"")+n;case 5548:return T+n+A+z(n,"shrink","negative")+n;case 5292:return T+n+A+z(n,"basis","preferred-size")+n;case 6060:return T+"box-"+z(n,"-grow","")+T+n+A+z(n,"grow","positive")+n;case 4554:return T+z(n,/([^-])(transform)/g,"$1"+T+"$2")+n;case 6187:return z(z(z(n,/(zoom-|grab)/,T+"$1"),/(image-set)/,T+"$1"),n,"")+n;case 5495:case 3959:return z(n,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return z(z(n,/(.+:)(flex-)?(.*)/,T+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+T+n+n;case 4200:if(!J(n,/flex-|baseline/))return A+"grid-column-align"+pn(n,e)+n;break;case 2592:case 3360:return A+z(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,J(i.props,/grid-\w+-end/)})?~En(n+(t=t[e].value),"span",0)?n:A+z(n,"-start","")+n+A+"grid-row-span:"+(~En(t,"span",0)?J(t,/\d+/):+J(t,/\d+/)-+J(n,/\d+/))+";":A+z(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return J(i.props,/grid-\w+-start/)})?n:A+z(z(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return z(n,/(.+)-inline(.+)/,T+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(K(n)-1-e>6)switch(L(n,e+1)){case 109:if(L(n,e+4)!==45)break;case 102:return z(n,/(.+:)(.+)-([^]+)/,"$1"+T+"$2-$3$1"+_n+(L(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~En(n,"stretch",0)?sr(z(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return z(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,s,d,u,x,c){return A+o+":"+s+c+(d?A+o+"-span:"+(u?x:+x-+s)+c:"")+n});case 4949:if(L(n,e+6)===121)return z(n,":",":"+T)+n;break;case 6444:switch(L(n,L(n,14)===45?18:11)){case 120:return z(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+T+(L(n,14)===45?"inline-":"")+"box$3$1"+T+"$2$3$1"+A+"$2box$3")+n;case 100:return z(n,":",":"+A)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(n,"scroll-","scroll-snap-")+n}return n}function Rn(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function Hr(n,e,t,i){switch(n.type){case $r:if(n.children.length)break;case Fr:case pe:return n.return=n.return||n.value;case tr:return"";case ir:return n.return=n.value+"{"+Rn(n.children,i)+"}";case Gn:if(!K(n.value=n.props.join(",")))return""}return K(t=Rn(n.children,i))?n.return=n.value+"{"+t+"}":""}function Gr(n){var e=ar(n);return function(t,i,o,s){for(var d="",u=0;u<e;u++)d+=n[u](t,i,o,s)||"";return d}}function Vr(n){return function(e){e.root||(e=e.return)&&n(e)}}function Ur(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case pe:n.return=sr(n.value,n.length,t);return;case ir:return Rn([tn(n,{value:z(n.value,"@","@"+T)})],i);case Gn:if(n.length)return Or(t=n.props,function(o){switch(J(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sn(tn(n,{props:[z(o,/:(read-\w+)/,":"+_n+"$1")]})),sn(tn(n,{props:[o]})),oe(n,{props:_e(t,i)});break;case"::placeholder":sn(tn(n,{props:[z(o,/:(plac\w+)/,":"+T+"input-$1")]})),sn(tn(n,{props:[z(o,/:(plac\w+)/,":"+_n+"$1")]})),sn(tn(n,{props:[z(o,/:(plac\w+)/,A+"input-$1")]})),sn(tn(n,{props:[o]})),oe(n,{props:_e(t,i)});break}return""})}}var Wr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},V={},hn=typeof process<"u"&&V!==void 0&&(V.REACT_APP_SC_ATTR||V.SC_ATTR)||"data-styled",dr="active",cr="data-styled-version",Yn="6.1.17",he=`/*!sc*/
`,Mn=typeof window<"u"&&"HTMLElement"in window,Yr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&V!==void 0&&V.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&V.REACT_APP_SC_DISABLE_SPEEDY!==""?V.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&V.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&V!==void 0&&V.SC_DISABLE_SPEEDY!==void 0&&V.SC_DISABLE_SPEEDY!==""&&V.SC_DISABLE_SPEEDY!=="false"&&V.SC_DISABLE_SPEEDY),Zn=Object.freeze([]),xn=Object.freeze({});function Zr(n,e,t){return t===void 0&&(t=xn),n.theme!==t.theme&&n.theme||e||t.theme}var ur=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kr=/(^-|-$)/g;function ke(n){return n.replace(qr,"-").replace(Kr,"")}var Xr=/(a)(d)/gi,Tn=52,ze=function(n){return String.fromCharCode(n+(n>25?39:97))};function le(n){var e,t="";for(e=Math.abs(n);e>Tn;e=e/Tn|0)t=ze(e%Tn)+t;return(ze(e%Tn)+t).replace(Xr,"$1-$2")}var ne,pr=5381,cn=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},fr=function(n){return cn(pr,n)};function Jr(n){return le(fr(n)>>>0)}function Qr(n){return n.displayName||n.name||"Component"}function ee(n){return typeof n=="string"&&!0}var hr=typeof Symbol=="function"&&Symbol.for,xr=hr?Symbol.for("react.memo"):60115,na=hr?Symbol.for("react.forward_ref"):60112,ea={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ta={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ia=((ne={})[na]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ne[xr]=mr,ne);function Fe(n){return("type"in(e=n)&&e.type.$$typeof)===xr?mr:"$$typeof"in n?ia[n.$$typeof]:ea;var e}var oa=Object.defineProperty,ra=Object.getOwnPropertyNames,$e=Object.getOwnPropertySymbols,aa=Object.getOwnPropertyDescriptor,la=Object.getPrototypeOf,Te=Object.prototype;function gr(n,e,t){if(typeof e!="string"){if(Te){var i=la(e);i&&i!==Te&&gr(n,i,t)}var o=ra(e);$e&&(o=o.concat($e(e)));for(var s=Fe(n),d=Fe(e),u=0;u<o.length;++u){var x=o[u];if(!(x in ta||t&&t[x]||d&&x in d||s&&x in s)){var c=aa(e,x);try{oa(n,x,c)}catch{}}}}return n}function mn(n){return typeof n=="function"}function xe(n){return typeof n=="object"&&"styledComponentId"in n}function rn(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Oe(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Cn(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function se(n,e,t){if(t===void 0&&(t=!1),!t&&!Cn(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=se(n[i],e[i]);else if(Cn(e))for(var i in e)n[i]=se(n[i],e[i]);return n}function me(n,e){Object.defineProperty(n,"toString",{value:e})}function kn(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var sa=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;e>=s;)if((s<<=1)<0)throw kn(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var d=o;d<s;d++)this.groupSizes[d]=0}for(var u=this.indexOfGroup(e+1),x=(d=0,t.length);d<x;d++)this.tag.insertRule(u,t[d])&&(this.groupSizes[e]++,u++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),s=o+i,d=o;d<s;d++)t+="".concat(this.tag.getRule(d)).concat(he);return t},n}(),Pn=new Map,Hn=new Map,Ln=1,On=function(n){if(Pn.has(n))return Pn.get(n);for(;Hn.has(Ln);)Ln++;var e=Ln++;return Pn.set(n,e),Hn.set(e,n),e},da=function(n,e){Ln=e+1,Pn.set(n,e),Hn.set(e,n)},ca="style[".concat(hn,"][").concat(cr,'="').concat(Yn,'"]'),ua=new RegExp("^".concat(hn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pa=function(n,e,t){for(var i,o=t.split(","),s=0,d=o.length;s<d;s++)(i=o[s])&&n.registerName(e,i)},fa=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(he),o=[],s=0,d=i.length;s<d;s++){var u=i[s].trim();if(u){var x=u.match(ua);if(x){var c=0|parseInt(x[1],10),p=x[2];c!==0&&(da(p,c),pa(n,p,x[3]),n.getTag().insertRules(c,o)),o.length=0}else o.push(u)}}},Ae=function(n){for(var e=document.querySelectorAll(ca),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(hn)!==dr&&(fa(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function ha(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var br=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(u){var x=Array.from(u.querySelectorAll("style[".concat(hn,"]")));return x[x.length-1]}(t),s=o!==void 0?o.nextSibling:null;i.setAttribute(hn,dr),i.setAttribute(cr,Yn);var d=ha();return d&&i.setAttribute("nonce",d),t.insertBefore(i,s),i},xa=function(){function n(e){this.element=br(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,s=i.length;o<s;o++){var d=i[o];if(d.ownerNode===t)return d}throw kn(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),ma=function(){function n(e){this.element=br(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),ga=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),De=Mn,ba={isServer:!Mn,useCSSOMInjection:!Yr},vr=function(){function n(e,t,i){e===void 0&&(e=xn),t===void 0&&(t={});var o=this;this.options=G(G({},ba),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Mn&&De&&(De=!1,Ae(this)),me(this,function(){return function(s){for(var d=s.getTag(),u=d.length,x="",c=function(g){var v=function(C){return Hn.get(C)}(g);if(v===void 0)return"continue";var y=s.names.get(v),b=d.getGroup(g);if(y===void 0||!y.size||b.length===0)return"continue";var _="".concat(hn,".g").concat(g,'[id="').concat(v,'"]'),k="";y!==void 0&&y.forEach(function(C){C.length>0&&(k+="".concat(C,","))}),x+="".concat(b).concat(_,'{content:"').concat(k,'"}').concat(he)},p=0;p<u;p++)c(p);return x}(o)})}return n.registerId=function(e){return On(e)},n.prototype.rehydrate=function(){!this.server&&Mn&&Ae(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(G(G({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new ga(o):i?new xa(o):new ma(o)}(this.options),new sa(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(On(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(On(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(On(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),va=/&/g,ya=/^\s*\/\/.*$/gm;function yr(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=yr(t.children,e)),t})}function wa(n){var e,t,i,o=xn,s=o.options,d=s===void 0?xn:s,u=o.plugins,x=u===void 0?Zn:u,c=function(v,y,b){return b.startsWith(t)&&b.endsWith(t)&&b.replaceAll(t,"").length>0?".".concat(e):v},p=x.slice();p.push(function(v){v.type===Gn&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(va,t).replace(i,c))}),d.prefix&&p.push(Ur),p.push(Hr);var g=function(v,y,b,_){y===void 0&&(y=""),b===void 0&&(b=""),_===void 0&&(_="&"),e=_,t=y,i=new RegExp("\\".concat(t,"\\b"),"g");var k=v.replace(ya,""),C=Rr(b||y?"".concat(b," ").concat(y," { ").concat(k," }"):k);d.namespace&&(C=yr(C,d.namespace));var S=[];return Rn(C,Gr(p.concat(Vr(function(w){return S.push(w)})))),S};return g.hash=x.length?x.reduce(function(v,y){return y.name||kn(15),cn(v,y.name)},pr).toString():"",g}var ja=new vr,de=wa(),wr=Sn.createContext({shouldForwardProp:void 0,styleSheet:ja,stylis:de});wr.Consumer;Sn.createContext(void 0);function Ee(){return $.useContext(wr)}var _a=function(){function n(e,t){var i=this;this.inject=function(o,s){s===void 0&&(s=de);var d=i.name+s.hash;o.hasNameForId(i.id,d)||o.insertRules(i.id,d,s(i.rules,d,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,me(this,function(){throw kn(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=de),this.name+e.hash},n}(),Sa=function(n){return n>="A"&&n<="Z"};function Ie(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;Sa(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var jr=function(n){return n==null||n===!1||n===""},_r=function(n){var e,t,i=[];for(var o in n){var s=n[o];n.hasOwnProperty(o)&&!jr(s)&&(Array.isArray(s)&&s.isCss||mn(s)?i.push("".concat(Ie(o),":"),s,";"):Cn(s)?i.push.apply(i,Nn(Nn(["".concat(o," {")],_r(s),!1),["}"],!1)):i.push("".concat(Ie(o),": ").concat((e=o,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Wr||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function ln(n,e,t,i){if(jr(n))return[];if(xe(n))return[".".concat(n.styledComponentId)];if(mn(n)){if(!mn(s=n)||s.prototype&&s.prototype.isReactComponent||!e)return[n];var o=n(e);return ln(o,e,t,i)}var s;return n instanceof _a?t?(n.inject(t,i),[n.getName(i)]):[n]:Cn(n)?_r(n):Array.isArray(n)?Array.prototype.concat.apply(Zn,n.map(function(d){return ln(d,e,t,i)})):[n.toString()]}function Ca(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(mn(t)&&!xe(t))return!1}return!0}var ka=fr(Yn),za=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Ca(e),this.componentId=t,this.baseHash=cn(ka,t),this.baseStyle=i,vr.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=rn(o,this.staticRulesId);else{var s=Oe(ln(this.rules,e,t,i)),d=le(cn(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,d)){var u=i(s,".".concat(d),void 0,this.componentId);t.insertRules(this.componentId,d,u)}o=rn(o,d),this.staticRulesId=d}else{for(var x=cn(this.baseHash,i.hash),c="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")c+=g;else if(g){var v=Oe(ln(g,e,t,i));x=cn(x,v+p),c+=v}}if(c){var y=le(x>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,i(c,".".concat(y),void 0,this.componentId)),o=rn(o,y)}}return o},n}(),Sr=Sn.createContext(void 0);Sr.Consumer;var te={};function Fa(n,e,t){var i=xe(n),o=n,s=!ee(n),d=e.attrs,u=d===void 0?Zn:d,x=e.componentId,c=x===void 0?function(j,m){var h=typeof j!="string"?"sc":ke(j);te[h]=(te[h]||0)+1;var f="".concat(h,"-").concat(Jr(Yn+h+te[h]));return m?"".concat(m,"-").concat(f):f}(e.displayName,e.parentComponentId):x,p=e.displayName,g=p===void 0?function(j){return ee(j)?"styled.".concat(j):"Styled(".concat(Qr(j),")")}(n):p,v=e.displayName&&e.componentId?"".concat(ke(e.displayName),"-").concat(e.componentId):e.componentId||c,y=i&&o.attrs?o.attrs.concat(u).filter(Boolean):u,b=e.shouldForwardProp;if(i&&o.shouldForwardProp){var _=o.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;b=function(j,m){return _(j,m)&&k(j,m)}}else b=_}var C=new za(t,v,i?o.componentStyle:void 0);function S(j,m){return function(h,f,F){var E=h.attrs,N=h.componentStyle,R=h.defaultProps,D=h.foldedComponentIds,O=h.styledComponentId,H=h.target,I=Sn.useContext(Sr),M=Ee(),B=h.shouldForwardProp||M.shouldForwardProp,Q=Zr(f,I,R)||xn,U=function(zn,vn,Fn){for(var yn,on=G(G({},vn),{className:void 0,theme:Fn}),Jn=0;Jn<zn.length;Jn+=1){var $n=mn(yn=zn[Jn])?yn(on):yn;for(var en in $n)on[en]=en==="className"?rn(on[en],$n[en]):en==="style"?G(G({},on[en]),$n[en]):$n[en]}return vn.className&&(on.className=rn(on.className,vn.className)),on}(E,f,Q),Y=U.as||H,bn={};for(var nn in U)U[nn]===void 0||nn[0]==="$"||nn==="as"||nn==="theme"&&U.theme===Q||(nn==="forwardedAs"?bn.as=U.forwardedAs:B&&!B(nn,Y)||(bn[nn]=U[nn]));var je=function(zn,vn){var Fn=Ee(),yn=zn.generateAndInjectStyles(vn,Fn.styleSheet,Fn.stylis);return yn}(N,U),Xn=rn(D,O);return je&&(Xn+=" "+je),U.className&&(Xn+=" "+U.className),bn[ee(Y)&&!ur.has(Y)?"class":"className"]=Xn,F&&(bn.ref=F),$.createElement(Y,bn)}(w,j,m)}S.displayName=g;var w=Sn.forwardRef(S);return w.attrs=y,w.componentStyle=C,w.displayName=g,w.shouldForwardProp=b,w.foldedComponentIds=i?rn(o.foldedComponentIds,o.styledComponentId):"",w.styledComponentId=v,w.target=i?o.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=i?function(m){for(var h=[],f=1;f<arguments.length;f++)h[f-1]=arguments[f];for(var F=0,E=h;F<E.length;F++)se(m,E[F],!0);return m}({},o.defaultProps,j):j}}),me(w,function(){return".".concat(w.styledComponentId)}),s&&gr(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Be(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var Pe=function(n){return Object.assign(n,{isCss:!0})};function dn(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(mn(n)||Cn(n))return Pe(ln(Be(Zn,Nn([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?ln(i):Pe(ln(Be(i,e)))}function ce(n,e,t){if(t===void 0&&(t=xn),!e)throw kn(1,e);var i=function(o){for(var s=[],d=1;d<arguments.length;d++)s[d-1]=arguments[d];return n(e,t,dn.apply(void 0,Nn([o],s,!1)))};return i.attrs=function(o){return ce(n,e,G(G({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return ce(n,e,G(G({},t),o))},i}var Cr=function(n){return ce(Fa,n)},a=Cr;ur.forEach(function(n){a[n]=Cr(n)});var ue=function(e,t){return ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,o){i.__proto__=o}||function(i,o){for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])},ue(e,t)};function ge(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ue(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var X=function(){return X=Object.assign||function(t){for(var i,o=1,s=arguments.length;o<s;o++){i=arguments[o];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(t[d]=i[d])}return t},X.apply(this,arguments)};function Z(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,s;i<o;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function l(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var be=a.button(Le||(Le=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});a(be)(Ne||(Ne=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"},function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"});a(be)(Re||(Re=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.tint.tint20:"rgba(86 180 227 / 0.2)"});a(be)(Me||(Me=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.accent.light:"#FF9AA5"},function(n){return n.theme.colors?n.theme.colors.accent.tint.tint80:"rgba(255 94 111 / 0.8)"});var Le,Ne,Re,Me;function $a(n){return function(e){ge(t,e);function t(i){var o=e.call(this,i)||this;return o.name=n,o}return t}(Error)}$a("InvalidButtonTypeError");a.table(He||(He=l([`
  border-collapse: collapse;
  width: 100%;
`],[`
  border-collapse: collapse;
  width: 100%;
`])));a.td(Ge||(Ge=l([`
  text-align: left;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`],[`
  text-align: left;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`])),function(n){return 100/(Number(n.$numberofflights)+1)});a.td(Ve||(Ve=l([`
  text-align: center;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`],[`
  text-align: center;
  padding: 5px;
  width: `,`%;
  border-bottom: 1.5px solid #D3D3D3;
`])),function(n){return 100/(Number(n.$numberofflights)+1)});var He,Ge,Ve,un="#cccccc99";a.table(Ue||(Ue=l([`
  width: `,`;
  position: relative;

  border-collapse: separate;
  border-spacing: 0;
`],[`
  width: `,`;
  position: relative;

  border-collapse: separate;
  border-spacing: 0;
`])),function(n){var e=n.$width;return e!==void 0&&e});a.tr(We||(We=l([`
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
`])),function(n){var e=n.$borderTop;return e===!0?"1px solid ".concat(un):""},function(n){var e=n.$borderBottom;return e===!0?"1px solid ".concat(un):""},function(n){var e=n.$backgroundColor;return e!==void 0&&e},function(n){var e=n.$stickyPos,t=n.$stickyVal,i=n.$backgroundColor;return e!==void 0&&t!==void 0&&dn({position:"sticky",zIndex:1,width:"100%",backgroundColor:i!==void 0?i:"white"})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="top"&&t!==void 0&&dn({top:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="bottom"&&t!==void 0&&dn({bottom:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="left"&&t!==void 0&&dn({left:t})},function(n){var e=n.$stickyPos,t=n.$stickyVal;return e==="right"&&t!==void 0&&dn({right:t})});a.td(Ye||(Ye=l([`
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
`])),function(n){var e=n.$backgroundColor;return e!==void 0&&e},function(n){var e=n.$borderLeft;return e===!0?"1px solid ".concat(un):""},function(n){var e=n.$borderRight;return e===!0?"1px solid ".concat(un):""},function(n){var e=n.$borderTop;return e===!0?"1px solid ".concat(un):""},function(n){var e=n.$borderBottom;return e===!0?"1px solid ".concat(un):""});a.div(Ze||(Ze=l([`
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
`])),function(n){var e=n.$alignment;return e!==void 0&&"grid"},function(n){var e=n.$alignment;return e!==void 0&&(e==="left"?"start":e==="right"?"end":"center")},function(n){var e=n.$width;return e!==void 0&&e},function(n){var e=n.$paddingInline;return e!==void 0&&e},function(n){var e=n.$paddingBlock;return e!==void 0&&e},function(n){var e=n.$alignment;return e!==void 0&&e},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var Ue,We,Ye,Ze,Ta=a.input(qe||(qe=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.paddings?n.theme.paddings.medium:"10px"},function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),qe,Oa=function(e){if(!e)return"  -  -    ";var t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return"".concat(o,"-").concat(i,"-").concat(t)},Aa=function(e){var t=e.split("-").map(Number),i=t[0],o=t[1],s=t[2],d=new Date(i,o-1,s);return d.setHours(0,0,0,0),d};function Da(n){var e=n.dateDefault,t=e===void 0?new Date:e,i=n.dataTestId,o=i===void 0?"date-picker":i,s=n.onDateSelected,d=s===void 0?void 0:s,u=$.useRef(null),x=$.useState(t),c=x[0],p=x[1],g=function(y){var b=y.target.value,_=Aa(b);p(_),d&&d(_)};return r.jsx(Ta,{type:"date","data-testid":o,value:Oa(c),onChange:g,ref:u})}a.div(Ke||(Ke=l([`
    height: 100%;
    position: default;
    align-items: center;
`],[`
    height: 100%;
    position: default;
    align-items: center;
`])));a.button(Xe||(Xe=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"},function(n){return n.theme.colors?n.theme.colors.secondary.light:"#87D4FA"});a.div(Je||(Je=l([`
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
`])));a.button(Qe||(Qe=l([`
    border: none;
    background-color: transparent;
    padding: 5px;
    text-align: left;    
`],[`
    border: none;
    background-color: transparent;
    padding: 5px;
    text-align: left;    
`])));a.div(nt||(nt=l([`
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
`])),function(n){var e=n.top;return e},function(n){var e=n.left;return e});var Ke,Xe,Je,Qe,nt;function qn(n){return function(e){ge(t,e);function t(i){var o=e.call(this,i)||this;return o.name=n,o}return t}(Error)}qn("NoChildrenContentError");qn("NoColumnsGivenError");qn("CellsDontMatchColumnsError");qn("NoCellsGivenError");var Ea=a.input(et||(et=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.paddings?n.theme.paddings.medium:"10px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),et,Ia=function(e){if(!e)return"  :  ";var t=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return"".concat(t,":").concat(i)},Ba=function(e){var t=e.split(":").map(Number),i=t[0],o=t[1],s=new Date(0);return s.setUTCHours(i),s.setUTCMinutes(o),s.setUTCSeconds(0),s.setUTCMilliseconds(0),s};function Pa(n){var e=n.timeDefault,t=e===void 0?new Date:e,i=n.dataTestId,o=i===void 0?"time-picker":i,s=n.onTimeSelected,d=$.useRef(null),u=$.useState(t),x=u[0],c=u[1],p=function(v){var y=v.target.value,b=Ba(y);c(b),s==null||s(b)};return r.jsx(Ea,{type:"time","data-testid":o,value:Ia(x),onChange:p,ref:d})}var La=a.div(tt||(tt=l([`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 1rem;
`],[`
  width: fit-content;
  display: grid;
  justify-items: center;
  gap: 1rem;
`]))),Na=a.span(it||(it=l([`
  display: block;
`],[`
  display: block;
`]))),tt,it;function Fs(n){var e=n.carrierCode,t=n.carrierShortName,i=t===void 0?"":t,o=n.showTitle,s=o===void 0?!1:o,d=n.width,u=d===void 0?200:d,x=n.testId,c=x===void 0?"airline-logo":x,p=function(v,y){return r.jsx("img",{"data-testid":c,src:"https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/".concat(v.toUpperCase(),".svg"),alt:y,width:u})};return e===void 0||i===""||i===void 0?r.jsx(Na,{"data-testid":"".concat(c," unavailable"),children:"Image not available"}):s?r.jsxs(La,{children:[p(e,i),r.jsx("h4",{"data-testid":"".concat(c," airline-name"),children:i})]}):p(e,i)}var Ra=a.div(at||(at=l([`
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

`]))),Ma=a.div(lt||(lt=l([`
  display: flex;  
  flex-wrap: wrap;
  width: 100%;  
  justify-content: space-between;  
`],[`
  display: flex;  
  flex-wrap: wrap;
  width: 100%;  
  justify-content: space-between;  
`]))),Ha=a.div(st||(st=l([`
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
`]))),Ga=a.div(dt||(dt=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"}),Va=a.button(ct||(ct=l([`
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
`]))),Ua=a.div(ut||(ut=l([`
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
`]))),Wa=a.input(pt||(pt=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),Ya=a.div(ft||(ft=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ot=a.div(ht||(ht=l([`  
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
`])),function(n){var e,t,i;return n.isSelected?"#FFFFFF":(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"},function(n){var e,t,i;return n.isSelected?(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#FF5E6F":"#FFFFFF"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||i===void 0?void 0:i.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"});a.div(xt||(xt=l([`
  display: flex;
  width: 40%;
  font-size: 12px;
  justify-content: space-between;  
`],[`
  display: flex;
  width: 40%;
  font-size: 12px;
  justify-content: space-between;  
`])));var Za=a.div(mt||(mt=l([`
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
`])));a.button(gt||(gt=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var qa=a.span(bt||(bt=l([`
  transition: transform 0.2s ease;
  transform: `,`;
`],[`
  transition: transform 0.2s ease;
  transform: `,`;
`])),function(n){var e=n.isOpen;return e?"rotate(180deg)":"rotate(0deg)"});a.ul(vt||(vt=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var Ka=a.p(yt||(yt=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),Xa=a.select(wt||(wt=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),Ja=a.div(jt||(jt=l([`
  width: 15px;
`],[`
  width: 15px;
`]))),rt=a.div(_t||(_t=l([`
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
`]))),Qa=a.div(St||(St=l([`
  display: flex;
  width: 100%;
  justifyContent: space-between;
`],[`
  display: flex;
  width: 100%;
  justifyContent: space-between;
`]))),nl=a.div(Ct||(Ct=l([`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 5px;
`]))),An=a.option(kt||(kt=l([`  
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
`])),function(n){var e,t,i;return n.isSelected?"#FFFFFF":(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"},function(n){var e,t,i;return n.isSelected?(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#FF5E6F":"#FFFFFF"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||i===void 0?void 0:i.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"}),at,lt,st,dt,ct,ut,pt,ft,ht,xt,mt,gt,bt,vt,yt,wt,jt,_t,St,Ct,kt;function el(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"})})}function tl(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:"16",height:"16",children:r.jsx("g",{fill:"currentColor",fillRule:"nonzero",children:r.jsx("g",{transform:"scale(9.84615,9.84615)",children:r.jsx("path",{d:"M13,0.1875c-7.07422,0 -12.8125,5.73828 -12.8125,12.8125c0,7.07422 5.73828,12.8125 12.8125,12.8125c7.07422,0 12.8125,-5.73828 12.8125,-12.8125c0,-7.07422 -5.73828,-12.8125 -12.8125,-12.8125zM18.78125,17.39453l-1.39062,1.38672c-0.25391,0.25391 -0.66797,0.25391 -0.92187,0l-3.46875,-3.46875l-3.46875,3.46875c-0.25391,0.25391 -0.66797,0.25391 -0.92187,-0.00391l-1.39062,-1.38281c-0.25,-0.25781 -0.25,-0.66797 0,-0.92578l3.46875,-3.46875l-3.46484,-3.46484c-0.25391,-0.25781 -0.25391,-0.67187 0,-0.92578l1.38672,-1.38672c0.25391,-0.25781 0.67188,-0.25781 0.92578,0l3.46484,3.46484l3.46875,-3.46484c0.25391,-0.25781 0.67188,-0.25781 0.92188,0l1.39063,1.38281c0.25391,0.25781 0.25391,0.67188 0,0.92969l-3.46875,3.46484l3.46875,3.46875c0.25,0.25781 0.25,0.66797 0,0.92578z"})})})})}function ve(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 6L6 18M6 6l12 12"})})}function ye(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"gray",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18 6L6 18M6 6l12 12"})})}function il(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"gray",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})})}function zt(){return r.jsx("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.93 566.93",width:"20px",height:"20px",fill:"black","stroke-width":"0px",children:r.jsx("path",{d:"m283.46,136.01l-144.88,121.3h35.63v173.61h218.51v-173.61h35.63l-144.88-121.3Zm38.35,218.33c-1.71,4.16-4.1,7.74-7.17,10.76-3.07,3.02-6.76,5.44-11.02,7.26-4.27,1.82-8.91,2.96-13.91,3.42v17.77h-11.44v-17.77c-5.13-.57-9.88-1.9-14.28-4.02-4.38-2.1-8.13-4.89-11.27-8.37-3.13-3.48-5.6-7.58-7.42-12.3-1.82-4.71-2.74-9.98-2.74-15.79h15.55c0,8.2,2.45,14.72,7.34,19.56,4.89,4.84,11.44,7.26,19.64,7.26,6.95,0,12.64-1.82,17.08-5.46,4.43-3.64,6.66-8.6,6.66-14.86,0-3.64-.68-6.67-2.04-9.06-1.38-2.39-3.17-4.41-5.38-6.06-2.22-1.64-4.67-2.96-7.35-3.92-2.67-.97-5.32-1.85-7.94-2.65-5.35-1.71-10.4-3.48-15.12-5.3-4.73-1.82-8.88-4.07-12.47-6.74-3.59-2.68-6.44-6-8.53-9.99-2.11-3.99-3.16-8.99-3.16-15.03,0-4.21.76-8.15,2.29-11.79,1.54-3.64,3.68-6.84,6.41-9.56,2.74-2.74,6.03-4.99,9.91-6.76,3.86-1.77,8.15-2.93,12.82-3.5v-17.77h11.44v17.95c4.78.57,9.1,1.82,12.98,3.75,3.86,1.93,7.2,4.48,9.99,7.6,2.78,3.13,4.98,6.77,6.57,10.93,1.58,4.16,2.39,8.74,2.39,13.75h-15.55c-.11-6.83-2.04-12.29-5.8-16.39-3.77-4.1-9.06-6.16-15.89-6.16s-11.93,1.6-15.97,4.78c-4.05,3.2-6.06,7.58-6.06,13.16,0,3.29.63,6.06,1.88,8.29,1.25,2.21,2.91,4.1,4.95,5.63,2.06,1.54,4.42,2.85,7.09,3.93,2.68,1.08,5.44,2.02,8.28,2.81,4.56,1.49,9.2,3.14,13.93,4.96,4.71,1.82,9.02,4.1,12.89,6.83,3.88,2.74,7.01,6.07,9.4,9.99,2.39,3.93,3.59,8.8,3.59,14.61,0,5.35-.85,10.11-2.56,14.26Z"})})}function ol(){return r.jsxs("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.93 566.93",width:"20px",height:"20px","stroke-width":"0px",fill:"black",children:[r.jsx("path",{d:"m332.45,326.71c-1.22,1.99-2.43,3.95-3.64,5.89-1.24,1.99-2.48,3.96-3.7,5.9,37.65,8.24,64.71,27.15,64.71,48.53,0,28.69-48.7,52.93-106.35,52.93s-106.35-24.24-106.35-52.93c0-21.38,27.06-40.29,64.71-48.53-1.23-1.94-2.46-3.9-3.7-5.9-1.21-1.94-2.43-3.91-3.64-5.89-41.83,10.14-70.37,33.05-70.37,60.32,0,36.97,52.42,65.93,119.35,65.93s119.35-28.96,119.35-65.93c0-27.27-28.53-50.18-70.37-60.32Z"}),r.jsx("path",{d:"m248.05,323.95c1.26,2.03,2.52,4.05,3.77,6.03,1.29,2.05,2.57,4.07,3.84,6.05,11.47,17.94,21.85,32.99,27.81,41.46,5.95-8.47,16.33-23.52,27.81-41.46,1.27-1.98,2.55-4,3.84-6.05,1.25-1.98,2.51-3.99,3.77-6.03,1.63-2.63,3.27-5.3,4.9-8,29.34-48.42,44.84-84.32,44.84-103.82,0-46.96-38.2-85.16-85.16-85.16s-85.16,38.2-85.16,85.16c0,19.5,15.51,55.4,44.84,103.82,1.64,2.7,3.27,5.37,4.9,8Zm35.41-145.41c18.55,0,33.59,15.04,33.59,33.59s-15.04,33.59-33.59,33.59-33.59-15.04-33.59-33.59,15.04-33.59,33.59-33.59Z"})]})}function Ft(){return r.jsxs("svg",{id:"Icons",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 566.93 566.93",width:"20px",height:"20px",fill:"black","stroke-width":"0px",children:[r.jsx("polygon",{points:"360.14 271.52 358.79 262.24 306.28 313.89 365.72 426.67 380.55 411.84 364.57 302 360.14 271.52"}),r.jsx("polygon",{points:"308.52 211.72 298.95 210.33 268.47 205.9 158.62 189.92 143.8 204.74 256.55 264.17 308.52 211.72"}),r.jsx("path",{d:"m434.55,136.93l-1.01-1.01c-10.19-8.4-32.07.78-51.15,19.86l-23.73,24.02-19.33,19.02.14.14-70.78,71.6-24.19,24.79-47.43,47.94h-46.69l-14.04,14.04,57.95,18.85,18.85,57.95,14.04-14.04v-46.69l47.94-47.43,24.79-24.19,65.36-64.15,25.4-25.82,24.02-23.73c19.08-19.08,28.26-40.96,19.86-51.15Z"})]})}function kr(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})})}var rl=[{code:"IB",name:"Iberia"},{code:"LO",name:"Lot-Polish"},{code:"LH",name:"Lufthansa"},{code:"1I",name:"NetJets"},{code:"1T",name:"1Time-Airline"},{code:"2B",name:"Aerocondor"}];function $s(n){var e=n.dataTestId,t=e===void 0?"carriers-filter-picker":e,i=n.onGetData,o=i===void 0?void 0:i,s=n.onCarriersFilterSelected,d=s===void 0?void 0:s,u=n.onCarriersFilterModifierSelected,x=u===void 0?void 0:u,c=$.useState([]),p=c[0],g=c[1],v=$.useState(""),y=v[0],b=v[1],_=$.useState(!1),k=_[0],C=_[1],S=$.useState("Preferred"),w=S[0],j=S[1];$.useEffect(function(){d&&d(p)},[p,d]),$.useEffect(function(){x&&x(w)},[w,x]);var m=function(O){if(o==null){var H=O.toLowerCase(),I=rl.filter(function(B){return B.code.toLowerCase().includes(H)||B.name.toLowerCase().includes(H)}),M=[];return I.forEach(function(B){M.push(B)}),M}else return o(O)},h=function(O){g(function(H){return H.includes(O)?H.filter(function(I){return I!==O}):H.length<5?Z(Z([],H,!0),[O],!1):H}),b(""),C(!1)},f=function(O){g(function(H){return H.filter(function(I){return I!==O})})},F=function(){g([])},E=function(O){b(O.target.value),C(!0)},N=m(y.toLowerCase()),R=function(){return N.length>0?N.map(function(O){return r.jsx(ot,{onClick:function(){return h("".concat(O.code))},"data-testid":"airlineOption-".concat(O.code,"-").concat(O.name),isSelected:p.includes("".concat(O.code)),children:"".concat(O.code," ").concat(O.name)},O.code)}):r.jsx(ot,{isSelected:!1,children:"No airlines available"})};return r.jsxs(Ra,{"data-testid":t,children:[r.jsx(Ka,{children:"Airlines (Add up to 5 airlines)"}),r.jsx(Ma,{children:r.jsxs(Qa,{children:[r.jsxs(Za,{style:{position:"relative"},children:[r.jsx(Ha,{children:p.map(function(D){return r.jsxs(Ga,{"data-testid":"selected-airline-".concat(D),children:[D,r.jsx(Va,{onClick:function(){return f(D)},"data-testid":"removeButton-".concat(D),children:r.jsx(tl,{})})]},D)})}),r.jsxs(Ua,{children:[r.jsx(Wa,{type:"text",value:y,onChange:E,onFocus:function(){return C(!0)},placeholder:p.length===0?"Select":"","data-testid":"selector"}),r.jsx(qa,{isOpen:k,style:{position:"absolute",top:"50%",right:"25px",transform:"translateY(-50%) ".concat(k?"rotate(180deg)":"rotate(0deg)"),pointerEvents:"none"},children:r.jsx(el,{})}),p.length>0?r.jsx(rt,{onClick:F,"data-testid":"removeAllButton",children:r.jsx(ve,{})}):r.jsx(rt,{"data-testid":"delete-flight-button",children:r.jsx(ye,{})}),k&&r.jsx(Ya,{children:R()})]})]}),r.jsx(Ja,{}),r.jsx(nl,{children:r.jsxs(Xa,{id:"carrier-filter-type","data-testid":"carrier-filter-type-selector",onChange:function(O){j(O.target.value)},children:[r.jsx(An,{value:"Preferred","data-testid":"Non-refundable",isSelected:w==="Preferred",children:"Preferred"}),r.jsx(An,{value:"Exclude",isSelected:w==="Exclude",children:"Exclude"}),r.jsx(An,{value:"Only","data-testid":"Fully refundable",isSelected:w==="Only",children:"Only"}),r.jsx(An,{value:"All",isSelected:w==="All",children:"All"})]})})]})})]})}a.button($t||($t=l([`
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
`])),function(n){return n.theme.colors.accent.normal},function(n){return n.theme.colors.accent.normal});a.div(Tt||(Tt=l([`
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
`])),function(n){return n.theme.colors.secondary.normal});var $t,Tt,al=a.div(At||(At=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.colors?n.theme.colors.secondary.tint.tint60:"rgba(86 180 227 / 0.6)"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.borders?n.theme.borders.width:"0.3pt"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.fonts?n.theme.fonts.sizes.smallText.size:"10px"}),Ot=a.span.withConfig({shouldForwardProp:function(e){return e!=="highlightColor"}})(Dt||(Dt=l([`
    color: `,`;
`],[`
    color: `,`;
`])),function(n){return n.highlightColor?"#409e4f":"#000000"}),At,Dt;function Ts(n){var e=n.averageEmissions,t=n.currentEmissions,i=n.testId,o=i===void 0?"emissions-breakdown-table":i,s=t!==null&&t>0||e!==null&&e>0,d=!1,u=function(){var w={variable:"",fixed:"Emissions"};return!x||!c?(x&&(w.variable="Current"),c&&(w.variable="Average")):(e===t&&(w.variable="Typical"),e>t&&(w.variable="Lower"),e<t&&(w.variable="Higher")),w.variable==="Lower"&&(d=!0),w},x=t!==null&&t>0,c=e!==null&&e>0,p=function(){if(s){var w=t-e,j=parseFloat(w.toFixed(2));return j>0?"+".concat(j):"".concat(j)}return"0"},g=function(){if(s){var w=(t-e)/e*100,j=void 0;if(w>0)j="".concat(parseFloat(w.toFixed(2)),"% higher");else if(w<0)j="".concat(parseFloat(Math.abs(w).toFixed(2)),"% lower");else return"0% typical";return j}return""},v=function(w){var j=Number(w),m="".concat(j.toFixed(2));return m.endsWith(".00")?m.slice(0,-3):m},y=p(),b=g(),_=u(),k=function(){return r.jsx("p",{"data-testid":"emissions-alternative-text",children:"Emissions are not available for this flight"})},C=function(){return r.jsxs(al,{"data-testid":o,children:[r.jsxs("table",{"data-testid":"emissions-table",children:[r.jsxs("caption",{"data-testid":"emissions-table-title",children:[r.jsx(Ot,{highlightColor:d,"data-testid":"emissions-table-variable-title",children:_.variable})," ",_.fixed]}),r.jsxs("tbody",{children:[x&&r.jsxs("tr",{"data-testid":"emissions-table-rows","data-row-name":"currentEmissionsRow",children:[r.jsx("td",{"data-testid":"emissions-table-row1-column1",children:"This journey"}),r.jsx("td",{"data-testid":"emissions-table-row1-column2",children:r.jsx(Ot,{highlightColor:d,"data-testid":"emissions-table-variable-emissions",children:r.jsxs("span",{className:"co2-text",children:[v(t)," kg CO",r.jsx("sub",{children:"2"})]})})})]}),c&&r.jsxs("tr",{"data-testid":"emissions-table-rows","data-row-name":"averageEmissionsRow",children:[r.jsx("td",{"data-testid":"emissions-table-row2-column1",children:"Typical for this route"}),r.jsx("td",{"data-testid":"emissions-table-row2-column2",children:r.jsxs("span",{className:"co2-text",children:[v(e)," kg CO",r.jsx("sub",{children:"2"})]})})]}),c&&x&&r.jsxs("tr",{"data-testid":"emissions-table-rows",children:[r.jsx("td",{"data-testid":"emissions-table-percentage-msg",children:b}),r.jsx("td",{"data-testid":"emissions-table-difference-msg",children:r.jsxs("span",{className:"co2-text",children:[y," kg CO",r.jsx("sub",{children:"2"})]})})]})]})]}),r.jsx("p",{"data-testid":"emissions-table-caption",children:"Emissions are calculated for 1 passanger in this class"})]})};return r.jsx("div",{children:s?C():k()})}var ll=a.div(Bt||(Bt=l([`
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
`]))),sl=a.div(Pt||(Pt=l([`
  display: flex;
  align-items: center;
  gap: 8px;
`],[`
  display: flex;
  align-items: center;
  gap: 8px;
`]))),dl=a.img(Lt||(Lt=l([`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`],[`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`]))),cl=a.span(Nt||(Nt=l([`
  font-weight: 1000;
  font: `,`;
  font-size: `,`;
  color: #000000;
`],[`
  font-weight: 1000;
  font: `,`;
  font-size: `,`;
  color: #000000;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),ul=a.div(Rt||(Rt=l([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`],[`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`]))),pl=a.div(Mt||(Mt=l([`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`],[`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`]))),Et=a.div(Ht||(Ht=l([`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  color: black;
`],[`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  color: black;
`]))),It=a.span(Gt||(Gt=l([`
  display: flex;
  justify-content: flex-start;
  font: `,`;
  font-size: `,`;
  text-align: center;
`],[`
  display: flex;
  justify-content: flex-start;
  font: `,`;
  font-size: `,`;
  text-align: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),ie=a.span(Vt||(Vt=l([`
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  font: `,`;
  font-size: `,`;
  color: gray;
  width: 100%;
  text-align: center;
`],[`
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  font: `,`;
  font-size: `,`;
  color: gray;
  width: 100%;
  text-align: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),fl=a.div(Ut||(Ut=l([`
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
`]))),hl=a.span(Wt||(Wt=l([`
  color: black;
  width: 100%;
  font: `,`;
  font-size: `,`;
  text-align: center;
`],[`
  color: black;
  width: 100%;
  font: `,`;
  font-size: `,`;
  text-align: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),wn=a.div(Yt||(Yt=l([`
  position: fixed;
  top: `,`px;
  left: `,`px;
  background-color: black;
  color: white;
  font: `,`;
  font-size: `,`;
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
  font: `,`;
  font-size: `,`;
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
`])),function(n){var e=n.top;return e},function(n){var e=n.left;return e},function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),xl=a.div(Zt||(Zt=l([`
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
`]))),ml=a.span(qt||(qt=l([`
  font: `,`;
  font-size: `,`;
  width: 16px;
  color: `,`;
  opacity: 0.72;
  text-align: center;
`],[`
  font: `,`;
  font-size: `,`;
  width: 16px;
  color: `,`;
  opacity: 0.72;
  text-align: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"},function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#FF5E6F"}),gl=a.span(Kt||(Kt=l([`
  font: `,`;
  font-size: `,`;
  color: gray;
`],[`
  font: `,`;
  font-size: `,`;
  color: gray;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),bl=a.div(Xt||(Xt=l([`
  display: flex;
  align-items: left;
  gap: 6px;
`],[`
  display: flex;
  align-items: left;
  gap: 6px;
`]))),vl=a.span(Jt||(Jt=l([`
  font: `,`;
  font-size: `,`;
`],[`
  font: `,`;
  font-size: `,`;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),yl=a.div(Qt||(Qt=l([`
  font: `,`;
  font-size: `,`;
  color: `,`;
  opacity: 0.6;
`],[`
  font: `,`;
  font-size: `,`;
  color: `,`;
  opacity: 0.6;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"},function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.secondary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#56B4E3"}),wl=a.div(ni||(ni=l([`
  margin-left: -6px;
  font: `,`;
  font-size: `,`;
  width: fit-content;
  height: fit-content;
  color: `,`;
  opacity: 0.72;
  text-align: center;
`],[`
  margin-left: -6px;
  font: `,`;
  font-size: `,`;
  width: fit-content;
  height: fit-content;
  color: `,`;
  opacity: 0.72;
  text-align: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"},function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"}),jl=a.div(ei||(ei=l([`
  border: 1px solid transparent;
  font: `,`;
  font-size: `,`;
  background-color: `,`;
  color: #FFFFFF;
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`;
  }
`],[`
  border: 1px solid transparent;
  font: `,`;
  font-size: `,`;
  background-color: `,`;
  color: #FFFFFF;
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`;
  }
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"},function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#FF5E6F"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"}),_l=a.div(ti||(ti=l([`
  border: 1px solid transparent;
  font: `,`;
  font-size: `,`;
  background-color: `,`;
  color: #000000;
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`; 
  }
`],[`
  border: 1px solid transparent;
  font: `,`;
  font-size: `,`;
  background-color: `,`;
  color: #000000;
  padding: 2px 6px;
  border-radius: 4px;
  align-self: flex-start;
  &:hover {
    background-color: `,`; 
  }
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"},function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.light)!==null&&i!==void 0?i:"#E3DD40"},function(n){return n.theme.colors?n.theme.colors.accent.light:"#FF9AA5"}),Bt,Pt,Lt,Nt,Rt,Mt,Ht,Gt,Vt,Ut,Wt,Yt,Zt,qt,Kt,Xt,Jt,Qt,ni,ei,ti;function Sl(n){var e=n.fares,t=n.airline,i=n.operatedBy,o=n.flights,s=n.index,d=$.useState(null),u=d[0],x=d[1],c=$.useState(null),p=c[0],g=c[1],v=_(),y=v.moreFlightEmissions,b=v.flightEmissions;function _(){var h=0,f=0;e.forEach(function(N){h+=N.currentEmissions,f+=N.typicalEmissions});var F=h/f*100-100,E=F>0;return F=Math.abs(F),{moreFlightEmissions:E,flightEmissions:"".concat(F.toFixed(0))}}var k=function(f,F){x(f);var E=F.currentTarget.getBoundingClientRect(),N=F.currentTarget.getBoundingClientRect().width||0;g({top:E.bottom,left:E.left+N/2})},C=function(){x(null),g(null)},S=o[0],w=o.slice(1,o.length-1),j=o[o.length-1],m=kl(S.departure.time,j.arrival.time);return r.jsxs(ll,{children:[r.jsxs(sl,{children:[r.jsx(dl,{src:"https://gopreprodprivate.wspan.com/sharedservices/images/SPNGImages/Square-".concat(t.code,".svg"),alt:t.name,"data-testid":"airline-logo"}),r.jsx(cl,{"data-testid":"airline-name",onMouseEnter:function(f){return k(3,f)},onMouseLeave:C,children:t.name}),u===3&&p&&t.code!==i.code&&r.jsxs(wn,{top:p.top,left:p.left,"data-testid":"operated-by-dialog",children:["Operated By: ",i.name]}),t.code!=i.code?r.jsx(wl,{children:"*"}):null]}),r.jsx(ul,{children:r.jsxs(pl,{children:[r.jsxs(Et,{children:[r.jsx(It,{"data-testid":"departure-time",children:ii(S.departure.time)}),r.jsx(ie,{"data-testid":"departure-airport-code",children:S.origin.code})]}),r.jsxs(fl,{children:[r.jsx(hl,{children:Tl(o)}),r.jsx(ie,{onMouseEnter:function(f){return k(0,f)},onMouseLeave:C,"data-testid":"middle-airport-codes",children:Fl(o)}),u===0&&p&&w.length>=1&&r.jsx(wn,{top:p.top,left:p.left,"data-testid":"airport-code-dialog",children:Ol(w)})]}),r.jsxs(Et,{children:[r.jsx(It,{"data-testid":"arrival-time",children:ii(j.arrival.time)}),r.jsx(ie,{"data-testid":"arrival-airport-code",children:j.destination.code})]}),r.jsxs(xl,{children:[r.jsx(ml,{"data-testid":"next-day-indicator",children:$l(m)}),r.jsx(gl,{"data-testid":"flight-duration",children:Cl(S.departure.time,j.arrival.time)})]})]})}),r.jsxs(bl,{children:[r.jsx(vl,{"data-testid":"flight-number-".concat(s+1),children:S.code}),r.jsx(yl,{onMouseEnter:function(f){return k(1,f)},onMouseLeave:C,children:zl(o)}),u===1&&p&&r.jsx(wn,{top:p.top,left:p.left,"data-testid":"flight-code-dialog",children:Al(o)})]}),y?r.jsxs(jl,{"data-testid":"co2-indicator",onMouseEnter:function(f){return k(2,f)},onMouseLeave:C,children:["+",b,"% CO₂",u===2&&p&&r.jsxs(wn,{top:p.top,left:p.left,"data-testid":"co2-dialog",children:["This flight is ",b,"% higher on CO₂ than the typical for this route"]})]}):r.jsxs(_l,{"data-testid":"co2-indicator",onMouseEnter:function(f){return k(2,f)},onMouseLeave:C,children:["-",b,"% CO₂",u===2&&p&&r.jsxs(wn,{top:p.top,left:p.left,"data-testid":"co2-dialog",children:["This flight is ",b," lower on CO₂ than the typical for this route"]})]})]})}var ii=function(e){var t=new Date(e);return t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})};function Cl(n,e){var t=new Date(n),i=new Date(e),o=i.getTime()-t.getTime(),s=Math.floor(o/(1e3*60*60)),d=Math.floor(o%(1e3*60*60)/(1e3*60));return"".concat(s,"h").concat(d,"m")}function kl(n,e){var t=new Date(n),i=new Date(e);return i.getDate()-t.getDate()}function zl(n){return n.length>1?r.jsx(r.Fragment,{children:r.jsxs("span",{"data-testid":"flight-number-indicator",children:["+",n.length-1]})}):""}function Fl(n){if(n.length==2){var e=n[1].origin.code;return e}else if(n.length>2){var e="+".concat(n.length-1);return e}else return""}function $l(n){return n>0?"+".concat(n):""}function Tl(n){return n.length==1?Dl:n.length==2?El:Il}function Ol(n){for(var e=[],t=0;t<n.length-1;t++)e.push(n[t].origin.code);return e.push(n[n.length-1].origin),e.push(n[n.length-1].destination),e.join(", ")}function Al(n){for(var e=[],t=1;t<n.length;t++)e.push(n[t].code);return e.join(", ")}var Dl=r.jsx("svg",{focusable:"false",role:"img",viewBox:"0 21 64 18",children:r.jsx("path",{"data-testid":"journey-arrow-default",d:"M58.99 27.47l-1.14 1.13 2.8 2.6h-60.65v1.6h60.93l-2.8 2.6 1.14 1.13 4.73-4.4-5.010-4.66z"})}),El=r.jsx("svg",{focusable:"false",role:"img",viewBox:"0 21 64 18",children:r.jsx("path",{"data-testid":"journey-arrow-x",d:"M59 27.495l-1.1 1.13 2.79 2.61-26.6-0.080 1.7-1.68c0.157-0.157 0.255-0.375 0.255-0.615s-0.097-0.458-0.255-0.615v0c-0.158-0.16-0.377-0.26-0.62-0.26s-0.462 0.099-0.62 0.26l-0 0-1.89 1.86c-0.158 0.16-0.377 0.26-0.62 0.26s-0.462-0.099-0.62-0.26l-0-0-1.86-1.89c-0.157-0.157-0.375-0.255-0.615-0.255s-0.458 0.097-0.615 0.255v0c-0.16 0.158-0.26 0.377-0.26 0.62s0.099 0.462 0.26 0.62l0 0 1.67 1.68-30-0.11v1.6l30 0.090-1.7 1.67c-0.157 0.157-0.255 0.375-0.255 0.615s0.097 0.458 0.255 0.615v0c0.158 0.16 0.377 0.26 0.62 0.26s0.462-0.099 0.62-0.26l0-0 1.89-1.86c0.158-0.16 0.377-0.26 0.62-0.26s0.462 0.099 0.62 0.26l0 0 1.86 1.89c0.158 0.16 0.378 0.258 0.62 0.258 0.482 0 0.873-0.391 0.873-0.873 0-0.24-0.097-0.457-0.253-0.615l0 0-1.69-1.72 26.9 0.080-2.8 2.59 1.13 1.14 4.69-4.34z"})}),Il=r.jsx("svg",{focusable:"false",role:"img",viewBox:"0 21 64 18",children:r.jsx("path",{"data-testid":"journey-arrow-xx",d:"M59 27.465l-1.13 1.13 2.79 2.61-19.6-0.060 1.7-1.68c0.157-0.157 0.255-0.375 0.255-0.615s-0.097-0.458-0.255-0.615v0c-0.158-0.16-0.377-0.26-0.62-0.26s-0.462 0.099-0.62 0.26l-0 0-1.89 1.86c-0.158 0.16-0.377 0.26-0.62 0.26s-0.462-0.099-0.62-0.26l-0-0-1.86-1.89c-0.157-0.157-0.375-0.255-0.615-0.255s-0.458 0.097-0.615 0.255v0c-0.16 0.158-0.26 0.377-0.26 0.62s0.099 0.462 0.26 0.62l0 0 1.7 1.69h-9.93l1.7-1.68c0.157-0.157 0.255-0.375 0.255-0.615s-0.097-0.458-0.255-0.615v0c-0.158-0.16-0.377-0.26-0.62-0.26s-0.462 0.099-0.62 0.26l-0 0-1.89 1.86c-0.158 0.16-0.377 0.26-0.62 0.26s-0.462-0.099-0.62-0.26l-0-0-1.86-1.89c-0.157-0.157-0.375-0.255-0.615-0.255s-0.458 0.097-0.615 0.255v0c-0.16 0.158-0.26 0.377-0.26 0.62s0.099 0.462 0.26 0.62l0 0 1.69 1.65-23-0.090v1.6l22.95 0.070-1.7 1.67c-0.157 0.157-0.255 0.375-0.255 0.615s0.097 0.458 0.255 0.615v0c0.158 0.16 0.377 0.26 0.62 0.26s0.462-0.099 0.62-0.26l0-0 1.89-1.86c0.158-0.16 0.377-0.26 0.62-0.26s0.462 0.099 0.62 0.26l0 0 1.86 1.89c0.158 0.16 0.378 0.258 0.62 0.258 0.482 0 0.873-0.391 0.873-0.873 0-0.24-0.097-0.457-0.253-0.615l0 0-1.72-1.66h9.93l-1.7 1.67c-0.157 0.157-0.255 0.375-0.255 0.615s0.097 0.458 0.255 0.615v0c0.158 0.16 0.377 0.26 0.62 0.26s0.462-0.099 0.62-0.26l0-0 1.89-1.86c0.158-0.16 0.377-0.26 0.62-0.26s0.462 0.099 0.62 0.26l0 0 1.86 1.89c0.158 0.16 0.378 0.258 0.62 0.258 0.482 0 0.873-0.391 0.873-0.873 0-0.24-0.097-0.457-0.253-0.615l0 0-1.7-1.66 19.91 0.060-2.8 2.59 1.13 1.14 4.76-4.4z"})}),Bl=a.button(oi||(oi=l([`
  background-color: `,`;
  color: white;
  border: 1px solid #000000;
  padding: 8px 18px;
  font: `,`;
  font-size: `,`;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;  

  &:hover {
    color: black;
    background-color: `,`;
  }

  &:active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
`],[`
  background-color: `,`;
  color: white;
  border: 1px solid #000000;
  padding: 8px 18px;
  font: `,`;
  font-size: `,`;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;  

  &:hover {
    color: black;
    background-color: `,`;
  }

  &:active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
`])),function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"}),Pl=a.button(ri||(ri=l([`
  background-color: rgb(255, 255, 255);
  color: `,`;
  border: 1px solid #000000;
  padding: 8px 18px;
  font: `,`;
  font-size: `,`;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5%;  

  &:hover {
    color: black;
    background-color: `,`;
  }

  &:active {    
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
`],[`
  background-color: rgb(255, 255, 255);
  color: `,`;
  border: 1px solid #000000;
  padding: 8px 18px;
  font: `,`;
  font-size: `,`;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 5%;  

  &:hover {
    color: black;
    background-color: `,`;
  }

  &:active {    
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
`])),function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"}),oi,ri,Ll=a.div(ci||(ci=l([`
  display: flex;
  flex-direction: column;
`],[`
  display: flex;
  flex-direction: column;
`]))),Nl=a.div(ui||(ui=l([`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`],[`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`]))),ai=a.div(pi||(pi=l([`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0px;
  width: 150px;   
`],[`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0px;
  width: 150px;   
`]))),li=a.div(fi||(fi=l([`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`],[`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`]))),si=a.span(hi||(hi=l([`
  display: flex;
  align-items: center;  
  font: `,`;
  font-size: `,`;
  margin-top: 1px;
  margin-bottom: 5px;
  color: #000000;
  text-align: center;
`],[`
  display: flex;
  align-items: center;  
  font: `,`;
  font-size: `,`;
  margin-top: 1px;
  margin-bottom: 5px;
  color: #000000;
  text-align: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),di=a.div(xi||(xi=l([`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`],[`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`]))),Rl=a.label(mi||(mi=l([`
  display: flex;
  align-items: center;
  gap: 5px;
  font: `,`;
  font-size: `,`;
  cursor: pointer;
  justify-content: center;
`],[`
  display: flex;
  align-items: center;
  gap: 5px;
  font: `,`;
  font-size: `,`;
  cursor: pointer;
  justify-content: center;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),Ml=a.input(gi||(gi=l([`
  width: 16px;
  height: 16px;
  cursor: pointer;
  appearance: none;
  background-color: #FFFFFF;
  border: 1px solid #000000;
 
  &:checked {
    border: 1px solid #000000;
  }

  &:checked::after {
    position: relative;
    top: -1px;
    left: 2px;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border: 1px solid `,`;
  }  
`],[`
  width: 16px;
  height: 16px;
  cursor: pointer;
  appearance: none;
  background-color: #FFFFFF;
  border: 1px solid #000000;
 
  &:checked {
    border: 1px solid #000000;
  }

  &:checked::after {
    position: relative;
    top: -1px;
    left: 2px;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border: 1px solid `,`;
  }  
`])),function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"}),Hl=a.div(bi||(bi=l([`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`],[`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`]))),Gl=a.span(vi||(vi=l([`
  font: `,`;
  font-size: `,`;  
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`],[`
  font: `,`;
  font-size: `,`;  
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`])),function(n){var e,t;return(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.bodyText)!==null&&t!==void 0?t:"Arial, Helvetica, system-ui, sans-serif"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.fonts)===null||e===void 0?void 0:e.sizes)===null||t===void 0?void 0:t.bodyText)===null||i===void 0?void 0:i.size)!==null&&o!==void 0?o:"12px"}),Vl=a.svg(yi||(yi=l([`
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
`])),function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"}),ci,ui,pi,fi,hi,xi,mi,gi,bi,vi,yi;function Ul(n){var e=n.route,t=n.index,i=$.useState([!1,!1]),o=i[0],s=i[1];function d(c,p){var g=Z([],o,!0);g[p]=!g[p],g[p]==!0,s(g)}function u(c){}var x=e.fares.length>=2?2:1;return r.jsx(Ll,{children:r.jsxs(Nl,{children:[e.fares.slice(0,x).map(function(c,p){return r.jsxs(ai,{"data-testid":"fare-box-".concat(t+1,"-").concat(p),$highlighted:"".concat(p===0),children:[r.jsxs(li,{children:[r.jsx(si,{"data-testid":"fare-name-".concat(t+1,"-").concat(p+1),children:c.name}),p===0?r.jsx(Bl,{"data-testid":"fare-price-".concat(t+1,"-").concat(c.name),onClick:function(){c.basis},children:wi(c.price)}):r.jsx(Pl,{"data-testid":"fare-price-".concat(t+1,"-").concat(c.name),onClick:function(){c.basis},children:wi(c.price)})]}),r.jsx(di,{children:r.jsxs(Rl,{children:[r.jsxs(Hl,{children:[r.jsx(Ml,{type:"checkbox","data-testid":"fare-checkbox-".concat(t+1,"-").concat(p+1),onChange:function(){d(c,p)}}),o[p]&&r.jsx(Wl,{})]}),r.jsx(Gl,{children:"Compare"})]},p)})]},c.basis)}),x<2&&r.jsxs(ai,{"data-testid":"fare-box-".concat(t+1,"-2"),$highlighted:"false",children:[r.jsxs(li,{children:[r.jsx(si,{"data-testid":"fare-name-".concat(t+1,"-2")}),r.jsx("p",{children:"-"})]}),r.jsx(di,{})]},"missing-fare")]})})}function wi(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"EUR"}).format(n).trim()}var Wl=function(){return r.jsx(Vl,{viewBox:"-5 0 21 7",xmlns:"http://www.w3.org/2000/svg",role:"presentation",children:r.jsx("path",{d:"M1.70711 4.29289C1.31658 3.90237 0.683417 3.90237 0.292893 4.29289C-0.0976311 4.68342 -0.0976311 5.31658 0.292893 5.70711L1.70711 4.29289ZM3 7L2.29289 7.70711C2.68342 8.09763 3.31658 8.09763 3.70711 7.70711L3 7ZM9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L9.70711 1.70711ZM0.292893 5.70711L2.29289 7.70711L3.70711 6.29289L1.70711 4.29289L0.292893 5.70711ZM3.70711 7.70711L9.70711 1.70711L8.29289 0.292893L2.29289 6.29289L3.70711 7.70711Z"})})},Yl=a.div(ji||(ji=l([`
  width: 520px;
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  margin: 0 auto;
  border: 1px solid #ddd;
  
  border-radius: 0px;
  position: relative;

  background-color: `,`;

  &:hover {
    background-color: `,`;
  }

  &::before {
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
  
  border-radius: 0px;
  position: relative;

  background-color: `,`;

  &:hover {
    background-color: `,`;
  }

  &::before {
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
`])),function(n){var e,t,i,o;return n.selected?(o=(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.softBlackTint)===null||i===void 0?void 0:i.tint20)!==null&&o!==void 0?o:"rgba(136 136 136 / 0.2)":"#FFFFFF"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||i===void 0?void 0:i.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"},function(n){var e,t,i;return n.selected?(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332":"#FFFFFF"},function(n){var e,t,i,o,s,d,u;return n.selected?(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332":(u=(d=(s=(o=n.theme.colors)===null||o===void 0?void 0:o.primary)===null||s===void 0?void 0:s.softBlackTint)===null||d===void 0?void 0:d.tint20)!==null&&u!==void 0?u:"rgba(136 136 136 / 0.2)"},function(n){return`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 4px;
      background-color: (props.theme as DefaultTheme).colors?.primary?.normal ?? '#969332');
      pointer-events: none;
    }
  `}),ji;function Zl(n){var e=n.flightData,t=n.index,i=n.selected,o=n.onCardSelected,s=e.carrier,d=e.flights;function u(){o(t)}return r.jsx(r.Fragment,{children:r.jsxs(Yl,{onClick:u,"data-testid":"flight-card-".concat(t+1),selected:i,children:[r.jsx(Sl,{fares:e.fares,airline:s,operatedBy:d[0].operatedBy,flights:d,index:t}),r.jsx(Ul,{route:e,index:t})]})})}a.div(_i||(_i=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.borders?n.theme.borders.width:"0.3pt"},function(n){return n.theme.colors?n.theme.colors.primary.softBlackTint.tint20:"rgba(136 136 136 / 0.2)"});var _i;a.p(Si||(Si=l([`
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

`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});var Si,ql=a.div(Ci||(Ci=l([`
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
`]))),Kl=a.div(ki||(ki=l([`
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px; 
    
`],[`
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px; 
    
`]))),Ci,ki;function zi(n){return n.reduce(function(e,t){return t.price<e?t.price:e},n[0].price)}function Os(n){var e=n.routes,t=n.onFlightSelected,i=$.useState([]),o=i[0],s=i[1],d=$.useState(0),u=d[0],x=d[1],c=$.useState(!1);c[0],c[1],$.useEffect(function(){var g=e.map(function(y){return{routeData:y,selected:!1}}),v=Z([],g,!0);v.sort(function(y,b){return zi(y.routeData.fares)-zi(b.routeData.fares)}),s(v),x(e.length)},[e]);function p(g){var v=Z([],o,!0);v.forEach(function(y){return y.selected=!1}),v[g].selected=!0,s(v),t(v[g].routeData)}return r.jsx(Kl,{"data-testid":"flight-list-component",children:r.jsx(ql,{"data-testid":"flight-list",style:{backgroundColor:"0000FF"},children:u>0&&o.map(function(g,v){return r.jsx(Zl,{flightData:g.routeData,index:v,selected:g.selected,onCardSelected:function(){return p(v)}},"".concat(g.routeData.routeId,"-").concat(v))})})})}a.div(Fi||(Fi=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.light:"#E3DD40"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.colors?n.theme.colors.primary.tint.tint80:"rgba(150 147 50 / 0.8)"});var Fi;a.section($i||($i=l([`
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
`])));a.section(Ti||(Ti=l([`
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
`])),function(n){return n.$datefontcolor});var $i,Ti;a.div(Oi||(Oi=l([`
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
`])));a.p(Ai||(Ai=l([`
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
`])));var Oi,Ai;a.div(Di||(Di=l([`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`],[`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`])));var Di,Xl=a.div(Pi||(Pi=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"}),Jl=a.input(Li||(Li=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"}),Dn=a.div(Ni||(Ni=l([`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`],[`
  height: 20px;
  margin: 0;
  padding: 0px;
  object-fit: contain;
`]))),Ql=a.div(Ri||(Ri=l([`
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
`])),function(n){return n.isAlignedToRight?"right : 0px":"left : 0px"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.colors?n.theme.colors.controlsBorder:"#CBCBCB"}),Ei=a.li(Mi||(Mi=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.paddings?n.theme.paddings.regular:"5px"},function(n){return n.theme.colors?n.theme.colors.primary.tint.tint20:"rgba(150 147 50 / 0.2)"}),Ii=a.ul(Hi||(Hi=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ns=a.div(Gi||(Gi=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),Bi=a.div(Vi||(Vi=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"}),Pi,Li,Ni,Ri,Mi,Hi,Gi,Vi;function es(n){var e=n.deployableRef,t=n.inputRef,i=$.useState(!1),o=i[0],s=i[1],d=function(){return s(!0)};return $.useEffect(function(){var u=function(c){o&&e.current&&!e.current.contains(c.target)&&t.current&&!t.current.contains(c.target)&&s(!1)};return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}},[o]),{deployableIsVisible:o,handleDeployable:d,setDeployableIsVisible:s}}var ts=[{code:"BCN",city:"Barcelona",country:"Spain",airportName:"All Airports",description:"Barcelona, Spain (All Airports)",type:"city",icon:"house"},{code:"BCN",city:"Barcelona",country:"Spain",airportName:"Barcelona Arpt",description:"Barcelona, Spain (Barcelona Airport)",type:"airport",icon:"airplane"},{code:"MAD",city:"Madrid",country:"Spain",airportName:"All Airports",description:"Madrid, Spain (All Airports)",type:"city",icon:"house"},{code:"MAD",city:"Madrid",country:"Spain",airportName:"Adolfo Suárez Madrid-Barajas Arpt",description:"Madrid, Spain (Adolfo Suárez Madrid-Barajas Airport)",type:"airport",icon:"airplane"},{code:"MAA",city:"Chennai",country:"India",airportName:"All Airports",description:"Chennai, India (All Airports)",type:"city",icon:"house"},{code:"MAA",city:"Chennai",country:"India",airportName:"Chennai International Arpt",description:"Chennai, India (Chennai International Airport)",type:"airport",icon:"airplane"},{code:"MAB",city:"Marabá",country:"Brazil",airportName:"All Airports",description:"Marabá, Brazil (All Airports)",type:"city",icon:"house"},{code:"MAB",city:"Marabá",country:"Brazil",airportName:"João Correa da Rocha Arpt",description:"Marabá, Brazil (João Correa da Rocha Airport)",type:"airport",icon:"airplane"},{code:"MAC",city:"Macon",country:"United States",airportName:"Macon Downtown Arpt",description:"Macon, United States (Macon Downtown Airport)",type:"airport",icon:"airplane"}];function Ui(n){var e=n.previousSearches,t=n.selectedLocation,i=n.placeholderValue,o=n.dataTestId,s=o===void 0?"location-picker":o,d=n.onGetData,u=d===void 0?void 0:d,x=n.onLocationSelected,c=x===void 0?void 0:x,p=$.useState(t||null),g=p[0],v=p[1],y=$.useState(t?t.code:""),b=y[0],_=y[1],k=$.useState([]),C=k[0],S=k[1],w=$.useState(!1),j=w[0],m=w[1],h=$.useRef(null),f=$.useRef(null),F=es({deployableRef:f,inputRef:h}),E=F.deployableIsVisible,N=F.handleDeployable,R=F.setDeployableIsVisible;$.useEffect(function(){_(t?t.code:""),v(t||null)},[]);var D=function(M){if(u==null){var B=M.toLowerCase(),Q=ts.filter(function(Y){return Y.code.toLowerCase().includes(B)||Y.city.toLowerCase().includes(B)||Y.country.toLowerCase().includes(B)||Y.airportName.toLowerCase().includes(B)}),U=[];return Q.forEach(function(Y){U.push(Y)}),U}else return u(M)},O=function(M){m(!1),_(M.code),v(M),R(!1),c&&c(M)},H=function(M){var B=M.target.value;_(B),m(B.length>0),B.length>0?S(D(B)):S([])};return r.jsx(r.Fragment,{children:r.jsxs(Xl,{"data-testid":"location-box",onClick:N,children:[g?r.jsx(Dn,{children:g.airportName=="All Airports"?r.jsx(zt,{}):r.jsx(Ft,{})}):r.jsx(Dn,{children:r.jsx(ol,{})}),r.jsx(Jl,{ref:h,type:"text",placeholder:i,value:b,onChange:H,"data-testid":s}),E&&r.jsx(Ql,{ref:f,"data-testid":"deployable",isAlignedToRight:i==="Destination",children:j?C.length>0?r.jsx(Ii,{children:C.map(function(I,M){return r.jsxs(Ei,{"data-testid":"listitem",onClick:function(Q){Q.stopPropagation(),O(I)},children:[r.jsx("div",{children:I.airportName=="All Airports"?r.jsx(Dn,{children:r.jsx(zt,{})}):r.jsx(Dn,{children:r.jsx(Ft,{})})}),r.jsx("div",{children:r.jsxs(ns,{children:[r.jsxs("div",{children:[I.code," ",I.city,", ",I.country]}),r.jsx("div",{children:I.airportName})]})})]},M)})}):r.jsx(Bi,{children:"No options"}):e&&e.length>0?r.jsx(Ii,{children:e.slice(0,10).map(function(I,M){return r.jsx(Ei,{"data-testid":"listitem",onClick:function(Q){Q.stopPropagation(),O(I)},children:I.description},M)})}):r.jsx(Bi,{children:"No options"})})]})})}a.div(Wi||(Wi=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.smallHeadings.size:"14px"},function(n){return n.theme.colors?n.theme.colors.secondary.normal:"#56B4E3"});a.div(Yi||(Yi=l([`
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
`])),function(n){var e=n.$highlighted;return e===!0?"#409e4f":""},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"});a.div(Zi||(Zi=l([`
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
`])));a.button(qi||(qi=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){var e=n.$isBold;return e===!0?"bold":"normal"},function(n){return n.theme.colors?n.theme.colors.accent.normal:"#FF5E6F"});var Wi,Yi,Zi,qi;function zr(n){return function(e){ge(t,e);function t(i){var o=e.call(this,i)||this;return o.name=n,o}return t}(Error)}zr("MissingFaresDataError");zr("EmptyFaresDataError");a.svg(Ki||(Ki=l([`
  width: 60px;
  height: 100px;
  color: #000;
`],[`
  width: 60px;
  height: 100px;
  color: #000;
`])));a.div(Xi||(Xi=l([`
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
`])));a.div(Ji||(Ji=l([`
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
`])));a.div(Qi||(Qi=l([`
  width: fitContent;
  height: 'fitContent';
  margin: 0 0 10px 0;
`],[`
  width: fitContent;
  height: 'fitContent';
  margin: 0 0 10px 0;
`])));var Ki,Xi,Ji,Qi;a.button(no||(no=l([`
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
`])));a.div(eo||(eo=l([`
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
`])));a.div(to||(to=l([`
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
`])));a.svg(io||(io=l([`
  width: 60px;
  height: 100px;
  color: #000;
`],[`
  width: 60px;
  height: 100px;
  color: #000;
`])));var no,eo,to,io,is=a.p(ao||(ao=l([`
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
`]))),os=a.input(lo||(lo=l([`
  width: 100%;  
  margin: 0px;  
  padding: 0px 0px 0px 5px;
`],[`
  width: 100%;  
  margin: 0px;  
  padding: 0px 0px 0px 5px;
`]))),rs=a.div(so||(so=l([`
  height: 20px;  
  padding: 0;
  border: 0px;
`],[`
  height: 20px;  
  padding: 0;
  border: 0px;
`]))),as=a.input.attrs({type:"number"})(co||(co=l([`
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
`]))),ls=a.select(uo||(uo=l([`
  width: 100%;  
  border: 1px solid #cbcbcb;  
  font: `,`;
  font-size: `,`;
`],[`
  width: 100%;  
  border: 1px solid #cbcbcb;  
  font: `,`;
  font-size: `,`;
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),ss=a.option(po||(po=l([`  
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
`])),function(n){var e,t,i;return n.isSelected?"#FFFFFF":(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"},function(n){var e,t,i;return n.isSelected?(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.accent)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#FF5E6F":"#FFFFFF"},function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"},function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.normal)!==null&&i!==void 0?i:"#969332"},function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.tint)===null||i===void 0?void 0:i.tint20)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.2)"},function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.controlsBorder)!==null&&t!==void 0?t:"#CBCBCB"}),ds=a.div(fo||(fo=l([`
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
`]))),cs=a.div(ho||(ho=l([`
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
`])),function(n){return n.theme.fonts?n.theme.fonts.bodyText:"Arial, Helvetica, system-ui, sans-serif"},function(n){return n.theme.fonts?n.theme.fonts.sizes.bodyText.size:"12px"}),oo=a.div(xo||(xo=l([`
  width: 15px;
`],[`
  width: 15px;
`]))),ro=a.div(mo||(mo=l([`
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
`]))),us=a.div(go||(go=l([`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`],[`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`]))),ao,lo,so,co,uo,po,fo,ho,xo,mo,go,Kn=a.p(bo||(bo=l([`
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
`])),function(n){return n.size},function(n){return n.color},function(n){return n.bold?"bold":"normal"});Kn.defaultProps={size:"16px",color:"black",bold:!1};var ps=a(Kn)(vo||(vo=l([`
  size: '40px';
  color: '#000000';
  bold: true;
`],[`
  size: '40px';
  color: '#000000';
  bold: true;
`])));ps.defaultProps={size:"40px",color:"black",bold:!0};var fs=a(Kn)(yo||(yo=l([`
  size: '40px';
  color: `,`; 
  bold: true;
`],[`
  size: '40px';
  color: `,`; 
  bold: true;
`])),function(n){return n.color||"black"});fs.defaultProps={size:"17.5px",color:"black",bold:!0};var we=a(Kn)(wo||(wo=l([`
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
`])),function(n){return n.color||"black"});we.defaultProps={size:"14px",color:"black",bold:!0};var bo,vo,yo,wo;function hs(n){var e=document.createElement("div");e.style.position="fixed",e.style.top="20px",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.backgroundColor="#f8d7da",e.style.color="#721c24",e.style.padding="10px 20px",e.style.borderRadius="5px",e.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)",e.style.zIndex="1000",e.style.opacity="0",e.style.transition="opacity 0.3s ease-in-out",e.innerText=n;var t=document.createElement("button");t.innerText="x",t.style.background="none",t.style.border="none",t.style.color="#721c24",t.style.fontSize="16px",t.style.fontWeight="bold",t.style.cursor="pointer",t.style.marginLeft="10px",t.onclick=function(){e.style.opacity="0",setTimeout(function(){return e.remove()},300)},e.appendChild(t),document.body.appendChild(e),setTimeout(function(){e.style.opacity="1"},100),setTimeout(function(){e.style.opacity="0",setTimeout(function(){return e.remove()},500)},5e3)}function As(n){var e=n.dataTestId,t=e===void 0?"passengers-filter":e,i=n.onPassengersSelected,o=i===void 0?void 0:i,s=$.useState([1]),d=s[0],u=s[1],x=$.useState(["ADT"]),c=x[0],p=x[1],g=$.useState(0),v=g[0],y=g[1];$.useEffect(function(){var j=d.map(function(m,h){return{id:h,number:d[h],type:c[h]}});o&&o(j)},[d,c,o]);var b=d.reduce(function(j,m){return j+m},0),_=function(m,h){var f=c.map(function(F,E){return E===m?h:F});p(f)},k=function(m){b<9&&u(function(h){return h.map(function(f,F){return F===m&&f<9?f+1:f})})},C=function(m){u(function(h){return h.map(function(f,F){return F===m&&f>1?f-1:f})})},S=function(){if(b<9&&c.length<3){var m="";if(c.includes("ADT")?c.includes("CMP")?c.includes("CHD")||(m="CHD"):m="CMP":m="ADT",m){var h=Z(Z([],d,!0),[1],!1),f=Z(Z([],c,!0),[m],!1);u(h),p(f);var F=v+1;y(F)}}},w=function(m){var h=d.filter(function(R,D){return D!==m}),f=c.filter(function(R,D){return D!==m}),F=f.filter(function(R){return R==="ADT"}).length,E=f.filter(function(R){return R==="CMP"}).length,N=f.filter(function(R){return R==="CHD"}).length;if(N===1&&F===0&&E===0){hs("There must be at least one Adult to travel with a Child");return}u(h),p(f)};return r.jsxs(ds,{"data-testid":t,children:[r.jsx(we,{children:"Itinerary modifiers"}),r.jsx(is,{children:"Travelers (Up to 9 total)"}),d.map(function(j,m){return r.jsxs(cs,{"data-testid":"selector-".concat(m),children:[r.jsx(os,{type:"number",value:j,onChange:function(f){var F=parseInt(f.target.value,10);if(!isNaN(F)&&F>=1&&F<=9){var E=d.map(function(N,R){return R===m?F:N});E.reduce(function(N,R){return N+R},0)<=9&&u(E)}},onKeyDown:function(f){f.key==="ArrowUp"?k(m):f.key==="ArrowDown"&&C(m)},as,"data-testid":"counter-".concat(m)}),r.jsx(oo,{}),r.jsx(ls,{value:c[m],onChange:function(f){return _(m,f.target.value)},"data-testid":"type-selector-".concat(m),children:["ADT","CHD","CMP"].map(function(h){return r.jsx(ss,{value:h,className:c[m]===h?"selected":"","data-testid":"option-".concat(h),isSelected:c[m]===h,disabled:c.includes(h)&&c[m]!==h||h==="CHD"&&!c.some(function(f,F){return F!==m&&(f==="ADT"||f==="CMP")}),children:h==="ADT"?"ADT Adult":h==="CHD"?"CHD Child":"CMP Companion"},h)})},"type-".concat(m)),r.jsx(oo,{}),d.length!==1?r.jsx(ro,{"data-testid":"delete-".concat(m),onClick:function(){return w(m)},children:r.jsx(ve,{})}):r.jsx(ro,{"data-testid":"delete-".concat(m),children:r.jsx(ye,{})})]},m)}),r.jsx(us,{children:r.jsx(rs,{"data-testid":"add-selector",onClick:S,children:b<9&&c.length<3?r.jsx(kr,{}):r.jsx(il,{})})})]})}a.li(_o||(_o=l([`
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
`])));a.div(So||(So=l([`
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
`])));a.div(Co||(Co=l([`
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
`])));a.input(ko||(ko=l([`
  height: 100%;
  width: 100%;
  outline: none;
`],[`
  height: 100%;
  width: 100%;
  outline: none;
`])));a.div(zo||(zo=l([`
`],[`
`])));a.div(Fo||(Fo=l([`
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
`])));a.div($o||($o=l([`
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
`])));var jo=a.div(To||(To=l([`
  width: 15px;
`],[`
  width: 15px;
`])));a.input(Oo||(Oo=l([`
  height: 100%;
  width: 100%;
  outline: none;
`],[`
  height: 100%;
  width: 100%;
  outline: none;
`])));var xs=a.div(Ao||(Ao=l([`
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
`]))),ms=a.div(Do||(Do=l([`
  
  width: 100%;
  display: flex;
  
  // border: 1px solid #CBCBCB;
  justify-content: space-between;
`],[`
  
  width: 100%;
  display: flex;
  
  // border: 1px solid #CBCBCB;
  justify-content: space-between;
`]))),gs=a.div(Eo||(Eo=l([`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`],[`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`])));a.small(Io||(Io=l([`
  font-size: 10px;
`],[`
  font-size: 10px;
`])));a.div(Bo||(Bo=l([`
  margin-left: 5px;
  width: 210px;
`],[`
  margin-left: 5px;
  width: 210px;
`])));a.img(Po||(Po=l([`
  height: 15px;
  margin: 5px 0 auto auto;
  padding: 0;
`],[`
  height: 15px;
  margin: 5px 0 auto auto;
  padding: 0;
`])));var _o,So,Co,ko,zo,Fo,$o,To,Oo,Ao,Do,Eo,Io,Bo,Po;function bs(n){var e=n.originDefault,t=e===void 0?null:e,i=n.destinationDefault,o=i===void 0?void 0:i,s=n.dateTimeDefault,d=s===void 0?void 0:s,u=n.dataTestId,x=u===void 0?"segment-data":u,c=n.onGetOriginData,p=c===void 0?void 0:c,g=n.onGetDestinationData,v=g===void 0?void 0:g,y=n.onOriginLocationSelected,b=y===void 0?void 0:y,_=n.onDestinationLocationSelected,k=_===void 0?void 0:_,C=n.onDateSelected,S=C===void 0?void 0:C,w=n.onTimeSelected,j=w===void 0?void 0:w,m={Origin:"Origin",Destination:"Destination"};return r.jsxs(xs,{"data-testid":x,children:[r.jsxs(ms,{children:[r.jsx(Ui,{previousSearches:[],selectedLocation:t,placeholderValue:m.Origin,dataTestId:"segment-data-origin-location-picker",onGetData:p,onLocationSelected:b}),r.jsx(jo,{}),r.jsx(Ui,{previousSearches:[],selectedLocation:o,placeholderValue:m.Destination,dataTestId:"segment-data-destination-location-picker",onGetData:v,onLocationSelected:k})]}),r.jsxs(gs,{children:[r.jsx(Da,{dateDefault:d??void 0,onDateSelected:S,dataTestId:"date-component"}),r.jsx(jo,{}),r.jsx(Pa,{timeDefault:d??void 0,onTimeSelected:j,dataTestId:"time-component"})]})]})}var vs=a.div(No||(No=l([`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 5px solid #0000FF;
`],[`
  display: flex;
  justify-content: space-between;
  width: 100%;
  // border: 5px solid #0000FF;
`])));a.p(Ro||(Ro=l([`
  font-size: 12px;
  font-weight: 1000;
  margin-left: 10px;
  margin-top: 5px;
`],[`
  font-size: 12px;
  font-weight: 1000;
  margin-left: 10px;
  margin-top: 5px;
`])));var Lo=a.div(Mo||(Mo=l([`
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
`]))),ys=a.div(Ho||(Ho=l([`
  width: 100%;  
  margin-top: 15px;
  // border: 3px solid #CBCFFF;
`],[`
  width: 100%;  
  margin-top: 15px;
  // border: 3px solid #CBCFFF;
`]))),ws=a.div(Go||(Go=l([`
  width: 100%;  
  // border: 3px solid #FFF555;
`],[`
  width: 100%;  
  // border: 3px solid #FFF555;
`]))),No,Ro,Mo,Ho,Go,js=function(e){var t=e.index,i=t===void 0?0:t,o=e.segment,s=e.isDeleteButtonEnabled,d=s===void 0?!0:s,u=e.dataTestId,x=u===void 0?"segment-filter":u,c=e.onGetOriginData,p=c===void 0?void 0:c,g=e.onGetDestinationData,v=g===void 0?void 0:g,y=e.onSegmentSelected,b=y===void 0?void 0:y,_=e.onDeleteSegment,k=_===void 0?void 0:_,C=$.useState({originCode:o.origin?o.origin.code:"",originCity:o.origin?o.origin.city:"From",destinationCode:o.destination?o.destination.code:"",destinationCity:o.destination?o.destination.city:"To"}),S=C[0],w=C[1];$.useEffect(function(){w({originCode:o.origin?o.origin.code:"",originCity:o.origin?o.origin.city:"From",destinationCode:o.destination?o.destination.code:"",destinationCity:o.destination?o.destination.city:"To"})},[]);var j={id:o.id,origin:o.origin,destination:o.destination,date:o.date,time:o.time};return r.jsxs(ys,{"data-testid":x,children:[r.jsxs(vs,{children:[r.jsxs(we,{"data-testid":"from-to-title",children:[i+1,". ",S.originCode?S.originCity:"From"," - ",S.destinationCode?S.destinationCity:"To"]}),d?r.jsx(Lo,{"data-testid":"delete-flight-button",onClick:function(){return k&&k(o.id)},children:r.jsx(ve,{})}):r.jsx(Lo,{"data-testid":"delete-flight-button",children:r.jsx(ye,{})})]}),r.jsx(ws,{children:r.jsx(bs,{originDefault:o.origin,destinationDefault:o.destination,onGetOriginData:p,onGetDestinationData:v,onOriginLocationSelected:function(h){j.origin=h,b&&b(j),w(function(f){return X(X({},f),{originCode:h.code,originCity:h.city})})},onDestinationLocationSelected:function(h){j.destination=h,b&&b(j),w(function(f){return X(X({},f),{destinationCode:h.code,destinationCity:h.city})})},onDateSelected:function(h){j.date=h,b&&b(j)},onTimeSelected:function(h){j.time=h,b&&b(j)}})})]})},_s=a.div(Vo||(Vo=l([`
  height: 15px;  
  padding: 0;
  margin-top: 5px;
`],[`
  height: 15px;  
  padding: 0;
  margin-top: 5px;
`]))),Ss=a.div(Uo||(Uo=l([`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`],[`
  display: flex;
  padding-top: 5px;
  justify-content: flex-end;  
  width: 100%;
`]))),Cs=a.div(Wo||(Wo=l([`
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
`]))),Vo,Uo,Wo,Yo={id:1,origin:{code:"",city:"",country:"",airportName:"",description:"",type:"",icon:""},destination:{code:"",city:"",country:"",airportName:"",description:"",type:"",icon:""},date:null,time:null};function Ds(n){var e=n.dataTestId,t=e===void 0?"segments-filter":e,i=n.onSegmentsSelected,o=i===void 0?void 0:i,s=$.useState([Yo]),d=s[0],u=s[1],x=$.useState(2),c=x[0],p=x[1];$.useEffect(function(){o&&o(d)},[d]);var g=function(_,k){u(function(C){return C.map(function(S){return S.id===_?X(X({},S),k):S})})},v=function(){u(function(_){var k=_[_.length-1],C=X(X({},Yo),{id:c,origin:k.destination,date:null,time:null});return Z(Z([],_,!0),[C],!1)}),p(function(_){return _+1})},y=function(_){u(function(k){return k.filter(function(C){return C.id!==_})})};return r.jsxs(Cs,{"data-testid":t,children:[d.map(function(b,_){return r.jsx(js,{index:_,isDeleteButtonEnabled:_>0,onDeleteSegment:y,onSegmentSelected:function(C){return g(C.id,C)},segment:{id:b.id,origin:b.origin,destination:b.destination,date:null,time:null},dataTestId:"segment-filter-".concat(b.id)},b.id)}),r.jsx(Ss,{children:r.jsx(_s,{"data-testid":"add-flight-button",onClick:v,children:r.jsx(kr,{})})})]})}a.div(Zo||(Zo=l([`
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
`])),function(n){var e,t,i;return(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.light)!==null&&i!==void 0?i:"#E3DD40"});a.p(qo||(qo=l([`
  display:flex;
  margin-left: 10px;  
  font-size: 12px;  
  color: `,`; 
`],[`
  display:flex;
  margin-left: 10px;  
  font-size: 12px;  
  color: `,`; 
`])),function(n){return n.color||"black"});a.div(Ko||(Ko=l([`
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
`])));a.div(Xo||(Xo=l([`
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
`])),function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"},function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.defaultContentBackground)!==null&&t!==void 0?t:"#FEFEFE"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"});a.p(Jo||(Jo=l([`
  font-weight: 1000;
  text-align: center;
  margin: 0;
`],[`
  font-weight: 1000;
  text-align: center;
  margin: 0;
`])));a.div(Qo||(Qo=l([`
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
`])),function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.defaultContentBackground)!==null&&t!==void 0?t:"#FEFEFE"},function(n){return n.theme.colors?n.theme.colors.primary.normal:"#969332"});a.div(nr||(nr=l([`
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
`])),function(n){var e,t,i,o;return(o=(i=(t=(e=n.theme.colors)===null||e===void 0?void 0:e.primary)===null||t===void 0?void 0:t.softBlackTint)===null||i===void 0?void 0:i.tint60)!==null&&o!==void 0?o:"rgba(150 147 50 / 0.6)"},function(n){var e,t;return(t=(e=n.theme.colors)===null||e===void 0?void 0:e.defaultContentBackground)!==null&&t!==void 0?t:"#FEFEFE"});a.div(er||(er=l([`
  display: flex;
  flex-direction: column;
  width: 100%;  
  margin: 0;
`],[`
  display: flex;
  flex-direction: column;
  width: 100%;  
  margin: 0;
`])));var Zo,qo,Ko,Xo,Jo,Qo,nr,er;export{$s as C,Da as D,Ts as E,Os as F,Ui as L,As as P,Ds as S,Pa as T,bs as a,js as b,Fs as c};
