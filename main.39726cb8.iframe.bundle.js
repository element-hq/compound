(self.webpackChunk_vector_im_compound=self.webpackChunk_vector_im_compound||[]).push([[179],{"./.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./public/global.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(global.Z,options);global.Z&&global.Z.locals&&global.Z.locals;const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{method:"alphabetical",order:["Overview","Foundations","Design","Develop","Styles","Components","*"],locales:"en-US"}}},__namedExportsOrder=["parameters"]},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");const external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,pipeline=x=>x(),importers=[async path=>{if(!/^\.[\\/](?:stories\/Overview\.stories\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories\\/Overview\\.stories\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const{SERVER_CHANNEL_URL}=dist.global,channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),SERVER_CHANNEL_URL){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({url:SERVER_CHANNEL_URL});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await pipeline((()=>importers[i](path)));if(moduleExports)return moduleExports}},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.js")])})},"./node_modules/css-loader/dist/cjs.js!./public/fonts.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./public/fonts/Inter/Inter-Regular.woff2"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./public/fonts/Inter/Inter-Medium.woff2"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./public/fonts/Inter/Inter-SemiBold.woff2"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./public/fonts/Inter/Inter-Bold.woff2"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);___CSS_LOADER_EXPORT___.push([module.id,'@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("woff2");\n}\n\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  unicode-range: $inter-unicode-range;\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("woff2");\n}\n\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  unicode-range: $inter-unicode-range;\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("woff2");\n}\n\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  unicode-range: $inter-unicode-range;\n  src: url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("woff2");\n}\n',"",{version:3,sources:["webpack://./public/fonts.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,4DAA6D;AAC/D;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,mCAAmC;EACnC,4DAA4D;AAC9D;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,mCAAmC;EACnC,4DAA8D;AAChE;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,mCAAmC;EACnC,4DAA0D;AAC5D",sourcesContent:['@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url("./fonts/Inter/Inter-Regular.woff2") format("woff2");\n}\n\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  unicode-range: $inter-unicode-range;\n  src: url("./fonts/Inter/Inter-Medium.woff2") format("woff2");\n}\n\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  unicode-range: $inter-unicode-range;\n  src: url("./fonts/Inter/Inter-SemiBold.woff2") format("woff2");\n}\n\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  unicode-range: $inter-unicode-range;\n  src: url("./fonts/Inter/Inter-Bold.woff2") format("woff2");\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./public/global.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./public/fonts.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_2__.Z),___CSS_LOADER_EXPORT___.push([module.id,'body {\n  font: var(--cpd-font-body-md-regular);\n}\n\nh1 {\n  font: var(--cpd-font-heading-xl-regular)\n}\n\nh2 {\n  font: var(--cpd-font-heading-lg-regular)\n}\n\nh3 {\n  font: var(--cpd-font-heading-md-regular)\n}\n\nh4 {\n  font: var(--cpd-font-heading-sm-regular)\n}\n\n.cpdSpacePreview {\n  height: 1rem;\n  margin: 0 .5rem;\n  position: relative;\n  background: var(--cpd-color-gray-600);\n}\n\n.cpdSpacePreview::after, \n.cpdSpacePreview::before {\n  content: "";\n  width: .5rem;\n  aspect-ratio: 1 / 1;\n  top: .25rem;\n  position: absolute;\n  border-radius: 50%;\n  background: var(--cpd-color-gray-1400);\n}\n\n.cpdSpacePreview::before {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.cpdSpacePreview::after {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.cpdColorScale {\n  display: flex;\n}\n\n.cpdColorPreview {\n  flex: 1;\n  aspect-ratio: 1 / 1;\n}\n\n.cpdColorPreview::after {\n  content: attr(data-scale);\n  mix-blend-mode: difference;\n  filter: invert(1); \n}\n',"",{version:3,sources:["webpack://./public/global.css"],names:[],mappings:"AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,OAAO;EACP,4BAA4B;AAC9B;;AAEA;EACE,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,iBAAiB;AACnB",sourcesContent:['@import url("./fonts.css");\n\nbody {\n  font: var(--cpd-font-body-md-regular);\n}\n\nh1 {\n  font: var(--cpd-font-heading-xl-regular)\n}\n\nh2 {\n  font: var(--cpd-font-heading-lg-regular)\n}\n\nh3 {\n  font: var(--cpd-font-heading-md-regular)\n}\n\nh4 {\n  font: var(--cpd-font-heading-sm-regular)\n}\n\n.cpdSpacePreview {\n  height: 1rem;\n  margin: 0 .5rem;\n  position: relative;\n  background: var(--cpd-color-gray-600);\n}\n\n.cpdSpacePreview::after, \n.cpdSpacePreview::before {\n  content: "";\n  width: .5rem;\n  aspect-ratio: 1 / 1;\n  top: .25rem;\n  position: absolute;\n  border-radius: 50%;\n  background: var(--cpd-color-gray-1400);\n}\n\n.cpdSpacePreview::before {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.cpdSpacePreview::after {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.cpdColorScale {\n  display: flex;\n}\n\n.cpdColorPreview {\n  flex: 1;\n  aspect-ratio: 1 / 1;\n}\n\n.cpdColorPreview::after {\n  content: attr(data-scale);\n  mix-blend-mode: difference;\n  filter: invert(1); \n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Overview.stories.mdx":["./stories/Overview.stories.mdx",48,252],"./components-page/components-overview.stories.mdx":["./stories/components-page/components-overview.stories.mdx",48,182],"./design/get-started.stories.mdx":["./stories/design/get-started.stories.mdx",48,293],"./design/styles.stories.mdx":["./stories/design/styles.stories.mdx",48,323],"./design/typography.stories.mdx":["./stories/design/typography.stories.mdx",48,831],"./develop/get-started.stories.mdx":["./stories/develop/get-started.stories.mdx",48,949],"./develop/release.stories.mdx":["./stories/develop/release.stories.mdx",48,432],"./foundations/Accessibility.stories.mdx":["./stories/foundations/Accessibility.stories.mdx",48,548],"./foundations/DesignTokens.stories.mdx":["./stories/foundations/DesignTokens.stories.mdx",48,260],"./foundations/Overview.stories copy.mdx":["./stories/foundations/Overview.stories copy.mdx",48,355]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Styles.stories":["./stories/Styles.stories.jsx",284],"./Styles.stories.jsx":["./stories/Styles.stories.jsx",284]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories\\/Overview\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Overview.stories.mdx":["./stories/Overview.stories.mdx",48,252]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories\\/Overview\\.stories\\.mdx)$",module.exports=webpackAsyncContext},"./public/fonts/Inter/Inter-Bold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Inter-Bold.a808c21a.woff2"},"./public/fonts/Inter/Inter-Medium.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Inter-Medium.ba68c34a.woff2"},"./public/fonts/Inter/Inter-Regular.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Inter-Regular.6cc68d6b.woff2"},"./public/fonts/Inter/Inter-SemiBold.woff2":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/Inter-SemiBold.625474d6.woff2"},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[526],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);