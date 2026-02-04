import{B as i}from"./BudgetModal-DXL60qT0.js";import"./iframe-DUmvcQcf.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-qUSDMExk.js";import"./IconBase.es-COX30dre.js";import"./InputField-9iH6Te6c.js";import"./index-DutoEiXV.js";import"./Label-DSQyo85C.js";import"./StatusMessage-DjcNonb0.js";import"./Modal-DLXmSIYU.js";import"./index-DA5tY_ST.js";import"./index-CmzThe9s.js";import"./Button-r5Csk0e5.js";import"./schemas-BJrmLcbl.js";import"./axiosClient-DTca_Lgq.js";import"./frequenciesStore-CWLwV7p5.js";import"./transactionsStore-D9KDWvWm.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
