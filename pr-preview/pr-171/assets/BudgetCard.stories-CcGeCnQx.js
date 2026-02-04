import{B as u}from"./BudgetCard-BqfhdJ_L.js";import"./iframe-CMb7vl1G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-sSdu0xn_.js";import"./IconBase.es-CY4bRwsE.js";import"./Button-DkqJcyj4.js";import"./Dot-DPis5-vO.js";import"./ProgressBar-DTomBrJN.js";import"./PencilSimple.es-Cc3J_uSG.js";import"./Trash.es-Dh5TNsS5.js";import"./schemas-BXO9pZBR.js";import"./axiosClient-BqVNCUit.js";import"./frequenciesStore-B_BKIwyc.js";import"./transactionsStore-jUfEBfAg.js";import"./BudgetModal-CGOhb6PC.js";import"./Pencil.es-BsN2jW6r.js";import"./InputField-k0bFD9tM.js";import"./Label-Cv1EUNEk.js";import"./StatusMessage-DQqjqVWB.js";import"./Modal-D_KsGUG8.js";import"./index-B5YzlY5j.js";import"./index-B1HZxQts.js";const w={title:"UI/BudgetCard",component:u,tags:["autodocs"],parameters:{layout:"centered"}},g=(t,c,n,d)=>({id:t,amount:c,label:n,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:d}),e=(t,c,n,d,i="b1")=>({id:t,budgetId:i,label:c,color:null,userId:null,limitAmount:n,transactions:d.map((p,m)=>g(`${t}-t${m}`,p,`Transaction ${m+1}`,t))}),l={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50]),e("c2","Logement",800,[800]),e("c3","Transports",100,[30,20])]},r={args:{budget:l}},b={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2"),e("c2","Activités",500,[300,200],"b2"),e("c3","Nourriture",500,[250,250],"b2")]},o={args:{budget:b}},y={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3"),e("c2","Cinéma",50,[50],"b3"),e("c3","Bars",50,[100,50],"b3")]},a={args:{budget:y}},A={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:A}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["Healthy","AtLimit","Exceeded","Empty"];export{o as AtLimit,s as Empty,a as Exceeded,r as Healthy,z as __namedExportsOrder,w as default};
