import{B as i}from"./BudgetModal-CGOhb6PC.js";import"./iframe-CMb7vl1G.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BsN2jW6r.js";import"./IconBase.es-CY4bRwsE.js";import"./InputField-k0bFD9tM.js";import"./index-DutoEiXV.js";import"./Label-Cv1EUNEk.js";import"./StatusMessage-DQqjqVWB.js";import"./Modal-D_KsGUG8.js";import"./index-B5YzlY5j.js";import"./index-B1HZxQts.js";import"./Button-DkqJcyj4.js";import"./schemas-BXO9pZBR.js";import"./axiosClient-BqVNCUit.js";import"./frequenciesStore-B_BKIwyc.js";import"./transactionsStore-jUfEBfAg.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
