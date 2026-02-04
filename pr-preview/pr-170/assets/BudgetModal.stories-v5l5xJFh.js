import{B as i}from"./BudgetModal-DMU_xscw.js";import"./iframe-C12B7drV.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-1nsyXatj.js";import"./IconBase.es-sE9QhaM1.js";import"./schemas-DDFwCW0A.js";import"./axiosClient-BFmEz4-v.js";import"./budgetsStore-BXDPWkqx.js";import"./frequenciesStore-BGYb57KY.js";import"./transactionsStore-BSbvx3ZE.js";import"./InputField-B_thk2Sp.js";import"./index-DutoEiXV.js";import"./Label-CONAW8X8.js";import"./StatusMessage-CwRq2Api.js";import"./Modal-xIedFZUR.js";import"./index-CxNdEp-Q.js";import"./index-BpqQPa-a.js";import"./Button-5yl8F1KV.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
