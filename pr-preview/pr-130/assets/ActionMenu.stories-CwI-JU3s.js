import{A as r}from"./ActionMenu-3zeo-NOR.js";import{P as n}from"./PencilSimple.esm-BISheVqs.js";import{T as i}from"./Trash.esm-BClHY7sc.js";import"./iframe-DLZJdIbH.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-ay_MKWjY.js";import"./Button-C5f43CoG.js";import"./index-DutoEiXV.js";import"./IconBase.esm-BWwSYT5q.js";const g={title:"UI/ActionMenu",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:n,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
