import{I as n}from"./InputField-CNKcCder.js";import"./iframe-BcF0cQhe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./Label-B0z7iHAj.js";import"./StatusMessage-D2t3dF8I.js";const u={title:"UI/InputField",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{label:"Storybook input label",placeholder:"Label placeholder"},argTypes:{size:{options:["xs","sm","md","lg","xl"],control:"radio"},style:{options:["primary","secondary","neutral","accent","info","error","success"],control:"radio"},disabled:{control:"boolean"},type:{options:["text","date","password","number","email"],control:"radio"}}},e={args:{id:"default-stories",name:"default-stories",helperText:"Description text"}},r={args:{id:"no-help-stories",name:"no-help-stories"}},s={args:{id:"error-stories",name:"error-stories",label:"Error label",helperText:"This is an error message",style:"error"}},a={args:{id:"date-stories",name:"date-stories",label:"Date input label",type:"date"}},o={args:{id:"password-stories",name:"password-stories",label:"Password input label",type:"password"}},t={args:{id:"number-stories",name:"number-stories",label:"Number input label",type:"number"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: "default-stories",
    name: "default-stories",
    helperText: "Description text"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: "no-help-stories",
    name: "no-help-stories"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "error-stories",
    name: "error-stories",
    label: "Error label",
    helperText: "This is an error message",
    style: "error"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-stories",
    name: "date-stories",
    label: "Date input label",
    type: "date"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "password-stories",
    name: "password-stories",
    label: "Password input label",
    type: "password"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: "number-stories",
    name: "number-stories",
    label: "Number input label",
    type: "number"
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","WithoutHelp","WithError","DateInput","PasswordInput","NumberInput"];export{a as DateInput,e as Default,t as NumberInput,o as PasswordInput,s as WithError,r as WithoutHelp,b as __namedExportsOrder,u as default};
