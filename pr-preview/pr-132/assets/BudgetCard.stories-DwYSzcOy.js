import{r as p,j as e}from"./iframe-BGXKwssU.js";import{c as w}from"./index-DutoEiXV.js";import{A as y}from"./ActionMenu-BsBzRYoH.js";import{P as x}from"./ProgressBar-kZtXq8Un.js";import{a as M}from"./PiggyBank.es-RBZO6DRP.js";import{P as _}from"./PencilSimple.esm-Cu2pRCya.js";import{T as k}from"./Trash.esm-rpdhmuNV.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-CngcS1Q_.js";import"./Button-C1SBvMSb.js";import"./IconBase.esm-B6SVvFO0.js";const a={Neutral:"neutral",Success:"success",Warning:"warning",Error:"error"},f=(t,n)=>t===0?a.Neutral:t>n?a.Error:t===n?a.Warning:a.Success;function D(t,n,o,r){const i=p.useMemo(()=>f(t,n),[t,n]),l=p.useMemo(()=>o?.map(c=>({id:c.id,status:f(c.currentAmount,c.limitAmount)}))??[],[o]),b=p.useMemo(()=>r?.id?[{label:"Ajouter transaction",icon:M,onClick:()=>r.onEdit?.(r.id)},{label:"Éditer budget",icon:_,onClick:()=>r.onEditBudget?.(r.id)},{label:"Supprimer",icon:k,variant:"danger",onClick:()=>r.onDelete?.(r.id)}]:[],[r]);return{globalStatus:i,categoriesStatus:l,menuActions:b}}const H=w(["card bg-base-100 min-h-[282.5px] w-full rounded-md border sm:min-h-82.5 lg:mx-auto"],{variants:{status:{[a.Neutral]:"border-neutral",[a.Success]:"border-success",[a.Warning]:"border-warning",[a.Error]:"border-error"}},defaultVariants:{status:a.Neutral}}),h=new Intl.NumberFormat("fr-FR",{notation:"compact",compactDisplay:"short"}),N=(t,n)=>{const o=h.format(t),r=h.format(n);return`${o} / ${r}`},j=({id:t,label:n,color:o,currentAmount:r,limitAmount:i,categories:l,onEdit:b,onDelete:c,onEditBudget:v})=>{const{globalStatus:A,menuActions:S,categoriesStatus:B}=D(r,i,l,{id:t,onEdit:b,onDelete:c,onEditBudget:v});return e.jsx("div",{className:H({status:A}),children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-5 w-5 rounded-full shadow-sm",style:{backgroundColor:o}}),e.jsx("h2",{className:"card-title text-neutral truncate text-xl font-extrabold",title:n,children:n})]}),e.jsx(y,{actions:S})]}),e.jsxs("div",{className:"mb-5 flex items-center justify-between gap-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx(x,{value:r,max:i,color:A,className:"h-2.5"})}),e.jsx("div",{className:"text-neutral w-fit text-right text-sm font-semibold",children:N(r,i)})]}),e.jsx("hr",{className:"bg-base-300 mb-5 h-px w-full border-none"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[l.map(s=>{const E=B.find(C=>C.id===s.id)?.status??A;return e.jsxs("div",{className:"grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm",children:[e.jsx("span",{className:"text-neutral truncate text-base font-medium",title:s.label,children:s.label}),e.jsx("span",{className:"text-neutral text-right font-medium whitespace-nowrap",children:N(s.currentAmount,s.limitAmount)}),e.jsx("div",{className:"col-span-2",children:e.jsx(x,{value:s.currentAmount,max:s.limitAmount,color:E,className:"h-2"})})]},s.id)}),l.length===0&&e.jsx("p",{className:"text-neutral/40 py-2 text-center text-sm italic",children:"Aucune catégorie"})]})]})})};j.__docgenInfo={description:"",methods:[],displayName:"BudgetCard"};const z={title:"UI/BudgetCard",component:j,tags:["autodocs"],parameters:{layout:"centered"},args:{onEdit:t=>console.log("Add transaction:",t),onEditBudget:t=>console.log("Edit budget:",t),onDelete:t=>console.log("Delete budget:",t)}},P=[{id:"c1",label:"Alimentation",currentAmount:150,limitAmount:400},{id:"c2",label:"Logement",currentAmount:800,limitAmount:800},{id:"c3",label:"Transports",currentAmount:50,limitAmount:100}],u={args:{id:"b1",label:"Budget Mensuel",color:"#3b82f6",currentAmount:1e3,limitAmount:1500,categories:P}},m={args:{id:"b2",label:"Budget Vacances",color:"#22c55e",currentAmount:2e3,limitAmount:2e3,categories:[{id:"c1",label:"Hébergement avec un nom à rallonge pour tester l'affichage",currentAmount:1e3,limitAmount:1e3},{id:"c2",label:"Activités",currentAmount:500,limitAmount:500},{id:"c3",label:"Nourriture",currentAmount:500,limitAmount:500}]}},d={args:{id:"b3",label:"Budget Sorties",color:"#ef4444",currentAmount:350,limitAmount:200,categories:[{id:"c1",label:"Restaurants",currentAmount:150,limitAmount:100},{id:"c2",label:"Cinéma",currentAmount:50,limitAmount:50},{id:"c3",label:"Bars",currentAmount:150,limitAmount:50}]}},g={args:{id:"b4",label:"Nouveau Budget",color:"#a855f7",currentAmount:0,limitAmount:1e3,categories:[]}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b1",
    label: "Budget Mensuel",
    color: "#3b82f6",
    currentAmount: 1000,
    limitAmount: 1500,
    categories: categoriesBase
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: "b4",
    label: "Nouveau Budget",
    color: "#a855f7",
    currentAmount: 0,
    limitAmount: 1000,
    categories: []
  }
}`,...g.parameters?.docs?.source}}};const G=["Healthy","AtLimit","Exceeded","Empty"];export{m as AtLimit,g as Empty,d as Exceeded,u as Healthy,G as __namedExportsOrder,z as default};
