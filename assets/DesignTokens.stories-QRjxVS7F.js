import{M as l}from"./chunk-HLWAVYOI-QEWNdWnJ.js";import{j as n,a as i,F as t}from"./jsx-runtime-5BUNAZ9W.js";import{useMDXComponents as d}from"./index-_VGcpBFS.js";import"./iframe-fpZiA0nY.js";import"../sb-preview/runtime.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./react-18-0wh8ubQX.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";function c(r){const e=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",a:"a"},d(),r.components);return i(t,{children:[n(l,{title:"Foundations/Design Tokens"}),`
`,n(e.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,i(e.p,{children:["🛠 ",n(e.strong,{children:"Work in Progress"})," — Please note we're iterating and refining the conventions stated here as we work on authoring our design system tokens and components. Breaking changes may be introduced during this initial stage."]}),`
`,n(e.h2,{id:"token-tiers",children:"Token tiers"}),`
`,n(e.p,{children:"Our design tokens are conceptually organized into three tiers — base, semantic, and component tokens. The top tier is global and unaware of the intended context of use, while subsequent tiers are aware of context and increasingly more precise about it."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.strong,{children:"Base tokens"})," — Unaware of the intended context of use."]}),`
`,i(e.li,{children:[n(e.strong,{children:"Semantic tokens"})," — Aware of context and shared across components."]}),`
`,i(e.li,{children:[n(e.strong,{children:"Component tokens"})," — Aware of context but specific to one component."]}),`
`]}),`
`,n(e.p,{children:"With this token architecture, we can update design decisions globally or target changes to a single component."}),`
`,n(e.h3,{id:"base",children:"Base"}),`
`,n(e.p,{children:"Base tokens enumerate the available values in the system, without providing specific directions on how or where to use them. Used for global, literal values."}),`
`,i(e.p,{children:["Example: ",n(e.code,{children:"cpd.color.blue.800"}),", which holds the value ",n(e.code,{children:"#004ce6"}),"."]}),`
`,n(e.h3,{id:"semantic",children:"Semantic"}),`
`,n(e.p,{children:"Semantic tokens describe the purpose of tokens in specific contexts. They are aliases to base tokens that add meaning about the different possible use cases for base tokens, by describing where or how they are used. This way we can target each use case indepedently."}),`
`,i(e.p,{children:["Example: ",n(e.code,{children:"cpd.color.bg.primary"}),", which points to ",n(e.code,{children:"cpd.color.blue.800"}),"."]}),`
`,n(e.h3,{id:"component",children:"Component"}),`
`,n(e.p,{children:"Component tokens describe the purpose of tokens in a particular component. They are aliases for mapping tokens to component-specific contexts."}),`
`,i(e.p,{children:["Example: ",n(e.code,{children:"cpd.button.color.bg.primary"}),", which points to ",n(e.code,{children:"cpd.color.bg.primary"}),"."]}),`
`,n(e.h2,{id:"token-taxonomy",children:"Token taxonomy"}),`
`,n(e.h3,{id:"namespace",children:"Namespace"}),`
`,i(e.p,{children:["All tokens start with the namespace for the design system, ",n(e.code,{children:"cpd"}),"."]}),`
`,n(e.h3,{id:"object",children:"Object"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Group — For targeting the same property across multiple components.",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"forms"})," for defining the border color for input controls (text input, select, checkbox, radio input…)."]}),`
`,i(e.li,{children:[n(e.code,{children:"controls"})," for controls you interact with like form fields and navigation."]}),`
`,i(e.li,{children:[n(e.code,{children:"actions"})," for targeting both buttons and links."]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Component",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"button"}),", ",n(e.code,{children:"input"}),", ",n(e.code,{children:"checkbox"}),", ",n(e.code,{children:"tooltip"}),", ",n(e.code,{children:"modal"}),"…"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Element — For targeting elements within a component, similar to ",n(e.a,{href:"https://getbem.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"BEM"}),".",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"icon"})," within a ",n(e.code,{children:"button"})," component."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"base-1",children:"Base"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Category",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"color"}),", ",n(e.code,{children:"font"}),", ",n(e.code,{children:"border"}),", ",n(e.code,{children:"space"}),", ",n(e.code,{children:"size"}),", ",n(e.code,{children:"shadow"}),", ",n(e.code,{children:"elevation"}),", ",n(e.code,{children:"opacity"}),", ",n(e.code,{children:"breakpoint"}),", ",n(e.code,{children:"touch"}),", ",n(e.code,{children:"time"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Property",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"bg"}),", ",n(e.code,{children:"text"}),", ",n(e.code,{children:"border"}),", and ",n(e.code,{children:"icon"})," for ",n(e.code,{children:"color"})," category"]}),`
`,i(e.li,{children:[n(e.code,{children:"family"}),", ",n(e.code,{children:"size"}),", ",n(e.code,{children:"weight"}),", ",n(e.code,{children:"line-height"}),", and ",n(e.code,{children:"letter-spacing"})," for ",n(e.code,{children:"font"})," category"]}),`
`,i(e.li,{children:[n(e.code,{children:"width"}),", ",n(e.code,{children:"style"}),", ",n(e.code,{children:"radius"})," for ",n(e.code,{children:"border"})," category"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Concept and sub-concepts",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"feedback"}),", ",n(e.code,{children:"action"}),", and ",n(e.code,{children:"surface"})," for ",n(e.code,{children:"color"})," category"]}),`
`,i(e.li,{children:[n(e.code,{children:"display"}),", ",n(e.code,{children:"heading"})," and ",n(e.code,{children:"body"})," for ",n(e.code,{children:"font"})," category"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"modifier",children:"Modifier"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Variant — Distinguishes alternative use cases.",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Intent",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"info"}),", ",n(e.code,{children:"success"}),", ",n(e.code,{children:"warning"}),", and ",n(e.code,{children:"critical"})," for ",n(e.code,{children:"feedback"})," concept"]}),`
`,i(e.li,{children:[n(e.code,{children:"conversion"}),", ",n(e.code,{children:"positive"}),", ",n(e.code,{children:"negative"}),", and ",n(e.code,{children:"neutral"})," for ",n(e.code,{children:"action"})," concept"]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Emphasis — Prominence",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"primary"}),", ",n(e.code,{children:"secondary"}),", and ",n(e.code,{children:"tertiary"})," for ",n(e.code,{children:"action"})," concept"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.li,{children:["State — Properties based on interactive states.",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"default"}),", ",n(e.code,{children:"hovered"}),", ",n(e.code,{children:"active"}),"/",n(e.code,{children:"pressed"}),", ",n(e.code,{children:"focused"}),", ",n(e.code,{children:"selected"}),", ",n(e.code,{children:"visited"}),", ",n(e.code,{children:"disabled"}),",  ",n(e.code,{children:"error"})]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Scale — Choices within a predefined set of values, like varying size, space, shade, and other options.",`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Ordinal: t-shirt sizes (",n(e.code,{children:"xxs"}),", ",n(e.code,{children:"xs"}),", ",n(e.code,{children:"sm"}),", ",n(e.code,{children:"md"}),", ",n(e.code,{children:"lg"}),", ",n(e.code,{children:"xl"}),", ",n(e.code,{children:"xxl"}),"…)."]}),`
`,i(e.li,{children:["Sequential/stepped/numerical: base 100 (",n(e.code,{children:"100"}),", ",n(e.code,{children:"200"}),", ",n(e.code,{children:"300"}),"…), base 1/index (",n(e.code,{children:"0_5"}),", ",n(e.code,{children:"1"}),", ",n(e.code,{children:"2"}),", ",n(e.code,{children:"4"}),"…)"]}),`
`,i(e.li,{children:["Proportional: ",n(e.code,{children:"-1x"}),", ",n(e.code,{children:"0_5x"}),", ",n(e.code,{children:"1x"}),", ",n(e.code,{children:"2x"}),"…"]}),`
`,i(e.li,{children:["Keyword/Named:",`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.code,{children:"circle"})}),`
`,i(e.li,{children:[n(e.code,{children:"regular"}),", ",n(e.code,{children:"tight"}),", ",n(e.code,{children:"loose"})]}),`
`,i(e.li,{children:[n(e.code,{children:"regular"}),", ",n(e.code,{children:"medium"}),", ",n(e.code,{children:"semi-bold"}),", ",n(e.code,{children:"bold"})]}),`
`,i(e.li,{children:[n(e.code,{children:"sans"}),", ",n(e.code,{children:"serif"}),", ",n(e.code,{children:"mono"})]}),`
`,n(e.li,{children:n(e.code,{children:"minimum"})}),`
`,i(e.li,{children:[n(e.code,{children:"ease-in"}),", ",n(e.code,{children:"ease-out"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,i(e.li,{children:["Mode — Distinguish values across two or more surface/background settings on which elements appear. Use only when there’s a distinction (e.g., color and shadow for dark theme).",`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:"on-light"}),", ",n(e.code,{children:"on-dark"}),", ",n(e.code,{children:"on-light-hc"}),", ",n(e.code,{children:"on-dark-hc"}),", or any colored surface like ",n(e.code,{children:"invert"}),", ",n(e.code,{children:"on-accent"}),", ",n(e.code,{children:"on-primary"}),", ",n(e.code,{children:"on-secondary"}),", ",n(e.code,{children:"on-surface"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"other-naming-rules",children:"Other naming rules"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["For compound words, use hyphens to separate the words: ",n(e.code,{children:"line-height"}),", ",n(e.code,{children:"on-primary"}),", ",n(e.code,{children:"on-dark-hc"})]}),`
`,i(e.li,{children:["For decimal values, replace the decimal point with an underscore: ",n(e.code,{children:"0_5"})," for 0.5."]}),`
`,i(e.li,{children:["For negative values, use a hyphen: ",n(e.code,{children:"-1"}),"."]}),`
`,n(e.li,{children:"“Avoid dogmatically including all levels possible or duplicating token-tuples redundantly. Instead, include only the levels needed to sufficiently describe and distinguish purposeful intent.”"}),`
`]}),`
`,i(e.p,{children:["Refer to ",n(e.a,{href:"https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676",target:"_blank",rel:"nofollow noopener noreferrer",children:"Naming Tokens in Design Systems"})," by Nathan Curtis for further examples, while observing the following exceptions:"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"“Property” group comes before “Concept and Sub-concept”."}),`
`]}),`
`,n(e.h2,{id:"resources",children:"Resources"}),`
`,n(e.p,{children:n(e.strong,{children:"Design tokens taxonomy"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.a,{href:"https://m3.material.io/foundations/design-tokens/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material Design 3 Design Tokens"}),", by Google."]}),`
`,i(e.li,{children:[n(e.a,{href:"https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676",target:"_blank",rel:"nofollow noopener noreferrer",children:"Naming Tokens in Design Systems"}),", by Nathan Curtis."]}),`
`,i(e.li,{children:[n(e.a,{href:"https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/",target:"_blank",rel:"nofollow noopener noreferrer",children:"The many faces of themeable design systems"}),", by Brad Frost. Managing the different flavors of themeability including brands, sub-brands, white-labeling, themes, and more."]}),`
`,i(e.li,{children:[n(e.a,{href:"https://uxdesign.cc/naming-design-tokens-9454818ed7cb",target:"_blank",rel:"nofollow noopener noreferrer",children:"Naming design tokens"}),", by Lukas Opperman."]}),`
`,i(e.li,{children:[n(e.a,{href:"https://www.gerireid.com/design-token-taxonomy.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"A design token taxonomy for Checkout.com"}),", by Geri Reid."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Standards"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.a,{href:"https://design-tokens.github.io/community-group/format/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Design Tokens Format Module"})," — Design Tokens specification draft by the W3C Design Tokens Community Group."]}),`
`]})]})}function h(r={}){const{wrapper:e}=Object.assign({},d(),r.components);return e?n(e,{...r,children:n(c,{...r})}):c(r)}const s=()=>{throw new Error("Docs-only story")};s.parameters={docsOnly:!0};const o={title:"Foundations/Design Tokens",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:h};const v=["__page"];export{v as __namedExportsOrder,s as __page,o as default};
