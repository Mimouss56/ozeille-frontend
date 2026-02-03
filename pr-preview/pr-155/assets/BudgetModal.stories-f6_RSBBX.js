import{B as i}from"./BudgetModal-CfGAbRkJ.js";import"./iframe-7Am27jV4.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-zbCCt2YG.js";import"./IconBase.es-bumKc4aN.js";import"./schemas-Dun8JLbt.js";import"./axiosClient-64ck0Mq6.js";import"./budgetsStore-UrlBgX8y.js";import"./frequenciesStore-DlDOxZg9.js";import"./transactionsStore-BsXpjJYK.js";import"./InputField-a4XZFb7h.js";import"./index-DutoEiXV.js";import"./Label-Cz9D9rp6.js";import"./StatusMessage-CMtHFAqo.js";import"./Modal-DTBli7gL.js";import"./index-B___PDUF.js";import"./index-CDAfOyJf.js";import"./Button-H5ZKbaJO.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
