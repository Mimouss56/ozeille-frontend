import{B as i}from"./BudgetModal-BDOhkgLx.js";import"./iframe-2UQskwW5.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-Ymh95jLc.js";import"./IconBase.es-BpUu7e6R.js";import"./schemas-D6rHScjd.js";import"./axiosClient-CnoH2fP2.js";import"./budgetsStore-bBZFH7hV.js";import"./frequenciesStore-BG12g5Rp.js";import"./transactionsStore-BhM0J-bY.js";import"./InputField-CYqDMWea.js";import"./index-DutoEiXV.js";import"./Label-Ccu-Q45r.js";import"./StatusMessage-Dxf9tt_2.js";import"./Modal-BdbVzZDB.js";import"./index-CaYyZ9ZU.js";import"./index-BivrdQAN.js";import"./Button-CPhqROst.js";const h={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
