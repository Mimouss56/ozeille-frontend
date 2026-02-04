import{B as i}from"./BudgetModal-zlWjDeoT.js";import"./iframe-B10ShIjv.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-Dr5EDEjP.js";import"./IconBase.es-CgT2YlSN.js";import"./schemas-YR227CNF.js";import"./axiosClient-BFG-t0KE.js";import"./budgetsStore-B64BGgYd.js";import"./frequenciesStore-CdWHvc19.js";import"./transactionsStore-Buxf9DMW.js";import"./InputField-Cg_Oc45t.js";import"./index-DutoEiXV.js";import"./Label-BGC2Lo4h.js";import"./StatusMessage-WCXL5tgy.js";import"./Modal-Cb8k86aq.js";import"./index-Sp6M4VGo.js";import"./index-BH0ZJCAY.js";import"./Button-Dv3bf-MD.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
