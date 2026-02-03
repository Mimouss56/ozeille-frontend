import{B as i}from"./BudgetModal-Dk8OKrxE.js";import"./iframe-CrPk0i3A.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-CWpw3_jY.js";import"./IconBase.es-Bi_MKvDV.js";import"./schemas-Cud8K-mi.js";import"./axiosClient-DfzvRJC9.js";import"./budgetsStore-DaYt7qI5.js";import"./frequenciesStore-DSxXCi93.js";import"./transactionsStore-0X0DzEDC.js";import"./InputField-Der7-j8w.js";import"./index-DutoEiXV.js";import"./Label-ClgAeSpB.js";import"./StatusMessage-DrbodilS.js";import"./Modal-DHAikbzP.js";import"./index-iwEDoQom.js";import"./index-CdsHn3k_.js";import"./Button-cO92zvV8.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
