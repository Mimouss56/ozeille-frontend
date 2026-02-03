import{B as i}from"./BudgetModal-DS3k1NU3.js";import"./iframe-Bw_vLHhj.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DvSvUxR-.js";import"./IconBase.es-BPjclMnZ.js";import"./schemas-C_5mU-Ln.js";import"./axiosClient-wzivupJG.js";import"./budgetsStore-CcLQrPRc.js";import"./frequenciesStore-BQrw7aqT.js";import"./transactionsStore-CFljbjZR.js";import"./InputField-DKAytric.js";import"./index-DutoEiXV.js";import"./Label-DB3a343d.js";import"./StatusMessage-DYTPJIxl.js";import"./Modal-J5mUyyeo.js";import"./index-DruL9Yb0.js";import"./index-BSwnk7so.js";import"./Button-Dh52iWTB.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
