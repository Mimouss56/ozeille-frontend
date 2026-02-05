import{B as p}from"./BudgetCard-BUO0etck.js";import"./iframe-DrftdFVe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-Dm75IlIp.js";import"./IconBase.es-CKtGYd8N.js";import"./Button-BB6CcqhC.js";import"./Dot-DpSHsU5-.js";import"./ProgressBar-CxJHOJX0.js";import"./PencilSimple.es-DZrD8wYb.js";import"./Trash.es-DRXV2CTr.js";import"./frequenciesStore-Du5XvsNS.js";import"./axiosClient-W7ABPK8f.js";import"./transactionsStore-YxB_ekv7.js";const $={title:"UI/BudgetCard",component:p,tags:["autodocs"],parameters:{layout:"centered"}},E=(t,c,n,d)=>({id:t,amount:c,label:n,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:d}),e=(t,c,n,d,m="b1",i="EXPENSE")=>({id:t,budgetId:m,label:c,color:null,userId:null,limitAmount:n,type:i,transactions:d.map((g,u)=>E(`${t}-t${u}`,g,`Transaction ${u+1}`,t))}),b={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50],"b1","EXPENSE"),e("c2","Logement",800,[800],"b1","EXPENSE"),e("c3","Transports",100,[30,20],"b1","EXPENSE")]},r={args:{budget:b}},l={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2","EXPENSE"),e("c2","Activités",500,[300,200],"b2","EXPENSE"),e("c3","Nourriture",500,[250,250],"b2","EXPENSE")]},a={args:{budget:l}},S={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3","EXPENSE"),e("c2","Cinéma",50,[50],"b3","EXPENSE"),e("c3","Bars",50,[100,50],"b3","EXPENSE")]},o={args:{budget:S}},y={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:y}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetHealthy
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetAtLimit
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetExceeded
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    budget: budgetEmpty
  }
}`,...s.parameters?.docs?.source}}};const _=["Healthy","AtLimit","Exceeded","Empty"];export{a as AtLimit,s as Empty,o as Exceeded,r as Healthy,_ as __namedExportsOrder,$ as default};
