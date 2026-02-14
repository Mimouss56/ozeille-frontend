import{B as s}from"./BudgetModal-BrBNMVtZ.js";import"./iframe-z1zinKTN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputColor-yfLUxp6s.js";import"./index-DutoEiXV.js";import"./InputField-CtrHOFbz.js";import"./Label-blfz8AFX.js";import"./StatusMessage-OFWvC-NX.js";import"./Modal-DWyekP3_.js";import"./index-B_y613vr.js";import"./index-Cq-G7Zgc.js";import"./Button-DGdmapkv.js";import"./schemas-D3hWGOKU.js";import"./frequenciesStore-B3b6Rooe.js";import"./axiosClient-CUMaPKRu.js";import"./transactionsStore-Bnn0k51I.js";const v={title:"UI/BudgetModal",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0,onClose:()=>{}}},o={args:{budget:t,onClose:()=>{}}},r={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"},onClose:()=>{}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    budget: undefined,
    onClose: () => {}
  }
}`,...e.parameters?.docs?.source},description:{story:"Mode création : affiche le formulaire vide pour créer un nouveau budget",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    budget: exampleBudget,
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source},description:{story:"Mode édition : affiche le formulaire pré-rempli avec les données du budget",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    budget: {
      ...exampleBudget,
      id: "budget-2",
      label: "Loisirs",
      color: "#E91E63"
    },
    onClose: () => {}
  }
}`,...r.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...r.parameters?.docs?.description}}};const x=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,o as EditMode,r as EditModeWithDifferentColor,x as __namedExportsOrder,v as default};
