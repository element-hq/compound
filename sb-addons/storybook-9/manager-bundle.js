try{
var pe=__STORYBOOKAPI__,{ActiveTabs:ae,Consumer:ce,ManagerContext:se,Provider:le,addons:q,combineParameters:de,controlOrMetaKey:ie,controlOrMetaSymbol:fe,eventMatchesShortcut:he,eventToShortcut:xe,isMacLike:ue,isShortcutTaken:Ce,keyToSymbol:ge,merge:me,mockChannel:be,optionOrAltSymbol:ye,shortcutMatchesShortcut:Ae,shortcutToHumanString:ve,types:Se,useAddonState:Fe,useArgTypes:Pe,useArgs:Be,useChannel:we,useGlobalTypes:Ie,useGlobals:ke,useParameter:Oe,useSharedState:Re,useStoryPrepared:Te,useStorybookApi:Le,useStorybookState:Ge}=__STORYBOOKAPI__;var N=(()=>{let o;return typeof window<"u"?o=window:typeof globalThis<"u"?o=globalThis:typeof window<"u"?o=window:typeof self<"u"?o=self:o={},o})();var De=__STORYBOOKCLIENTLOGGER__,{deprecate:$e,logger:W,once:qe,pretty:Ne}=__STORYBOOKCLIENTLOGGER__;function b(){return b=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])}return o},b.apply(this,arguments)}function io(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function y(o,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},y(o,e)}function fo(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,y(o,e)}function X(o){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(o)}function ho(o){return Function.toString.call(o).indexOf("[native code]")!==-1}function xo(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(o,e,r){return xo()?P=Reflect.construct.bind():P=function(t,n,p){var a=[null];a.push.apply(a,n);var s=Function.bind.apply(t,a),l=new s;return p&&y(l,p.prototype),l},P.apply(null,arguments)}function z(o){var e=typeof Map=="function"?new Map:void 0;return z=function(r){if(r===null||!ho(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,t)}function t(){return P(r,arguments,X(this).constructor)}return t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),y(t,r)},z(o)}var uo={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
`};function Co(){for(var o=arguments.length,e=new Array(o),r=0;r<o;r++)e[r]=arguments[r];var t=e[0],n=[],p;for(p=1;p<e.length;p+=1)n.push(e[p]);return n.forEach(function(a){t=t.replace(/%[a-z]/,a)}),t}var i=function(o){fo(e,o);function e(r){for(var t,n=arguments.length,p=new Array(n>1?n-1:0),a=1;a<n;a++)p[a-1]=arguments[a];return t=o.call(this,Co.apply(void 0,[uo[r]].concat(p)))||this,io(t)}return e}(z(Error));function G(o){return Math.round(o*255)}function go(o,e,r){return G(o)+","+G(e)+","+G(r)}function A(o,e,r,t){if(t===void 0&&(t=go),e===0)return t(r,r,r);var n=(o%360+360)%360/60,p=(1-Math.abs(2*r-1))*e,a=p*(1-Math.abs(n%2-1)),s=0,l=0,d=0;n>=0&&n<1?(s=p,l=a):n>=1&&n<2?(s=a,l=p):n>=2&&n<3?(l=p,d=a):n>=3&&n<4?(l=a,d=p):n>=4&&n<5?(s=a,d=p):n>=5&&n<6&&(s=p,d=a);var g=r-p/2,m=s+g,f=l+g,L=d+g;return t(m,f,L)}var K={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function mo(o){if(typeof o!="string")return o;var e=o.toLowerCase();return K[e]?"#"+K[e]:o}var bo=/^#[a-fA-F0-9]{6}$/,yo=/^#[a-fA-F0-9]{8}$/,Ao=/^#[a-fA-F0-9]{3}$/,vo=/^#[a-fA-F0-9]{4}$/,M=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,So=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Fo=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Po=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function k(o){if(typeof o!="string")throw new i(3);var e=mo(o);if(e.match(bo))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(yo)){var r=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:r}}if(e.match(Ao))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(vo)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var n=M.exec(e);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var p=So.exec(e.substring(0,50));if(p)return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+p[4])>1?parseFloat(""+p[4])/100:parseFloat(""+p[4])};var a=Fo.exec(e);if(a){var s=parseInt(""+a[1],10),l=parseInt(""+a[2],10)/100,d=parseInt(""+a[3],10)/100,g="rgb("+A(s,l,d)+")",m=M.exec(g);if(!m)throw new i(4,e,g);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)}}var f=Po.exec(e.substring(0,50));if(f){var L=parseInt(""+f[1],10),so=parseInt(""+f[2],10)/100,lo=parseInt(""+f[3],10)/100,$="rgb("+A(L,so,lo)+")",F=M.exec($);if(!F)throw new i(4,e,$);return{red:parseInt(""+F[1],10),green:parseInt(""+F[2],10),blue:parseInt(""+F[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new i(5)}function Bo(o){var e=o.red/255,r=o.green/255,t=o.blue/255,n=Math.max(e,r,t),p=Math.min(e,r,t),a=(n+p)/2;if(n===p)return o.alpha!==void 0?{hue:0,saturation:0,lightness:a,alpha:o.alpha}:{hue:0,saturation:0,lightness:a};var s,l=n-p,d=a>.5?l/(2-n-p):l/(n+p);switch(n){case e:s=(r-t)/l+(r<t?6:0);break;case r:s=(t-e)/l+2;break;default:s=(e-r)/l+4;break}return s*=60,o.alpha!==void 0?{hue:s,saturation:d,lightness:a,alpha:o.alpha}:{hue:s,saturation:d,lightness:a}}function J(o){return Bo(k(o))}var wo=function(o){return o.length===7&&o[1]===o[2]&&o[3]===o[4]&&o[5]===o[6]?"#"+o[1]+o[3]+o[5]:o},E=wo;function C(o){var e=o.toString(16);return e.length===1?"0"+e:e}function H(o){return C(Math.round(o*255))}function Io(o,e,r){return E("#"+H(o)+H(e)+H(r))}function w(o,e,r){return A(o,e,r,Io)}function ko(o,e,r){if(typeof o=="number"&&typeof e=="number"&&typeof r=="number")return w(o,e,r);if(typeof o=="object"&&e===void 0&&r===void 0)return w(o.hue,o.saturation,o.lightness);throw new i(1)}function Oo(o,e,r,t){if(typeof o=="number"&&typeof e=="number"&&typeof r=="number"&&typeof t=="number")return t>=1?w(o,e,r):"rgba("+A(o,e,r)+","+t+")";if(typeof o=="object"&&e===void 0&&r===void 0&&t===void 0)return o.alpha>=1?w(o.hue,o.saturation,o.lightness):"rgba("+A(o.hue,o.saturation,o.lightness)+","+o.alpha+")";throw new i(2)}function Y(o,e,r){if(typeof o=="number"&&typeof e=="number"&&typeof r=="number")return E("#"+C(o)+C(e)+C(r));if(typeof o=="object"&&e===void 0&&r===void 0)return E("#"+C(o.red)+C(o.green)+C(o.blue));throw new i(6)}function v(o,e,r,t){if(typeof o=="string"&&typeof e=="number"){var n=k(o);return"rgba("+n.red+","+n.green+","+n.blue+","+e+")"}else{if(typeof o=="number"&&typeof e=="number"&&typeof r=="number"&&typeof t=="number")return t>=1?Y(o,e,r):"rgba("+o+","+e+","+r+","+t+")";if(typeof o=="object"&&e===void 0&&r===void 0&&t===void 0)return o.alpha>=1?Y(o.red,o.green,o.blue):"rgba("+o.red+","+o.green+","+o.blue+","+o.alpha+")"}throw new i(7)}var Ro=function(o){return typeof o.red=="number"&&typeof o.green=="number"&&typeof o.blue=="number"&&(typeof o.alpha!="number"||typeof o.alpha>"u")},To=function(o){return typeof o.red=="number"&&typeof o.green=="number"&&typeof o.blue=="number"&&typeof o.alpha=="number"},Lo=function(o){return typeof o.hue=="number"&&typeof o.saturation=="number"&&typeof o.lightness=="number"&&(typeof o.alpha!="number"||typeof o.alpha>"u")},Go=function(o){return typeof o.hue=="number"&&typeof o.saturation=="number"&&typeof o.lightness=="number"&&typeof o.alpha=="number"};function Z(o){if(typeof o!="object")throw new i(8);if(To(o))return v(o);if(Ro(o))return Y(o);if(Go(o))return Oo(o);if(Lo(o))return ko(o);throw new i(8)}function V(o,e,r){return function(){var t=r.concat(Array.prototype.slice.call(arguments));return t.length>=e?o.apply(this,t):V(o,e,t)}}function O(o){return V(o,o.length,[])}function R(o,e,r){return Math.max(o,Math.min(e,r))}function Mo(o,e){if(e==="transparent")return e;var r=J(e);return Z(b({},r,{lightness:R(0,1,r.lightness-parseFloat(o))}))}var Ho=O(Mo),_o=Ho;function jo(o,e){if(e==="transparent")return e;var r=J(e);return Z(b({},r,{lightness:R(0,1,r.lightness+parseFloat(o))}))}var Xo=O(jo),zo=Xo;function Eo(o,e){if(e==="transparent")return e;var r=k(e),t=typeof r.alpha=="number"?r.alpha:1,n=b({},r,{alpha:R(0,1,(t*100+parseFloat(o)*100)/100)});return v(n)}var Ve=O(Eo);function Yo(o,e){if(e==="transparent")return e;var r=k(e),t=typeof r.alpha=="number"?r.alpha:1,n=b({},r,{alpha:R(0,1,+(t*100-parseFloat(o)*100).toFixed(2)/100)});return v(n)}var Do=O(Yo),$o=Do,c={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},U={app:"#F6F9FC",bar:c.lightest,content:c.lightest,gridCellSize:10,hoverable:$o(.93,c.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},I={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},qo={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:U.app,appContentBg:c.lightest,appBorderColor:c.border,appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:c.darkest,textInverseColor:c.lightest,textMutedColor:c.mediumdark,barTextColor:c.mediumdark,barSelectedColor:c.secondary,barBg:c.lightest,buttonBg:U.app,buttonBorder:c.medium,booleanBg:c.mediumlight,booleanSelectedBg:c.lightest,inputBg:c.lightest,inputBorder:c.border,inputTextColor:c.darkest,inputBorderRadius:4},Q=qo,No={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:c.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:c.lightest,inputBorderRadius:4},Wo=No,{window:_}=N;var Ko=o=>typeof o!="string"?(W.warn(`Color passed to theme object should be a string. Instead ${o}(${typeof o}) was passed.`),!1):!0,Uo=o=>!/(gradient|var|calc)/.test(o),Qo=(o,e)=>o==="darken"?v(`${_o(1,e)}`,.95):o==="lighten"?v(`${zo(1,e)}`,.95):e,oo=o=>e=>{if(!Ko(e)||!Uo(e))return e;try{return Qo(o,e)}catch{return e}},or=oo("lighten"),er=oo("darken"),Jo=()=>!_||!_.matchMedia?"light":_.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",B={light:Q,dark:Wo,normal:Q},j=Jo(),D=(o={base:j},e)=>{let r={...B[j],...B[o.base]||{},...o,base:B[o.base]?o.base:j};return{...e,...r,barSelectedColor:o.barSelectedColor||r.colorSecondary}};var T="#1b1d22";var eo="#1b1d22";var ro="#0467dd",to="#ffffff";var S="#ffffff";var no="#1b1d22";var po="#818a95",ao="#bdc4cc";var co=D({base:"light",fontBase:'"Inter", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',fontCode:"Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",brandTitle:"Compound",brandUrl:"https://compound.element.io",brandImage:"/logo.svg",brandTarget:"_self",colorPrimary:T,colorSecondary:no,appBg:S,appContentBg:S,appBorderColor:ao,appBorderRadius:4,textColor:T,textInverseColor:to,barTextColor:T,barSelectedColor:ro,barBg:S,inputBg:S,inputBorder:po,inputTextColor:eo,inputBorderRadius:32});q.setConfig({theme:co,showToolbar:!1,showPanel:!0,enableShortcuts:!0,initialActive:"sidebar"});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.js.map
