import{B as i}from"./BudgetModal-BILSmEFb.js";import"./iframe-BAZNicCM.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DQ6hDKXw.js";import"./IconBase.es-DrBfRFA3.js";import"./schemas-DcL1A-V0.js";import"./axiosClient-Psbltjn5.js";import"./budgetsStore-MIxvdDzn.js";import"./frequenciesStore-7sc1Ybj-.js";import"./transactionsStore-DYu4o1f7.js";import"./InputField-DwdDUFey.js";import"./index-DutoEiXV.js";import"./Label-c2IdLotw.js";import"./StatusMessage-CHjMjefE.js";import"./Modal-BsmhDj37.js";import"./index-BWhu3t57.js";import"./index-DnWtCECL.js";import"./Button-Bu64ZEZn.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
