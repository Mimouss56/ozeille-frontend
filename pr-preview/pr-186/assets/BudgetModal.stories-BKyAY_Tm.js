import{B as i}from"./BudgetModal-fCKj3OWf.js";import"./iframe-DWPTYnII.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DzZf2P_Y.js";import"./IconBase.es-BnOSeoyh.js";import"./InputField-B_PW0vfN.js";import"./index-DutoEiXV.js";import"./Label-C3CNxefV.js";import"./StatusMessage-BmTu0tkl.js";import"./Modal-BN-YbME7.js";import"./index-CpqKEp9X.js";import"./index-eerWb5PK.js";import"./Button-CWPazl7Z.js";import"./schemas-CblkiGi9.js";import"./axiosClient-B-SqE_v0.js";import"./frequenciesStore-D2SiZ8mQ.js";import"./transactionsStore-D5n8ilJ8.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
