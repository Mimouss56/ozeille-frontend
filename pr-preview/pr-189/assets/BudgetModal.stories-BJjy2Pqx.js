import{B as a}from"./BudgetModal-BvHt7e5j.js";import"./iframe-p4FRm6BM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputField-C1xBjTfc.js";import"./index-DutoEiXV.js";import"./Label-CeUUl2bJ.js";import"./StatusMessage-BN8L11Mc.js";import"./Modal-irbyFjSe.js";import"./index-xh2fz1ab.js";import"./index-CPdTX9h9.js";import"./Button-CerpYcwI.js";import"./schemas-D3hWGOKU.js";import"./budgetsStore-B74aFF2G.js";import"./axiosClient-D_mxLKba.js";import"./frequenciesStore-DePxJfYK.js";import"./transactionsStore-DzYHyJ8H.js";const x={title:"UI/BudgetModal",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...o.parameters?.docs?.description}}};const y=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,r as EditMode,o as EditModeWithDifferentColor,y as __namedExportsOrder,x as default};
