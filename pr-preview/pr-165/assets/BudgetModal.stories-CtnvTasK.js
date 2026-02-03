import{B as i}from"./BudgetModal-CJjKt_BH.js";import"./iframe-Dh91Xm2q.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-CSAt9xsy.js";import"./IconBase.es-CJYf0tHq.js";import"./schemas-E1qPSazS.js";import"./axiosClient-d0Jlrto-.js";import"./budgetsStore-C78p_Lhx.js";import"./frequenciesStore-8me9G0la.js";import"./transactionsStore-Cl3nthNT.js";import"./InputField-CsPvc_e2.js";import"./index-DutoEiXV.js";import"./Label-Of_cusPc.js";import"./StatusMessage-CBj8llrZ.js";import"./Modal-Cs9vGhXA.js";import"./index-C1XECRQD.js";import"./index-Bd55-7Zx.js";import"./Button-rF2D4rpD.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
