import{B as i}from"./BudgetModal-B6yIdg9L.js";import"./iframe-DuKDR4_F.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-CyJxuwTM.js";import"./IconBase.es-CMlZtXJh.js";import"./InputField-B97R5aXM.js";import"./index-DutoEiXV.js";import"./Label-CcZZNw0O.js";import"./StatusMessage-jLZnRIku.js";import"./Modal-BJn77HUB.js";import"./index-CZRvMghk.js";import"./index-C_AC4tz1.js";import"./Button-CmlJI-2c.js";import"./schemas-B8egPEsK.js";import"./axiosClient-Be-pgyJ1.js";import"./frequenciesStore-CSJJxuXz.js";import"./transactionsStore-PY-W7mOQ.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
