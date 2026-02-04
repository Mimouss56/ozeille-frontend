import{B as u}from"./BudgetCard-C8bT7FyX.js";import"./iframe-dplN72BY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DutoEiXV.js";import"./ActionMenu-CpCrW_z8.js";import"./IconBase.es-DL7F4m1c.js";import"./Button-DXjE5ia9.js";import"./Dot-7EvZhgqI.js";import"./ProgressBar-DSkuGcrB.js";import"./PencilSimple.es-DLO9o-gP.js";import"./Trash.es-CCTBTXXE.js";import"./schemas-G-F7gWbq.js";import"./axiosClient-B2tPPGVg.js";import"./frequenciesStore-BnhgiXLv.js";import"./transactionsStore-BMB5okxr.js";import"./BudgetModal-BUdv9lnr.js";import"./Pencil.es-B_XSBl8x.js";import"./InputField-C6pvlDWM.js";import"./Label-NbQo2RMK.js";import"./StatusMessage-BZK6A7hi.js";import"./Modal-BIb-YaOz.js";import"./index-sybpyX5b.js";import"./index-DpPmfTtZ.js";const w={title:"UI/BudgetCard",component:u,tags:["autodocs"],parameters:{layout:"centered"}},g=(t,c,d)=>({id:t,amount:c,label:d,dueAt:"2026-02-01",pointedAt:null,createdAt:"2026-01-01",updatedAt:"2026-01-01",frequencyId:"f1",category:{}}),e=(t,c,d,i,m="b1")=>({id:t,budgetId:m,label:c,color:null,userId:null,limitAmount:d,transactions:i.map((p,n)=>g(`${t}-t${n}`,p,`Transaction ${n+1}`))}),l={id:"b1",label:"Budget Mensuel",color:"#3b82f6",categories:[e("c1","Alimentation",400,[100,50]),e("c2","Logement",800,[800]),e("c3","Transports",100,[30,20])]},r={args:{budget:l}},b={id:"b2",label:"Budget Vacances",color:"#22c55e",categories:[e("c1","Hébergement avec un nom à rallonge pour tester l'affichage",1e3,[600,400],"b2"),e("c2","Activités",500,[300,200],"b2"),e("c3","Nourriture",500,[250,250],"b2")]},o={args:{budget:b}},y={id:"b3",label:"Budget Sorties",color:"#ef4444",categories:[e("c1","Restaurants",100,[80,70],"b3"),e("c2","Cinéma",50,[50],"b3"),e("c3","Bars",50,[100,50],"b3")]},a={args:{budget:y}},A={id:"b4",label:"Nouveau Budget",color:"#a855f7",categories:[]},s={args:{budget:A}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
