import{o as n}from"./PencilSimple.es-BI2rfaRK.js";import{r}from"./Trash.es-CM-Z7r3G.js";import{A as i}from"./ActionMenu-BNrfBUVk.js";import"./iframe-BmZRhGrP.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-CAJ_zsLT.js";import"./Button-BPwa9fpv.js";import"./index-DutoEiXV.js";const d={title:"UI/ActionMenu",component:i,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{actions:[{label:"Modifier",icon:n,style:"ghostOutline",onClick:()=>console.log("Modifier")},{label:"Supprimer",icon:r,style:"dangerOutline",onClick:()=>console.log("Supprimer")}]}},e={args:{actions:[{label:"Modifier",onClick:()=>{}},{label:"Supprimer",onClick:()=>{}}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
