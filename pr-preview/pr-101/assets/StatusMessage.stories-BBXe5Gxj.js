import{S as o}from"./StatusMessage-D9CLsQvp.js";import"./iframe-D4dKLG7A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";const u={title:"Ui/StatusMessage",component:o,tags:["autodocs"],argTypes:{style:{control:{type:"select"},options:["neutral","success","error"],description:"Style du message indiquant le type de statut."},layout:{control:{type:"radio"},options:["box","text"],description:"Box: pour les messages globaux. Text: pour les helpers d'input."},size:{control:{type:"select"},options:["xs","sm","md"]},children:{control:"text"}},args:{layout:"box",size:"sm",style:"neutral"}},e={args:{style:"neutral",children:"Text"}},r={args:{style:"success",children:"Succès !"}},s={args:{style:"error",children:"Erreur !"}},t={args:{layout:"text",style:"error",size:"xs",children:"Ce champ est requis."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    style: "neutral",
    children: "Text"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: "success",
    children: "Succès !"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    style: "error",
    children: "Erreur !"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "text",
    style: "error",
    size: "xs",
    children: "Ce champ est requis."
  }
}`,...t.parameters?.docs?.source}}};const p=["NeutralBox","SuccessBox","ErrorBox","InputHelperText"];export{s as ErrorBox,t as InputHelperText,e as NeutralBox,r as SuccessBox,p as __namedExportsOrder,u as default};
