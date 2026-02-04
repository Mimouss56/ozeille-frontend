import{B as i}from"./BudgetModal-B9lztZLV.js";import"./iframe-DqSXt728.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-LoVeXpI_.js";import"./IconBase.es-B9QtdQtA.js";import"./InputField-DE2OsRyP.js";import"./index-DutoEiXV.js";import"./Label-Dn7WxTHt.js";import"./StatusMessage-CohKGwe6.js";import"./Modal-ACFwkXZ_.js";import"./index-BNmCUQGC.js";import"./index-BwgytcH8.js";import"./Button-DOzBj5Py.js";import"./schemas-nfZSsLKx.js";import"./axiosClient-DYDWA0FI.js";import"./frequenciesStore-_hPbFG-y.js";import"./transactionsStore-Bp_efCXk.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
