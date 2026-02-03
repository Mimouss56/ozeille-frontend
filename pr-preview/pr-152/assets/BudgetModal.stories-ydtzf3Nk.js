import{B as i}from"./BudgetModal-CPao6T_p.js";import"./iframe-DL-MgNHw.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-CYzqNEQ1.js";import"./IconBase.es-BvKbMlhj.js";import"./schemas-CpggPAYu.js";import"./axiosClient-CHWh3PjH.js";import"./budgetsStore-BdGhC539.js";import"./frequenciesStore-G6tgqEkl.js";import"./transactionsStore-B-xpDdp0.js";import"./InputField-BNeBtSJ0.js";import"./index-DutoEiXV.js";import"./Label-DATkwEf7.js";import"./StatusMessage-DXFNL9x1.js";import"./Modal-urHl-m3U.js";import"./index-YUd07L6p.js";import"./index-DSiWMLvS.js";import"./Button-C3knhF_t.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
