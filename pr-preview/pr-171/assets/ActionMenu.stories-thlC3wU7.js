import{o as n}from"./PencilSimple.es-BdTk-J2z.js";import{r}from"./Trash.es-C8NWUIZ_.js";import{A as i}from"./ActionMenu-ClCedOAT.js";import"./iframe-gen-gUuQ.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-DeIG7MW9.js";import"./Button-CtVpV_9t.js";import"./index-DutoEiXV.js";const d={title:"UI/ActionMenu",component:i,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{actions:[{label:"Modifier",icon:n,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:r,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},e={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: "Modifier",
      icon: PencilSimpleIcon,
      style: "ghostOutline",
      onClick: () => console.log("Modifier")
    }, {
      label: "Supprimer",
      icon: TrashIcon,
      style: "dangerOutline",
      onClick: () => console.log("Supprimer")
    }]
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: "Modifier",
      onClick: () => {}
    }, {
      label: "Supprimer",
      onClick: () => {}
    }]
  }
}`,...e.parameters?.docs?.source}}};const g=["Default","TextOnly"];export{o as Default,e as TextOnly,g as __namedExportsOrder,d as default};
