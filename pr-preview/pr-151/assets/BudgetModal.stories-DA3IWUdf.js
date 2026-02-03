import{B as i}from"./BudgetModal-dC0G8MJT.js";import"./iframe-pc_2ojx-.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-ow1_9Bk8.js";import"./IconBase.es-B0H6Ujfp.js";import"./schemas-BrYjOjoR.js";import"./axiosClient-5KfXKlLB.js";import"./budgetsStore-hTSRb6Mc.js";import"./frequenciesStore-ByOEEM-D.js";import"./transactionsStore-MPer3-Sa.js";import"./InputField-DmUUvqEr.js";import"./index-DutoEiXV.js";import"./Label-DgbZFcR0.js";import"./StatusMessage-BEWJbaoL.js";import"./Modal-BmPg7pJ-.js";import"./index-CvY15wfh.js";import"./index-B9rmq0RP.js";import"./Button-BivAVUGP.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
