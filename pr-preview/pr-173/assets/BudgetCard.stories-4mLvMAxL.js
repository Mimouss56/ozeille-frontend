import{B as g}from"./BudgetCard-RAoZWg_D.js";import"./iframe-DqSXt728.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-CAJKxrzO.js";import"./IconBase.es-B9QtdQtA.js";import"./Button-DOzBj5Py.js";import"./Dot-Tj2_VgOJ.js";import"./ProgressBar-BUadftx4.js";import"./PencilSimple.es-DIhZ7rLx.js";import"./Trash.es-cPSmb94U.js";import"./schemas-nfZSsLKx.js";import"./axiosClient-DYDWA0FI.js";import"./frequenciesStore-_hPbFG-y.js";import"./transactionsStore-Bp_efCXk.js";import"./BudgetModal-B9lztZLV.js";import"./Pencil.es-LoVeXpI_.js";import"./InputField-DE2OsRyP.js";import"./Label-Dn7WxTHt.js";import"./StatusMessage-CohKGwe6.js";import"./Modal-ACFwkXZ_.js";import"./index-BNmCUQGC.js";import"./index-BwgytcH8.js";const k={title:"UI/BudgetCard",component:g,tags:["autodocs"],parameters:{layout:"centered"}},E=(t,c,n,d)=>({id:t,amount:c,label:n,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:d}),e=(t,c,n,d,i="b1",p="EXPENSE")=>({id:t,budgetId:i,label:c,color:null,userId:null,limitAmount:n,type:p,transactions:d.map((u,m)=>E(`${t}-t${m}`,u,`Transaction ${m+1}`,t))}),b={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50],"b1","EXPENSE"),e("c2","Logement",800,[800],"b1","EXPENSE"),e("c3","Transports",100,[30,20],"b1","EXPENSE")]},r={args:{budget:b}},l={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2","EXPENSE"),e("c2","Activités",500,[300,200],"b2","EXPENSE"),e("c3","Nourriture",500,[250,250],"b2","EXPENSE")]},o={args:{budget:l}},S={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3","EXPENSE"),e("c2","Cinéma",50,[50],"b3","EXPENSE"),e("c3","Bars",50,[100,50],"b3","EXPENSE")]},a={args:{budget:S}},y={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:y}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
