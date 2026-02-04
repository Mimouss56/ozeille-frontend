import{B as u}from"./BudgetCard-DgWbq7P5.js";import"./iframe-CccXUuDF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-2hmLVTDP.js";import"./IconBase.es-CjZqpH1n.js";import"./Button-DlL2HUL4.js";import"./Dot-rrybzpfT.js";import"./ProgressBar-DSB3OYkg.js";import"./PencilSimple.es-C0ds0PO4.js";import"./Trash.es-B8zOdd-5.js";import"./schemas-Ce26SkAe.js";import"./axiosClient-D1wqeCOi.js";import"./budgetsStore-CLnfxroD.js";import"./frequenciesStore-LRbJ0Q4m.js";import"./transactionsStore-BWj818vp.js";import"./BudgetModal-DtX1waJa.js";import"./Pencil.es-DcH_u1PL.js";import"./InputField-B3m7gIoo.js";import"./Label-BUOUQbe7.js";import"./StatusMessage-DAmAeJ46.js";import"./Modal-QuJd9TEM.js";import"./index-Q-C1ctbw.js";import"./index-9rBu_Y6R.js";const z={title:"UI/BudgetCard",component:u,tags:["autodocs"],parameters:{layout:"centered"}},g=(t,c,d)=>({id:t,amount:c,label:d,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{}}),e=(t,c,d,m,n="b1")=>({id:t,budgetId:n,label:c,color:null,userId:null,limitAmount:d,transactions:m.map((p,i)=>g(`${t}-t${i}`,p,`Transaction ${i+1}`))}),l={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50]),e("c2","Logement",800,[800]),e("c3","Transports",100,[30,20])]},r={args:{budget:l}},b={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2"),e("c2","Activités",500,[300,200],"b2"),e("c3","Nourriture",500,[250,250],"b2")]},o={args:{budget:b}},y={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3"),e("c2","Cinéma",50,[50],"b3"),e("c3","Bars",50,[100,50],"b3")]},a={args:{budget:y}},A={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:A}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
