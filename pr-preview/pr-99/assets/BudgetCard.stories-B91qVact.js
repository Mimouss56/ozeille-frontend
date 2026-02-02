import{B as i}from"./BudgetCard-Bdjqwq7G.js";import"./iframe-2UQskwW5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-CqfSE6hR.js";import"./IconBase.es-BpUu7e6R.js";import"./Button-CPhqROst.js";import"./Dot-y7lXTnEj.js";import"./ProgressBar-BmE7P2C3.js";import"./PencilSimple.es-mgqPR_My.js";import"./Trash.es-jjtY9Yed.js";import"./schemas-D6rHScjd.js";import"./axiosClient-CnoH2fP2.js";import"./budgetsStore-bBZFH7hV.js";import"./frequenciesStore-BG12g5Rp.js";import"./transactionsStore-BhM0J-bY.js";import"./BudgetModal-BDOhkgLx.js";import"./Pencil.es-Ymh95jLc.js";import"./InputField-CYqDMWea.js";import"./Label-Ccu-Q45r.js";import"./StatusMessage-Dxf9tt_2.js";import"./Modal-BdbVzZDB.js";import"./index-CaYyZ9ZU.js";import"./index-BivrdQAN.js";const R={title:"UI/BudgetCard",component:i,tags:["autodocs"],parameters:{layout:"centered"},args:{onEditTransaction:t=>console.log("Add transaction:",t),onEditBudget:t=>console.log("Edit budget:",t),onDelete:t=>console.log("Delete budget:",t)}},m=[{id:"c1",label:"Alimentation",currentAmount:150,limitAmount:400},{id:"c2",label:"Logement",currentAmount:800,limitAmount:800},{id:"c3",label:"Transports",currentAmount:50,limitAmount:100}],e={args:{id:"b1",label:"Budget Mensuel",color:"#3b82f6",currentAmount:1e3,limitAmount:1500,categories:m}},r={args:{id:"b2",label:"Budget Vacances",color:"#22c55e",currentAmount:2e3,limitAmount:2e3,categories:[{id:"c1",label:"Hébergement avec un nom à rallonge pour tester l'affichage",currentAmount:1e3,limitAmount:1e3},{id:"c2",label:"Activités",currentAmount:500,limitAmount:500},{id:"c3",label:"Nourriture",currentAmount:500,limitAmount:500}]}},o={args:{id:"b3",label:"Budget Sorties",color:"#ef4444",currentAmount:350,limitAmount:200,categories:[{id:"c1",label:"Restaurants",currentAmount:150,limitAmount:100},{id:"c2",label:"Cinéma",currentAmount:50,limitAmount:50},{id:"c3",label:"Bars",currentAmount:150,limitAmount:50}]}},n={args:{id:"b4",label:"Nouveau Budget",color:"#a855f7",currentAmount:0,limitAmount:1e3,categories:[]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
