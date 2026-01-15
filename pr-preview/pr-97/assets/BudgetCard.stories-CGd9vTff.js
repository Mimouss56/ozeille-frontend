import{r as i,j as e}from"./iframe-B6_c18rl.js";import{c as w}from"./index-DutoEiXV.js";import{P as y,A as M}from"./ActionMenu-BUYguHjB.js";import{P as x}from"./ProgressBar-Bt3vwSoY.js";import{a as _}from"./PiggyBank.es-DGV_uezw.js";import{T as k}from"./Trash.esm-BUABez42.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.esm-s3TnAOHG.js";const a={Neutral:"neutral",Success:"success",Warning:"warning",Error:"error"},f=(t,n)=>t===0?a.Neutral:t>n?a.Error:t===n?a.Warning:a.Success;function D(t,n,o,r){const l=i.useMemo(()=>f(t,n),[t,n]),c=i.useMemo(()=>o?.map(u=>({id:u.id,status:f(u.currentAmount,u.limitAmount)}))??[],[o]),A=i.useMemo(()=>r?.id?[{label:"Ajouter transaction",icon:i.createElement(_,{size:16}),onClick:()=>r.onEdit?.(r.id)},{label:"Éditer budget",icon:i.createElement(y,{size:16}),onClick:()=>r.onEditBudget?.(r.id)},{label:"Supprimer",icon:i.createElement(k,{size:16}),variant:"danger",onClick:()=>r.onDelete?.(r.id)}]:[],[r]);return{globalStatus:l,categoriesStatus:c,menuActions:A}}const H=w(["card bg-base-100 min-h-[282.5px] w-full rounded-md border sm:min-h-82.5 lg:mx-auto"],{variants:{status:{[a.Neutral]:"border-neutral",[a.Success]:"border-success",[a.Warning]:"border-warning",[a.Error]:"border-error"}},defaultVariants:{status:a.Neutral}}),h=new Intl.NumberFormat("fr-FR",{notation:"compact",compactDisplay:"short"}),N=(t,n)=>{const o=h.format(t),r=h.format(n);return`${o} / ${r}`},j=({id:t,label:n,color:o,currentAmount:r,limitAmount:l,categories:c,onEdit:A,onDelete:u,onEditBudget:v})=>{const{globalStatus:p,menuActions:S,categoriesStatus:B}=D(r,l,c,{id:t,onEdit:A,onDelete:u,onEditBudget:v});return e.jsx("div",{className:H({status:p}),children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-5 w-5 rounded-full shadow-sm",style:{backgroundColor:o}}),e.jsx("h2",{className:"card-title text-neutral truncate text-xl font-extrabold",title:n,children:n})]}),e.jsx(M,{actions:S})]}),e.jsxs("div",{className:"mb-5 flex items-center justify-between gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx(x,{value:r,max:l,color:p,className:"h-2.5"})}),e.jsx("div",{className:"text-neutral w-fit text-right text-sm font-semibold",children:N(r,l)})]}),e.jsx("hr",{className:"bg-base-300 mb-5 h-px w-full border-none"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[c.map(s=>{const E=B.find(C=>C.id===s.id)?.status??p;return e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm",children:[e.jsx("span",{className:"text-neutral truncate text-base font-medium",title:s.label,children:s.label}),e.jsx("span",{className:"text-neutral text-right font-medium whitespace-nowrap",children:N(s.currentAmount,s.limitAmount)}),e.jsx("div",{className:"col-span-2",children:e.jsx(x,{value:s.currentAmount,max:s.limitAmount,color:E,className:"h-2"})})]},s.id)}),c.length===0&&e.jsx("p",{className:"text-neutral/40 py-2 text-center text-sm italic",children:"Aucune catégorie"})]})]})})};j.__docgenInfo={description:"",methods:[],displayName:"BudgetCard"};const $={title:"UI/BudgetCard",component:j,tags:["autodocs"],parameters:{layout:"centered"},args:{onEdit:t=>console.log("Add transaction:",t),onEditBudget:t=>console.log("Edit budget:",t),onDelete:t=>console.log("Delete budget:",t)}},P=[{id:"c1",label:"Alimentation",currentAmount:150,limitAmount:400},{id:"c2",label:"Logement",currentAmount:800,limitAmount:800},{id:"c3",label:"Transports",currentAmount:50,limitAmount:100}],m={args:{id:"b1",label:"Budget Mensuel",color:"#3b82f6",currentAmount:1e3,limitAmount:1500,categories:P}},d={args:{id:"b2",label:"Budget Vacances",color:"#22c55e",currentAmount:2e3,limitAmount:2e3,categories:[{id:"c1",label:"Hébergement avec un nom à rallonge pour tester l'affichage",currentAmount:1e3,limitAmount:1e3},{id:"c2",label:"Activités",currentAmount:500,limitAmount:500},{id:"c3",label:"Nourriture",currentAmount:500,limitAmount:500}]}},g={args:{id:"b3",label:"Budget Sorties",color:"#ef4444",currentAmount:350,limitAmount:200,categories:[{id:"c1",label:"Restaurants",currentAmount:150,limitAmount:100},{id:"c2",label:"Cinéma",currentAmount:50,limitAmount:50},{id:"c3",label:"Bars",currentAmount:150,limitAmount:50}]}},b={args:{id:"b4",label:"Nouveau Budget",color:"#a855f7",currentAmount:0,limitAmount:1e3,categories:[]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b1",
    label: "Budget Mensuel",
    color: "#3b82f6",
    currentAmount: 1000,
    limitAmount: 1500,
    categories: categoriesBase
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b2",
    label: "Budget Vacances",
    color: "#22c55e",
    currentAmount: 2000,
    limitAmount: 2000,
    categories: [{
      id: "c1",
      label: "Hébergement avec un nom à rallonge pour tester l'affichage",
      currentAmount: 1000,
      limitAmount: 1000
    }, {
      id: "c2",
      label: "Activités",
      currentAmount: 500,
      limitAmount: 500
    }, {
      id: "c3",
      label: "Nourriture",
      currentAmount: 500,
      limitAmount: 500
    }]
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b3",
    label: "Budget Sorties",
    color: "#ef4444",
    currentAmount: 350,
    limitAmount: 200,
    categories: [{
      id: "c1",
      label: "Restaurants",
      currentAmount: 150,
      limitAmount: 100
    }, {
      id: "c2",
      label: "Cinéma",
      currentAmount: 50,
      limitAmount: 50
    }, {
      id: "c3",
      label: "Bars",
      currentAmount: 150,
      limitAmount: 50
    }]
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b4",
    label: "Nouveau Budget",
    color: "#a855f7",
    currentAmount: 0,
    limitAmount: 1000,
    categories: []
  }
}`,...b.parameters?.docs?.source}}};const O=["Healthy","AtLimit","Exceeded","Empty"];export{d as AtLimit,b as Empty,g as Exceeded,m as Healthy,O as __namedExportsOrder,$ as default};
