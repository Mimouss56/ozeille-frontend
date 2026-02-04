import{B as i}from"./BudgetModal-08q8rGf9.js";import"./iframe-ARFA_WIw.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-dzUL0D3_.js";import"./IconBase.es-BhEnArH9.js";import"./InputField--K3d8j6w.js";import"./index-DutoEiXV.js";import"./Label-BjYw7MuS.js";import"./StatusMessage-BuLUQhTq.js";import"./Modal-nNssXsfy.js";import"./index-xloxZI3P.js";import"./index-Dl7kLnhy.js";import"./Button-BkwI09qH.js";import"./schemas-Dugkjyeq.js";import"./axiosClient-BtBbSnBJ.js";import"./frequenciesStore-C_gWD7Ig.js";import"./transactionsStore-CTqPHbhw.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
