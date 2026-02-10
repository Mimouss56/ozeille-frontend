import{j as e,r as S}from"./iframe-BmZRhGrP.js";import{P,u as v,g as j,a as C}from"./Pagination-DEgSTQUr.js";import"./preload-helper-PPVm8Dsz.js";import"./IconBase.es-CAJ_zsLT.js";import"./ArrowRight.es-CvJSEw4Q.js";import"./index-DutoEiXV.js";import"./dayjs.min-Dbj2ons_.js";const f=s=>Array.from({length:s},(u,t)=>({id:t+1,name:`Item ${t+1}`})),y=[{accessorKey:"id",header:"ID"},{accessorKey:"name",header:"Nom"}],a=({dataCount:s=50,pageSize:u=10,initialPage:t=0})=>{const[l,b]=S.useState({pageIndex:t,pageSize:u}),h=f(s),x=v({data:h,columns:y,getCoreRowModel:C(),getPaginationRowModel:j(),onPaginationChange:b,state:{pagination:l}});return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"text-base-content text-center text-sm",children:["Page ",l.pageIndex+1," sur ",x.getPageCount()]}),e.jsx(P,{table:x,currentPage:l.pageIndex})]})},I={title:"UI/Pagination",component:P,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Composant de pagination utilisé avec TanStack Table. Affiche les boutons de navigation et les numéros de page avec une logique d'ellipsis pour les grandes quantités de pages."}}}},r={render:()=>e.jsx(a,{})},n={render:()=>e.jsx(a,{dataCount:30,pageSize:10}),parameters:{docs:{description:{story:"Pagination avec peu de pages (3 pages)"}}}},o={render:()=>e.jsx(a,{dataCount:200,pageSize:10}),parameters:{docs:{description:{story:"Pagination avec beaucoup de pages (20 pages) - affiche les ellipsis"}}}},i={render:()=>e.jsx(a,{dataCount:100,pageSize:10,initialPage:4}),parameters:{docs:{description:{story:"Pagination démarrée au milieu pour voir les ellipsis des deux côtés"}}}},d={render:()=>e.jsx(a,{dataCount:50,pageSize:5}),parameters:{docs:{description:{story:"Pagination avec une petite taille de page (5 éléments par page)"}}}},c={render:()=>e.jsx(a,{dataCount:5,pageSize:10}),parameters:{docs:{description:{story:"Cas limite : une seule page de données"}}}},p={decorators:[s=>e.jsx("div",{"data-theme":"light",className:"bg-base-100 p-4",children:e.jsx(s,{})})],render:()=>e.jsx(a,{})},g={decorators:[s=>e.jsx("div",{"data-theme":"dark",className:"bg-base-100 p-4",children:e.jsx(s,{})})],render:()=>e.jsx(a,{})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{"data-theme":"light",className:"bg-base-100 rounded-lg p-4",children:[e.jsx("p",{className:"text-base-content mb-4 text-center text-sm font-semibold",children:"Light Mode"}),e.jsx(a,{dataCount:100,initialPage:5})]}),e.jsxs("div",{"data-theme":"dark",className:"bg-base-100 rounded-lg p-4",children:[e.jsx("p",{className:"text-base-content mb-4 text-center text-sm font-semibold",children:"Dark Mode"}),e.jsx(a,{dataCount:100,initialPage:5})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationWrapper />
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationWrapper dataCount={30} pageSize={10} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination avec peu de pages (3 pages)"
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationWrapper dataCount={200} pageSize={10} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination avec beaucoup de pages (20 pages) - affiche les ellipsis"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationWrapper dataCount={100} pageSize={10} initialPage={4} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination démarrée au milieu pour voir les ellipsis des deux côtés"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationWrapper dataCount={50} pageSize={5} />,
  parameters: {
    docs: {
      description: {
        story: "Pagination avec une petite taille de page (5 éléments par page)"
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationWrapper dataCount={5} pageSize={10} />,
  parameters: {
    docs: {
      description: {
        story: "Cas limite : une seule page de données"
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div data-theme="light" className="bg-base-100 p-4">
        <Story />
      </div>],
  render: () => <PaginationWrapper />
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div data-theme="dark" className="bg-base-100 p-4">
        <Story />
      </div>],
  render: () => <PaginationWrapper />
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div data-theme="light" className="bg-base-100 rounded-lg p-4">
        <p className="text-base-content mb-4 text-center text-sm font-semibold">Light Mode</p>
        <PaginationWrapper dataCount={100} initialPage={5} />
      </div>
      <div data-theme="dark" className="bg-base-100 rounded-lg p-4">
        <p className="text-base-content mb-4 text-center text-sm font-semibold">Dark Mode</p>
        <PaginationWrapper dataCount={100} initialPage={5} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const R=["Default","FewPages","ManyPages","StartAtMiddle","SmallPageSize","SinglePage","LightMode","DarkMode","ThemeComparison"];export{g as DarkMode,r as Default,n as FewPages,p as LightMode,o as ManyPages,c as SinglePage,d as SmallPageSize,i as StartAtMiddle,m as ThemeComparison,R as __namedExportsOrder,I as default};
