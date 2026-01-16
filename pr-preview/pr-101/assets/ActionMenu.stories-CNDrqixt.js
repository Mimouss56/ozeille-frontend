import{j as r}from"./iframe-CC4MoTDO.js";import{A as n,P as a}from"./ActionMenu--CLLsLeG.js";import{T as i}from"./Trash.esm-DGlHS6uH.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.esm-CcXW8JBB.js";const m={title:"UI/ActionMenu",component:n,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:r.jsx(a,{size:16}),onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:r.jsx(i,{size:16}),variant:"danger",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["Default","TextOnly"];export{e as Default,o as TextOnly,u as __namedExportsOrder,m as default};
