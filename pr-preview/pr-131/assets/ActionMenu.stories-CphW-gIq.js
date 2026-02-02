import{A as r}from"./ActionMenu-C8ZFvGo4.js";import{P as n}from"./PencilSimple.esm-BqCYKDoM.js";import{T as i}from"./Trash.esm-MZ-Y2w0P.js";import"./iframe-D7WNPKQg.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-j1QXcov-.js";import"./Button-Dd4H-zsL.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CvIpsvC_.js";const g={title:"UI/ActionMenu",component:r,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:n,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
