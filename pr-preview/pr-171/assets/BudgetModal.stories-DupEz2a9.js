import{B as i}from"./BudgetModal-BUdv9lnr.js";import"./iframe-dplN72BY.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-B_XSBl8x.js";import"./IconBase.es-DL7F4m1c.js";import"./InputField-C6pvlDWM.js";import"./index-DutoEiXV.js";import"./Label-NbQo2RMK.js";import"./StatusMessage-BZK6A7hi.js";import"./Modal-BIb-YaOz.js";import"./index-sybpyX5b.js";import"./index-DpPmfTtZ.js";import"./Button-DXjE5ia9.js";import"./schemas-G-F7gWbq.js";import"./axiosClient-B2tPPGVg.js";import"./frequenciesStore-BnhgiXLv.js";import"./transactionsStore-BMB5okxr.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    budget: undefined
  }
}`,...e.parameters?.docs?.source},description:{story:"Mode création : affiche le formulaire vide pour créer un nouveau budget",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    budget: exampleBudget
  }
}`,...r.parameters?.docs?.source},description:{story:"Mode édition : affiche le formulaire pré-rempli avec les données du budget",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    budget: {
      ...exampleBudget,
      id: "budget-2",
      label: "Loisirs",
      color: "#E91E63"
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...o.parameters?.docs?.description}}};const h=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,r as EditMode,o as EditModeWithDifferentColor,h as __namedExportsOrder,y as default};
