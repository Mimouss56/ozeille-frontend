import{A as n}from"./ActionMenu-Ht8ERgJh.js";import{P as r}from"./PencilSimple.esm-DaF4sbcS.js";import{T as i}from"./Trash.esm-BhrD8fQG.js";import"./iframe-CBMYiFd3.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-ChLwX0Za.js";import"./index-DutoEiXV.js";import"./IconBase.esm-CXr0b4pN.js";const d={title:"UI/ActionMenu",component:n,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{actions:[{label:"Modifier",icon:r,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:i,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},o={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
