import{B as i}from"./BudgetModal-fLS96xxl.js";import"./iframe-DpTib-Zx.js";import"./preload-helper-PPVm8Dsz.js";import"./Pencil.es-Dys7fBGZ.js";import"./IconBase.es-CNNn3zwN.js";import"./InputField-BgUvK_ec.js";import"./index-DutoEiXV.js";import"./Label-CEyN9YVt.js";import"./StatusMessage-8vTB5UA5.js";import"./Modal-CcpEAHSG.js";import"./index-Bj31tINo.js";import"./index-CRZ7Vr7d.js";import"./Button-ChGUDS-F.js";import"./schemas-BGkEtAWS.js";import"./axiosClient-BShDA9Vd.js";import"./frequenciesStore-TFRlud_Q.js";import"./transactionsStore-B82R3cR6.js";const y={title:"UI/BudgetModal",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{budget:{control:"object",description:"Budget à éditer (undefined pour création)"}}},t={id:"budget-1",label:"Courses alimentaires",color:"#4CAF50",categories:[]},e={args:{budget:void 0}},r={args:{budget:t}},o={args:{budget:{...t,id:"budget-2",label:"Loisirs",color:"#E91E63"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
