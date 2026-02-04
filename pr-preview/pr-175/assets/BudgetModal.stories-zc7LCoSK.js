import{B as i}from"./BudgetModal-CiDLKZq3.js";import"./iframe-CydYHZUR.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-rCVIGKS2.js";import"./IconBase.es-BKBuYEx2.js";import"./InputField-Ct8emFsl.js";import"./index-DutoEiXV.js";import"./Label-DvKhusHA.js";import"./StatusMessage-Boc7YsqU.js";import"./Modal-CSHkDah1.js";import"./index-DL86MgXs.js";import"./index-DKh5WIcx.js";import"./Button-BXF3mJfR.js";import"./schemas-CB77SQl1.js";import"./axiosClient-DWbHf9LU.js";import"./frequenciesStore-BzmCtaNn.js";import"./transactionsStore-Cigm7A8q.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Mode édition avec une couleur différente",...o.parameters?.docs?.description}}};const h=["Default","EditMode","EditModeWithDifferentColor"];export{e as Default,r as EditMode,o as EditModeWithDifferentColor,h as __namedExportsOrder,y as default};
