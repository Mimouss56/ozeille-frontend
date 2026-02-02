import{A as n}from"./ActionMenu-DroWhcy7.js";import{P as r}from"./PencilSimple.esm-DRa3Bfo_.js";import{T as i}from"./Trash.esm-DJWAWi30.js";import"./iframe-C8VuXJBs.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CBQ8U3WU.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CEymyIz8.js";const d={title:"UI/ActionMenu",component:n,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:r,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
