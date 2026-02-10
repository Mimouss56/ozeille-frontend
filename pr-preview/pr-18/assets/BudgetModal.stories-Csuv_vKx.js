import{B as s}from"./BudgetModal-CoOgZEON.js";import"./iframe-Cz2FyM2s.js";import"./preload-helper-PPVm8Dsz.js";import"./InputField-Cv9GGFBS.js";import"./index-DutoEiXV.js";import"./Label-ChgFySva.js";import"./StatusMessage-7mo6ytg9.js";import"./Modal-Ce0JT8e4.js";import"./index-D5gzeuzB.js";import"./index-DNpeHTP5.js";import"./Button-DJe2Bsr3.js";import"./schemas-D3hWGOKU.js";import"./frequenciesStore-CO4GEr33.js";import"./axiosClient-BCVN1Vf-.js";import"./transactionsStore-BRep1rhZ.js";const B={title:"UI/BudgetModal",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0,onClose:()=>{}}},o={args:{budget:t,onClose:()=>{}}},r={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"},onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
