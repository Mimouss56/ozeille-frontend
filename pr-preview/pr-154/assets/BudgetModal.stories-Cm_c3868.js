import{B as i}from"./BudgetModal-B5-VIXOZ.js";import"./iframe-vGbM5WYh.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-CIbU2fQS.js";import"./IconBase.es-DdrOhHGR.js";import"./schemas-DNesfOv3.js";import"./axiosClient-GCUq7wq8.js";import"./budgetsStore-BIjmxb12.js";import"./frequenciesStore-CPBK_wGc.js";import"./transactionsStore-C2SKxxA6.js";import"./InputField-5rkWdQvJ.js";import"./index-DutoEiXV.js";import"./Label-ZxpjjpMF.js";import"./StatusMessage-C51HC0Nc.js";import"./Modal-D0gISGej.js";import"./index-EnecsUhC.js";import"./index-Dr9_gEdq.js";import"./Button-wHFPLL_I.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
