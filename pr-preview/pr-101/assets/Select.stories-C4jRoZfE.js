import{S as a}from"./Select-BbG3eDEK.js";import"./iframe-CC4MoTDO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./Label-BSid9uNS.js";import"./StatusMessage-DsIrsDsT.js";const p={title:"UI/Select",component:a,tags:["autodocs"],parameters:{layout:"centered"},args:{disabled:!1,label:"Frequency",placeholder:"Select an option",options:[{label:"Hebdomadaire",value:"weekly"},{label:"Mensuel",value:"monthly"},{label:"Annuel",value:"yearly"}]},argTypes:{size:{control:"radio",options:["xs","sm","md","lg","xl"],description:"Taille de l'input"},style:{control:"select",options:["primary","secondary","neutral","accent","info","success","warning","error"],description:"Couleur/État de l'input"},disabled:{control:"boolean"},helperText:{control:"text"},label:{control:"text"}}},e={},r={args:{id:"storybook-category",label:"Category",helperText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",options:[{label:"admin",value:"error"}]}},o={args:{id:"storybook-category",label:"Category",style:"error",helperText:"Please select a valid category",options:[{label:"admin",value:"error"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: "storybook-category",
    label: "Category",
    helperText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    options: [{
      label: "admin",
      value: "error"
    }]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "storybook-category",
    label: "Category",
    style: "error",
    helperText: "Please select a valid category",
    options: [{
      label: "admin",
      value: "error"
    }]
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","WithHelp","WithError"];export{e as Default,o as WithError,r as WithHelp,d as __namedExportsOrder,p as default};
