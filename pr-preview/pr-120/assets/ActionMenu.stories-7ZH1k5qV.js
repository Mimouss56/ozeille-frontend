import{A as n,P as r}from"./ActionMenu-DggSgBoA.js";import{T as i}from"./Trash.esm-BC5dyOwN.js";import"./iframe-CHyB9diF.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.esm-OdkY7OTG.js";import"./Button-BmVsP7cq.js";import"./index-DutoEiXV.js";const u={title:"UI/ActionMenu",component:n,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:r,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const d=["Default","TextOnly"];export{e as Default,o as TextOnly,d as __namedExportsOrder,u as default};
