import{j as r,r as j}from"./iframe-z1zinKTN.js";import{I as o}from"./InputColor-yfLUxp6s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";const f={title:"UI/InputColor",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{options:["xs","sm","md","lg","xl"],control:"radio",description:"Taille du sélecteur de couleur"},style:{options:["neutral","primary","secondary","accent","success","info","error"],control:"radio",description:"Style DaisyUI du sélecteur"},label:{control:"text",description:"Label du sélecteur de couleur"},value:{control:"color",description:"Valeur de la couleur"},disabled:{control:"boolean",description:"État désactivé"}}},l=e=>{const[s,a]=j.useState(e.value||"#3B82F6");return r.jsx(o,{...e,value:s,onChange:a})},n={render:e=>r.jsx(l,{...e}),args:{id:"default-color",value:"#3B82F6"}},t={render:e=>r.jsx(l,{...e}),args:{id:"labeled-color",label:"Choisir une couleur",value:"#10B981"}},c={render:e=>r.jsx(l,{...e}),args:{id:"xs-color",size:"xs",label:"Extra Small",value:"#EF4444"}},d={render:e=>r.jsx(l,{...e}),args:{id:"sm-color",size:"sm",label:"Small",value:"#F59E0B"}},i={render:e=>r.jsx(l,{...e}),args:{id:"md-color",size:"md",label:"Medium (default)",value:"#8B5CF6"}},u={render:e=>r.jsx(l,{...e}),args:{id:"lg-color",size:"lg",label:"Large",value:"#EC4899"}},m={render:e=>r.jsx(l,{...e}),args:{id:"xl-color",size:"xl",label:"Extra Large",value:"#14B8A6"}},p={render:e=>r.jsx(l,{...e}),args:{id:"random-color",label:"Couleur aléatoire"}},g={render:e=>r.jsx(l,{...e}),args:{id:"primary-color",label:"Style Primary",style:"primary",value:"#570DF8"}},S={render:e=>r.jsx(l,{...e}),args:{id:"secondary-color",label:"Style Secondary",style:"secondary",value:"#F000B8"}},y={render:e=>r.jsx(l,{...e}),args:{id:"accent-color",label:"Style Accent",style:"accent",value:"#37CDBE"}},x={render:e=>r.jsx(l,{...e}),args:{id:"success-color",label:"Style Success",style:"success",value:"#36D399"}},b={render:e=>r.jsx(l,{...e}),args:{id:"error-color",label:"Style Error",style:"error",value:"#F87272"}},C={render:e=>r.jsx(l,{...e}),args:{id:"disabled-color",label:"Désactivé",value:"#3B82F6",disabled:!0}},z=()=>{const[e,s]=j.useState({xs:"#EF4444",sm:"#F59E0B",md:"#10B981",lg:"#3B82F6",xl:"#8B5CF6"});return r.jsxs("div",{className:"flex items-end gap-4",children:[r.jsx(o,{size:"xs",label:"XS",value:e.xs,onChange:a=>s({...e,xs:a})}),r.jsx(o,{size:"sm",label:"SM",value:e.sm,onChange:a=>s({...e,sm:a})}),r.jsx(o,{size:"md",label:"MD",value:e.md,onChange:a=>s({...e,md:a})}),r.jsx(o,{size:"lg",label:"LG",value:e.lg,onChange:a=>s({...e,lg:a})}),r.jsx(o,{size:"xl",label:"XL",value:e.xl,onChange:a=>s({...e,xl:a})})]})},v={render:()=>r.jsx(z,{})},B=()=>{const[e,s]=j.useState({neutral:"#A6ADBB",primary:"#570DF8",secondary:"#F000B8",accent:"#37CDBE",success:"#36D399",info:"#3ABFF8",error:"#F87272"});return r.jsxs("div",{className:"flex flex-wrap items-end gap-4",children:[r.jsx(o,{label:"Neutral",style:"neutral",value:e.neutral,onChange:a=>s({...e,neutral:a})}),r.jsx(o,{label:"Primary",style:"primary",value:e.primary,onChange:a=>s({...e,primary:a})}),r.jsx(o,{label:"Secondary",style:"secondary",value:e.secondary,onChange:a=>s({...e,secondary:a})}),r.jsx(o,{label:"Accent",style:"accent",value:e.accent,onChange:a=>s({...e,accent:a})}),r.jsx(o,{label:"Success",style:"success",value:e.success,onChange:a=>s({...e,success:a})}),r.jsx(o,{label:"Info",style:"info",value:e.info,onChange:a=>s({...e,info:a})}),r.jsx(o,{label:"Error",style:"error",value:e.error,onChange:a=>s({...e,error:a})})]})},h={render:()=>r.jsx(B,{})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "default-color",
    value: "#3B82F6"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "labeled-color",
    label: "Choisir une couleur",
    value: "#10B981"
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "xs-color",
    size: "xs",
    label: "Extra Small",
    value: "#EF4444"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "sm-color",
    size: "sm",
    label: "Small",
    value: "#F59E0B"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "md-color",
    size: "md",
    label: "Medium (default)",
    value: "#8B5CF6"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "lg-color",
    size: "lg",
    label: "Large",
    value: "#EC4899"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "xl-color",
    size: "xl",
    label: "Extra Large",
    value: "#14B8A6"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "random-color",
    label: "Couleur aléatoire"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "primary-color",
    label: "Style Primary",
    style: "primary",
    value: "#570DF8"
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "secondary-color",
    label: "Style Secondary",
    style: "secondary",
    value: "#F000B8"
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "accent-color",
    label: "Style Accent",
    style: "accent",
    value: "#37CDBE"
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "success-color",
    label: "Style Success",
    style: "success",
    value: "#36D399"
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "error-color",
    label: "Style Error",
    style: "error",
    value: "#F87272"
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <InputColorWithState {...args} />,
  args: {
    id: "disabled-color",
    label: "Désactivé",
    value: "#3B82F6",
    disabled: true
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AllSizesComponent />
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AllStylesComponent />
}`,...h.parameters?.docs?.source}}};const A=["Default","WithLabel","SizeXS","SizeSM","SizeMD","SizeLG","SizeXL","RandomColor","StylePrimary","StyleSecondary","StyleAccent","StyleSuccess","StyleError","Disabled","AllSizes","AllStyles"];export{v as AllSizes,h as AllStyles,n as Default,C as Disabled,p as RandomColor,u as SizeLG,i as SizeMD,d as SizeSM,m as SizeXL,c as SizeXS,y as StyleAccent,b as StyleError,g as StylePrimary,S as StyleSecondary,x as StyleSuccess,t as WithLabel,A as __namedExportsOrder,f as default};
