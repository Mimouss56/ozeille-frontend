import{B as i}from"./BudgetModal-C3jYlzAO.js";import"./iframe-BVGZVSTD.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-DRBBV6ej.js";import"./IconBase.es-q1m6lcol.js";import"./schemas-Dl7xviEn.js";import"./axiosClient-DRSZf_wz.js";import"./budgetsStore-DA0JAl9N.js";import"./frequenciesStore-CDUvg72w.js";import"./transactionsStore-CMoJAsmB.js";import"./InputField-DLhX8nzI.js";import"./index-DutoEiXV.js";import"./Label-HS7BKaYW.js";import"./StatusMessage-B-h43mRy.js";import"./Modal-U7-fs33K.js";import"./index-CoJG6U9i.js";import"./index-DN-YtrCZ.js";import"./Button-DPpUvmjo.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
