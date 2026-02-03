import{B as i}from"./BudgetModal-B5B0wzxd.js";import"./iframe-C_JWn-k2.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DoBUH4gv.js";import"./IconBase.es-DD77hRyh.js";import"./schemas-D96PONPH.js";import"./axiosClient-D6T_z2Y_.js";import"./budgetsStore-DYfJmFPk.js";import"./frequenciesStore-aShp5Gn-.js";import"./transactionsStore-C0Kj7akj.js";import"./InputField-DhliEuKG.js";import"./index-DutoEiXV.js";import"./Label-D-wrVH80.js";import"./StatusMessage-CO_F7VMU.js";import"./Modal-Cd08VpHA.js";import"./index-DbCJw8Ta.js";import"./index-CWcrDfyh.js";import"./Button-BuBtEGPw.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
