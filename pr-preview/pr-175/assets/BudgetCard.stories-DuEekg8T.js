import{B as g}from"./BudgetCard-Dz9NFFWB.js";import"./iframe-D3GX8_4k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-qD8OsUDE.js";import"./IconBase.es-43JV-uNr.js";import"./Button-C2HRJEoJ.js";import"./Dot-CU2n6ZEO.js";import"./ProgressBar-CH2bhLoN.js";import"./PencilSimple.es-BzM8XVED.js";import"./Trash.es-FGmej0IE.js";import"./schemas-DE_wHYVB.js";import"./axiosClient-CmaP8ePX.js";import"./frequenciesStore-CDz6dryQ.js";import"./transactionsStore-EhRNWia7.js";import"./BudgetModal-CJ_m7LmH.js";import"./Pencil.es-BXlPSM6u.js";import"./InputField-Xs8VEuB6.js";import"./Label-p759_UVT.js";import"./StatusMessage-8Tths54n.js";import"./Modal-BEKwPw55.js";import"./index-_ftOUwYl.js";import"./index-BtKVb7xx.js";const k={title:"UI/BudgetCard",component:g,tags:["autodocs"],parameters:{layout:"centered"}},E=(t,c,n,d)=>({id:t,amount:c,label:n,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:d}),e=(t,c,n,d,i="b1",p="EXPENSE")=>({id:t,budgetId:i,label:c,color:null,userId:null,limitAmount:n,type:p,transactions:d.map((u,m)=>E(`${t}-t${m}`,u,`Transaction ${m+1}`,t))}),b={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50],"b1","EXPENSE"),e("c2","Logement",800,[800],"b1","EXPENSE"),e("c3","Transports",100,[30,20],"b1","EXPENSE")]},r={args:{budget:b}},l={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2","EXPENSE"),e("c2","Activités",500,[300,200],"b2","EXPENSE"),e("c3","Nourriture",500,[250,250],"b2","EXPENSE")]},o={args:{budget:l}},S={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3","EXPENSE"),e("c2","Cinéma",50,[50],"b3","EXPENSE"),e("c3","Bars",50,[100,50],"b3","EXPENSE")]},a={args:{budget:S}},y={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:y}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetHealthy
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetAtLimit
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetExceeded
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetEmpty
  }
}`,...s.parameters?.docs?.source}}};const w=["Healthy","AtLimit","Exceeded","Empty"];export{o as AtLimit,s as Empty,a as Exceeded,r as Healthy,w as __namedExportsOrder,k as default};
