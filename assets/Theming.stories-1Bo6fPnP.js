import{M as c}from"./chunk-HLWAVYOI-QEWNdWnJ.js";import{j as o,a as r,F as i}from"./jsx-runtime-5BUNAZ9W.js";import{useMDXComponents as a}from"./index-_VGcpBFS.js";import"./iframe-fpZiA0nY.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./react-18-0wh8ubQX.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function s(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",pre:"pre"},a(),n.components);return r(i,{children:[o(c,{title:"Develop/Theming"}),`
`,o(e.h1,{id:"theming",children:"Theming"}),`
`,o(e.p,{children:"The default set of design tokens provided by Compound contains some choices specific to Element's brand, which our users and customers may want to change to meet their needs. For this reason we allow Compound to be themed with custom sets of semantic tokens."}),`
`,o(e.h2,{id:"web",children:"Web"}),`
`,r(e.p,{children:["On Web, you can override any semantic token by redefining that token in the ",o(e.code,{children:"custom"})," ",o(e.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers",target:"_blank",rel:"nofollow noopener noreferrer",children:"cascade layer"})," provided by the ",o(e.a,{href:"https://github.com/vector-im/compound-design-tokens/tree/develop/assets/web",target:"_blank",rel:"nofollow noopener noreferrer",children:"design tokens package"}),". This example demonstrates how you would change the ",o(e.code,{children:"color.icon.accent-tertiary"})," token to blue, rather than Element's default green:"]}),`
`,o(e.pre,{children:o(e.code,{className:"language-css",children:`@import "@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css" layer(compound);

@layer compound.custom {
  :root, [class*="cpd-theme-"] {
    --cpd-color-icon-accent-tertiary: var(--cpd-color-blue-800);
  }
}
`})}),`
`,o(e.p,{children:"As long as you use the provided layer, this ensures that future internal changes to the package will not cause conflicts in selector specificity."})]})}function d(n={}){const{wrapper:e}=Object.assign({},a(),n.components);return e?o(e,{...n,children:o(s,{...n})}):s(n)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const t={title:"Develop/Theming",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const v=["__page"];export{v as __namedExportsOrder,l as __page,t as default};
