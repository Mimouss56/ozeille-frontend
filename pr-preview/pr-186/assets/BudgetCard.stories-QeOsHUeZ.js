import{B as g}from"./BudgetCard-C71eeBuE.js";import"./iframe-DpTib-Zx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-B-EHJUVm.js";import"./IconBase.es-CNNn3zwN.js";import"./Button-ChGUDS-F.js";import"./Dot-C91kFYVj.js";import"./ProgressBar-BnVg48zE.js";import"./PencilSimple.es-sZA3RnK_.js";import"./Trash.es-CBo7FWEE.js";import"./schemas-BGkEtAWS.js";import"./axiosClient-BShDA9Vd.js";import"./frequenciesStore-TFRlud_Q.js";import"./transactionsStore-B82R3cR6.js";import"./BudgetModal-fLS96xxl.js";import"./Pencil.es-Dys7fBGZ.js";import"./InputField-BgUvK_ec.js";import"./Label-CEyN9YVt.js";import"./StatusMessage-8vTB5UA5.js";import"./Modal-CcpEAHSG.js";import"./index-Bj31tINo.js";import"./index-CRZ7Vr7d.js";const k={title:"UI/BudgetCard",component:g,tags:["autodocs"],parameters:{layout:"centered"}},E=(t,c,n,d)=>({id:t,amount:c,label:n,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:d}),e=(t,c,n,d,i="b1",p="EXPENSE")=>({id:t,budgetId:i,label:c,color:null,userId:null,limitAmount:n,type:p,transactions:d.map((u,m)=>E(`${t}-t${m}`,u,`Transaction ${m+1}`,t))}),b={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50],"b1","EXPENSE"),e("c2","Logement",800,[800],"b1","EXPENSE"),e("c3","Transports",100,[30,20],"b1","EXPENSE")]},r={args:{budget:b}},l={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2","EXPENSE"),e("c2","Activités",500,[300,200],"b2","EXPENSE"),e("c3","Nourriture",500,[250,250],"b2","EXPENSE")]},o={args:{budget:l}},S={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3","EXPENSE"),e("c2","Cinéma",50,[50],"b3","EXPENSE"),e("c3","Bars",50,[100,50],"b3","EXPENSE")]},a={args:{budget:S}},y={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:y}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
