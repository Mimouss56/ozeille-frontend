import{e as N,a as V}from"./Sun.es-B1vtqLJj.js";import{j as e}from"./iframe-DqSXt728.js";import{c as L}from"./index-DutoEiXV.js";import{L as B}from"./Label-Dn7WxTHt.js";import{S as R}from"./StatusMessage-CohKGwe6.js";import"./IconBase.es-B9QtdQtA.js";import"./preload-helper-PPVm8Dsz.js";const U=L(["checkbox"],{variants:{size:{xs:["checkbox-xs"],sm:["checkbox-sm"],md:["checkbox-md"],lg:["checkbox-lg"],xl:["checkbox-xl"]},style:{primary:["checkbox-primary"],secondary:["checkbox-secondary"],accent:["checkbox-accent"],neutral:["checkbox-neutral"],success:["checkbox-success"],info:["checkbox-info"],error:["checkbox-error"]},disabled:{false:null,true:["opacity-50","cursor-not-allowed"]}},defaultVariants:{size:"md",style:"neutral",disabled:!1}}),$=L(["toggle"],{variants:{size:{xs:["toggle-xs"],sm:["toggle-sm"],md:["toggle-md"],lg:["toggle-lg"],xl:["toggle-xl"]},style:{primary:["toggle-primary"],secondary:["toggle-secondary"],accent:["toggle-accent"],neutral:["toggle-neutral"],success:["toggle-success"],info:["toggle-info"],error:["toggle-error"]},disabled:{false:null,true:null}},defaultVariants:{size:"md",style:"neutral",disabled:!1}}),M=({id:v,label:I,name:E,value:j,helperText:S,readOnly:D,onChange:W,size:x,style:k,disabled:f,placement:T="right",...C})=>{const O=k==="error"?"error":"neutral",q=()=>C.toggleMode?$({size:x,style:k,disabled:f}):U({size:x,style:k,disabled:f}),y=r=>{if(typeof r=="string")return e.jsx("span",{children:r});const w=r;return e.jsx(w,{size:20})},z=()=>T=="right"?null:y(I),_=()=>T=="left"?null:T=="both"&&C.rightLabel?y(C.rightLabel):y(I);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(B,{for:"label",size:x,children:[z(),e.jsx("input",{id:v,name:E,type:"checkbox",checked:j,readOnly:D,disabled:f||!1,className:q(),onChange:r=>W(r.target.checked)}),_()]}),S&&e.jsx(R,{status:O,children:S})]})};M.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{value:{required:!0,tsType:{name:"boolean"},description:""},toggleMode:{required:!1,tsType:{name:"boolean"},description:"Change the aspect of the checkbox to a toggle"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:"Callback when the input value changes"},placement:{defaultValue:{value:'"right"',computed:!1},required:!1}}};const Q={title:"UI/Checkbox",component:M,tags:["autodocs"],parameters:{layout:"centered"},args:{label:"Storybook checkbox label"},argTypes:{size:{options:["xs","sm","md","lg","xl"],control:"radio"},style:{options:["primary","secondary","neutral","accent","info","error","success"],control:"radio"},disabled:{control:"boolean"}}},a={args:{label:"Checkbox input label"}},o={args:{label:"Checkbox input label",value:!0}},t={args:{label:"Checkbox input label",style:"error"}},l={args:{label:"Checkbox input label",value:!0,style:"error"}},s={args:{label:"Checkbox input label",disabled:!0}},n={args:{label:"Checkbox input label",placement:"left"}},c={args:{label:"Toggle input label",toggleMode:!0}},g={args:{label:"Toggle input label",toggleMode:!0,placement:"left"}},u={args:{label:"Toggle left label",toggleMode:!0,placement:"both",rightLabel:"Toggle right label"}},p={args:{label:"Toggle input label",toggleMode:!0,value:!0}},i={args:{label:"Toggle input label",toggleMode:!0,disabled:!0}},d={args:{label:"Toggle input label",toggleMode:!0,disabled:!0,value:!0}},b={args:{label:"Toggle input label",toggleMode:!0,style:"error"}},m={args:{label:"Toggle input label",toggleMode:!0,style:"error",value:!0}},h={args:{label:V,toggleMode:!0,placement:"both",rightLabel:N}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input label"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input label",
    value: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input label",
    style: "error"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input label",
    value: true,
    style: "error"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input label",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox input label",
    placement: "left"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true,
    placement: "left"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle left label",
    toggleMode: true,
    placement: "both",
    rightLabel: "Toggle right label"
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true,
    value: true
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true,
    disabled: true,
    value: true
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true,
    style: "error"
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Toggle input label",
    toggleMode: true,
    style: "error",
    value: true
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: SunIcon,
    toggleMode: true,
    placement: "both",
    rightLabel: MoonIcon
  }
}`,...h.parameters?.docs?.source}}};const X=["Default","CheckboxInputChecked","CheckboxInputError","CheckboxInputErrorChecked","CheckboxInputDisabled","CheckboxInputWithLabelOnLeft","ToggleInput","ToggleInputWithLabelOnTheLeftSide","ToggleInputWithLabelOnBothSide","ToggleInputChecked","ToggleInputDisabled","ToggleInputDisabledChecked","ToggleInputError","ToggleInputErrorChecked","ToggleInputWithIcon"];export{o as CheckboxInputChecked,s as CheckboxInputDisabled,t as CheckboxInputError,l as CheckboxInputErrorChecked,n as CheckboxInputWithLabelOnLeft,a as Default,c as ToggleInput,p as ToggleInputChecked,i as ToggleInputDisabled,d as ToggleInputDisabledChecked,b as ToggleInputError,m as ToggleInputErrorChecked,h as ToggleInputWithIcon,u as ToggleInputWithLabelOnBothSide,g as ToggleInputWithLabelOnTheLeftSide,X as __namedExportsOrder,Q as default};
