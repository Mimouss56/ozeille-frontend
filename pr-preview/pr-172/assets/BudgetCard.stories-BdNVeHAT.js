import{B as u}from"./BudgetCard-B5j_2nhq.js";import"./iframe-ARFA_WIw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-DPmhwesw.js";import"./IconBase.es-BhEnArH9.js";import"./Button-BkwI09qH.js";import"./Dot-BERJ09Ho.js";import"./ProgressBar-CWUx28O7.js";import"./PencilSimple.es-BFppvoPi.js";import"./Trash.es-D1c835M-.js";import"./schemas-Dugkjyeq.js";import"./axiosClient-BtBbSnBJ.js";import"./frequenciesStore-C_gWD7Ig.js";import"./transactionsStore-CTqPHbhw.js";import"./BudgetModal-08q8rGf9.js";import"./Pencil.es-dzUL0D3_.js";import"./InputField--K3d8j6w.js";import"./Label-BjYw7MuS.js";import"./StatusMessage-BuLUQhTq.js";import"./Modal-nNssXsfy.js";import"./index-xloxZI3P.js";import"./index-Dl7kLnhy.js";const w={title:"UI/BudgetCard",component:u,tags:["autodocs"],parameters:{layout:"centered"}},g=(t,c,n,d)=>({id:t,amount:c,label:n,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{},categoryId:d}),e=(t,c,n,d,i="b1")=>({id:t,budgetId:i,label:c,color:null,userId:null,limitAmount:n,transactions:d.map((p,m)=>g(`${t}-t${m}`,p,`Transaction ${m+1}`,t))}),l={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50]),e("c2","Logement",800,[800]),e("c3","Transports",100,[30,20])]},r={args:{budget:l}},b={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2"),e("c2","Activités",500,[300,200],"b2"),e("c3","Nourriture",500,[250,250],"b2")]},o={args:{budget:b}},y={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3"),e("c2","Cinéma",50,[50],"b3"),e("c3","Bars",50,[100,50],"b3")]},a={args:{budget:y}},A={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:A}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
