import{B as u}from"./BudgetCard-G5uScQcG.js";import"./iframe-BVGZVSTD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-CwAHYrjB.js";import"./IconBase.es-q1m6lcol.js";import"./Button-DPpUvmjo.js";import"./Dot-CpA2SsxU.js";import"./ProgressBar-D_8JLy2i.js";import"./PencilSimple.es-CGR9Ik1W.js";import"./Trash.es-BwAdhE6y.js";import"./schemas-Dl7xviEn.js";import"./axiosClient-DRSZf_wz.js";import"./budgetsStore-DA0JAl9N.js";import"./frequenciesStore-CDUvg72w.js";import"./transactionsStore-CMoJAsmB.js";import"./BudgetModal-C3jYlzAO.js";import"./Pencil.es-DRBBV6ej.js";import"./InputField-DLhX8nzI.js";import"./Label-HS7BKaYW.js";import"./StatusMessage-B-h43mRy.js";import"./Modal-U7-fs33K.js";import"./index-CoJG6U9i.js";import"./index-DN-YtrCZ.js";const z={title:"UI/BudgetCard",component:u,tags:["autodocs"],parameters:{layout:"centered"}},g=(t,c,d)=>({id:t,amount:c,label:d,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{}}),e=(t,c,d,m,n="b1")=>({id:t,budgetId:n,label:c,color:null,userId:null,limitAmount:d,transactions:m.map((p,i)=>g(`${t}-t${i}`,p,`Transaction ${i+1}`))}),l={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50]),e("c2","Logement",800,[800]),e("c3","Transports",100,[30,20])]},r={args:{budget:l}},b={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2"),e("c2","Activités",500,[300,200],"b2"),e("c3","Nourriture",500,[250,250],"b2")]},o={args:{budget:b}},y={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3"),e("c2","Cinéma",50,[50],"b3"),e("c3","Bars",50,[100,50],"b3")]},a={args:{budget:y}},A={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:A}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const D=["Healthy","AtLimit","Exceeded","Empty"];export{o as AtLimit,s as Empty,a as Exceeded,r as Healthy,D as __namedExportsOrder,z as default};
