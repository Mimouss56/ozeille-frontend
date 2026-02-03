import{o}from"./Pencil.es-CYzqNEQ1.js";import{r as e}from"./iframe-DL-MgNHw.js";import{p as m}from"./IconBase.es-BvKbMlhj.js";import{r as d}from"./Trash.es-Ceupyi0e.js";import{B as p}from"./Button-C3knhF_t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";const h=new Map([["bold",e.createElement(e.Fragment,null,e.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",e.createElement(e.Fragment,null,e.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),e.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",e.createElement(e.Fragment,null,e.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",e.createElement(e.Fragment,null,e.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",e.createElement(e.Fragment,null,e.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",e.createElement(e.Fragment,null,e.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),s=e.forwardRef((i,l)=>e.createElement(m,{ref:l,...i,weights:h}));s.displayName="PlusIcon";const c={Pencil:o,Trash:d,Plus:s},b={title:"UI/Button",component:p,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"Bouton"},argTypes:{style:{description:"Define the aspect of the button",control:"select",options:["primary","secondary","outline","ghost","danger","dangerOutline","ghostOutline"]},size:{description:"Define the size of the button",control:"radio",options:["sm","md","lg","xl"]},disabled:{control:"boolean"},loading:{control:"boolean"},join:{control:"boolean"},icon:{description:"Icon to display in the button",options:Object.keys(c),mapping:c,control:{type:"select",labels:{Pencil:"Crayon",Trash:"Poubelle",Plus:"Ajouter"}}}}},a={args:{children:"Bouton primaire",style:"primary"}},t={args:{icon:o,children:"Bouton avec icône"}},n={args:{icon:o,children:"Désactivé",disabled:!0}},r={args:{icon:o,children:"Chargement",loading:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Bouton primaire",
    style: "primary"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // 3. On passe la CLÉ définie dans le mapping, pas le composant directement
    icon: PencilIcon,
    children: "Bouton avec icône"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PencilIcon,
    children: "Désactivé",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PencilIcon,
    children: "Chargement",
    loading: true
  }
}`,...r.parameters?.docs?.source}}};const f=["Primary","WithIcon","DisabledWithIcon","LoadingWithIcon"];export{n as DisabledWithIcon,r as LoadingWithIcon,a as Primary,t as WithIcon,f as __namedExportsOrder,b as default};
