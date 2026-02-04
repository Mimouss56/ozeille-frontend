import{B as i}from"./BudgetModal-5iC1wfVh.js";import"./iframe-BZq4Wtp5.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-_McJtFjr.js";import"./IconBase.es-DRq92DE6.js";import"./InputField-DWfaQk9d.js";import"./index-DutoEiXV.js";import"./Label-Db8BV0IN.js";import"./StatusMessage-DMhtMmp6.js";import"./Modal-jpvhc8i-.js";import"./index-DpDm2x2F.js";import"./index-CtE7JSY2.js";import"./Button-BrAzBXuO.js";import"./schemas-CCie32F6.js";import"./axiosClient-Dg9PDTXS.js";import"./frequenciesStore-COjLgSS9.js";import"./transactionsStore-59ml0mx0.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
