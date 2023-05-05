try{
var Ir=Object.defineProperty;var $=(o,e)=>()=>(o&&(e=o(o=0)),e);var jt=(o,e)=>{for(var t in e)Ir(o,t,{get:e[t],enumerable:!0})};var c=$(()=>{});var g,d=$(()=>{g={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}});var u=$(()=>{});var Dn,Vn,Yn,Wn,Zn,Gn,Xn,Kn,qn,Jn,Qn,es,P,ts,os,rs,is,m,ns,ss,as,ls,cs,ds,us,B=$(()=>{c();d();u();Dn=__STORYBOOKTHEMING__,{CacheProvider:Vn,ClassNames:Yn,Global:Wn,ThemeProvider:Zn,background:Gn,color:Xn,convert:Kn,create:qn,createCache:Jn,createGlobal:Qn,createReset:es,css:P,darken:ts,ensure:os,ignoreSsrWarning:rs,isPropValid:is,jsx:m,keyframes:ns,lighten:ss,styled:as,themes:ls,typography:cs,useTheme:ds,withTheme:us}=__STORYBOOKTHEMING__});var Pe={};jt(Pe,{Children:()=>Ur,Component:()=>Dr,Fragment:()=>N,Profiler:()=>Vr,PureComponent:()=>Yr,StrictMode:()=>Wr,Suspense:()=>Je,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Zr,cloneElement:()=>Gr,createContext:()=>Xr,createElement:()=>Kr,createFactory:()=>qr,createRef:()=>Jr,default:()=>zr,forwardRef:()=>Qr,isValidElement:()=>ei,lazy:()=>Qe,memo:()=>ti,useCallback:()=>j,useContext:()=>oi,useDebugValue:()=>ri,useEffect:()=>L,useImperativeHandle:()=>ii,useLayoutEffect:()=>ni,useMemo:()=>ee,useReducer:()=>si,useRef:()=>ai,useState:()=>T,version:()=>li});var zr,Ur,Dr,N,Vr,Yr,Wr,Je,Zr,Gr,Xr,Kr,qr,Jr,Qr,ei,Qe,ti,j,oi,ri,L,ii,ni,ee,si,ai,T,li,H=$(()=>{c();d();u();zr=__REACT__,{Children:Ur,Component:Dr,Fragment:N,Profiler:Vr,PureComponent:Yr,StrictMode:Wr,Suspense:Je,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Zr,cloneElement:Gr,createContext:Xr,createElement:Kr,createFactory:qr,createRef:Jr,forwardRef:Qr,isValidElement:ei,lazy:Qe,memo:ti,useCallback:j,useContext:oi,useDebugValue:ri,useEffect:L,useImperativeHandle:ii,useLayoutEffect:ni,useMemo:ee,useReducer:si,useRef:ai,useState:T,version:li}=__REACT__});var Ss,Es,As,Cs,Ms,Ps,Ts,ks,Os,Ns,Rs,Bs,js,It,Ls,Hs,Is,Fs,zs,Us,Ds,Vs,Te,Ys,ke,Ws,Zs,me,Gs,Xs,Ks,qs,Z,Js,Qs,ea,Ft,ta,oa,ra,ia,na,sa,aa,la,ca,da,ua,zt,pa,ha,fa,ma,ga,va,ya,ba,xa,_a,$a,wa,Sa,Ea,Aa,Ca,Ma,G=$(()=>{c();d();u();Ss=__STORYBOOKCOMPONENTS__,{A:Es,ActionBar:As,AddonPanel:Cs,Badge:Ms,Bar:Ps,Blockquote:Ts,Button:ks,Code:Os,DL:Ns,Div:Rs,DocumentWrapper:Bs,ErrorFormatter:js,FlexBar:It,Form:Ls,H1:Hs,H2:Is,H3:Fs,H4:zs,H5:Us,H6:Ds,HR:Vs,IconButton:Te,IconButtonSkeleton:Ys,Icons:ke,Img:Ws,LI:Zs,Link:me,ListItem:Gs,Loader:Xs,OL:Ks,P:qs,Placeholder:Z,Pre:Js,ResetWrapper:Qs,ScrollArea:ea,Separator:Ft,Spaced:ta,Span:oa,StorybookIcon:ra,StorybookLogo:ia,Symbols:na,SyntaxHighlighter:sa,TT:aa,TabBar:la,TabButton:ca,TabWrapper:da,Table:ua,Tabs:zt,TabsState:pa,TooltipLinkList:ha,TooltipMessage:fa,TooltipNote:ma,UL:ga,WithTooltip:va,WithTooltipPure:ya,Zoom:ba,codeCommon:xa,components:_a,createCopyToClipboardFunction:$a,getStoryHref:wa,icons:Sa,interleaveSeparators:Ea,nameSpaceClassNames:Aa,resetComponents:Ca,withReset:Ma}=__STORYBOOKCOMPONENTS__});var et,Oe,ci,di,ui,Ut,Dt,Vt,tt=$(()=>{c();d();u();H();B();G();et=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},Oe=function(o){var e=o.config,t=o.defer,r=t===void 0?!1:t,i=T(r?void 0:e.url),n=i[0],s=i[1],p=T(!1),a=p[0],l=p[1];return L(function(){if(r){var h=requestAnimationFrame(function(){s(e.url)});return function(){return cancelAnimationFrame(h)}}},[r,e.url]),L(function(){l(!1)},[n]),m("div",{css:ci},!a&&m(Z,{css:di},"Loading..."),m("iframe",{css:ui,src:n,allowFullScreen:e.allowFullscreen,onLoad:function(){return l(!0)}}))},ci=P(Ut||(Ut=et([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`]))),di=P(Dt||(Dt=et([`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`],[`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`]))),ui=P(Vt||(Vt=et([`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`],[`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`])))});var ot,pi,Yt,rt=$(()=>{c();d();u();H();B();tt();ot=/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,pi=function(o){return ot.test(o)},Yt=function(o){var e=o.config,t=ee(function(){var r=pi(e.url);if(!r)return console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),e;var i=e.embedHost||location.hostname,n="https://www.figma.com/embed?embed_host="+i+"&url="+e.url;return{url:n,allowFullscreen:e.allowFullscreen}},[e.url,e.allowFullscreen,e.embedHost]);return m(Oe,{defer:!0,config:t})}});var Ne,Re,st,ao,ge,lo,k,at,Be,lt=$(()=>{c();d();u();Ne=window,Re=Ne.ShadowRoot&&(Ne.ShadyCSS===void 0||Ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),ao=new WeakMap,ge=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Re&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=ao.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ao.set(t,e))}return e}toString(){return this.cssText}},lo=o=>new ge(typeof o=="string"?o:o+"",void 0,st),k=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ge(t,o,st)},at=(o,e)=>{Re?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=Ne.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},Be=Re?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return lo(t)})(o):o});var ct,je,co,xi,uo,ut,po,dt,V,Le=$(()=>{c();d();u();lt();lt();je=window,co=je.trustedTypes,xi=co?co.emptyScript:"",uo=je.reactiveElementPolyfillSupport,ut={toAttribute(o,e){switch(e){case Boolean:o=o?xi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},po=(o,e)=>e!==o&&(e==e||o==o),dt={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:po},V=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=dt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||dt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(Be(i))}else e!==void 0&&t.push(Be(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=dt){var i;let n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){let s=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ut).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){let s=i.getPropertyOptions(n),p=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:ut;this._$El=n,this[n]=p.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||po)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};V.finalized=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},uo?.({ReactiveElement:V}),((ct=je.reactiveElementVersions)!==null&&ct!==void 0?ct:je.reactiveElementVersions=[]).push("1.6.1")});function de(o,e,t=o,r){var i,n,s,p;if(e===Y)return e;let a=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,l=be(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,t,r)),r!==void 0?((s=(p=t)._$Co)!==null&&s!==void 0?s:p._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=de(o,a._$AS(o,e.values),a,r)),e}var pt,He,le,ho,X,xo,_i,ce,ye,be,_o,$i,ve,fo,mo,te,go,vo,$o,wo,S,O,Y,C,yo,ae,wi,oe,ht,re,ue,ft,Si,mt,gt,vt,bo,So,xe=$(()=>{c();d();u();He=window,le=He.trustedTypes,ho=le?le.createPolicy("lit-html",{createHTML:o=>o}):void 0,X=`lit$${(Math.random()+"").slice(9)}$`,xo="?"+X,_i=`<${xo}>`,ce=document,ye=(o="")=>ce.createComment(o),be=o=>o===null||typeof o!="object"&&typeof o!="function",_o=Array.isArray,$i=o=>_o(o)||typeof o?.[Symbol.iterator]=="function",ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fo=/-->/g,mo=/>/g,te=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),go=/'/g,vo=/"/g,$o=/^(?:script|style|textarea|title)$/i,wo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),S=wo(1),O=wo(2),Y=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),yo=new WeakMap,ae=ce.createTreeWalker(ce,129,null,!1),wi=(o,e)=>{let t=o.length-1,r=[],i,n=e===2?"<svg>":"",s=ve;for(let a=0;a<t;a++){let l=o[a],h,f,x=-1,_=0;for(;_<l.length&&(s.lastIndex=_,f=s.exec(l),f!==null);)_=s.lastIndex,s===ve?f[1]==="!--"?s=fo:f[1]!==void 0?s=mo:f[2]!==void 0?($o.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=te):f[3]!==void 0&&(s=te):s===te?f[0]===">"?(s=i??ve,x=-1):f[1]===void 0?x=-2:(x=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?te:f[3]==='"'?vo:go):s===vo||s===go?s=te:s===fo||s===mo?s=ve:(s=te,i=void 0);let b=s===te&&o[a+1].startsWith("/>")?" ":"";n+=s===ve?l+_i:x>=0?(r.push(h),l.slice(0,x)+"$lit$"+l.slice(x)+X+b):l+X+(x===-2?(r.push(void 0),a):b)}let p=n+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ho!==void 0?ho.createHTML(p):p,r]},oe=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0,p=e.length-1,a=this.parts,[l,h]=wi(e,t);if(this.el=oe.createElement(l,r),ae.currentNode=this.el.content,t===2){let f=this.el.content,x=f.firstChild;x.remove(),f.append(...x.childNodes)}for(;(i=ae.nextNode())!==null&&a.length<p;){if(i.nodeType===1){if(i.hasAttributes()){let f=[];for(let x of i.getAttributeNames())if(x.endsWith("$lit$")||x.startsWith(X)){let _=h[s++];if(f.push(x),_!==void 0){let b=i.getAttribute(_.toLowerCase()+"$lit$").split(X),w=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:w[2],strings:b,ctor:w[1]==="."?ft:w[1]==="?"?mt:w[1]==="@"?gt:ue})}else a.push({type:6,index:n})}for(let x of f)i.removeAttribute(x)}if($o.test(i.tagName)){let f=i.textContent.split(X),x=f.length-1;if(x>0){i.textContent=le?le.emptyScript:"";for(let _=0;_<x;_++)i.append(f[_],ye()),ae.nextNode(),a.push({type:2,index:++n});i.append(f[x],ye())}}}else if(i.nodeType===8)if(i.data===xo)a.push({type:2,index:n});else{let f=-1;for(;(f=i.data.indexOf(X,f+1))!==-1;)a.push({type:7,index:n}),f+=X.length-1}n++}}static createElement(e,t){let r=ce.createElement("template");return r.innerHTML=e,r}};ht=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;let{el:{content:r},parts:i}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:ce).importNode(r,!0);ae.currentNode=n;let s=ae.nextNode(),p=0,a=0,l=i[0];for(;l!==void 0;){if(p===l.index){let h;l.type===2?h=new re(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new vt(s,this,e)),this.u.push(h),l=i[++a]}p!==l?.index&&(s=ae.nextNode(),p++)}return n}p(e){let t=0;for(let r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},re=class{constructor(e,t,r,i){var n;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(n=i?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),be(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Y&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$i(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==C&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){var t;let{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oe.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.p(r);else{let s=new ht(n,this),p=s.v(this.options);s.p(r),this.T(p),this._$AH=s}}_$AC(e){let t=yo.get(e.strings);return t===void 0&&yo.set(e.strings,t=new oe(e)),t}k(e){_o(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new re(this.O(ye()),this.O(ye()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ue=class{constructor(e,t,r,i,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let n=this.strings,s=!1;if(n===void 0)e=de(this,e,t,0),s=!be(e)||e!==this._$AH&&e!==Y,s&&(this._$AH=e);else{let p=e,a,l;for(e=n[0],a=0;a<n.length-1;a++)l=de(this,p[r+a],t,a),l===Y&&(l=this._$AH[a]),s||(s=!be(l)||l!==this._$AH[a]),l===C?e=C:e!==C&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!i&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ft=class extends ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Si=le?le.emptyScript:"",mt=class extends ue{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,Si):this.element.removeAttribute(this.name)}},gt=class extends ue{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=de(this,e,t,0))!==null&&r!==void 0?r:C)===Y)return;let i=this._$AH,n=e===C&&i!==C||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==C&&(i===C||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},vt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}},bo=He.litHtmlPolyfillSupport;bo?.(oe,re),((pt=He.litHtmlVersions)!==null&&pt!==void 0?pt:He.litHtmlVersions=[]).push("2.6.1");So=(o,e,t)=>{var r,i;let n=(r=t?.renderBefore)!==null&&r!==void 0?r:e,s=n._$litPart$;if(s===void 0){let p=(i=t?.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new re(e.insertBefore(ye(),p),p,void 0,t??{})}return s._$AI(o),s}});var yt,bt,z,Eo,Ao=$(()=>{c();d();u();Le();Le();xe();xe();z=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=So(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Y}};z.finalized=!0,z._$litElement$=!0,(yt=globalThis.litElementHydrateSupport)===null||yt===void 0||yt.call(globalThis,{LitElement:z});Eo=globalThis.litElementPolyfillSupport;Eo?.({LitElement:z});((bt=globalThis.litElementVersions)!==null&&bt!==void 0?bt:globalThis.litElementVersions=[]).push("3.2.2")});var Co=$(()=>{c();d();u();});var U=$(()=>{c();d();u();Le();xe();Ao();Co()});var Mo=$(()=>{c();d();u();});function M(o){return(e,t)=>t!==void 0?((r,i,n)=>{i.constructor.createProperty(n,r)})(o,e,t):Ei(o,e)}var Ei,xt=$(()=>{c();d();u();Ei=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}}});var Po=$(()=>{c();d();u();xt();});var ie=$(()=>{c();d();u();});var To=$(()=>{c();d();u();ie();});var ko=$(()=>{c();d();u();ie();});var Oo=$(()=>{c();d();u();ie();});var No=$(()=>{c();d();u();ie();});var _t,id,$t=$(()=>{c();d();u();ie();id=((_t=window.HTMLSlotElement)===null||_t===void 0?void 0:_t.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE)});var Ro=$(()=>{c();d();u();ie();$t();});var pe=$(()=>{c();d();u();Mo();xt();Po();To();ko();Oo();No();$t();Ro()});var W,Bo,Ie=$(()=>{c();d();u();U();W=({title:o,children:e})=>S`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,Bo=k`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`});var jo,Lo,Fe,Ho=$(()=>{c();d();u();jo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lo=o=>(...e)=>({_$litDirective$:o,values:e}),Fe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}});var ne,Io=$(()=>{c();d();u();xe();Ho();ne=Lo(class extends Fe{constructor(o){var e;if(super(o),o.type!==jo.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.vt===void 0){this.vt=new Set;for(let r in e)this.vt.add(r);return this.render(e)}this.vt.forEach(r=>{e[r]==null&&(this.vt.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];i!=null&&(this.vt.add(r),r.includes("-")?t.setProperty(r,i):t[r]=i)}return Y}})});var ze=$(()=>{c();d();u();Io()});function Fo(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Uo(o,e){let t=Fo(o),r=Fo(e),i=!(t.top>r.bottom||t.bottom<r.top),n=!(t.left>r.right||t.right<r.left);if(n&&i){let h={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:h.y},{x:r.left,y:h.y}]},{points:[{x:t.right,y:h.y},{x:r.right,y:h.y}]},{points:[{y:t.top,x:h.x},{y:r.top,x:h.x}]},{points:[{y:t.bottom,x:h.x},{y:r.bottom,x:h.x}]}]}let s=t.left>r.right,p=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[n?null:{points:[{x:s?t.left:t.right,y:a.y},{x:s?r.right:r.left,y:a.y}],bisector:i?void 0:[{x:s?r.right:r.left,y:a.y},{x:s?r.right:r.left,y:p?r.bottom:r.top}]},i?null:{points:[{y:p?t.top:t.bottom,x:a.x},{y:p?r.bottom:r.top,x:a.x}],bisector:n?void 0:[{y:p?r.bottom:r.top,x:a.x},{y:p?r.bottom:r.top,x:s?r.right:r.left}]}].filter(h=>!!h)}function $e(o){return Math.round(o*100)/100}function Ue(o,e){return[...zo(o),...zo(e)]}function zo(o){return o?o instanceof Array?o:[o]:[]}var we=$(()=>{c();d();u()});var Ai,Do,Vo=$(()=>{c();d();u();pe();Ai=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},Do=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return Ai([M({attribute:!1})],e.prototype,"selectedNode",void 0),e}});function De(o){return o.touches.length===0||o.touches.length>2}function Ci(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Yo,Wo=$(()=>{c();d();u();Yo=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{De(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{De(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{De(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(De(r))return;let i=Array.from(this.previousTouches||[]),n=Array.from(r.touches);if(this.previousTouches=r.touches,!(n.length!==i.length||!n.every(s=>i.some(p=>p.identifier===s.identifier)))){if(n.length===1){this.onTouchPan({x:n[0].pageX-i[0].pageX,y:n[0].pageY-i[0].pageY});return}this.onTouchPinch(Ci({x:n[0].pageX,y:n[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}});var Se,D,Zo,Go,Xo=$(()=>{c();d();u();pe();Wo();Se=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},D=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Zo=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},Go=o=>{var e,t,r,i,n;class s extends Yo(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(h,f)=>{this.panX+=h/this.scale/window.devicePixelRatio,this.panY+=f/this.scale/window.devicePixelRatio}),r.set(this,h=>{h.code==="Space"&&!D(this,e)&&(Zo(this,e,!0),document.body.style.cursor="grab")}),i.set(this,h=>{h.code==="Space"&&D(this,e)&&(Zo(this,e,!1),document.body.style.cursor="auto")}),n.set(this,()=>{document.addEventListener("keyup",D(this,i)),document.addEventListener("keydown",D(this,r))}),this.addEventListener("wheel",h=>{if(this.isMovable)if(h.preventDefault(),h.ctrlKey){let{deltaY:f}=h;h.deltaMode===1&&(f*=15);let x=this.scale;this.scale*=1-f/((1e3-this.zoomSpeed)*.5);let _=h.offsetX-this.offsetWidth/2,b=h.offsetY-this.offsetHeight/2;this.panX+=_/this.scale-_/x,this.panY+=b/this.scale-b/x}else{let f=this.panSpeed*.002;this.panX-=h.deltaX*f/this.scale,this.panY-=h.deltaY*f/this.scale}},{passive:!1});let l=1;this.addEventListener("gesturestart",h=>{h.preventDefault(),l=this.scale}),this.addEventListener("gesturechange",h=>{let f=h;f.preventDefault(),this.scale=l*f.scale}),this.addEventListener("pointermove",h=>{h.buttons&4&&(h.preventDefault(),D(this,t).call(this,h.movementX,h.movementY))}),D(this,n).call(this),this.onmousedown=()=>{D(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:h,movementY:f})=>{D(this,t).call(this,h,f)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",D(this,i)),document.removeEventListener("keydown",D(this,r)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,n=new WeakMap,Se([M({attribute:!1})],s.prototype,"panX",void 0),Se([M({attribute:!1})],s.prototype,"panY",void 0),Se([M({attribute:!1})],s.prototype,"scale",void 0),Se([M({type:Number,attribute:"zoom-speed"})],s.prototype,"zoomSpeed",void 0),Se([M({type:Number,attribute:"pan-speed"})],s.prototype,"panSpeed",void 0),s}});var Mi,Pi,Ko,qo,Jo,Qo=$(()=>{c();d();u();U();ze();we();Mi=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:O`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&O`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${ne({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},Pi=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),i=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&i===0)return null;let n=$e(Math.max(r,i)).toString(10),s=n.length*t*.5,p=t*.25,a=t*.25,l=t*.5,h=r>i?(o.points[0].x+o.points[1].x)/2-s/2:o.points[0].x,f=r>i?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,x=[`scale(${e})`,r>i?`translate(0, ${p+a})`:`translate(${p+l}, 0)`].join(" "),_=h+s/2,b=f+t/2,w=r>i?`${_} ${f}`:`${h} ${b}`;return O`
    <g class="distance-tooltip">
      <rect
        x=${h-l}
        y=${f-a}
        rx="2"
        width=${s+l*2}
        height=${t+a*2}
        transform=${x}
        transform-origin=${w}
        stroke="none"
      />

      <text
        x=${_}
        y=${f+t-a/2}
        text-anchor="middle"
        transform=${x}
        transform-origin=${w}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${n}
      </text>
    </g>
  `},Ko=new Map,qo=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let i=o.id+`
`+e.id,n=Ko.get(i);return n||(n=Uo(o.absoluteBoundingBox,e.absoluteBoundingBox),Ko.set(i,n)),[...n.map(s=>Mi({guide:s,reverseScale:t})),...n.map(s=>Pi({guide:s,reverseScale:t,fontSize:r}))]},Jo=k`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`});var er,St,tr,or,rr,Et=$(()=>{c();d();u();U();er=({onClick:o=()=>{}})=>O`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,St=({onClick:o=()=>{}})=>O`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,tr=()=>O`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,or=()=>O`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,rr=()=>O`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`});var he,ki,At,Ve,ir,Oi,Ct,nr=$(()=>{c();d();u();he=o=>o.a===0?"transparent":o.a<1?`rgba(${ir(o).join(", ")}, ${o.a.toFixed(2)})`:Oi(o),ki=o=>new At(o).cssColor,At=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>he(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},Ve=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(s=>s===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let s=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=he(s)}let n=(i=e.fills)===null||i===void 0?void 0:i[0];if(n&&n.visible!==!1&&(e.type==="TEXT"?this.color=he(n.color):n.type.includes("GRADIENT")?this.backgroundImage=ki(n):n.type==="SOLID"&&(this.background=he(n.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=he(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:s,radius:p,color:a}=e.effects[0];this.boxShadowColor=he(a),this.boxShadow=`${s?.x||0}px ${s?.y||0}px 0 ${p} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Ct).join(`
`)}},ir=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],Oi=o=>{let[e,t,r]=ir(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},Ct=({property:o,value:e})=>`${o}: ${e};`});var Ni,Mt,sr,Ri,Bi,ar,lr=$(()=>{c();d();u();U();Et();nr();Ni=function(o,e,t,r){function i(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function p(h){try{l(r.next(h))}catch(f){s(f)}}function a(h){try{l(r.throw(h))}catch(f){s(f)}}function l(h){h.done?n(h.value):i(h.value).then(p,a)}l((r=r.apply(o,e||[])).next())})},Mt=o=>Ni(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),sr=({node:o,onClose:e})=>{if(!o)return null;let t=new Ve(o),r=i=>i.stopPropagation();return S`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${er({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?S`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?S`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&S`<p class="inspector-property">
              ${tr()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&S`<p class="inspector-property">
              ${or()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?S`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${St({onClick:()=>Mt(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${Ri(t)}
    </div>
  `},Ri=o=>{let e=()=>Mt(o.getStyleSheet()),t=o.getStyles();return S`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${St({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(Bi)}
    </div>
  </div>`},Bi=o=>{let{property:e,value:t,color:r}=o,i=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":i=S`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":i=S`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return S`<div class="css-property" @click=${()=>Mt(Ct(o))}>
    <span>${e}:</span>${i}<span class="css-value">${t}</span>;</span>
  </div>`},ar=k`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`});var Pt,cr,dr,ur=$(()=>{c();d();u();U();ze();we();Pt=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:i,y:n,width:s,height:p}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},l=t/2,h=(b,w)=>`M${b},${w}`,f=(b,w)=>`L${b},${w}`,x=(b,w,A)=>`A${b},${b} 0 0 1 ${w},${A}`,_=[h(a.topLeft+l,l),f(s-a.topRight,l),x(a.topRight-l,s-l,a.topRight),f(s-l,p-a.bottomRight),x(a.bottomRight-l,s-a.bottomRight,p-l),f(a.bottomLeft,p-l),x(a.bottomLeft-l,l,p-a.bottomLeft),f(l,a.topLeft),x(a.topLeft-l,a.topLeft,l),"Z"].join(" ");return O`
    <path
      class="guide"
      d=${_}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${i}, ${n})"
      ?data-selected=${e}
      @click=${r}
    />
  `},cr=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:i,offsetY:n,reverseScale:s})=>{let p={top:`${n+e+r}px`,left:`${i+o+t/2}px`,transform:`translateX(-50%) scale(${s}) translateY(0.25em)`};return S`
    <div class="tooltip" style="${ne(p)}">
      ${$e(t)} x ${$e(r)}
    </div>
  `},dr=k`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`});var Hi,pr,hr,fr=$(()=>{c();d();u();Hi=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],pr=o=>(typeof o=="object"?o:new Date(o)).getTime(),hr=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=pr(e)-pr(o),n=Math.abs(i);for(let s of Hi)if(n>=s.gte){let p=Math.round(Math.abs(i)/s.divisor),a=i<0,l=s.unit;return l?t.format(a?p:-p,l):s.text}}});var mr,gr,vr=$(()=>{c();d();u();U();Et();fr();mr=k`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,gr=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return S`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${rr()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${hr(t)}
    </span>
  </a>`}});function Fi(o){let e=[],t=[],r=[],i=[];for(let p of o.children){if(p.type!=="FRAME"&&p.type!=="COMPONENT")continue;let{x:a,y:l,width:h,height:f}=p.absoluteBoundingBox;e.push(a),t.push(a+h),r.push(l),i.push(l+f)}let n=Math.min(...e),s=Math.min(...r);return{x:n,y:s,width:Math.abs(Math.max(...t)-n),height:Math.abs(Math.min(...i)-s)}}function zi(o,e){let t=e.map(i=>{if(!("effects"in i))return{top:i.absoluteBoundingBox.y,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x};let n=i.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),s=i.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),p={top:Math.max(0,...n,...s.map(a=>a.top)),right:Math.max(0,...n,...s.map(a=>a.right)),bottom:Math.max(0,...n,...s.map(a=>a.bottom)),left:Math.max(0,...n,...s.map(a=>a.left))};return{top:i.absoluteBoundingBox.y-p.top,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width+p.right,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height+p.bottom,left:i.absoluteBoundingBox.x-p.left}}),r={top:Math.min(...t.map(i=>i.top)),right:Math.max(...t.map(i=>i.right)),bottom:Math.max(...t.map(i=>i.bottom)),left:Math.min(...t.map(i=>i.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function Ye(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>Ye(t,e+1)).flat()]:o.children.map(t=>Ye(t,e+1)).flat()}var yr,I,Tt,We,kt=$(()=>{c();d();u();U();pe();ze();we();Vo();Xo();Qo();lr();Ie();ur();vr();yr=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},I=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Tt=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},We=o=>{var e,t,r,i,n;class s extends Do(Go(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),i.set(this,l=>h=>{h.preventDefault(),h.stopPropagation(),this.selectedNode=l}),n.set(this,l=>{var h,f;return(f=(h=I(this,r))===null||h===void 0?void 0:h.find(x=>x.id===l))!==null&&f!==void 0?f:null})}static get styles(){let a=super.styles;return Ue(a,[k`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,dr,Bo,Jo,ar,mr])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!I(this,e)||!I(this,r)?W({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?W({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?W({title:"Error",children:this.error}):this.error;let a=I(this,e),l=1/this.scale,h=`calc(var(--guide-thickness) * ${l})`,f=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),x=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return S`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([_,b])=>{var w;let A=I(this,n).call(this,_);if(!A||!("absoluteBoundingBox"in A)||!(!((w=I(this,t))===null||w===void 0)&&w[A.id]))return null;let E=I(this,t)[A.id];return S`
                <img class="rendered-image" src="${b}"
                style=${ne({top:`${A.absoluteBoundingBox.y-a.y}px`,left:`${A.absoluteBoundingBox.x-a.x}px`,marginTop:`${-E.top}px`,marginLeft:`${-E.left}px`,width:A.absoluteBoundingBox.width+E.left+E.right+"px",height:A.absoluteBoundingBox.height+E.top+E.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&cr({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:l})}
            ${O`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${ne({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:h})}
            >
              ${this.selectedNode&&Pt({node:this.selectedNode,selected:!0,computedThickness:f*l})}

              ${I(this,r).map(_=>{var b;return _.id===((b=this.selectedNode)===null||b===void 0?void 0:b.id)?null:O`
                  <g>
                    ${Pt({node:_,computedThickness:f*l,onClick:I(this,i).call(this,_)})}
                    ${this.selectedNode&&qo({node:_,distanceTo:this.selectedNode,reverseScale:l,fontSize:x})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${sr({node:this.selectedNode,onClose:this.deselectNode})}
          ${gr(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Tt(this,e,a.type==="CANVAS"?Fi(a):a.absoluteBoundingBox),Tt(this,r,Ye(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(I(this,n)).filter(l=>!!l);Tt(this,t,a.reduce((l,h)=>"absoluteBoundingBox"in h?Object.assign(Object.assign({},l),{[h.id]:zi(h,Ye(h))}):l,{})),this.requestUpdate()}resetZoom(){if(I(this,e)){let{width:a,height:l}=I(this,e),{width:h,height:f}=this.getBoundingClientRect(),x=h/(a+this.zoomMargin*2),_=f/(l+this.zoomMargin*2);this.scale=Math.min(x,_,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,n=new WeakMap,yr([M({type:Number,attribute:"zoom-margin"})],s.prototype,"zoomMargin",void 0),yr([M({type:String,attribute:"link"})],s.prototype,"link",void 0),s}});var br,K,xr=$(()=>{c();d();u();U();pe();Ie();kt();br=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},K=class extends We(z){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return W({title:"Parameter error",children:S`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return W({title:"Parameter Error",children:S`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};br([M({type:Object})],K.prototype,"nodes",void 0);br([M({type:String,attribute:"rendered-image"})],K.prototype,"renderedImage",void 0)});var _r,Ot,Ze,Nt,q,$r=$(()=>{c();d();u();U();pe();Ie();kt();we();_r=function(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var p=o.length-1;p>=0;p--)(s=o[p])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},Ot=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},q=class extends We(z){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,Ze.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Nt.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(n=>n.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return W({title:"Parameter error",children:S`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return Ue(super.styles,[k`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return S`
      <div class="controls">
        <select @change=${Ot(this,Nt)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>S`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Ot(this,Ze).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(Ot(this,Ze).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};Ze=new WeakMap,Nt=new WeakMap;_r([M({type:Object,attribute:"document-node"})],q.prototype,"documentNode",void 0);_r([M({type:Object,attribute:"rendered-images"})],q.prototype,"renderedImages",void 0)});var wr=$(()=>{c();d();u();xr();$r();customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",q);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",K)});function Ge(o=window.React,e,t,r,i){let n,s,p;if(e===void 0){let _=o;({tagName:s,elementClass:p,events:r,displayName:i}=_),n=_.react}else n=o,p=t,s=e;let a=n.Component,l=n.createElement,h=new Set(Object.keys(r??{}));class f extends a{constructor(){super(...arguments),this.o=null}t(b){if(this.o!==null)for(let w in this.i)Di(this.o,w,this.props[w],b?b[w]:void 0,r)}componentDidMount(){this.t()}componentDidUpdate(b){this.t(b)}render(){let{_$Gl:b,...w}=this.props;this.h!==b&&(this.u=E=>{b!==null&&((F,fe)=>{typeof F=="function"?F(fe):F.current=fe})(b,E),this.o=E,this.h=b}),this.i={};let A={ref:this.u};for(let[E,F]of Object.entries(w))Ui.has(E)?A[E==="className"?"class":E]=F:h.has(E)||E in p.prototype?this.i[E]=F:A[E]=F;return l(s,A)}}f.displayName=i??p.name;let x=n.forwardRef((_,b)=>l(f,{..._,_$Gl:b},_?.children));return x.displayName=f.displayName,x}var Ui,Sr,Di,Er=$(()=>{c();d();u();Ui=new Set(["children","localName","ref","style","className"]),Sr=new WeakMap,Di=(o,e,t,r,i)=>{let n=i?.[e];n===void 0||t===r?t==null&&e in HTMLElement.prototype?o.removeAttribute(e):o[e]=t:((s,p,a)=>{let l=Sr.get(s);l===void 0&&Sr.set(s,l=new Map);let h=l.get(p);a!==void 0?h===void 0?(l.set(p,h={handleEvent:a}),s.addEventListener(p,h)):h.handleEvent=a:h!==void 0&&(l.delete(p),s.removeEventListener(p,h))})(o,n,t)}});var Ar=$(()=>{c();d();u();Er()});var Cr,Mr,Pr=$(()=>{c();d();u();wr();Ar();H();Cr=Ge(Pe,"figspec-frame-viewer",K,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),Mr=Ge(Pe,"figspec-file-viewer",q,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"})});var Rr={};jt(Rr,{Figspec:()=>Or,default:()=>Gi});function Xe(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function Zi(o){var e;if(o.accessToken)return o.accessToken;try{return(e=g.STORYBOOK_FIGMA_ACCESS_TOKEN)!==null&&e!==void 0?e:null}catch{return null}}function Nr(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(Nr).flat()}var Vi,Ke,Yi,Wi,Tr,Or,Gi,kr,Br=$(()=>{c();d();u();H();Pr();G();B();rt();Vi=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},Ke=function(){return Ke=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},Ke.apply(this,arguments)},Yi=function(o,e,t,r){function i(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function p(h){try{l(r.next(h))}catch(f){s(f)}}function a(h){try{l(r.throw(h))}catch(f){s(f)}}function l(h){h.done?n(h.value):i(h.value).then(p,a)}l((r=r.apply(o,e||[])).next())})},Wi=function(o,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,i,n,s;return s={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function p(l){return function(h){return a([l,h])}}function a(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,i&&(n=l[0]&2?i.return:l[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,l[1])).done)return n;switch(i=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){t.label=l[1];break}if(l[0]===6&&t.label<n[1]){t.label=n[1],n=l;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(l);break}n[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(o,t)}catch(h){l=[6,h],i=0}finally{r=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},Tr=P(kr||(kr=Vi([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`])));Or=function(o){var e=o.config,t=T({state:"loading"}),r=t[0],i=t[1],n=function(s){return Yi(void 0,void 0,void 0,function(){var p,a,l,h,f,x,_,b,w,A,E,F,fe,Bt,J;return Wi(this,function(Q){switch(Q.label){case 0:i({state:"loading"}),Q.label=1;case 1:if(Q.trys.push([1,6,,7]),p=e.url.match(ot),!p)throw new Error(e.url+" is not a valid Figma URL.");if(a=p[3],l=new URL(e.url),h=l.searchParams.get("node-id"),f=Zi(e),!f)throw new Error("Personal Access Token is required.");return x={"X-FIGMA-TOKEN":f},_=new URL("https://api.figma.com/v1/files/"+a),b=new URL("https://api.figma.com/v1/images/"+a),b.searchParams.set("format","svg"),h?[3,4]:[4,fetch(_.href,{headers:x,signal:s}).then(Xe)];case 2:return w=Q.sent(),A=Nr(w.document),b.searchParams.set("ids",A.map(function(Hr){return Hr.id}).join(",")),[4,fetch(b.href,{headers:x,signal:s}).then(Xe)];case 3:return E=Q.sent(),i({state:"fetched",value:{type:"file",props:{documentNode:w,renderedImages:E.images,link:e.url}}}),[2];case 4:return _.pathname+="/nodes",_.searchParams.set("ids",h),b.searchParams.set("ids",h),[4,Promise.all([fetch(_.href,{headers:x,signal:s}).then(Xe),fetch(b.href,{headers:x,signal:s}).then(Xe)])];case 5:return F=Q.sent(),fe=F[0],Bt=F[1],i({state:"fetched",value:{type:"frame",props:{nodes:fe,renderedImage:Object.values(Bt.images)[0],link:e.url}}}),[3,7];case 6:return J=Q.sent(),J instanceof DOMException&&J.code===DOMException.ABORT_ERR?[2]:(console.error(J),i({state:"failed",error:J instanceof Error?J.message:String(J)}),[3,7]);case 7:return[2]}})})};switch(L(function(){var s=!1,p=function(){s=!0},a=new AbortController;return n(a.signal).then(p,p),function(){s||a.abort()}},[e.url]),r.state){case"loading":return m(Z,null,m(N,null,"Loading Figma file..."));case"failed":return m(Z,null,m(N,null,"Failed to load Figma file"),m(N,null,r.error));case"fetched":return r.value.type==="file"?m(Mr,Ke({css:Tr},r.value.props)):m(Cr,Ke({css:Tr},r.value.props))}},Gi=Or});c();d();u();c();d();u();c();d();u();c();d();u();var Ae=__STORYBOOKADDONS__,{addons:rn,types:Lt,mockChannel:nn}=__STORYBOOKADDONS__;c();d();u();var dn=__STORYBOOKAPI__,{ActiveTabs:un,Consumer:pn,ManagerContext:hn,Provider:fn,addons:mn,combineParameters:gn,controlOrMetaKey:vn,controlOrMetaSymbol:yn,eventMatchesShortcut:bn,eventToShortcut:xn,isMacLike:_n,isShortcutTaken:$n,keyToSymbol:wn,merge:Sn,mockChannel:En,optionOrAltSymbol:An,shortcutMatchesShortcut:Cn,shortcutToHumanString:Mn,types:Pn,useAddonState:Tn,useArgTypes:kn,useArgs:On,useChannel:Nn,useGlobalTypes:Rn,useGlobals:Bn,useParameter:Ce,useSharedState:jn,useStoryPrepared:Ln,useStorybookApi:Hn,useStorybookState:Ht}=__STORYBOOKAPI__;B();c();d();u();var Me="STORYBOOK_ADDON_DESIGNS",qe=Me+"/panel",gs={UpdateConfig:Me+"/update_config"},se="design";c();d();u();B();c();d();u();H();B();G();rt();tt();c();d();u();H();B();G();c();d();u();H();B();c();d();u();H();var Wt=function(){for(var o=0,e=0,t=arguments.length;e<t;e++)o+=arguments[e].length;for(var r=Array(o),i=0,e=0;e<t;e++)for(var n=arguments[e],s=0,p=n.length;s<p;s++,i++)r[i]=n[s];return r},Zt=function(o,e){var t=T([0,0]),r=t[0],i=t[1],n=T(!1),s=n[0],p=n[1],a=j(function(b){b.button===0&&(i([b.screenX,b.screenY]),p(!0))},[p,i]),l=j(function(b){var w=b.touches[0];i([w.screenX,w.screenY]),p(!0)},[p,i]),h=j(function(b){s&&i(function(w){return o([b[0]-w[0],b[1]-w[1]]),b})},Wt([i,s],e)),f=j(function(b){var w=b.screenX,A=b.screenY;h([w,A])},[h]),x=j(function(b){var w=b.touches[0],A=w.screenX,E=w.screenY;h([A,E])},Wt([i,s],e)),_=j(function(){i([0,0]),p(!1)},[p,i]);return{onMouseDown:a,onMouseMove:f,onMouseUp:_,onMouseLeave:_,onTouchStart:l,onTouchMove:x,onTouchCancel:_,onTouchEnd:_}};var Kt=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},it=function(){return it=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},it.apply(this,arguments)},qt=function(o){var e=o.children,t=o.className,r=o.style,i=o.defaultValue,n=o.value,s=o.onChange,p=T([0,0]),a=p[0],l=p[1];L(function(){l(i||n||[0,0])},[i]);var h=Zt(function(x){s&&s(x),l(function(_){return[_[0]+x[0],_[1]+x[1]]})},[l,s]),f=ee(function(){var x=n||a;return{transform:"translate("+x[0]+"px, "+x[1]+"px)"}},[n,a]);return m("div",it({css:hi,className:t,style:r},h),m("div",{css:fi,style:f},e))};var hi=P(Gt||(Gt=Kt([`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`],[`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`]))),fi=P(Xt||(Xt=Kt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`]))),Gt,Xt;c();d();u();H();B();G();var Jt=function(o){var e=o.onZoomIn,t=o.onZoomOut,r=o.onReset;return m(N,null,m(Te,{onClick:e},m(ke,{icon:"zoom"})),m(Te,{onClick:t},m(ke,{icon:"zoomout"})),m(Te,{onClick:r},m(ke,{icon:"zoomreset"})))};c();d();u();H();var Qt=function(o,e){var t=T(1),r=t[0],i=t[1];L(function(){i(o)},e);var n=j(function(){i(function(a){return a+.1})},[i]),s=j(function(){i(function(a){return Math.max(a-.1,.1)})},[i]),p=j(function(){i(1)},[i]);return{scale:r,zoomIn:n,zoomOut:s,resetZoom:p}};var nt=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},ro=function(o){var e=o.config,t=Qt(e.scale||1,[e.scale]),r=ee(function(){return{transform:"scale("+t.scale+")"}},[t.scale]);return m("div",{css:mi},m(It,{border:!0},m(N,{key:"left"},m("p",null,m("b",null,"Image")),m(Ft,null),m(Jt,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),m(qt,{css:gi,defaultValue:e.offset},m("img",{css:vi,src:e.url,style:r})))};var mi=P(eo||(eo=nt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`]))),gi=P(to||(to=nt([`
  flex-grow: 1;
`],[`
  flex-grow: 1;
`]))),vi=P(oo||(oo=nt([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`]))),eo,to,oo;c();d();u();B();G();var yi=function(o,e){return Object.defineProperty?Object.defineProperty(o,"raw",{value:e}):o.raw=e,o},no=function(o){var e,t,r,i=o.config;return m("div",{css:bi},m(me,{cancel:!1,href:i.url,target:(e=i.target)!==null&&e!==void 0?e:"_blank",rel:(t=i.rel)!==null&&t!==void 0?t:"noopener",withArrow:(r=i.showArrow)!==null&&r!==void 0?r:!0},i.label||i.url))};var bi=P(io||(io=yi([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),io;c();d();u();H();B();G();var so=function(o){var e=o.tabs,t=T(e[0].id),r=t[0],i=t[1];return L(function(){i(e[0].id)},[e]),m(zt,{absolute:!0,selected:r,actions:{onSelect:i}},e.map(function(n){return m("div",{key:n.id,id:n.id,title:n.name},n.offscreen||r===n.id?n.content:null)}))};var R=function(){return R=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},R.apply(this,arguments)},Xi=function(){for(var o=0,e=0,t=arguments.length;e<t;e++)o+=arguments[e].length;for(var r=Array(o),i=0,e=0;e<t;e++)for(var n=arguments[e],s=0,p=n.length;s<p;s++,i++)r[i]=n[s];return r},Ki=Qe(function(){return Promise.resolve().then(()=>(Br(),Rr))}),jr=function(o){var e=o.config;if(!e||"length"in e&&e.length===0)return m(Z,null,m(N,null,"No designs found"),m(N,null,"Learn how to"," ",m(me,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=Xi(e instanceof Array?e:[e]).map(function(r,i){var n,s={id:JSON.stringify(r),name:r.name||r.type.toUpperCase(),offscreen:(n=r.offscreen)!==null&&n!==void 0?n:!0};switch(r.type){case"iframe":return R(R({},s),{content:m(Oe,{config:r})});case"figma":return R(R({},s),{content:m(Yt,{config:r}),offscreen:!1});case"figspec":case"experimental-figspec":return r.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),R(R({},s),{content:m(Je,{fallback:"Preparing Figspec viewer..."},m(Ki,{config:r})),offscreen:!1});case"image":return R(R({},s),{content:m(ro,{config:r})});case"link":return R(R({},s),{content:m(no,{config:r})})}return R(R({},s),{content:m(Z,null,m(N,null,"Invalid config type"),m(N,null,"Config type you set is not supported. Please choose one from"," ",m(me,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})});return t.length===1?m("div",null,t[0].content):m(so,{tabs:t})};var Lr=function(o){var e=o.active;if(!e)return null;var t=Ht(),r=Ce(se);return m(jr,{key:t.storyId,config:r})};var Ee="Design";function Rt(o){Ae.register(Me,function(e){var t=function(){var i=Ce(se);return i?Array.isArray(i)?i.length>0?Ee+" ("+i.length+")":Ee:(i.name||Ee)+" (1)":Ee},r=function(i){var n=i.active,s=i.key;return m(Lr,{key:s,active:!!n})};o==="tab"?Ae.add(qe,{title:Ee,render:r,type:Lt.TAB,paramKey:se,route:function(i){var n=i.storyId;return"/design/"+n},match:function(i){var n=i.viewMode;return n==="design"}}):Ae.addPanel(qe,{title:t,paramKey:se,render:r})})}Rt("panel");
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=register-bundle.js.map
