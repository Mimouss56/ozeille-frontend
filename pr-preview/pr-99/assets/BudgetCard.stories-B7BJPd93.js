import{B as i}from"./BudgetCard-B1b9y6Fm.js";import"./iframe-BAZNicCM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-C0CDB0xo.js";import"./IconBase.es-DrBfRFA3.js";import"./Button-Bu64ZEZn.js";import"./Dot-DX-WA-zi.js";import"./ProgressBar-4Vk1AAdJ.js";import"./PencilSimple.es-B6mjG48f.js";import"./Trash.es-CL7w8sUa.js";import"./schemas-DcL1A-V0.js";import"./axiosClient-Psbltjn5.js";import"./budgetsStore-MIxvdDzn.js";import"./frequenciesStore-7sc1Ybj-.js";import"./transactionsStore-DYu4o1f7.js";import"./BudgetModal-BILSmEFb.js";import"./Pencil.es-DQ6hDKXw.js";import"./InputField-DwdDUFey.js";import"./Label-c2IdLotw.js";import"./StatusMessage-CHjMjefE.js";import"./Modal-BsmhDj37.js";import"./index-BWhu3t57.js";import"./index-DnWtCECL.js";const R={title:"UI/BudgetCard",component:i,tags:["autodocs"],parameters:{layout:"centered"},args:{onEditTransaction:t=>console.log("Add transaction:",t),onEditBudget:t=>console.log("Edit budget:",t),onDelete:t=>console.log("Delete budget:",t)}},m=[{id:"c1",label:"Alimentation",currentAmount:150,limitAmount:400},{id:"c2",label:"Logement",currentAmount:800,limitAmount:800},{id:"c3",label:"Transports",currentAmount:50,limitAmount:100}],e={args:{id:"b1",label:"Budget Mensuel",color:"#3b82f6",currentAmount:1e3,limitAmount:1500,categories:m}},r={args:{id:"b2",label:"Budget Vacances",color:"#22c55e",currentAmount:2e3,limitAmount:2e3,categories:[{id:"c1",label:"Hébergement avec un nom à rallonge pour tester l'affichage",currentAmount:1e3,limitAmount:1e3},{id:"c2",label:"Activités",currentAmount:500,limitAmount:500},{id:"c3",label:"Nourriture",currentAmount:500,limitAmount:500}]}},o={args:{id:"b3",label:"Budget Sorties",color:"#ef4444",currentAmount:350,limitAmount:200,categories:[{id:"c1",label:"Restaurants",currentAmount:150,limitAmount:100},{id:"c2",label:"Cinéma",currentAmount:50,limitAmount:50},{id:"c3",label:"Bars",currentAmount:150,limitAmount:50}]}},n={args:{id:"b4",label:"Nouveau Budget",color:"#a855f7",currentAmount:0,limitAmount:1e3,categories:[]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b1",
    label: "Budget Mensuel",
    color: "#3b82f6",
    currentAmount: 1000,
    limitAmount: 1500,
    categories: categoriesBase
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b2",
    label: "Budget Vacances",
    color: "#22c55e",
    currentAmount: 2000,
    limitAmount: 2000,
    categories: [{
      id: "c1",
      label: "Hébergement avec un nom à rallonge pour tester l'affichage",
      currentAmount: 1000,
      limitAmount: 1000
    }, {
      id: "c2",
      label: "Activités",
      currentAmount: 500,
      limitAmount: 500
    }, {
      id: "c3",
      label: "Nourriture",
      currentAmount: 500,
      limitAmount: 500
    }]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b3",
    label: "Budget Sorties",
    color: "#ef4444",
    currentAmount: 350,
    limitAmount: 200,
    categories: [{
      id: "c1",
      label: "Restaurants",
      currentAmount: 150,
      limitAmount: 100
    }, {
      id: "c2",
      label: "Cinéma",
      currentAmount: 50,
      limitAmount: 50
    }, {
      id: "c3",
      label: "Bars",
      currentAmount: 150,
      limitAmount: 50
    }]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b4",
    label: "Nouveau Budget",
    color: "#a855f7",
    currentAmount: 0,
    limitAmount: 1000,
    categories: []
  }
}`,...n.parameters?.docs?.source}}};const T=["Healthy","AtLimit","Exceeded","Empty"];export{r as AtLimit,n as Empty,o as Exceeded,e as Healthy,T as __namedExportsOrder,R as default};
