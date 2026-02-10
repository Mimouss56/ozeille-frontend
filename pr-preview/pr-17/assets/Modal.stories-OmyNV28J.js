import{j as a}from"./iframe-D4VSmP3U.js";import{M as s}from"./Modal-DH-xRjnH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./index-CT__oOct.js";import"./index-NfKOyNDR.js";import"./Button-CVT1imKt.js";const h={title:"UI/Modal",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{description:"Define the size of the modal",control:"radio",options:["sm","md","lg"]}}},o={args:{isOpen:!0,onClose:()=>{},title:"Lorem ipsum dolor",confirmLabel:"Confirmer",size:"md",children:"Lorem ipsum dolor sit amet."}},n={args:{isOpen:!0,onClose:()=>{},title:"Modal with a custom confirm action",children:"Lorem ipsum dolor sit amet."},render:function(e){const i=()=>(console.log("Confirming"),!0);return a.jsx(s,{...e,onConfirm:i,children:e.children})}},r={args:{isOpen:!0,onClose:()=>{},title:"Lorem ipsum dolor",cancelLabel:"Fermer",children:"Lorem ipsum dolor sit amet."}},t={args:{isOpen:!0,onClose:()=>{},title:"Modal with a custom cancel action",children:"Lorem ipsum dolor sit amet."},render:function(e){const i=()=>console.log("Cancelling");return a.jsx(s,{...e,onCancel:i,children:e.children})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Lorem ipsum dolor",
    confirmLabel: "Confirmer",
    size: "md",
    children: "Lorem ipsum dolor sit amet."
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Modal with a custom confirm action",
    children: "Lorem ipsum dolor sit amet."
  },
  render: function Render(args) {
    const confirmAction = () => {
      console.log("Confirming");
      return true;
    };
    return <Modal {...args} onConfirm={confirmAction}>
        {args.children}
      </Modal>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Lorem ipsum dolor",
    cancelLabel: "Fermer",
    children: "Lorem ipsum dolor sit amet."
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Modal with a custom cancel action",
    children: "Lorem ipsum dolor sit amet."
  },
  render: function Render(args) {
    const cancelAction = () => console.log("Cancelling");
    return <Modal {...args} onCancel={cancelAction}>
        {args.children}
      </Modal>;
  }
}`,...t.parameters?.docs?.source}}};const C=["Default","WithCustomConfirmAction","WithCancelLabel","WithCancelAction"];export{o as Default,t as WithCancelAction,r as WithCancelLabel,n as WithCustomConfirmAction,C as __namedExportsOrder,h as default};
