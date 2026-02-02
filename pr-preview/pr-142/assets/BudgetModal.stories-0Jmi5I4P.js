import{B as i}from"./BudgetModal-jp_2f_-N.js";import"./iframe-AYXYALec.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-BSUqccVN.js";import"./IconBase.es-BUiiWEU8.js";import"./schemas-ETks01-b.js";import"./axiosClient-C_xNiIJs.js";import"./budgetsStore-C_vR5RQz.js";import"./frequenciesStore-BJC3l6XZ.js";import"./transactionsStore-BgrlGQBv.js";import"./InputField-BDUJ8bqU.js";import"./index-DutoEiXV.js";import"./Label-sSqeS5sU.js";import"./StatusMessage-JKEn1DgE.js";import"./Modal-DK-0c2a5.js";import"./index-0UmehbYk.js";import"./index-DXv4UL9O.js";import"./Button-BLq-vT2E.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
