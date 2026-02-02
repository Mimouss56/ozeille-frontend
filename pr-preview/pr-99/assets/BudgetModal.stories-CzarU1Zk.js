import{B as i}from"./BudgetModal-XKzx5FW6.js";import"./iframe-CuRPRNxw.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BwepJWJ6.js";import"./IconBase.es-WdOOseCh.js";import"./schemas-D5K3fSiz.js";import"./axiosClient-CTE_7Qbp.js";import"./budgetsStore-Oo2fHtXX.js";import"./frequenciesStore-B_6CjDKw.js";import"./transactionsStore-_a1Lk1X8.js";import"./InputField-CW6hgHfc.js";import"./index-DutoEiXV.js";import"./Label-CMbZylUx.js";import"./StatusMessage-LZh20VyD.js";import"./Modal-RlUwkDnL.js";import"./index-BSfX89lj.js";import"./index-BZuzRON4.js";import"./Button-DJTMRT58.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
