import{j as c}from"./iframe-G4D4bu36.js";import{M as a}from"./Modal-JhwvbB5I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./Button-DRYbACkt.js";const g={title:"UI/Modal",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{description:"Define the size of the modal",control:"radio",options:["sm","md","lg"]}}},e={args:{actionLabel:"Ouvrir",title:"Lorem ipsum dolor",confirmLabel:"Confirmer",size:"md",children:"Lorem ipsum dolor sit amet."}},o={args:{title:"Modal with a custom confirm action",actionLabel:"Ouvrir",children:"Lorem ipsum dolor sit amet."},render:function(r){const i=()=>(console.log("Confirming"),!0);return c.jsx(a,{...r,onConfirm:i,children:r.children})}},n={args:{title:"Lorem ipsum dolor",cancelLabel:"Fermer",actionLabel:"Ouvrir",children:"Lorem ipsum dolor sit amet."}},t={args:{title:"Modal with a custom cancel action",actionLabel:"Ouvrir",children:"Lorem ipsum dolor sit amet."},render:function(r){const i=()=>console.log("Cancelling");return c.jsx(a,{...r,onCancel:i,children:r.children})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    actionLabel: "Ouvrir",
    title: "Lorem ipsum dolor",
    confirmLabel: "Confirmer",
    size: "md",
    children: "Lorem ipsum dolor sit amet."
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Modal with a custom confirm action",
    actionLabel: "Ouvrir",
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum dolor",
    cancelLabel: "Fermer",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet."
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Modal with a custom cancel action",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet."
  },
  render: function Render(args) {
    const cancelAction = () => console.log("Cancelling");
    return <Modal {...args} onCancel={cancelAction}>
        {args.children}
      </Modal>;
  }
}`,...t.parameters?.docs?.source}}};const f=["Default","WithCustomConfirmAction","WithCancelLabel","WithCancelAction"];export{e as Default,t as WithCancelAction,n as WithCancelLabel,o as WithCustomConfirmAction,f as __namedExportsOrder,g as default};
