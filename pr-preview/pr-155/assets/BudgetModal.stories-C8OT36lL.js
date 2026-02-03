import{B as i}from"./BudgetModal-DBxmf2lh.js";import"./iframe-Bm94xm6e.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DxOSqXrd.js";import"./IconBase.es-D-MqaScW.js";import"./schemas-CMyL0t2X.js";import"./axiosClient-C1w2IO4s.js";import"./budgetsStore-B0uBIzLI.js";import"./frequenciesStore-Cs5YAFGJ.js";import"./transactionsStore-CwjT52M8.js";import"./InputField-BTl4-jbi.js";import"./index-DutoEiXV.js";import"./Label-ihQR500i.js";import"./StatusMessage-CNZPmCQa.js";import"./Modal-ANqCQh7d.js";import"./index-DPbUZgl-.js";import"./index-ulTeiMeu.js";import"./Button-CpEK-ZbN.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...o.parameters?.docs?.description}}};const C=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,r as EditMode,o as EditModeWithDifferentColor,C as __namedExportsOrder,h as default};
