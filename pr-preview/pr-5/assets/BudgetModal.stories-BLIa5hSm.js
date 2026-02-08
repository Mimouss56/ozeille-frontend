import{B as s}from"./BudgetModal-DVQFW3Zr.js";import"./iframe-hJVTs4Ut.js";import"./preload-helper-PPVm8Dsz.js";import"./InputField-C4b09Xhl.js";import"./index-DutoEiXV.js";import"./Label-DuGAp40X.js";import"./StatusMessage-BbER0n5x.js";import"./Modal-B4QtOoC6.js";import"./index-DbrJRWdg.js";import"./index-CUB7qYbL.js";import"./Button-9euAbW3B.js";import"./schemas-D3hWGOKU.js";import"./frequenciesStore-Cu0dThno.js";import"./axiosClient-513olGFg.js";import"./transactionsStore-BY9KPa2S.js";const B={title:"UI/BudgetModal",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0,onClose:()=>{}}},o={args:{budget:t,onClose:()=>{}}},r={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"},onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    budget: undefined,
    onClose: () => {}
  }
}`,...e.parameters?.docs?.source},description:{story:"Mode création : affiche le formulaire vide pour créer un nouveau budget",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    budget: exampleBudget,
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source},description:{story:"Mode édition : affiche le formulaire pré-rempli avec les données du budget",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    budget: {
      ...exampleBudget,
      id: "budget-2",
      label: "Loisirs",
      color: "#E91E63"
    },
    onClose: () => {}
  }
}`,...r.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...r.parameters?.docs?.description}}};const v=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,o as EditMode,r as EditModeWithDifferentColor,v as __namedExportsOrder,B as default};
