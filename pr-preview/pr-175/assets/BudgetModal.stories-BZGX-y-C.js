import{B as i}from"./BudgetModal-BulZbU_D.js";import"./iframe-ejAZJ4Ci.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-Z7WlZ66D.js";import"./IconBase.es-hV5YDUYq.js";import"./InputField-oA9_d6Vq.js";import"./index-DutoEiXV.js";import"./Label-BzW-QoeC.js";import"./StatusMessage-1zsWcNmK.js";import"./Modal-DEQNJKM7.js";import"./index-CkDB0zog.js";import"./index-CDLwK_kp.js";import"./Button-BAbJexyf.js";import"./schemas-DN8j2VI_.js";import"./axiosClient-CzG_AOxM.js";import"./frequenciesStore-BKSk_LZl.js";import"./transactionsStore-Cn-AD0No.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
