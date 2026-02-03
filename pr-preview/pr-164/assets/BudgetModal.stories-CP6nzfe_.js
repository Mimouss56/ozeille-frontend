import{B as i}from"./BudgetModal-DqQT7kPr.js";import"./iframe-BBC-KBYd.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-52Phu0tX.js";import"./IconBase.es-BsbJC2SF.js";import"./schemas-DdW3x1uh.js";import"./axiosClient-xvtZ6ZIe.js";import"./budgetsStore-B423H-ra.js";import"./frequenciesStore-azdEL8jE.js";import"./transactionsStore-D18ufPVf.js";import"./InputField-Bj885cGo.js";import"./index-DutoEiXV.js";import"./Label-CvNinknq.js";import"./StatusMessage-BNqSKhmk.js";import"./Modal-B5PO-e6s.js";import"./index-BzsHiC36.js";import"./index-C_HdUU8T.js";import"./Button-DrTEG86m.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
