import{j as e}from"./iframe-D0KIZYMF.js";import{L as t}from"./Label-DFwUk4ky.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";const c={title:"UI/Label",component:t,args:{},tags:["autodocs"]},a={render:()=>e.jsx(t,{children:"Label"})},s={render:()=>e.jsxs(t,{children:[e.jsx("span",{className:"label-text",children:"Email"}),e.jsx("input",{id:"email",name:"email",value:"johndoe@email.com",placeholder:"Email",className:"input text-neutral outline-neutral border-neutral"})]})},r={render:()=>e.jsxs("div",{className:"flex w-full max-w-xs flex-col gap-1",children:[e.jsxs(t,{children:[e.jsx("span",{children:"Mot de passe"}),e.jsx("input",{type:"password",placeholder:"Mot de passe",className:"input text-neutral outline-neutral border-neutral"})]}),e.jsx("span",{className:"text-neutral/70 text-xs",children:"Au moins 8 caractères"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Label>Label</Label>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Label>
      <span className="label-text">Email</span>
      <input id="email" name="email" value={"johndoe@email.com"} placeholder="Email" className="input text-neutral outline-neutral border-neutral" />
    </Label>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-xs flex-col gap-1">
      <Label>
        <span>Mot de passe</span>
        <input type="password" placeholder="Mot de passe" className="input text-neutral outline-neutral border-neutral" />
      </Label>

      <span className="text-neutral/70 text-xs">Au moins 8 caractères</span>
    </div>
}`,...r.parameters?.docs?.source}}};const i=["Default","WithInput","WithHelperText"];export{a as Default,r as WithHelperText,s as WithInput,i as __namedExportsOrder,c as default};
