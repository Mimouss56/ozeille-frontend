import{B as i}from"./BudgetModal-D952K_v0.js";import"./iframe-C7G82rR_.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-OFCJys0P.js";import"./IconBase.es-D1LVG-k7.js";import"./schemas-B57nHjKb.js";import"./axiosClient-gE0j8R5K.js";import"./budgetsStore-6hn8tpyC.js";import"./frequenciesStore-CmGyLtk-.js";import"./transactionsStore-DVCOSYRM.js";import"./InputField-CuhOw9YK.js";import"./index-DutoEiXV.js";import"./Label-BzPGK-S1.js";import"./StatusMessage-DvhuvykZ.js";import"./Modal-BMr4pOmz.js";import"./index-CxBSqXSM.js";import"./index-YtiyFtBV.js";import"./Button-BYHA2-WU.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
