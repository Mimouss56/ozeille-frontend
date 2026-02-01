import{A as n}from"./ActionMenu-BMPCKs8p.js";import{P as r}from"./PencilSimple.esm-D68OpQSM.js";import{T as i}from"./Trash.esm-ChTeWMh-.js";import"./iframe-L4-B0XMv.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DzQjEYBT.js";import"./index-DutoEiXV.js";import"./IconBase.esm-Cc7VlbM6.js";const d={title:"UI/ActionMenu",component:n,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:r,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const g=["Default","TextOnly"];export{e as Default,o as TextOnly,g as __namedExportsOrder,d as default};
