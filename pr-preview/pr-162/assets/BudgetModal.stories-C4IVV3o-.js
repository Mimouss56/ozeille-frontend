import{B as i}from"./BudgetModal-CIeA98wE.js";import"./iframe-C922JDPv.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-iDdsvt8P.js";import"./IconBase.es-NslU2gA5.js";import"./schemas-1yu9ws6b.js";import"./axiosClient-Bo6Gk92c.js";import"./budgetsStore-DEKErRkz.js";import"./frequenciesStore-D6v1-7sw.js";import"./transactionsStore-Dtqf9mqE.js";import"./InputField-CU8H2vQl.js";import"./index-DutoEiXV.js";import"./Label-DiPKJ6Vd.js";import"./StatusMessage-CXOTTKFK.js";import"./Modal-B9JZYQXM.js";import"./index-BmM9Jv1x.js";import"./index-DJGXsPWn.js";import"./Button-BAmRy4_D.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
