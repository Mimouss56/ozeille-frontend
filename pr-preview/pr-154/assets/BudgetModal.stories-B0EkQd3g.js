import{B as i}from"./BudgetModal-CQRM67sB.js";import"./iframe-CT-cweiv.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DHK0mGmU.js";import"./IconBase.es-CgBe_E9R.js";import"./schemas-Bfe9uU1G.js";import"./axiosClient-Dhm_WMFg.js";import"./budgetsStore-Wc8zWh3d.js";import"./frequenciesStore-DNhxiF26.js";import"./transactionsStore-Za7mSx0i.js";import"./InputField-M1ml6OMp.js";import"./index-DutoEiXV.js";import"./Label-D97uZChX.js";import"./StatusMessage-BYORSOCy.js";import"./Modal-B6rafr84.js";import"./index-CRfHAt4W.js";import"./index-67EfzGAP.js";import"./Button-CndOw7IB.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
