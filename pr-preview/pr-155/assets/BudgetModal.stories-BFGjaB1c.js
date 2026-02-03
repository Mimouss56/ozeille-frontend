import{B as i}from"./BudgetModal-BUneZcAM.js";import"./iframe-CC6WGNqu.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BkKt5YuP.js";import"./IconBase.es-DXFUh5Ru.js";import"./schemas-CTJF-20V.js";import"./axiosClient-CLkINzrB.js";import"./budgetsStore-DoavkucW.js";import"./frequenciesStore-D1SGGPK1.js";import"./transactionsStore-DYfUMt1l.js";import"./InputField-CdiIKe8A.js";import"./index-DutoEiXV.js";import"./Label-Cy1t30IJ.js";import"./StatusMessage-Du6bMGda.js";import"./Modal-Bi7mzgj7.js";import"./index-BZ1kug55.js";import"./index-DoSJ53Ed.js";import"./Button-BTrX1hSL.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
