import{j as o,r as s}from"./iframe-BVGZVSTD.js";import{B as i}from"./chunk-EPOLDU6W-DB0Gozbg.js";import"./axiosClient-DRSZf_wz.js";import{u as a}from"./transactionsStore-CMoJAsmB.js";import{T as c}from"./TransactionPage-BLzZ02JB.js";import"./preload-helper-PPVm8Dsz.js";import"./DataTable-B4fRYMtG.js";import"./IconBase.es-q1m6lcol.js";import"./ArrowRight.es-t7tZA5Y_.js";import"./Button-DPpUvmjo.js";import"./index-DutoEiXV.js";import"./TransactionModal-BWZcLpAR.js";import"./Pencil.es-DRBBV6ej.js";import"./schemas-Dl7xviEn.js";import"./coerce-DD6AXhqJ.js";import"./frequenciesStore-CDUvg72w.js";import"./InputField-DLhX8nzI.js";import"./Label-HS7BKaYW.js";import"./StatusMessage-B-h43mRy.js";import"./Modal-U7-fs33K.js";import"./index-CoJG6U9i.js";import"./index-DN-YtrCZ.js";import"./Select-BN6gkury.js";import"./ActionMenu-CwAHYrjB.js";import"./TransactionDeleteModal-oz9B1QXP.js";import"./Trash.es-BwAdhE6y.js";const r=[{id:"1",label:"Achat supermarché",amount:54.99,dueAt:"2026-01-10T00:00:00.000Z",pointedAt:null,createdAt:"2026-01-10T10:00:00.000Z",updatedAt:"2026-01-10T10:00:00.000Z",frequencyId:"1",category:{id:"1",label:"Alimentation",budgetId:"",color:null,userId:null,limitAmount:0}},{id:"2",label:"Abonnement Netflix",amount:13.99,dueAt:"2026-01-01T00:00:00.000Z",pointedAt:"2026-01-02T00:00:00.000Z",createdAt:"2026-01-01T10:00:00.000Z",updatedAt:"2026-01-01T10:00:00.000Z",frequencyId:"2",category:{id:"2",label:"Divertissement",budgetId:"",color:null,userId:null,limitAmount:0}}],l={totalPages:1,total:r.length,page:1,limit:10},$={title:"Pages/TransactionPage",component:c,tags:["autodocs"],decorators:[e=>o.jsx(i,{children:o.jsx(e,{})})]},t={decorators:[e=>(s.useEffect(()=>(a.setState({transactions:r,meta:l,loading:!1,error:null,fetchTransactions:async()=>{console.log("Mock: fetchTransactions called")},deleteTransactionById:async n=>{console.log(`Mock: deleteTransactionById called for ${n}`)}}),()=>{a.setState({transactions:[],meta:{},loading:!1,error:null})}),[]),o.jsx(e,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => {
    useEffect(() => {
      useStoreTransactions.setState({
        transactions: fakeTransactions,
        meta: fakeMeta,
        loading: false,
        error: null,
        fetchTransactions: async () => {
          console.log("Mock: fetchTransactions called");
        },
        deleteTransactionById: async id => {
          console.log(\`Mock: deleteTransactionById called for \${id}\`);
        }
      });
      return () => {
        useStoreTransactions.setState({
          transactions: [],
          meta: {} as MetaResponse,
          loading: false,
          error: null
        });
      };
    }, []);
    return <Story />;
  }]
}`,...t.parameters?.docs?.source}}};const v=["WithData"];export{t as WithData,v as __namedExportsOrder,$ as default};
