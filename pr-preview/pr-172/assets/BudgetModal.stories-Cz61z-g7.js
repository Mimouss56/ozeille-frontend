import{B as i}from"./BudgetModal-DtX1waJa.js";import"./iframe-CccXUuDF.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DcH_u1PL.js";import"./IconBase.es-CjZqpH1n.js";import"./schemas-Ce26SkAe.js";import"./axiosClient-D1wqeCOi.js";import"./budgetsStore-CLnfxroD.js";import"./frequenciesStore-LRbJ0Q4m.js";import"./transactionsStore-BWj818vp.js";import"./InputField-B3m7gIoo.js";import"./index-DutoEiXV.js";import"./Label-BUOUQbe7.js";import"./StatusMessage-DAmAeJ46.js";import"./Modal-QuJd9TEM.js";import"./index-Q-C1ctbw.js";import"./index-9rBu_Y6R.js";import"./Button-DlL2HUL4.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
