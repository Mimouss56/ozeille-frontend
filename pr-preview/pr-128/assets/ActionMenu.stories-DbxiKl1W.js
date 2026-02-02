import{A as r}from"./ActionMenu-hz-WEW9y.js";import{P as n}from"./PencilSimple.esm-C9EkOesh.js";import{T as i}from"./Trash.esm-D-24fQi2.js";import"./iframe-hWm-9iEN.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-DK-WNKJE.js";import"./Button-CuoqHWCZ.js";import"./index-DutoEiXV.js";import"./IconBase.esm-B35wePIA.js";const g={title:"UI/ActionMenu",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:n,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: "Modifier",
      icon: PencilSimple,
      style: "ghostOutline",
      onClick: () => console.log("Modifier")
    }, {
      label: "Supprimer",
      icon: Trash,
      style: "dangerOutline",
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
}`,...o.parameters?.docs?.source}}};const f=["Default","TextOnly"];export{e as Default,o as TextOnly,f as __namedExportsOrder,g as default};
