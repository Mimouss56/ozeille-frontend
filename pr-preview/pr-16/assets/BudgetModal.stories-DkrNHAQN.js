import{B as s}from"./BudgetModal-C0gRE6RK.js";import"./iframe-DBGFD7Qf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputField-1C7SPRE4.js";import"./index-DutoEiXV.js";import"./Label-DQL5-F8z.js";import"./StatusMessage-BmWZL38g.js";import"./Modal-txQIIT0J.js";import"./index-BTESOdJw.js";import"./index-CdiS95rX.js";import"./Button-T7zhZpb7.js";import"./schemas-D3hWGOKU.js";import"./frequenciesStore-B7apP9AG.js";import"./axiosClient-BXT2YtRj.js";import"./transactionsStore-CtCrxKSw.js";const B={title:"UI/BudgetModal",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0,onClose:()=>{}}},o={args:{budget:t,onClose:()=>{}}},r={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"},onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
