import{B as i}from"./BudgetModal-CJ_m7LmH.js";import"./iframe-D3GX8_4k.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BXlPSM6u.js";import"./IconBase.es-43JV-uNr.js";import"./InputField-Xs8VEuB6.js";import"./index-DutoEiXV.js";import"./Label-p759_UVT.js";import"./StatusMessage-8Tths54n.js";import"./Modal-BEKwPw55.js";import"./index-_ftOUwYl.js";import"./index-BtKVb7xx.js";import"./Button-C2HRJEoJ.js";import"./schemas-DE_wHYVB.js";import"./axiosClient-CmaP8ePX.js";import"./frequenciesStore-CDz6dryQ.js";import"./transactionsStore-EhRNWia7.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
