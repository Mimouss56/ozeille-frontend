import{j as n}from"./iframe-CWRzx_pz.js";import{A as r,P as a,T as i}from"./ActionMenu-BhBR47ts.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.esm-Df2T4d-K.js";const p={title:"UI/ActionMenu",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:n.jsx(a,{size:16}),onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:n.jsx(i,{size:16}),variant:"danger",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: "Modifier",
      icon: <PencilSimple size={16} />,
      onClick: () => console.log("Modifier")
    }, {
      label: "Supprimer",
      icon: <Trash size={16} />,
      variant: "danger",
      onClick: () => console.log("Supprimer")
    }]
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: "Modifier",
      onClick: () => {}
    }, {
      label: "Supprimer",
      onClick: () => {}
    }]
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","TextOnly"];export{e as Default,o as TextOnly,m as __namedExportsOrder,p as default};
