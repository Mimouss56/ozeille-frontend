import{B as i}from"./BudgetModal-DzkYORkJ.js";import"./iframe-q9bkF4y7.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-C3QbbeVM.js";import"./IconBase.es-BZOO5h6-.js";import"./InputField-DLp2LqOA.js";import"./index-DutoEiXV.js";import"./Label-DFIFIX2h.js";import"./StatusMessage-BRDh3mV2.js";import"./Modal-8pL_pZgE.js";import"./index-BsrBVCQa.js";import"./index-CLtQm4U-.js";import"./Button-BeOg9708.js";import"./schemas-B5ScU8xd.js";import"./axiosClient-ZzGgdNvF.js";import"./frequenciesStore-C2A4m6kk.js";import"./transactionsStore-BWYeWffd.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
