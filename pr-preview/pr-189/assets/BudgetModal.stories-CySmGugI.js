import{B as s}from"./BudgetModal-BP1hfxuM.js";import"./iframe-BgQ_fZKJ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputField-CrXczbqr.js";import"./index-DutoEiXV.js";import"./Label-BpmYyaN0.js";import"./StatusMessage-CJpt9Zso.js";import"./Modal-DzTZhzZr.js";import"./index-IfHfYg5i.js";import"./index-BJZ2N5o7.js";import"./Button-BV9cyu97.js";import"./schemas-D3hWGOKU.js";import"./frequenciesStore-BnM9kRm6.js";import"./axiosClient-DkcN90IR.js";import"./transactionsStore-ClaYOIKs.js";const B={title:"UI/BudgetModal",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0,onClose:()=>{}}},o={args:{budget:t,onClose:()=>{}}},r={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"},onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    budget: undefined,
    onClose: () => {}
  }
}`,...e.parameters?.docs?.source},description:{story:"Mode création : affiche le formulaire vide pour créer un nouveau budget",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    budget: exampleBudget,
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source},description:{story:"Mode édition : affiche le formulaire pré-rempli avec les données du budget",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    budget: {
      ...exampleBudget,
      id: "budget-2",
      label: "Loisirs",
      color: "#E91E63"
    },
    onClose: () => {}
  }
}`,...r.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...r.parameters?.docs?.description}}};const v=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,o as EditMode,r as EditModeWithDifferentColor,v as __namedExportsOrder,B as default};
