import{B as p}from"./BudgetCard-BSLtniTj.js";import"./iframe-ypTtijTa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-CwejJspm.js";import"./IconBase.es-BAxYqddJ.js";import"./Button-9CDsTel4.js";import"./Dot-SWZB_27e.js";import"./ProgressBar-Cjsgn17W.js";import"./PencilSimple.es-4sU9c665.js";import"./Trash.es-CZ3W6nAK.js";import"./frequenciesStore-B8LYzdyp.js";import"./axiosClient-Bm4X1Hsn.js";import"./transactionsStore-BTSZEaTT.js";const I={title:"Widget/BudgetCard",component:p,tags:["autodocs"],parameters:{layout:"centered"}},E=(t,c,d,n)=>({id:t,amount:c,label:d,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:n}),e=(t,c,d,n,i="b1",m="EXPENSE")=>({id:t,budgetId:i,label:c,color:null,userId:null,limitAmount:d,type:m,transactions:n.map((g,u)=>E(`${t}-t${u}`,g,`Transaction ${u+1}`,t))}),b={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50],"b1","EXPENSE"),e("c2","Logement",800,[800],"b1","EXPENSE"),e("c3","Transports",100,[30,20],"b1","EXPENSE")]},r={args:{budget:b}},l={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2","EXPENSE"),e("c2","Activités",500,[300,200],"b2","EXPENSE"),e("c3","Nourriture",500,[250,250],"b2","EXPENSE")]},a={args:{budget:l}},S={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3","EXPENSE"),e("c2","Cinéma",50,[50],"b3","EXPENSE"),e("c3","Bars",50,[100,50],"b3","EXPENSE")]},o={args:{budget:S}},y={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:y}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const _=["Healthy","AtLimit","Exceeded","Empty"];export{a as AtLimit,s as Empty,o as Exceeded,r as Healthy,_ as __namedExportsOrder,I as default};
