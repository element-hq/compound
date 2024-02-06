try{
var ce=__STORYBOOKAPI__,{ActiveTabs:pe,Consumer:se,ManagerContext:ae,Provider:le,addons:U,combineParameters:de,controlOrMetaKey:ie,controlOrMetaSymbol:fe,eventMatchesShortcut:xe,eventToShortcut:he,isMacLike:ue,isShortcutTaken:ge,keyToSymbol:Ce,merge:me,mockChannel:be,optionOrAltSymbol:ve,shortcutMatchesShortcut:ye,shortcutToHumanString:Ie,types:Se,useAddonState:Ae,useArgTypes:Fe,useArgs:Pe,useChannel:we,useGlobalTypes:Be,useGlobals:ke,useParameter:Oe,useSharedState:Re,useStoryPrepared:Le,useStorybookApi:Te,useStorybookState:Ge}=__STORYBOOKAPI__;var $=(()=>{let o;return typeof window<"u"?o=window:typeof globalThis<"u"?o=globalThis:typeof window<"u"?o=window:typeof self<"u"?o=self:o={},o})();var Ye=__STORYBOOKCLIENTLOGGER__,{deprecate:Ne,logger:q,once:Ue,pretty:$e}=__STORYBOOKCLIENTLOGGER__;function b(){return b=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},b.apply(this,arguments)}function io(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function v(o,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},v(o,e)}function fo(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,v(o,e)}function _(o){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(o)}function xo(o){return Function.toString.call(o).indexOf("[native code]")!==-1}function ho(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function F(o,e,t){return ho()?F=Reflect.construct.bind():F=function(r,n,c){var p=[null];p.push.apply(p,n);var a=Function.bind.apply(r,p),l=new a;return c&&v(l,c.prototype),l},F.apply(null,arguments)}function j(o){var e=typeof Map=="function"?new Map:void 0;return j=function(t){if(t===null||!xo(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return F(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,t)},j(o)}var uo={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function go(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];var r=e[0],n=[],c;for(c=1;c<e.length;c+=1)n.push(e[c]);return n.forEach(function(p){r=r.replace(/%[a-z]/,p)}),r}var i=function(o){fo(e,o);function e(t){for(var r,n=arguments.length,c=new Array(n>1?n-1:0),p=1;p<n;p++)c[p-1]=arguments[p];return r=o.call(this,go.apply(void 0,[uo[t]].concat(c)))||this,io(r)}return e}(j(Error));function G(o){return Math.round(o*255)}function Co(o,e,t){return G(o)+","+G(e)+","+G(t)}function y(o,e,t,r){if(r===void 0&&(r=Co),e===0)return r(t,t,t);var n=(o%360+360)%360/60,c=(1-Math.abs(2*t-1))*e,p=c*(1-Math.abs(n%2-1)),a=0,l=0,d=0;n>=0&&n<1?(a=c,l=p):n>=1&&n<2?(a=p,l=c):n>=2&&n<3?(l=c,d=p):n>=3&&n<4?(l=p,d=c):n>=4&&n<5?(a=p,d=c):n>=5&&n<6&&(a=c,d=p);var C=t-c/2,m=a+C,f=l+C,T=d+C;return r(m,f,T)}var W={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function mo(o){if(typeof o!="string")return o;var e=o.toLowerCase();return W[e]?"#"+W[e]:o}var bo=/^#[a-fA-F0-9]{6}$/,vo=/^#[a-fA-F0-9]{8}$/,yo=/^#[a-fA-F0-9]{3}$/,Io=/^#[a-fA-F0-9]{4}$/,M=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,So=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Ao=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Fo=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function k(o){if(typeof o!="string")throw new i(3);var e=mo(o);if(e.match(bo))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(vo)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(yo))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(Io)){var r=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:r}}var n=M.exec(e);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var c=So.exec(e.substring(0,50));if(c)return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])};var p=Ao.exec(e);if(p){var a=parseInt(""+p[1],10),l=parseInt(""+p[2],10)/100,d=parseInt(""+p[3],10)/100,C="rgb("+y(a,l,d)+")",m=M.exec(C);if(!m)throw new i(4,e,C);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)}}var f=Fo.exec(e.substring(0,50));if(f){var T=parseInt(""+f[1],10),ao=parseInt(""+f[2],10)/100,lo=parseInt(""+f[3],10)/100,N="rgb("+y(T,ao,lo)+")",A=M.exec(N);if(!A)throw new i(4,e,N);return{red:parseInt(""+A[1],10),green:parseInt(""+A[2],10),blue:parseInt(""+A[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new i(5)}function Po(o){var e=o.red/255,t=o.green/255,r=o.blue/255,n=Math.max(e,t,r),c=Math.min(e,t,r),p=(n+c)/2;if(n===c)return o.alpha!==void 0?{hue:0,saturation:0,lightness:p,alpha:o.alpha}:{hue:0,saturation:0,lightness:p};var a,l=n-c,d=p>.5?l/(2-n-c):l/(n+c);switch(n){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;default:a=(e-t)/l+4;break}return a*=60,o.alpha!==void 0?{hue:a,saturation:d,lightness:p,alpha:o.alpha}:{hue:a,saturation:d,lightness:p}}function J(o){return Po(k(o))}var wo=function(o){return o.length===7&&o[1]===o[2]&&o[3]===o[4]&&o[5]===o[6]?"#"+o[1]+o[3]+o[5]:o},z=wo;function g(o){var e=o.toString(16);return e.length===1?"0"+e:e}function D(o){return g(Math.round(o*255))}function Bo(o,e,t){return z("#"+D(o)+D(e)+D(t))}function w(o,e,t){return y(o,e,t,Bo)}function ko(o,e,t){if(typeof o=="number"&&typeof e=="number"&&typeof t=="number")return w(o,e,t);if(typeof o=="object"&&e===void 0&&t===void 0)return w(o.hue,o.saturation,o.lightness);throw new i(1)}function Oo(o,e,t,r){if(typeof o=="number"&&typeof e=="number"&&typeof t=="number"&&typeof r=="number")return r>=1?w(o,e,t):"rgba("+y(o,e,t)+","+r+")";if(typeof o=="object"&&e===void 0&&t===void 0&&r===void 0)return o.alpha>=1?w(o.hue,o.saturation,o.lightness):"rgba("+y(o.hue,o.saturation,o.lightness)+","+o.alpha+")";throw new i(2)}function X(o,e,t){if(typeof o=="number"&&typeof e=="number"&&typeof t=="number")return z("#"+g(o)+g(e)+g(t));if(typeof o=="object"&&e===void 0&&t===void 0)return z("#"+g(o.red)+g(o.green)+g(o.blue));throw new i(6)}function I(o,e,t,r){if(typeof o=="string"&&typeof e=="number"){var n=k(o);return"rgba("+n.red+","+n.green+","+n.blue+","+e+")"}else{if(typeof o=="number"&&typeof e=="number"&&typeof t=="number"&&typeof r=="number")return r>=1?X(o,e,t):"rgba("+o+","+e+","+t+","+r+")";if(typeof o=="object"&&e===void 0&&t===void 0&&r===void 0)return o.alpha>=1?X(o.red,o.green,o.blue):"rgba("+o.red+","+o.green+","+o.blue+","+o.alpha+")"}throw new i(7)}var Ro=function(o){return typeof o.red=="number"&&typeof o.green=="number"&&typeof o.blue=="number"&&(typeof o.alpha!="number"||typeof o.alpha>"u")},Lo=function(o){return typeof o.red=="number"&&typeof o.green=="number"&&typeof o.blue=="number"&&typeof o.alpha=="number"},To=function(o){return typeof o.hue=="number"&&typeof o.saturation=="number"&&typeof o.lightness=="number"&&(typeof o.alpha!="number"||typeof o.alpha>"u")},Go=function(o){return typeof o.hue=="number"&&typeof o.saturation=="number"&&typeof o.lightness=="number"&&typeof o.alpha=="number"};function Z(o){if(typeof o!="object")throw new i(8);if(Lo(o))return I(o);if(Ro(o))return X(o);if(Go(o))return Oo(o);if(To(o))return ko(o);throw new i(8)}function V(o,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?o.apply(this,r):V(o,e,r)}}function O(o){return V(o,o.length,[])}function R(o,e,t){return Math.max(o,Math.min(e,t))}function Mo(o,e){if(e==="transparent")return e;var t=J(e);return Z(b({},t,{lightness:R(0,1,t.lightness-parseFloat(o))}))}var Do=O(Mo),Ho=Do;function Eo(o,e){if(e==="transparent")return e;var t=J(e);return Z(b({},t,{lightness:R(0,1,t.lightness+parseFloat(o))}))}var _o=O(Eo),jo=_o;function zo(o,e){if(e==="transparent")return e;var t=k(e),r=typeof t.alpha=="number"?t.alpha:1,n=b({},t,{alpha:R(0,1,(r*100+parseFloat(o)*100)/100)});return I(n)}var Ve=O(zo);function Xo(o,e){if(e==="transparent")return e;var t=k(e),r=typeof t.alpha=="number"?t.alpha:1,n=b({},t,{alpha:R(0,1,+(r*100-parseFloat(o)*100).toFixed(2)/100)});return I(n)}var Yo=O(Xo),No=Yo,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},K={app:"#F6F9FC",bar:s.lightest,content:s.lightest,gridCellSize:10,hoverable:No(.93,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},B={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Uo={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:K.app,appContentBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.mediumdark,barTextColor:s.mediumdark,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:K.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},Q=Uo,$o={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:B.fonts.base,fontCode:B.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},qo=$o,{window:H}=$;var Wo=o=>typeof o!="string"?(q.warn(`Color passed to theme object should be a string. Instead ${o}(${typeof o}) was passed.`),!1):!0,Ko=o=>!/(gradient|var|calc)/.test(o),Qo=(o,e)=>o==="darken"?I(`${Ho(1,e)}`,.95):o==="lighten"?I(`${jo(1,e)}`,.95):e,oo=o=>e=>{if(!Wo(e)||!Ko(e))return e;try{return Qo(o,e)}catch{return e}},ot=oo("lighten"),et=oo("darken"),Jo=()=>!H||!H.matchMedia?"light":H.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",P={light:Q,dark:qo,normal:Q},E=Jo(),Y=(o={base:E},e)=>{let t={...P[E],...P[o.base]||{},...o,base:P[o.base]?o.base:E};return{...e,...t,barSelectedColor:o.barSelectedColor||t.colorSecondary}};var L="#1b1d22";var eo="#1b1d22";var to="#0467dd",ro="#ffffff";var S="#ffffff";var no="#1b1d22";var co="#818a95",po="#bdc4cc";var so=Y({base:"light",fontBase:'"Inter", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',fontCode:"Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",brandTitle:"Compound",brandUrl:"https://compound.element.io",brandImage:"/logo.svg",brandTarget:"_self",colorPrimary:L,colorSecondary:no,appBg:S,appContentBg:S,appBorderColor:po,appBorderRadius:4,textColor:L,textInverseColor:ro,barTextColor:L,barSelectedColor:to,barBg:S,inputBg:S,inputBorder:co,inputTextColor:eo,inputBorderRadius:32});U.setConfig({theme:so,showToolbar:!1,showPanel:!0,enableShortcuts:!0,initialActive:"sidebar"});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
