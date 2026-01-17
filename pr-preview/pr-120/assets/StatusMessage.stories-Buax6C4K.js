import{S as a}from"./StatusMessage-Brq5kWbo.js";import"./iframe-CHyB9diF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";const p={title:"Ui/StatusMessage",component:a,tags:["autodocs"],argTypes:{status:{control:{type:"select"},options:["neutral","success","error"],description:"Style du message indiquant le type de statut."},layout:{control:{type:"radio"},options:["box","text"],description:"Box: pour les messages globaux. Text: pour les helpers d'input."},children:{control:"text"}},args:{layout:"box",status:"neutral"}},r={args:{status:"neutral",children:"Text"}},e={args:{status:"success",children:"Succès !"}},s={args:{status:"error",children:"Erreur !"}},t={args:{layout:"text",status:"error",children:"Ce champ est requis."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: "neutral",
    children: "Text"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success",
    children: "Succès !"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error",
    children: "Erreur !"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "text",
    status: "error",
    children: "Ce champ est requis."
  }
}`,...t.parameters?.docs?.source}}};const l=["NeutralBox","SuccessBox","ErrorBox","InputHelperText"];export{s as ErrorBox,t as InputHelperText,r as NeutralBox,e as SuccessBox,l as __namedExportsOrder,p as default};
