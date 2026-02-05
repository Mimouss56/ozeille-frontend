import{B as a}from"./BudgetModal-DFCEuvu4.js";import"./iframe-slvDrv0y.js";import"./preload-helper-PPVm8Dsz.js";import"./InputField-pKYnsFFK.js";import"./index-DutoEiXV.js";import"./Label-B0uKf7w2.js";import"./StatusMessage-B-x05oN2.js";import"./Modal-BpPDk9sg.js";import"./index-OhXwSLtA.js";import"./index-DjdMkasq.js";import"./Button-FVET4ZYe.js";import"./schemas-D3hWGOKU.js";import"./frequenciesStore-Dv50HaPj.js";import"./axiosClient--o0_gRyw.js";import"./transactionsStore-geoNjfmh.js";const v={title:"UI/BudgetModal",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...o.parameters?.docs?.description}}};const x=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,r as EditMode,o as EditModeWithDifferentColor,x as __namedExportsOrder,v as default};
