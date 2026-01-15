import{r as v,j as e}from"./iframe-BHSQrC3p.js";import{c as h}from"./index-DutoEiXV.js";import{B as d}from"./Button-DQy4Di1O.js";import"./preload-helper-PPVm8Dsz.js";const y=h(["modal"]),w=h(["modal-box"],{variants:{size:{sm:["max-w-md"],md:["max-w-lg"],lg:["max-w-2xl"]}},defaultVariants:{size:"md"}}),c=({title:n,actionLabel:o,children:r,confirmLabel:f="Ok",onConfirm:g,onCancel:m,cancelLabel:u,...L})=>{const l=v.useRef(null),b=()=>l.current?.showModal(),p=()=>l.current?.close(),x=()=>{m?.(),p()},C=()=>{g?.(),p()};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:b,children:o}),e.jsx("dialog",{ref:l,className:y(),children:e.jsxs("div",{className:w(L),"aria-modal":"true","aria-labelledby":n?"modal-title":void 0,children:[n&&e.jsx("h3",{id:"modal-title",className:"mb-2 text-lg font-bold",children:n}),e.jsx("div",{className:"py-2",children:r}),e.jsxs("div",{className:"modal-action",children:[(m||u)&&e.jsx(d,{style:"outline",onClick:x,children:u}),e.jsx(d,{onClick:C,children:f})]})]})})]})};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{actionLabel:{required:!0,tsType:{name:"string"},description:"Label for the action button which show the modal"},title:{required:!1,tsType:{name:"string"},description:"Title of the modal"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the modal"},confirmLabel:{required:!1,tsType:{name:"string"},description:"Label for the confirmation button",defaultValue:{value:'"Ok"',computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action to execute when the confirmation button is clicked."},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action to execute when the cancel button is clicked."},cancelLabel:{required:!1,tsType:{name:"string"},description:"Label for the cancel button"}}};const R={title:"UI/Modal",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{description:"Define the size of the modal",control:"radio",options:["sm","md","lg"]}}},t={args:{actionLabel:"Ouvrir",title:"Lorem ipsum dolor",confirmLabel:"Confirmer",size:"md",children:"Lorem ipsum dolor sit amet."}},a={args:{title:"Modal with a custom confirm action",actionLabel:"Ouvrir",children:"Lorem ipsum dolor sit amet."},render:function(o){const r=()=>console.log("Confirming");return e.jsx(c,{...o,onConfirm:r,children:o.children})}},i={args:{title:"Lorem ipsum dolor",cancelLabel:"Fermer",actionLabel:"Ouvrir",children:"Lorem ipsum dolor sit amet."}},s={args:{title:"Modal with a custom cancel action",actionLabel:"Ouvrir",children:"Lorem ipsum dolor sit amet."},render:function(o){const r=()=>console.log("Cancelling");return e.jsx(c,{...o,onCancel:r,children:o.children})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    actionLabel: "Ouvrir",
    title: "Lorem ipsum dolor",
    confirmLabel: "Confirmer",
    size: "md",
    children: "Lorem ipsum dolor sit amet."
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Modal with a custom confirm action",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet."
  },
  render: function Render(args) {
    const confirmAction = () => console.log("Confirming");
    return <Modal {...args} onConfirm={confirmAction}>
        {args.children}
      </Modal>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Lorem ipsum dolor",
    cancelLabel: "Fermer",
    actionLabel: "Ouvrir",
    children: "Lorem ipsum dolor sit amet."
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const T=["Default","WithCustomConfirmAction","WithCancelLabel","WithCancelAction"];export{t as Default,s as WithCancelAction,i as WithCancelLabel,a as WithCustomConfirmAction,T as __namedExportsOrder,R as default};
